# iForm - Kostprogram

Ett personligt anpassat kostprogram byggt med Next.js 14, TypeScript och Tailwind CSS.

## Installation

```bash
npm install
```

## Kör projektet

```bash
npm run dev
```

Öppna [http://localhost:3000](http://localhost:3000) i din webbläsare.

## Bygga för produktion

```bash
npm run build
npm start
```

## Projektstuktur

- `/app` - Next.js 14 App Router (sidor och layout)
- `/components` - Återanvändbara React-komponenter
- `/data` - Statisk data för perioderna
- `/types` - TypeScript-typdefinitioner

## Steg 1 - Status

✅ Period 1 är helt implementerad med:
- Startsida med 5 periodknappar (endast Period 1 aktiv)
- Period 1-sida med alla sektioner:
  - HeaderCard (klientdata + nyckeltal)
  - InfoSection (periodinfo)
  - WeekSchedule (veckoschema)
  - 15 receptkort (A1-A8, B1-B7) med ingredienstabeller
  - Mellanmål (kategori A och B)

## Nästa steg

- Steg 2: Implementera Period 2-5
- Steg 3: PDF-export
- Steg 4: Excel-integration




