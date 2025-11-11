import { PeriodData } from "@/types";

export const period2Data: PeriodData = {
  periodId: "2",
  title: "PERIOD 2 (V3–6) – Viktnedgång",
  weeks: "V3–6",
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
  info: `Målet är viktnedgång med bibehållen eller ökad muskelmassa.

Ätfönstret utökas och kan flyttas efter vardag och träning.

Det är viktigt att äta det som står i schemat — mindre mat ger inte bättre effekt.

Grönsaker markerade med * kan tas i valfri mängd, angivna gram är minimum.

Du får lägga till "vattengrönsaker" fritt.

Välj fritt inom kategori A/B, men variera minst två olika alternativ.

Alla råvaror anges i gram efter din kroppssammansättning.

Under perioden finns fria kcal att använda valfritt under veckan.

Om du tränar hårt eller långt, följ kolhydratrekommendationerna ovan.

Frukt ska ätas dagligen enligt angiven kcal-mängd.`,
  schedule: {
    måndag: {
      times: ["08:00", "12:00", "15:00", "18:00", "20:00", "Kväll"],
      meals: ["Morgonmål", "Måltid A", "Mellanmål A", "Proteindryck", "Måltid B", "Proteindryck"],
    },
    tisdag: {
      times: ["08:00", "12:00", "15:00", "18:00", "20:00", "Kväll"],
      meals: ["Morgonmål", "Måltid B", "Mellanmål B", "Proteindryck", "Måltid A", "Proteindryck"],
    },
    onsdag: {
      times: ["08:00", "12:00", "15:00", "18:00", "20:00", "Kväll"],
      meals: ["Morgonmål", "Måltid A", "Mellanmål A", "Proteindryck", "Måltid B", "Proteindryck"],
    },
    torsdag: {
      times: ["08:00", "12:00", "15:00", "18:00", "20:00", "Kväll"],
      meals: ["Morgonmål", "Måltid B", "Mellanmål B", "Proteindryck", "Måltid A", "Proteindryck"],
    },
    fredag: {
      times: ["08:00", "12:00", "15:00", "18:00", "20:00", "Kväll"],
      meals: ["Morgonmål", "Måltid A", "Mellanmål A", "Proteindryck", "Måltid B", "Proteindryck"],
    },
    lördag: {
      times: ["08:00", "12:00", "15:00", "18:00", "20:00", "Kväll"],
      meals: ["Morgonmål", "Måltid B", "Mellanmål B", "Proteindryck", "Måltid A", "Proteindryck"],
    },
    söndag: {
      times: ["08:00", "12:00", "15:00", "18:00", "20:00", "Kväll"],
      meals: ["Morgonmål", "Måltid A", "Mellanmål A", "Proteindryck", "Måltid B", "Proteindryck"],
    },
  },
  morningMeal: "Ingefärsshot och/eller kaffe eller valfritt te · Proteindryck · Multivitamin (MittVal Sport / Man / Kvinna)",
  recipes: [
    {
      id: "A1",
      title: "Kyckling och fetaoströra",
      category: "A",
      image: "/images/recipies/aa1.png",
      ingredients: [
        { name: "Kycklingfilé", p1: 0, p2: 0, tot: 0 },
        { name: "Fetaost", p1: 0, p2: 0, tot: 0 },
        { name: "Matlagningsyoghurt lätt", p1: 0, p2: 0, tot: 0 },
        { name: "Zucchini*", p1: 0, p2: 0, tot: 0 },
        { name: "Champinjoner", p1: 0, p2: 0, tot: 0 },
        { name: "Lök*", p1: 0, p2: 0, tot: 0 },
        { name: "Paprika*", p1: 0, p2: 0, tot: 0 },
      ],
      steps: [
        "Stek/grilla/ugnsbaka kyckling.",
        "Stek grönsaker.",
        "Blanda yoghurt, fetaost och kryddor till röra.",
      ],
    },
    {
      id: "A2",
      title: "Fläskfilé och grönsakswok",
      category: "A",
      image: "/images/recipies/aa2.png",
      ingredients: [
        { name: "Fläskfilé", p1: 0, p2: 0, tot: 0 },
        { name: "Wokgrönsaker", p1: 0, p2: 0, tot: 0 },
        { name: "Ägg 1st", p1: 0, p2: 0, tot: 0 },
        { name: "Vitlök*", p1: 0, p2: 0, tot: 0 },
        { name: "Chili*", p1: 0, p2: 0, tot: 0 },
      ],
      steps: [
        "Stek/grilla fläskfilé.",
        "Stek wokgrönsaker med vitlök och chili.",
        "Tillsätt ägg på slutet.",
      ],
    },
    {
      id: "A3",
      title: "Kryddig kyckling med grönsaker",
      category: "A",
      image: "/images/recipies/aa3.png",
      ingredients: [
        { name: "Kyckling", p1: 0, p2: 0, tot: 0 },
        { name: "Fetaost", p1: 0, p2: 0, tot: 0 },
        { name: "Bladspenat*", p1: 0, p2: 0, tot: 0 },
        { name: "Gurka*", p1: 0, p2: 0, tot: 0 },
        { name: "Tomat*", p1: 0, p2: 0, tot: 0 },
      ],
      steps: [
        "Stek/grilla kyckling.",
        "Servera med ost och sallad.",
      ],
    },
    {
      id: "A4",
      title: "Kyckling med grönsaker",
      category: "A",
      image: "/images/recipies/aa4.png",
      ingredients: [
        { name: "Kyckling", p1: 0, p2: 0, tot: 0 },
        { name: "Fetaost", p1: 0, p2: 0, tot: 0 },
        { name: "Bladspenat", p1: 0, p2: 0, tot: 0 },
        { name: "Broccoli", p1: 0, p2: 0, tot: 0 },
        { name: "Paprika", p1: 0, p2: 0, tot: 0 },
        { name: "Majstärkelse", p1: 0, p2: 0, tot: 0 },
      ],
      steps: [
        "Panera kyckling i majstärkelse.",
        "Stek/grilla.",
        "Stek broccoli och paprika.",
        "Vänd i spenat och fetaost.",
      ],
    },
    {
      id: "A5",
      title: "Köttfärsgryta med grönsaker",
      category: "A",
      image: "/images/recipies/aa5.png",
      ingredients: [
        { name: "Nötfärs", p1: 0, p2: 0, tot: 0 },
        { name: "Morot", p1: 0, p2: 0, tot: 0 },
        { name: "Krossade tomater", p1: 0, p2: 0, tot: 0 },
        { name: "Paprika", p1: 0, p2: 0, tot: 0 },
        { name: "Lök", p1: 0, p2: 0, tot: 0 },
        { name: "Tomatpuré", p1: 0, p2: 0, tot: 0 },
        { name: "Champinjoner", p1: 0, p2: 0, tot: 0 },
        { name: "Zucchini", p1: 0, p2: 0, tot: 0 },
        { name: "Bladspenat", p1: 0, p2: 0, tot: 0 },
      ],
      steps: [
        "Hacka grönsaker.",
        "Stek lök och köttfärs.",
        "Tillsätt morot, grönsaker, krossade tomater och kryddor.",
      ],
    },
    {
      id: "A6",
      title: "Sojafiléer med grönsaker",
      category: "A",
      image: "/images/recipies/aa6.png",
      ingredients: [
        { name: "Sojaprotein filé/bit", p1: 0, p2: 0, tot: 0 },
        { name: "Morot", p1: 0, p2: 0, tot: 0 },
        { name: "Broccoli", p1: 0, p2: 0, tot: 0 },
        { name: "Paprika", p1: 0, p2: 0, tot: 0 },
        { name: "Lök", p1: 0, p2: 0, tot: 0 },
        { name: "Majs", p1: 0, p2: 0, tot: 0 },
      ],
      steps: [
        "Stek/woka grönsaker och bönor.",
        "Stek sojafilé.",
        "Krydda.",
      ],
    },
    {
      id: "A7",
      title: "Paella på kyckling",
      category: "A",
      image: "/images/recipies/aa7.png",
      ingredients: [
        { name: "Kyckling", p1: 0, p2: 0, tot: 0 },
        { name: "Gröna ärtor", p1: 0, p2: 0, tot: 0 },
        { name: "Ägg 1st", p1: 0, p2: 0, tot: 0 },
        { name: "Lök", p1: 0, p2: 0, tot: 0 },
        { name: "Paprika", p1: 0, p2: 0, tot: 0 },
        { name: "Saffran*", p1: 0, p2: 0, tot: 0 },
      ],
      steps: [
        "Fräs grönsaker med saffran.",
        "Stek kyckling.",
        "Blanda allt och tillsätt ägg på slutet.",
      ],
    },
    {
      id: "A8",
      title: "Nötfärsbiffar med rostade grönsaker",
      category: "A",
      image: "/images/recipies/aa8.png",
      ingredients: [
        { name: "Nötfärs", p1: 0, p2: 0, tot: 0 },
        { name: "Ägg 1st", p1: 0, p2: 0, tot: 0 },
        { name: "Fetaost", p1: 0, p2: 0, tot: 0 },
        { name: "Matlagningsyoghurt", p1: 0, p2: 0, tot: 0 },
        { name: "Morot", p1: 0, p2: 0, tot: 0 },
        { name: "Broccoli", p1: 0, p2: 0, tot: 0 },
      ],
      steps: [
        "Forma biffar av nötfärs och ägg.",
        "Stek.",
        "Blanda fetaost och yoghurt till fetakräm.",
        "Ugnsbaka morot och broccoli.",
      ],
    },
    {
      id: "B1",
      title: "Biffkött med avocadoröra",
      category: "B",
      image: "/images/recipies/bb1.png",
      ingredients: [
        { name: "Sojaprotein kebab (Oumph®)", p1: 0, p2: 0, tot: 0 },
        { name: "Avokado", p1: 0, p2: 0, tot: 0 },
        { name: "Bladspenat", p1: 0, p2: 0, tot: 0 },
        { name: "Tomat", p1: 0, p2: 0, tot: 0 },
        { name: "Lök", p1: 0, p2: 0, tot: 0 },
        { name: "Gurka", p1: 0, p2: 0, tot: 0 },
      ],
      steps: [
        "Stek biffköttet i strimlor.",
        "Gör avocadoröra med kryddor.",
        "Blanda allt i sallad.",
      ],
    },
    {
      id: "B2",
      title: "Lax med ugnsrostade rotfrukter",
      category: "B",
      image: "/images/recipies/bb2.png",
      ingredients: [
        { name: "Lax", p1: 0, p2: 0, tot: 0 },
        { name: "Morot", p1: 0, p2: 0, tot: 0 },
        { name: "Palsternacka", p1: 0, p2: 0, tot: 0 },
      ],
      steps: [
        "Skär rotfrukter i klyftor.",
        "Krydda och rosta i ugn.",
        "Krydda och tillaga lax.",
      ],
    },
    {
      id: "B3",
      title: "Torsk med ugnsrostade rotfrukter",
      category: "B",
      image: "/images/recipies/bb3.png",
      ingredients: [
        { name: "Torsk", p1: 0, p2: 0, tot: 0 },
        { name: "Morot", p1: 0, p2: 0, tot: 0 },
        { name: "Palsternacka", p1: 0, p2: 0, tot: 0 },
        { name: "Rapsolja", p1: 0, p2: 0, tot: 0 },
      ],
      steps: [
        "Lägg torsk i folieknyte med kryddor.",
        "Tillaga i ugn eller stek.",
        "Använd olja till fisk och grönsaker.",
      ],
    },
    {
      id: "B4",
      title: "Skaldjurswok",
      category: "B",
      image: "/images/recipies/bb4.png",
      ingredients: [
        { name: "Räkor", p1: 0, p2: 0, tot: 0 },
        { name: "Fetaost", p1: 0, p2: 0, tot: 0 },
        { name: "Broccoli", p1: 0, p2: 0, tot: 0 },
        { name: "Paprika", p1: 0, p2: 0, tot: 0 },
        { name: "Lök", p1: 0, p2: 0, tot: 0 },
      ],
      steps: [
        "Stek/woka lök, grönsaker och skaldjur.",
        "Vänd i ost på slutet.",
      ],
    },
    {
      id: "B5",
      title: "Paella på skaldjur",
      category: "B",
      image: "/images/recipies/bb5.png",
      ingredients: [
        { name: "Räkor", p1: 0, p2: 0, tot: 0 },
        { name: "Gröna ärtor", p1: 0, p2: 0, tot: 0 },
        { name: "Ägg 1st", p1: 0, p2: 0, tot: 0 },
        { name: "Lök", p1: 0, p2: 0, tot: 0 },
        { name: "Paprika", p1: 0, p2: 0, tot: 0 },
        { name: "Saffran*", p1: 0, p2: 0, tot: 0 },
      ],
      steps: [
        "Fräs grönsaker, lök och saffran.",
        "Tillsätt ägg och skaldjur på slutet när paellan torkar lite.",
      ],
    },
    {
      id: "B6",
      title: "Lax med tomat och mozzarella",
      category: "B",
      image: "/images/recipies/bb6.png",
      ingredients: [
        { name: "Lax", p1: 0, p2: 0, tot: 0 },
        { name: "Mozzarella", p1: 0, p2: 0, tot: 0 },
        { name: "Tomat", p1: 0, p2: 0, tot: 0 },
        { name: "Bladspenat", p1: 0, p2: 0, tot: 0 },
      ],
      steps: [
        "Stek/ugnsbaka lax.",
        "Skiva tomat och mozzarella.",
        "Servera med spenat.",
      ],
    },
    {
      id: "B7",
      title: "Bön och mozzarellasallad",
      category: "B",
      image: "/images/recipies/bb7.png",
      ingredients: [
        { name: "Sojabönor", p1: 0, p2: 0, tot: 0 },
        { name: "Mozzarella 18%", p1: 0, p2: 0, tot: 0 },
        { name: "Gurka", p1: 0, p2: 0, tot: 0 },
        { name: "Lök", p1: 0, p2: 0, tot: 0 },
        { name: "Oliver", p1: 0, p2: 0, tot: 0 },
        { name: "Tomat", p1: 0, p2: 0, tot: 0 },
        { name: "Bladspenat", p1: 0, p2: 0, tot: 0 },
      ],
      steps: [
        "Stek lök, grönsaker och bönor.",
        "Vänd i ost mot slutet.",
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
      { name: "Nöt- eller fröblandning", p1: 0, p2: 0, tot: 0 },
      { name: "Avokado", p1: 0, p2: 0, tot: 0 },
    ],
  },
};

