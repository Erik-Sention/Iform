const XLSX = require('xlsx');
const fs = require('fs');
const path = require('path');

// Läs config-filen
const config = JSON.parse(fs.readFileSync('excel-config.json', 'utf8'));

// Konvertera Excel-kolumnbokstav till nummer (A=0, B=1, etc.)
function colToNum(col) {
  let num = 0;
  for (let i = 0; i < col.length; i++) {
    num = num * 26 + (col.charCodeAt(i) - 'A'.charCodeAt(0) + 1);
  }
  return num - 1;
}

// Läs cell från worksheet
function getCellValue(worksheet, cellRef) {
  const cell = worksheet[cellRef];
  return cell ? cell.v : '';
}

// Läs cell med rad och kolumn
function getCellByRowCol(worksheet, row, col) {
  const cellRef = col + row;
  return getCellValue(worksheet, cellRef);
}

// Rensa text från extra whitespace och newlines
function cleanText(text) {
  if (!text) return '';
  return String(text).trim().replace(/\s+/g, ' ');
}

// Läs Excel-filen
console.log('📖 Läser Excel-fil...');
const workbook = XLSX.readFile(config.excelFilePath);
const worksheet = workbook.Sheets[workbook.SheetNames[0]];

console.log('✅ Excel-fil inläst!');

// Extrahera data enligt config
const periodConfig = config.period1;

// 1. Title
const title = getCellValue(worksheet, periodConfig.title.cell);
console.log(`📋 Title: ${title}`);

// 2. Clients
const clients = periodConfig.clients.map(clientConfig => ({
  name: getCellValue(worksheet, clientConfig.name),
  viktKg: Number(getCellValue(worksheet, clientConfig.vikt)),
  fettProcent: Number(getCellValue(worksheet, clientConfig.fett))
}));
console.log(`👥 Clients:`, clients);

// 3. Metrics
const metrics = {
  fruktKcalPerDag: [
    Number(getCellByRowCol(worksheet, periodConfig.metrics.fruktKcalPerDag.row, periodConfig.metrics.fruktKcalPerDag.p1Col)),
    Number(getCellByRowCol(worksheet, periodConfig.metrics.fruktKcalPerDag.row, periodConfig.metrics.fruktKcalPerDag.p2Col))
  ],
  friaKcalPerVecka: [
    Number(getCellByRowCol(worksheet, periodConfig.metrics.friaKcalPerVecka.row, periodConfig.metrics.friaKcalPerVecka.p1Col)),
    Number(getCellByRowCol(worksheet, periodConfig.metrics.friaKcalPerVecka.row, periodConfig.metrics.friaKcalPerVecka.p2Col))
  ],
  extraKHInforHI: [
    Number(getCellByRowCol(worksheet, periodConfig.metrics.extraKHInforHI.row, periodConfig.metrics.extraKHInforHI.p1Col)),
    Number(getCellByRowCol(worksheet, periodConfig.metrics.extraKHInforHI.row, periodConfig.metrics.extraKHInforHI.p2Col))
  ],
  KHUnderLangtPass: [
    Number(getCellByRowCol(worksheet, periodConfig.metrics.KHUnderLangtPass.row, periodConfig.metrics.KHUnderLangtPass.p1Col)),
    Number(getCellByRowCol(worksheet, periodConfig.metrics.KHUnderLangtPass.row, periodConfig.metrics.KHUnderLangtPass.p2Col))
  ]
};
console.log(`📊 Metrics:`, metrics);

// 4. Info text
let infoText = '';
for (let row = periodConfig.info.startRow; row <= periodConfig.info.endRow; row++) {
  const cellValue = getCellByRowCol(worksheet, row, periodConfig.info.column);
  if (cellValue && String(cellValue).trim()) {
    infoText += String(cellValue).trim() + '\n\n';
  }
}
infoText = infoText.trim();
console.log(`📝 Info text extraherad (${infoText.length} tecken)`);

// 5. Recipes
console.log('🍳 Läser recept...');
const recipes = [];
const recipesConfig = periodConfig.recipes;

for (const recipeConfig of recipesConfig.recipes) {
  const recipeId = recipeConfig.id;
  const titleCell = recipesConfig.titleColumn + recipeConfig.row;
  const recipeTitle = cleanText(getCellValue(worksheet, titleCell));
  
  // Bestäm kategori baserat på ID
  const category = recipeId.startsWith('A') ? 'A' : 'B';
  
  // Läs ingredienser
  const ingredients = [];
  for (const ingRow of recipeConfig.ingredientRows) {
    const name = cleanText(getCellByRowCol(worksheet, ingRow, recipesConfig.ingredientsColumn));
    const p1 = Number(getCellByRowCol(worksheet, ingRow, recipesConfig.p1GramColumn));
    const p2 = Number(getCellByRowCol(worksheet, ingRow, recipesConfig.p2GramColumn));
    const tot = Number(getCellByRowCol(worksheet, ingRow, recipesConfig.totalGramColumn));
    
    if (name) {
      ingredients.push({ name, p1, p2, tot });
    }
  }
  
  // Läs instruktioner
  const steps = [];
  for (const instRow of recipeConfig.instructionRows) {
    const step = cleanText(getCellByRowCol(worksheet, instRow, recipesConfig.instructionsColumn));
    if (step && step.length > 10) { // Minst 10 tecken för att räknas som instruktion
      steps.push(step);
    }
  }
  
  // Lägg till bild om den finns (baserat på ID)
  const imageMap = {
    'A1': '/images/recipies/a1.png',
    'A2': '/images/recipies/a2.png',
    'A3': '/images/recipies/a3.png',
    'A4': '/images/recipies/a4.png',
    'A5': '/images/recipies/a5.png',
    'A6': '/images/recipies/a6.png',
    'A7': '/images/recipies/a7.png',
    'A8': '/images/recipies/a8.png'
  };
  
  const recipe = {
    id: recipeId,
    title: recipeTitle,
    category,
    ...(imageMap[recipeId] ? { image: imageMap[recipeId] } : {}),
    ingredients,
    steps
  };
  
  recipes.push(recipe);
  console.log(`  ✅ ${recipeId}: ${recipeTitle} (${ingredients.length} ingredienser, ${steps.length} steg)`);
}

// 6. Snacks
const snacksA = [];
for (let row = periodConfig.snacks.A.startRow; row <= periodConfig.snacks.A.endRow; row++) {
  const snack = cleanText(getCellByRowCol(worksheet, row, periodConfig.snacks.A.column));
  if (snack) {
    snacksA.push(snack);
  }
}

const snacksB = [];
for (let row = periodConfig.snacks.B.startRow; row <= periodConfig.snacks.B.endRow; row++) {
  const snack = cleanText(getCellByRowCol(worksheet, row, periodConfig.snacks.B.column));
  if (snack) {
    snacksB.push(snack);
  }
}

console.log(`🍿 Snacks: ${snacksA.length} A, ${snacksB.length} B`);

// 7. Schedule och morning meal (behåller nuvarande från filen)
const existingPeriod1 = require('../data/period1.ts');

// Generera TypeScript-fil
console.log('📝 Genererar period1.ts...');

const tsContent = `import { PeriodData } from "@/types";

export const period1Data: PeriodData = {
  periodId: "1",
  title: "${title}",
  weeks: "V1–V2",
  clients: ${JSON.stringify(clients, null, 2).replace(/"([^"]+)":/g, '$1:')},
  metrics: ${JSON.stringify(metrics, null, 2).replace(/"([^"]+)":/g, '$1:')},
  info: \`${infoText.replace(/`/g, '\\`')}\`,
  schedule: {
    måndag: {
      times: ["08:00", "12:00", "14:00", "16:00", "18:00", "20:00"],
      meals: ["Morgonmål", "Måltid A", "Proteindryck", "Mellanmål A", "Proteindryck", "Måltid B"],
    },
    tisdag: {
      times: ["08:00", "12:00", "14:00", "16:00", "18:00", "20:00"],
      meals: ["Morgonmål", "Måltid B", "Proteindryck", "Mellanmål B", "Proteindryck", "Måltid A"],
    },
    onsdag: {
      times: ["08:00", "12:00", "14:00", "16:00", "18:00", "20:00"],
      meals: ["Morgonmål", "Måltid A", "Proteindryck", "Mellanmål A", "Proteindryck", "Måltid B"],
    },
    torsdag: {
      times: ["08:00", "12:00", "14:00", "16:00", "18:00", "20:00"],
      meals: ["Morgonmål", "Måltid B", "Proteindryck", "Mellanmål B", "Proteindryck", "Måltid A"],
    },
    fredag: {
      times: ["08:00", "12:00", "14:00", "16:00", "18:00", "20:00"],
      meals: ["Morgonmål", "Måltid A", "Proteindryck", "Mellanmål A", "Proteindryck", "Måltid B"],
    },
    lördag: {
      times: ["08:00", "12:00", "14:00", "16:00", "18:00", "20:00"],
      meals: ["Morgonmål", "Måltid B", "Proteindryck", "Mellanmål B", "Proteindryck", "Måltid A"],
    },
    söndag: {
      times: ["08:00", "12:00", "14:00", "16:00", "18:00", "20:00"],
      meals: ["Morgonmål", "Måltid A", "Proteindryck", "Mellanmål A", "Proteindryck", "Måltid B"],
    },
  },
  morningMeal: "Ingefärsshot och/eller kaffe eller valfritt te · Proteindryck · Multivitamin (MittVal Sport/Man/Kvinna)",
  recipes: ${JSON.stringify(recipes, null, 2).replace(/"([^"]+)":/g, '$1:').replace(/"(\/images\/[^"]+)"/g, '"$1"')},
  snacks: {
    A: ${JSON.stringify(snacksA, null, 2)},
    B: ${JSON.stringify(snacksB, null, 2)},
  },
};
`;

// Skriv till fil
fs.writeFileSync('data/period1.ts', tsContent, 'utf8');

console.log('✅ period1.ts har genererats!');
console.log('📦 Innehåll:');
console.log(`   - ${recipes.length} recept`);
console.log(`   - ${snacksA.length + snacksB.length} mellanmål`);
console.log(`   - ${clients.length} klienter`);
console.log('');
console.log('🎉 Klart! Du kan nu använda den uppdaterade datan i din app.');

