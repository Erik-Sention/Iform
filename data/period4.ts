import { PeriodData } from "@/types";

export const period4Data: PeriodData = {
  periodId: "4",
  title: "PERIOD 4 (V9–12) – Viktnedgång",
  weeks: "V9–12",
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
  info: `Under perioden är fokus åter viktnedgång, men utan att äta för lite.

Om du har hårda konditionspass är kolhydrater innan och under passen avgörande.

Riktvärde för viktnedgång är ca 1 % av kroppsvikten per vecka.

Vid snabbare viktnedgång eller kraftig prestationsminskning – kontakta coach.

Du får välja måltider och mellanmål fritt inom kategori A/B, men ska variera minst två olika alternativ i varje kategori.

Angivna mängder är anpassade efter kroppssammansättning — små skillnader i gram spelar ingen roll.

Du har fria kcal att disponera under veckan.

Frukt ska ätas dagligen enligt angiven mängd.`,
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
        "Stek lök och grönsaker.",
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
        "Woka grönsaker med vitlök och chili.",
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
        "Panera kyckling i majsstärkelse.",
        "Stek eller grilla.",
        "Woka broccoli och paprika.",
        "Avsluta med att vända i spenat och fetaost.",
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
        "Stek lök och köttfärs.",
        "Tillsätt morot, grönsaker och tomater.",
        "Krydda.",
      ],
    },
    {
      id: "A6",
      title: "Sojafiléer med grönsaker",
      category: "A",
      image: "/images/recipies/aa6.png",
      ingredients: [
        { name: "Sojaprotein", p1: 0, p2: 0, tot: 0 },
        { name: "Morot", p1: 0, p2: 0, tot: 0 },
        { name: "Broccoli", p1: 0, p2: 0, tot: 0 },
        { name: "Paprika", p1: 0, p2: 0, tot: 0 },
        { name: "Lök", p1: 0, p2: 0, tot: 0 },
        { name: "Majs", p1: 0, p2: 0, tot: 0 },
      ],
      steps: [
        "Stek/woka grönsaker och sojafilé.",
        "Krydda efter smak.",
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
        "Woka grönsaker, lök och saffran.",
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
        { name: "Yoghurt", p1: 0, p2: 0, tot: 0 },
        { name: "Morot", p1: 0, p2: 0, tot: 0 },
        { name: "Broccoli", p1: 0, p2: 0, tot: 0 },
      ],
      steps: [
        "Forma biffar.",
        "Stek.",
        "Blanda fetaost och yoghurt till fetakräm, krydda.",
        "Rosta grönsaker i ugn.",
      ],
    },
    {
      id: "B1",
      title: "Sojakebab med avocadoröra",
      category: "B",
      image: "/images/recipies/bb1.png",
      ingredients: [
        { name: "Sojaprotein kebab", p1: 0, p2: 0, tot: 0 },
        { name: "Avokado", p1: 0, p2: 0, tot: 0 },
        { name: "Bladspenat", p1: 0, p2: 0, tot: 0 },
        { name: "Tomat", p1: 0, p2: 0, tot: 0 },
        { name: "Lök", p1: 0, p2: 0, tot: 0 },
        { name: "Gurka", p1: 0, p2: 0, tot: 0 },
      ],
      steps: [
        "Stek kebab i strimlor.",
        "Blanda avocadoröra med kryddor.",
        "Blanda allt med sallad.",
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
        "Rosta i ugn.",
        "Krydda och tillaga lax.",
      ],
    },
    {
      id: "B3",
      title: "Lax med tomat och mozzarella",
      category: "B",
      image: "/images/recipies/bb3.png",
      ingredients: [
        { name: "Lax", p1: 0, p2: 0, tot: 0 },
        { name: "Mozzarella", p1: 0, p2: 0, tot: 0 },
        { name: "Tomat", p1: 0, p2: 0, tot: 0 },
        { name: "Bladspenat", p1: 0, p2: 0, tot: 0 },
      ],
      steps: [
        "Stek/ugnsbaka lax.",
        "Skiva mozzarella och tomat.",
        "Servera med spenat.",
      ],
    },
    {
      id: "B4",
      title: "Torsk med ugnsrostade rotfrukter",
      category: "B",
      image: "/images/recipies/bb4.png",
      ingredients: [
        { name: "Torsk", p1: 0, p2: 0, tot: 0 },
        { name: "Morot", p1: 0, p2: 0, tot: 0 },
        { name: "Palsternacka", p1: 0, p2: 0, tot: 0 },
      ],
      steps: [
        "Tillaga i ugnsfolie med kryddor eller stek.",
      ],
    },
    {
      id: "B5",
      title: "Skaldjurswok",
      category: "B",
      image: "/images/recipies/bb5.png",
      ingredients: [
        { name: "Räkor", p1: 0, p2: 0, tot: 0 },
        { name: "Gröna ärtor", p1: 0, p2: 0, tot: 0 },
        { name: "Ägg 1st", p1: 0, p2: 0, tot: 0 },
        { name: "Lök", p1: 0, p2: 0, tot: 0 },
        { name: "Paprika", p1: 0, p2: 0, tot: 0 },
        { name: "Mozzarella", p1: 0, p2: 0, tot: 0 },
      ],
      steps: [
        "Woka lök, grönsaker och skaldjur.",
        "Tillsätt ägg mot slutet.",
        "Vänd i mozzarella innan servering.",
      ],
    },
    {
      id: "B6",
      title: "Bön- och mozzarellasallad",
      category: "B",
      image: "/images/recipies/bb6.png",
      ingredients: [
        { name: "Sojabönor (färdigkokta)", p1: 0, p2: 0, tot: 0 },
        { name: "Mozzarella 18%", p1: 0, p2: 0, tot: 0 },
        { name: "Gurka", p1: 0, p2: 0, tot: 0 },
        { name: "Lök", p1: 0, p2: 0, tot: 0 },
        { name: "Oliver", p1: 0, p2: 0, tot: 0 },
        { name: "Tomat", p1: 0, p2: 0, tot: 0 },
        { name: "Bladspenat", p1: 0, p2: 0, tot: 0 },
      ],
      steps: [
        "Woka lök, grönsaker och bönor.",
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
      { name: "Nötblandning/fröblandning", p1: 0, p2: 0, tot: 0 },
      { name: "Avokado", p1: 0, p2: 0, tot: 0 },
    ],
  },
};

