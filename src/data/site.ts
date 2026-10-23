const BASE = import.meta.env.BASE_URL;

export const org = {
  name: 'Elgård Regnskab',
  founder: 'Liselotte Elgård Nielsen',
  phone: '2684 9809',
  phoneHref: 'tel:+4526849809',
  officePhone: '2261 7075',
  officePhoneHref: 'tel:+4522617075',
  email: 'kontakt@elgard.dk',
  emailHref: 'mailto:kontakt@elgard.dk',
  cvr: '14 69 52 06',
  street: 'RevisorHuset, Blokken 90',
  city: '3460 Birkerød',
  hours: 'Mandag–torsdag 9–16, fredag 9–15',
  phoneHours: 'Telefon besvares alle hverdage 9–16',
};

export const nav = [
  { label: 'Regnskabsservice', href: `${BASE}/regnskabsservice/` },
  { label: 'Moms & skat', href: `${BASE}/moms-skat/` },
  { label: 'Rådgivning', href: `${BASE}/raadgivning-og-kurser/` },
  { label: 'Om os', href: `${BASE}/om-os/` },
];

export const services = [
  {
    name: 'Bogholderi',
    href: `${BASE}/regnskabsservice/bogholderi/`,
    text: 'Skræddersyet bogholderi: afleverer du bilagene til os, eller registrerer du selv og sender os listen?',
  },
  {
    name: 'Fremlæggelse af regnskab',
    href: `${BASE}/regnskabsservice/fremlaeggelse-af-regnskab/`,
    text: 'Mundtlig præsentation ved generalforsamling eller bestyrelse — personligt fremmøde.',
  },
  {
    name: 'Revision',
    href: `${BASE}/regnskabsservice/revision/`,
    text: 'Revisionspåtegning i samarbejde med statsautoriseret revisor Claus Carlsen.',
  },
  {
    name: 'Moms, told og skat',
    href: `${BASE}/moms-skat/`,
    text: 'Regler og frister holdes for dig, så afregning sker til tiden — uden renter og gebyrer.',
  },
];

export const branches = [
  'spedition',
  'håndværkere',
  'arkitekter',
  'optik',
  'ejendomsudlejning',
  'handel med livsstilsprodukter',
  'frisører og skønhedspleje',
  'IT-ydelser',
  'konsulentvirksomheder',
  'socialrådgivere',
  'alternative behandlere',
  'forlag',
  'taxabranchen',
  'designere',
];

export const faq = [
  {
    q: 'Hvem hjælper I?',
    a: 'Små og mellemstore selvstændige virksomheder og selskaber i mange brancher — fra enkeltmandsvirksomhed til selskab med flere ansatte.',
  },
  {
    q: 'Kan vi selv indtaste bilagene?',
    a: 'Ja. Nogle afleverer deres bilag til os hver måned, andre registrerer selv og sender os en liste, fx en excel-fil, som vi sætter regnskabet ud fra.',
  },
  {
    q: 'Holder I styr på fristerne?',
    a: 'Ja. Vi holder styr på regler og frister og sikrer, at moms, told og skat afregnes til tiden, så du undgår renter og gebyrer for overskredne frister.',
  },
  {
    q: 'Kan I revidere regnskabet?',
    a: 'Vi samarbejder med statsautoriseret revisor Claus Carlsen, så bogføring, administration og revision sammensættes på den måde, der passer bedst til din virksomhed.',
  },
  {
    q: 'Hjælper I med selvangivelsen?',
    a: 'Ja. Driver du en enkeltmandsvirksomhed eller et personligt ejet selskab, hjælper vi med selvangivelsen — så du kan sove godt om natten. Også i juni måned.',
  },
  {
    q: 'Hvor er kontoret, og hvornår er I åben?',
    a: 'RevisorHuset, Blokken 90, 3460 Birkerød. Mandag–torsdag 9–16 og fredag 9–15. Telefon 2684 9809 — vi svarer alle hverdage 9–16.',
  },
];

export const pickerTasks = [
  { label: 'Bogføring', est: 4 },
  { label: 'Moms & selvangivelse', est: 2 },
  { label: 'Lønadministration', est: 3 },
  { label: 'Frister og korrespondance', est: 2 },
  { label: 'Årsregnskab (fordelt)', est: 3 },
];

export const crumb = (label: string, path: string): object => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Forside', item: 'https://elgard.dk/' },
    { '@type': 'ListItem', position: 2, name: label, item: `https://elgard.dk${path}` },
  ],
});

export const foundCredit = {
  title: 'Birkerød Hovedgade',
  creator: 'Hubertus (assumed)',
  license: 'CC BY-SA 2.5',
  page: 'https://commons.wikimedia.org/w/index.php?curid=1965569',
  via: 'Wikimedia Commons',
};
