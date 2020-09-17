// Generated by https://quicktype.io

export interface ApiFish {
  id: number;
  'file-name': string;
  name: Name;
  availability: ApiAvailability;
  shadow: string;
  price: number;
  'price-cj': number;
  'catch-phrase': string;
  'museum-phrase': string;
  image_uri: string;
  icon_uri: string;
  'alt-catch-phrase'?: string[];
}

export interface ApiAvailability {
  'month-northern': string;
  'month-southern': string;
  time: Time;
  isAllDay: boolean;
  isAllYear: boolean;
  location: Location;
  rarity: Rarity;
  'month-array-northern': MonthRange[];
  'month-array-southern': MonthRange[];
  'time-array': TimeRange[];
}

export interface Fish {
  id: number;
  fileName: string;
  name: CamelName;
  availability: Availability;
  shadow: string;
  price: number;
  priceCj: number;
  catchPhrase: string;
  museumPhrase: string;
  imageUri: string;
  iconUri: string;
  altCatchPhrase?: string[];
}

export interface Availability {
  monthNorthern: string;
  monthSouthern: string;
  time: Time;
  isAllDay: boolean;
  isAllYear: boolean;
  location: Location;
  rarity: Rarity;
  monthArrayNorthern: MonthRange[];
  monthArraySouthern: MonthRange[];
  timeArray: TimeRange[];
}
type Name = {
  [key in Locale]: string;
};
type CamelName = {
  [key in LocaleCamel]: string;
};

export type MonthRange = [start: 1, end: 12];
export type TimeRange = [start: 0, end: 23];

export enum Location {
  Pier = 'Pier',
  Pond = 'Pond',
  River = 'River',
  RiverClifftop = 'River (Clifftop)',
  RiverClifftopPond = 'River (Clifftop) & Pond',
  RiverMouth = 'River (Mouth)',
  Sea = 'Sea',
  SeaWhenRainingOrSnowing = 'Sea (when raining or snowing)'
}

export enum Rarity {
  Common = 'Common',
  Rare = 'Rare',
  UltraRare = 'Ultra-rare',
  Uncommon = 'Uncommon'
}

export enum Time {
  Empty = '',
  The4Am9Pm = '4am - 9pm',
  The4Pm9Am = '4pm - 9am',
  The9Am4Pm = '9am - 4pm',
  The9Am4Pm9Pm4Am = '9am - 4pm & 9pm - 4am',
  The9Pm4Am = '9pm - 4am'
}

export enum Locale {
  NameUSen = 'name-USen',
  NameEUen = 'name-EUen',
  NameEUde = 'name-EUde',
  NameEUes = 'name-EUes',
  NameUSes = 'name-USes',
  NameEUfr = 'name-EUfr',
  NameUSfr = 'name-USfr',
  NameEUit = 'name-EUit',
  NameEUnl = 'name-EUnl',
  NameCNzh = 'name-CNzh',
  NameTWzh = 'name-TWzh',
  NameJPja = 'name-JPja',
  NameKRko = 'name-KRko',
  NameEUru = 'name-EUru'
}

export enum LocaleCamel {
  NameUSen = 'nameUSen',
  NameEUen = 'nameEUen',
  NameEUde = 'nameEUde',
  NameEUes = 'nameEUes',
  NameUSes = 'nameUSes',
  NameEUfr = 'nameEUfr',
  NameUSfr = 'nameUSfr',
  NameEUit = 'nameEUit',
  NameEUnl = 'nameEUnl',
  NameCNzh = 'nameCNzh',
  NameTWzh = 'nameTWzh',
  NameJPja = 'nameJPja',
  NameKRko = 'nameKRko',
  NameEUru = 'nameEUru'
}

