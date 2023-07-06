export interface Country {
  /** Country name. */
  name: {
    /** Common country name. */
    common: string;
    /** Official country name. */
    official: string;
    /** Native country name. */
    nativeName: {
      [key: string]: {
        /** Official nnative country name. */
        official: string;
        /** Common native country name. */
        common: string;
      };
    };
  };
  /** Internet top level domains. */
  tld: string[];
  /** ISO 3166-1 alpha-2 two-letter country codes. */
  cca2: string;
  /** ISO 3166-1 numeric code (UN M49). */
  ccn3: string;
  /** ISO 3166-1 alpha-3 three-letter country codes. */
  cca3: string;
  /** Code of the International Olympic Committee. */
  cioc?: string;
  /** ISO 3166-1 independence status (the country is considered a sovereign state). */
  independent: boolean;
  /** ISO 3166-1 assignment status. */
  status: string;
  /** UN Member status. */
  unMember: boolean;
  /** List of all currencies. */
  currencies: { JOD: { name: string; symbol: string } };
  /** International dialing codes. */
  idd: { root: string; suffixes: string[] };
  /** Capital cities. */
  capital: string[];
  /** Alternate spellings of the country name. */
  altSpellings: string[];
  /** UN demographic {@link https://unstats.un.org/unsd/methodology/m49/ | regions}. */
  region: string;
  /** UN {@link https://unstats.un.org/unsd/methodology/m49/ | demographic subregions}. */
  subregion: string;
  /** List of official languages. */
  languages: { [key: string]: string };
  /** List of country name translations. */
  translations: {
    [key: string]: { official: string; common: string };
  };
  /** Latitude and longitude. */
  latlng: number[];
  /** Landlocked country */
  landlocked: boolean;
  /** Border countries. */
  borders: string[];
  /** Geographical size */
  area: number;
  /** Genderized inhabitants of the country. */
  demonyms: { [key: string]: { f: string; m: string } };
  /** Flag emoji. */
  flag: string;
  /** Link to Google maps and Open Street maps. */
  maps: { googleMaps: string; openStreetMaps: string };
  /** Country population. */
  population: number;
  /** Worldbank {@link https://data.worldbank.org/indicator/SI.POV.GINI | Gini} index. */
  gini: { [key: string]: number };
  /** FIFA code. */
  fifa: string;
  car: {
    /** Car distinguised (oval) signs. */
    signs: string[];
    /** Car driving side. */
    side: string;
  };
  /** Timezones. */
  timezones: string[];
  /** List of continents the country is on. */
  continents: string[];
  /** {@link https://flagpedia.net/ | Flagpedia} links to svg and png flags. */
  flags: { png: string; svg: string; alt: string };
  /** {@link https://mainfacts.com/coat-of-arms-countries-world | MainFacts.com} links to svg and png images. */
  coatOfArms: { png: string; svg: string };
  /** Day of the start of week (Sunday/Monday). */
  startOfWeek: string;
  capitalInfo: {
    /** Capital latitude and longitude. */
    latlng: number[];
  };
  /** Country postal codes. */
  postalCode: { format: string; regex: string };
}
