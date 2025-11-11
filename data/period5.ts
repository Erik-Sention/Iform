import { PeriodData } from "@/types";

export const period5Data: PeriodData = {
  periodId: "5",
  title: "PERIOD 5 (V13–16) – Normalisering",
  weeks: "V13–16",
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
  info: `Syftet med normaliseringsperioden är att återgå till en hållbar, långsiktig kostnivå och stabilisera kroppsvikten.

Det är viktigt att inte "släppa allt" och återgå till gamla vanor — denna fas är avgörande för att resultaten ska bestå.

Under perioden gäller:

Minst 3 styrketräningspass per vecka.

Daglig aktivitet (promenad, cykling, konditionsträning) på minst 1 timme per dag.

Målet är en aktiv livsstil som känns naturlig, inte extrem.

Med coachen skapas en hållbar plan: behåll det som fungerat, justera det som varit svårt, och lägg till det du saknat.`,
  schedule: {
    måndag: {
      times: ["08:00", "10:00", "12:00", "15:00", "17:00", "19:00"],
      meals: ["Morgonmål", "Mellanmål A", "Måltid A", "Mellanmål A", "Mellanmål B", "Måltid B"],
    },
    tisdag: {
      times: ["08:00", "10:00", "12:00", "15:00", "17:00", "19:00"],
      meals: ["Morgonmål", "Mellanmål B", "Måltid B", "Mellanmål B", "Mellanmål A", "Måltid A"],
    },
    onsdag: {
      times: ["08:00", "10:00", "12:00", "15:00", "17:00", "19:00"],
      meals: ["Morgonmål", "Mellanmål A", "Måltid A", "Mellanmål A", "Mellanmål B", "Måltid B"],
    },
    torsdag: {
      times: ["08:00", "10:00", "12:00", "15:00", "17:00", "19:00"],
      meals: ["Morgonmål", "Mellanmål B", "Måltid B", "Mellanmål B", "Mellanmål A", "Måltid A"],
    },
    fredag: {
      times: ["08:00", "10:00", "12:00", "15:00", "17:00", "19:00"],
      meals: ["Morgonmål", "Mellanmål A", "Måltid A", "Mellanmål A", "Mellanmål B", "Måltid B"],
    },
    lördag: {
      times: ["08:00", "10:00", "12:00", "15:00", "17:00", "19:00"],
      meals: ["Morgonmål", "Mellanmål B", "Måltid B", "Mellanmål B", "Mellanmål A", "Måltid A"],
    },
    söndag: {
      times: ["08:00", "10:00", "12:00", "15:00", "17:00", "19:00"],
      meals: ["Morgonmål", "Mellanmål A", "Måltid A", "Mellanmål A", "Mellanmål B", "Måltid B"],
    },
  },
  morningMeal: "Ingefärsshot och/eller kaffe eller valfritt te · Proteindryck · Multivitamin (MittVal Sport / Man / Kvinna)",
  recipes: [
    {
      id: "A1",
      title: "Kyckling med pasta i fetaoströra",
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
        "Koka pasta.",
        "Stek/grilla/ugnsbaka kyckling.",
        "Stek lök och grönsaker.",
        "Blanda yoghurt och fetaost till röra.",
      ],
    },
    {
      id: "A2",
      title: "Fläskfilé med stekt ris och grönsakswok",
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
        "Stek ris med ägg.",
        "Stek/grilla fläskfilé.",
        "Stek wokgrönsaker med vitlök och chili.",
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
      title: "Sojafiléer med grönsaksris",
      category: "A",
      image: "/images/recipies/a6.png",
      ingredients: [
        { name: "Sojaprotein filé/bit", p1: 0, p2: 0, tot: 0 },
        { name: "Ris", p1: 0, p2: 0, tot: 0 },
        { name: "Morot", p1: 0, p2: 0, tot: 0 },
        { name: "Broccoli", p1: 0, p2: 0, tot: 0 },
        { name: "Paprika*", p1: 0, p2: 0, tot: 0 },
        { name: "Lök*", p1: 0, p2: 0, tot: 0 },
        { name: "Majs", p1: 0, p2: 0, tot: 0 },
      ],
      steps: [
        "Koka ris.",
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
      title: "Biffkött med couscous och avocadoröra",
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

