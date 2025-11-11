import { PeriodData } from "@/types";

export const period3Data: PeriodData = {
  periodId: "3",
  title: "PERIOD 3 (V7–8) – Ökad omsättning",
  weeks: "V7–8",
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
  info: `Under perioden är vi tillbaka till ökad ämnesomsättning.

Styrketräningsbelastningen ökar (om inte coach säger annat).

Ätfönstret är utökat men håll rutiner.

Grönsaker med * kan ätas fritt (angivna gram = minimum).

Du kan lägga till obegränsat med "vattengrönsaker".

Välj fritt inom kategori A/B, men variera minst två måltider och mellanmål per kategori.

Råvaror anges i gram, anpassade till vikt och kroppssammansättning.

Små avvikelser på gramnivå spelar ingen roll.

Under perioden finns fria kcal att fördela fritt under veckan.

Vid hårdare eller längre konditionsträning används extra kolhydrater enligt anvisning.

Frukt ska ätas dagligen enligt angiven kcal.`,
  schedule: {
    måndag: {
      times: ["08:00", "10:00", "12:00", "14:00", "16:00", "18:00", "20:00"],
      meals: ["Morgonmål", "Mellanmål B", "Måltid A", "Mellanmål A", "Proteindryck", "Mellanmål A", "Måltid B"],
    },
    tisdag: {
      times: ["08:00", "10:00", "12:00", "14:00", "16:00", "18:00", "20:00"],
      meals: ["Morgonmål", "Mellanmål B", "Måltid B", "Mellanmål A", "Proteindryck", "Mellanmål A", "Måltid A"],
    },
    onsdag: {
      times: ["08:00", "10:00", "12:00", "14:00", "16:00", "18:00", "20:00"],
      meals: ["Morgonmål", "Mellanmål B", "Måltid A", "Mellanmål A", "Proteindryck", "Mellanmål A", "Måltid B"],
    },
    torsdag: {
      times: ["08:00", "10:00", "12:00", "14:00", "16:00", "18:00", "20:00"],
      meals: ["Morgonmål", "Mellanmål B", "Måltid B", "Mellanmål A", "Proteindryck", "Mellanmål A", "Måltid A"],
    },
    fredag: {
      times: ["08:00", "10:00", "12:00", "14:00", "16:00", "18:00", "20:00"],
      meals: ["Morgonmål", "Mellanmål B", "Måltid A", "Mellanmål A", "Proteindryck", "Mellanmål A", "Måltid B"],
    },
    lördag: {
      times: ["08:00", "10:00", "12:00", "14:00", "16:00", "18:00", "20:00"],
      meals: ["Morgonmål", "Mellanmål B", "Måltid B", "Mellanmål A", "Proteindryck", "Mellanmål A", "Måltid A"],
    },
    söndag: {
      times: ["08:00", "10:00", "12:00", "14:00", "16:00", "18:00", "20:00"],
      meals: ["Morgonmål", "Mellanmål B", "Måltid A", "Mellanmål A", "Proteindryck", "Mellanmål A", "Måltid B"],
    },
  },
  morningMeal: "Ingefärsshot och/eller kaffe eller valfritt te · Proteindryck · Multivitamin (MittVal Sport / Man / Kvinna)",
  recipes: [
    {
      id: "A1",
      title: "Kyckling och fetaoströra",
      category: "A",
      image: "/images/recipies/a1.png",
      ingredients: [
        { name: "Kycklingfilé", p1: 0, p2: 0, tot: 0 },
        { name: "Fiberpasta", p1: 0, p2: 0, tot: 0 },
        { name: "Fetaost", p1: 0, p2: 0, tot: 0 },
        { name: "Matlagningsyoghurt lätt", p1: 0, p2: 0, tot: 0 },
        { name: "Zucchini*", p1: 0, p2: 0, tot: 0 },
        { name: "Champinjoner", p1: 0, p2: 0, tot: 0 },
        { name: "Lök*", p1: 0, p2: 0, tot: 0 },
        { name: "Paprika*", p1: 0, p2: 0, tot: 0 },
      ],
      steps: [
        "Koka fiberpasta.",
        "Stek/grilla/ugnsbaka kyckling.",
        "Stek lök och grönsaker.",
        "Blanda yoghurt och fetaost till röra.",
      ],
    },
    {
      id: "A2",
      title: "Fläskfilé och grönsakswok",
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
        "Stek/grilla fläskfilé.",
        "Stek wokgrönsaker med vitlök och chili.",
        "Tillsätt ägg på slutet.",
      ],
    },
    {
      id: "A3",
      title: "Kryddig kyckling med grönsaker",
      category: "A",
      image: "/images/recipies/a3.png",
      ingredients: [
        { name: "Kyckling", p1: 0, p2: 0, tot: 0 },
        { name: "Bulgur", p1: 0, p2: 0, tot: 0 },
        { name: "Fetaost", p1: 0, p2: 0, tot: 0 },
        { name: "Bladspenat*", p1: 0, p2: 0, tot: 0 },
        { name: "Gurka*", p1: 0, p2: 0, tot: 0 },
        { name: "Tomat*", p1: 0, p2: 0, tot: 0 },
      ],
      steps: [
        "Koka bulgur.",
        "Stek kyckling.",
        "Blanda med ost och grönsaker.",
      ],
    },
    {
      id: "A4",
      title: "Kyckling med grönsaker",
      category: "A",
      image: "/images/recipies/a4.png",
      ingredients: [
        { name: "Kyckling", p1: 0, p2: 0, tot: 0 },
        { name: "Fiberpasta", p1: 0, p2: 0, tot: 0 },
        { name: "Fetaost", p1: 0, p2: 0, tot: 0 },
        { name: "Bladspenat*", p1: 0, p2: 0, tot: 0 },
        { name: "Broccoli", p1: 0, p2: 0, tot: 0 },
        { name: "Paprika*", p1: 0, p2: 0, tot: 0 },
        { name: "Majstärkelse", p1: 0, p2: 0, tot: 0 },
      ],
      steps: [
        "Panera kyckling i majsstärkelse.",
        "Stek/grilla.",
        "Woka grönsaker.",
        "Vänd i fetaost och spenat.",
      ],
    },
    {
      id: "A5",
      title: "Köttfärsgryta med grönsaker",
      category: "A",
      image: "/images/recipies/a5.png",
      ingredients: [
        { name: "Nötfärs", p1: 0, p2: 0, tot: 0 },
        { name: "Ris", p1: 0, p2: 0, tot: 0 },
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
        "Stek lök och färs.",
        "Tillsätt morot, grönsaker, tomater och kryddor.",
      ],
    },
    {
      id: "A6",
      title: "Sojafiléer med grönsaker",
      category: "A",
      image: "/images/recipies/a6.png",
      ingredients: [
        { name: "Sojaprotein", p1: 0, p2: 0, tot: 0 },
        { name: "Morot", p1: 0, p2: 0, tot: 0 },
        { name: "Broccoli", p1: 0, p2: 0, tot: 0 },
        { name: "Paprika", p1: 0, p2: 0, tot: 0 },
        { name: "Lök", p1: 0, p2: 0, tot: 0 },
        { name: "Majs", p1: 0, p2: 0, tot: 0 },
      ],
      steps: [
        "Stek grönsaker och sojafilé.",
        "Krydda.",
      ],
    },
    {
      id: "A7",
      title: "Paella på kyckling",
      category: "A",
      image: "/images/recipies/a7.png",
      ingredients: [
        { name: "Kyckling", p1: 0, p2: 0, tot: 0 },
        { name: "Havreris", p1: 0, p2: 0, tot: 0 },
        { name: "Gröna ärtor", p1: 0, p2: 0, tot: 0 },
        { name: "Ägg 1st", p1: 0, p2: 0, tot: 0 },
        { name: "Lök", p1: 0, p2: 0, tot: 0 },
        { name: "Paprika", p1: 0, p2: 0, tot: 0 },
        { name: "Saffran*", p1: 0, p2: 0, tot: 0 },
      ],
      steps: [
        "Koka havreris i buljong med lök, paprika och saffran.",
        "Tillsätt ägg och kyckling mot slutet.",
      ],
    },
    {
      id: "A8",
      title: "Nötfärsbiffar med rostade grönsaker",
      category: "A",
      image: "/images/recipies/a8.png",
      ingredients: [
        { name: "Nötfärs", p1: 0, p2: 0, tot: 0 },
        { name: "Havreris", p1: 0, p2: 0, tot: 0 },
        { name: "Ägg 1st", p1: 0, p2: 0, tot: 0 },
        { name: "Fetaost", p1: 0, p2: 0, tot: 0 },
        { name: "Yoghurt", p1: 0, p2: 0, tot: 0 },
        { name: "Morot", p1: 0, p2: 0, tot: 0 },
        { name: "Broccoli", p1: 0, p2: 0, tot: 0 },
      ],
      steps: [
        "Forma biffar av färs och ägg.",
        "Stek.",
        "Blanda fetaost + yoghurt till röra.",
        "Rosta grönsaker i ugn.",
      ],
    },
    {
      id: "B1",
      title: "Sojakebab med avocadoröra",
      category: "B",
      image: "/images/recipies/b1.png",
      ingredients: [
        { name: "Sojaprotein kebab", p1: 0, p2: 0, tot: 0 },
        { name: "Couscous", p1: 0, p2: 0, tot: 0 },
        { name: "Avokado", p1: 0, p2: 0, tot: 0 },
        { name: "Bladspenat", p1: 0, p2: 0, tot: 0 },
        { name: "Tomat", p1: 0, p2: 0, tot: 0 },
        { name: "Lök", p1: 0, p2: 0, tot: 0 },
        { name: "Gurka", p1: 0, p2: 0, tot: 0 },
      ],
      steps: [
        "Koka couscous.",
        "Stek kebab.",
        "Blanda med avocadoröra och grönsaker.",
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
        "Skär rotfrukter i klyftor.",
        "Rosta i ugn.",
        "Krydda och tillaga lax.",
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
        "Tillaga torsk i folieknyte med kryddor.",
        "Använd olja till fisk och grönsaker.",
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
        { name: "Paprika", p1: 0, p2: 0, tot: 0 },
        { name: "Lök", p1: 0, p2: 0, tot: 0 },
      ],
      steps: [
        "Koka pasta.",
        "Stek lök, grönsaker och skaldjur.",
        "Vänd ner ost på slutet.",
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
        { name: "Lök", p1: 0, p2: 0, tot: 0 },
        { name: "Paprika", p1: 0, p2: 0, tot: 0 },
        { name: "Saffran*", p1: 0, p2: 0, tot: 0 },
      ],
      steps: [
        "Koka havreris i buljong med grönsaker.",
        "Tillsätt ägg och skaldjur på slutet.",
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
        { name: "Tomat", p1: 0, p2: 0, tot: 0 },
        { name: "Bladspenat", p1: 0, p2: 0, tot: 0 },
      ],
      steps: [
        "Stek eller ugnsbaka lax.",
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
        { name: "Sojabönor", p1: 0, p2: 0, tot: 0 },
        { name: "Mozzarella 18%", p1: 0, p2: 0, tot: 0 },
        { name: "Gurka", p1: 0, p2: 0, tot: 0 },
        { name: "Lök", p1: 0, p2: 0, tot: 0 },
        { name: "Oliver", p1: 0, p2: 0, tot: 0 },
        { name: "Tomat", p1: 0, p2: 0, tot: 0 },
        { name: "Bladspenat", p1: 0, p2: 0, tot: 0 },
      ],
      steps: [
        "Stek lätt eller tina sojabönor.",
        "Tärna mozzarella.",
        "Hacka övriga ingredienser och blanda.",
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

