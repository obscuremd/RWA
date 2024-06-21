// src/declarations.d.ts
declare module 'use-react-countries' {
    interface Country {
      name: string;
      capital: string;
      area: number;
      coordinates: [number, number];
      currencies: { name: string; symbol: string }[];
      languages: { name: string; nativeName: string }[];
    }
  
    interface UseCountriesResult {
      countries: Country[];
    }
  
    export function useCountries(): UseCountriesResult;
  }
  