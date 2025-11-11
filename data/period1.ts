import { PeriodData } from "@/types";

export const period1Data: PeriodData = {
  periodId: "1",
  title: "PERIOD 1 (V1–V2) – Ökad omsättning",
  weeks: "V1–V2",
  clients: [
    {
      name: "Klient 1",
      viktKg: 0,
      fettProcent: 0,
    },
    {
      name: "Klient 2",
      viktKg: 0,
      fettProcent: 0,
    },
  ],
  metrics: {
    fruktKcalPerDag: [0, 0],
    friaKcalPerVecka: [0, 0],
    extraKHInforHI: [0, 0],
    KHUnderLangtPass: [0, 0],
  },
  info: `Syftet med period 1 är att öka din ämnesomsättning med hjälp av kostprogrammet samt den träning du kommer att genomföra. Du introduceras nu till ett "strikt" kostschema vilket också är av vikt att du följer för att uppnå önskad effekt. Det är mer mat och mellanmål än du tror. Ät inte mindre än vad som står på schemat och det är viktigt att du håller proteinintaget.

Grönsaker i måltiderna som anges med stjärnmarkering väljer du valfri mängd av – gram som står är minsta mängd. Du är även fri att fylla ut måltiderna med extra "vattengrönsaker" i obegränsad mängd.

Du är fri att välja måltider och mellanmål inom respektive kategori. Du kan med fördel repetera måltider för att göra matlagning och förberedelser enklare, men vi rekommenderar variation. Variera dig med minst två olika måltider och mellanmål inom respektive kategori.

Råvaror och ingredienser till måltider etc. är angivna i detaljerade gram. Det är för att schemat är anpassat till din vikt och kroppssammansättning. Det är alltid svårt med noggrannhet på grammet. Enskilt gram hit eller dit är inte avgörande – försök vara så nära som möjligt.

Tider och "ätfönster" har betydelse för utfallet av kostschemat. Du kan skjuta dagsrutinen framåt och bakåt i tiden. Exempel: går du upp tidigt på morgnarna och även tränar tidigt kan det passa bättre att starta tidigare under dagen. Men: fastställ din rutin och håll den. Ändrar du din rutin för ofta eller blir helt oregelbunden är det av erfarenhet svårare att hålla schemat.

Under perioden har du fria kcal att disponera under veckan till vad du önskar. Mängden fria kcal hittar du i rutan ovan. Om din träning även omfattar hårdare eller längre konditionsträning utöver promenad, stavgång eller lätt cykling så finner du även dina extra kolhydrater som du ska tillföra innan och under dina pass. Läs mer i grundinformationen samt följ de detaljer som din coach instruerar dig.

Under samtliga perioder ska du tillföra frukt dagligen. Se din angivna mängd i kcal ovan.`,
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
  recipes: [
    {
      id: "A1",
      title: "Kyckling med fetaoströra",
      category: "A",
      image: "/images/recipies/a1.png",
      ingredients: [
        { name: "Kycklingfilé", p1: 0, p2: 0, tot: 0 },
        { name: "Fiberpasta", p1: 0, p2: 0, tot: 0 },
        { name: "Fetaost", p1: 0, p2: 0, tot: 0 },
        { name: "Matlagningsyoughurt lätt", p1: 0, p2: 0, tot: 0 },
        { name: "Zucchini*", p1: 0, p2: 0, tot: 0 },
        { name: "Champinjoner", p1: 0, p2: 0, tot: 0 },
        { name: "Lök*", p1: 0, p2: 0, tot: 0 },
        { name: "Paprika*", p1: 0, p2: 0, tot: 0 },
      ],
      steps: [
        "Koka fiberpasta.",
        "Stek, grilla eller ugnsbaka kyckling.",
        "Stek/woka lök och efter några minuter resterande grönsaker.",
        "Blanda yoghurt, fetaost, peppar, salt och valfria kryddor till en fetaoströra.",
      ],
    },
    {
      id: "A2",
      title: "Fläskfilé med grönsakswok",
      category: "A",
      image: "/images/recipies/a2.png",
      ingredients: [
        { name: "Fläskfilé", p1: 0, p2: 0, tot: 0 },
        { name: "Ris", p1: 0, p2: 0, tot: 0 },
        { name: "Wokgrönsaker", p1: 0, p2: 0, tot: 0 },
        { name: "Ägg 1st", p1: 0, p2: 0, tot: 0 },
        { name: "Vitlök*", p1: 0, p2: 0, tot: 0 },
        { name: "Chili*", p1: 0, p2: 0, tot: 0 },
      ],
      steps: [
        "Koka ris.",
        "Stek, grilla eller ugnsbaka fläskfilé.",
        "Stek/woka wokgrönsaker med vitlök och chili.",
        "När riset är färdigkokt, stek/woka ris med ett ägg och vänd ner grönsakerna.",
      ],
    },
    {
      id: "A3",
      title: "Kyckling med bulgur",
      category: "A",
      image: "/images/recipies/a3.png",
      ingredients: [
        { name: "Kycklingfilé", p1: 0, p2: 0, tot: 0 },
        { name: "Bulgur", p1: 0, p2: 0, tot: 0 },
        { name: "Fetaost", p1: 0, p2: 0, tot: 0 },
        { name: "Bladspenat*", p1: 0, p2: 0, tot: 0 },
        { name: "Gurka*", p1: 0, p2: 0, tot: 0 },
        { name: "Tomat*", p1: 0, p2: 0, tot: 0 },
      ],
      steps: [
        "Koka bulgur (krydda gärna vattnet).",
        "Hacka grönsaker och blanda i spenat.",
        "Stek, grilla eller ugnsbaka kyckling.",
        "Blanda ner ost i varm bulgur.",
      ],
    },
    {
      id: "A4",
      title: "Kryddig kyckling med grönsakspasta",
      category: "A",
      image: "/images/recipies/a4.png",
      ingredients: [
        { name: "Kycklingfilé", p1: 0, p2: 0, tot: 0 },
        { name: "Fiberpasta", p1: 0, p2: 0, tot: 0 },
        { name: "Fetaost", p1: 0, p2: 0, tot: 0 },
        { name: "Bladspenat*", p1: 0, p2: 0, tot: 0 },
        { name: "Broccoli", p1: 0, p2: 0, tot: 0 },
        { name: "Paprika*", p1: 0, p2: 0, tot: 0 },
        { name: "Majsstärkelse (1 tsk/100g kyckling)", p1: 0, p2: 0, tot: 0 },
        { name: "Valfria kryddor", p1: 0, p2: 0, tot: 0 },
      ],
      steps: [
        "Koka pasta.",
        "Panera/gnid in kycklingen med majsstärkelse och kryddblandning.",
        "Stek, grilla eller ugnsbaka kyckling.",
        "Stek/blanda ihop pastan med broccoli och paprika.",
        "Avsluta med spenat och fetaost.",
      ],
    },
    {
      id: "A5",
      title: "Köttfärsgryta med ris",
      category: "A",
      image: "/images/recipies/a5.png",
      ingredients: [
        { name: "Nötfärs", p1: 0, p2: 0, tot: 0 },
        { name: "Ris", p1: 0, p2: 0, tot: 0 },
        { name: "Morot", p1: 0, p2: 0, tot: 0 },
        { name: "Krossade tomater*", p1: 0, p2: 0, tot: 0 },
        { name: "Paprika*", p1: 0, p2: 0, tot: 0 },
        { name: "Lök*", p1: 0, p2: 0, tot: 0 },
        { name: "Tomatpuré", p1: 0, p2: 0, tot: 0 },
        { name: "Champinjoner", p1: 0, p2: 0, tot: 0 },
        { name: "Zucchini*", p1: 0, p2: 0, tot: 0 },
        { name: "Bladspenat**", p1: 0, p2: 0, tot: 0 },
      ],
      steps: [
        "Koka ris.",
        "Hacka lök, grönsaker och riv morot.",
        "Stek lök och köttfärs.",
        "Tillsätt grönsakerna.",
        "Tillsätt krossade tomater, tomatpuré och kryddor.",
      ],
    },
    {
      id: "A6",
      title: "Sojafiléer med grönsaker",
      category: "A",
      image: "/images/recipies/a6.png",
      ingredients: [
        { name: "Sojaprotein filé/bit", p1: 0, p2: 0, tot: 0 },
        { name: "Morot", p1: 0, p2: 0, tot: 0 },
        { name: "Broccoli", p1: 0, p2: 0, tot: 0 },
        { name: "Paprika*", p1: 0, p2: 0, tot: 0 },
        { name: "Lök*", p1: 0, p2: 0, tot: 0 },
        { name: "Majs", p1: 0, p2: 0, tot: 0 },
      ],
      steps: [
        "Skär/tärna grönsaker och ugnsrosta eller woka.",
        "Stek eller ugnsgrilla sojafiléer.",
        "Krydda efter smak.",
      ],
    },
    {
      id: "A7",
      title: "Paella på kyckling",
      category: "A",
      image: "/images/recipies/a7.png",
      ingredients: [
        { name: "Kycklingfilé", p1: 0, p2: 0, tot: 0 },
        { name: "Havreris", p1: 0, p2: 0, tot: 0 },
        { name: "Gröna ärtor", p1: 0, p2: 0, tot: 0 },
        { name: "Ägg 1st", p1: 0, p2: 0, tot: 0 },
        { name: "Lök*", p1: 0, p2: 0, tot: 0 },
        { name: "Paprika*", p1: 0, p2: 0, tot: 0 },
        { name: "Saffran*", p1: 0, p2: 0, tot: 0 },
      ],
      steps: [
        "Koka havreris i buljong med grönsaker, lök och saffran.",
        "Stek kyckling.",
        "Tillsätt ägg och kyckling på slutet när paellan börjar bli torrare.",
      ],
    },
    {
      id: "A8",
      title: "Nötfärsbiffar med havreris",
      category: "A",
      image: "/images/recipies/a8.png",
      ingredients: [
        { name: "Nötfärs", p1: 0, p2: 0, tot: 0 },
        { name: "Havreris", p1: 0, p2: 0, tot: 0 },
        { name: "Ägg 1st", p1: 0, p2: 0, tot: 0 },
        { name: "Fetaost", p1: 0, p2: 0, tot: 0 },
        { name: "Matlagningsyoughurt lätt", p1: 0, p2: 0, tot: 0 },
        { name: "Morot", p1: 0, p2: 0, tot: 0 },
        { name: "Broccoli", p1: 0, p2: 0, tot: 0 },
      ],
      steps: [
        "Krydda nötfärsen, blanda i ägg och forma biffar.",
        "Stek eller ugnstek.",
        "Koka havreris.",
        "Riv morot.",
        "Blanda fetaost och yoghurt till fetakräm, krydda.",
      ],
    },
    {
      id: "B1",
      title: "Sojakebab med avocadoröra",
      category: "B",
      image: "/images/recipies/b1.png",
      ingredients: [
        { name: "Sojaprotein kebab stekt frysvara typ", p1: 0, p2: 0, tot: 0 },
        { name: "Couscous", p1: 0, p2: 0, tot: 0 },
        { name: "Avokado", p1: 0, p2: 0, tot: 0 },
        { name: "Bladspenat*", p1: 0, p2: 0, tot: 0 },
        { name: "Tomat*", p1: 0, p2: 0, tot: 0 },
        { name: "Lök*", p1: 0, p2: 0, tot: 0 },
        { name: "Gurka*", p1: 0, p2: 0, tot: 0 },
      ],
      steps: [
        "Koka couscous, krydda.",
        "Hacka grönsaker, blanda med spenat.",
        "Stek sojakött i strimlor, salta/peppra.",
        "Blanda stekt kött, avokado och couscous.",
      ],
    },
    {
      id: "B2",
      title: "Lax med rostade rotfrukter",
      category: "B",
      image: "/images/recipies/b2.png",
      ingredients: [
        { name: "Lax", p1: 0, p2: 0, tot: 0 },
        { name: "Morot", p1: 0, p2: 0, tot: 0 },
        { name: "Palsternacka", p1: 0, p2: 0, tot: 0 },
        { name: "Potatis", p1: 0, p2: 0, tot: 0 },
      ],
      steps: [
        "Skär morot/palsternacka/potatis i klyftor.",
        "Rosta i ugn.",
        "Krydda lax och tillaga i ugn.",
      ],
    },
    {
      id: "B3",
      title: "Torsk med ugnsrostade rotfrukter",
      category: "B",
      image: "/images/recipies/b3.png",
      ingredients: [
        { name: "Torsk", p1: 0, p2: 0, tot: 0 },
        { name: "Morot", p1: 0, p2: 0, tot: 0 },
        { name: "Palsternacka", p1: 0, p2: 0, tot: 0 },
        { name: "Potatis", p1: 0, p2: 0, tot: 0 },
        { name: "Rapsolja", p1: 0, p2: 0, tot: 0 },
      ],
      steps: [
        "Lägg torsk i folieknyte med kryddor, tillaga i ugn (eller stek).",
        "Använd angiven olja till fisk och grönsaker.",
      ],
    },
    {
      id: "B4",
      title: "Skaldjurspasta",
      category: "B",
      image: "/images/recipies/b4.png",
      ingredients: [
        { name: "Räkor", p1: 0, p2: 0, tot: 0 },
        { name: "Fiberpasta", p1: 0, p2: 0, tot: 0 },
        { name: "Fetaost", p1: 0, p2: 0, tot: 0 },
        { name: "Broccoli", p1: 0, p2: 0, tot: 0 },
        { name: "Paprika*", p1: 0, p2: 0, tot: 0 },
        { name: "Lök*", p1: 0, p2: 0, tot: 0 },
      ],
      steps: [
        "Koka pasta.",
        "Stek lök, grönsaker och skaldjur.",
        "Vänd ner pasta och ost i varm panna.",
      ],
    },
    {
      id: "B5",
      title: "Paella på skaldjur",
      category: "B",
      image: "/images/recipies/b5.png",
      ingredients: [
        { name: "Räkor", p1: 0, p2: 0, tot: 0 },
        { name: "Havreris", p1: 0, p2: 0, tot: 0 },
        { name: "Gröna ärtor", p1: 0, p2: 0, tot: 0 },
        { name: "Ägg 1st", p1: 0, p2: 0, tot: 0 },
        { name: "Lök*", p1: 0, p2: 0, tot: 0 },
        { name: "Paprika*", p1: 0, p2: 0, tot: 0 },
        { name: "Saffran*", p1: 0, p2: 0, tot: 0 },
      ],
      steps: [
        "Koka havreris i buljong med lök, paprika och saffran.",
        "Tillsätt ägg på slutet.",
        "Lägg i skaldjuren så de bara värms.",
      ],
    },
    {
      id: "B6",
      title: "Lax med tomat och mozzarella",
      category: "B",
      image: "/images/recipies/b6.png",
      ingredients: [
        { name: "Lax", p1: 0, p2: 0, tot: 0 },
        { name: "Mozzarella", p1: 0, p2: 0, tot: 0 },
        { name: "Tomat*", p1: 0, p2: 0, tot: 0 },
        { name: "Bladspenat*", p1: 0, p2: 0, tot: 0 },
      ],
      steps: [
        "Stek/ugnsbaka lax.",
        "Skiva mozzarella och tomat.",
        "Servera med spenat.",
      ],
    },
    {
      id: "B7",
      title: "Bön- och mozzarellasallad",
      category: "B",
      image: "/images/recipies/b7.png",
      ingredients: [
        { name: "Sojabönor (färdigkokta)", p1: 0, p2: 0, tot: 0 },
        { name: "Mozzarella 18%", p1: 0, p2: 0, tot: 0 },
        { name: "Gurka*", p1: 0, p2: 0, tot: 0 },
        { name: "Lök*", p1: 0, p2: 0, tot: 0 },
        { name: "Oliver", p1: 0, p2: 0, tot: 0 },
        { name: "Tomat*", p1: 0, p2: 0, tot: 0 },
        { name: "Bladspenat*", p1: 0, p2: 0, tot: 0 },
      ],
      steps: [
        "Stek bönor lätt (eller tina).",
        "Tärna mozzarella.",
        "Hacka övrig sallad.",
        "Blanda allt till en sallad.",
      ],
    },
  ],
  snacks: {
    A: [
      { name: "Kvarg lätt", p1: 0, p2: 0, tot: 0 },
      { name: "Keso mini", p1: 0, p2: 0, tot: 0 },
      { name: "Ägg kokt 1st", p1: 0, p2: 0, tot: 0 },
      { name: "Tonfisk i vatten", p1: 0, p2: 0, tot: 0 },
    ],
    B: [
      { name: "Jordnötssmör", p1: 0, p2: 0, tot: 0 },
      { name: "Nötblandning/fröblandning*", p1: 0, p2: 0, tot: 0 },
      { name: "Avokado", p1: 0, p2: 0, tot: 0 },
    ],
  },
};




