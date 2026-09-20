import type { ImageMetadata } from 'astro';
import type { TourId } from '~/i18n/types';

import ergChebbiAtardecer from '~/assets/images/marruecos/erg-chebbi-atardecer.jpg';
import chefchaouen from '~/assets/images/marruecos/chefchaouen.jpg';
import valleZiz from '~/assets/images/marruecos/valle-ziz.jpg';
import aitBenHaddou from '~/assets/images/marruecos/ait-ben-haddou.jpg';
import gargantasTodra from '~/assets/images/marruecos/gargantas-todra.jpg';
import valleDades from '~/assets/images/marruecos/valle-dades.jpg';
import dromedarios from '~/assets/images/marruecos/dromedarios-descanso.jpg';
import ergChebbiCresta from '~/assets/images/marruecos/erg-chebbi-cresta.jpg';
import fezArtesania from '~/assets/images/marruecos/fez-artesania.jpg';
import tangerKasbah from '~/assets/images/marruecos/tanger-kasbah.jpg';

export interface TourData {
  id: TourId;
  days: number;
  nights: number;
  /**
   * Price per person in euros, or null to show "price on request".
   * Only the Marrakech→Fes tour has a confirmed price so far.
   */
  price: number | null;
  /** Card and page header image. */
  image: ImageMetadata;
  /** Shown as a strip on the tour page. */
  gallery: ImageMetadata[];
}

export const TOURS: TourData[] = [
  {
    id: 'desierto3',
    days: 3,
    nights: 2,
    price: null,
    image: ergChebbiAtardecer,
    gallery: [aitBenHaddou, valleDades, gargantasTodra, dromedarios],
  },
  {
    id: 'gran6',
    days: 6,
    nights: 5,
    price: null,
    image: chefchaouen,
    gallery: [aitBenHaddou, ergChebbiCresta, fezArtesania, tangerKasbah],
  },
  {
    id: 'desierto3fes',
    days: 3,
    nights: 2,
    price: 260,
    image: valleZiz,
    gallery: [aitBenHaddou, gargantasTodra, ergChebbiCresta, fezArtesania],
  },
];

export const getTour = (id: TourId): TourData => {
  const tour = TOURS.find((t) => t.id === id);
  if (!tour) throw new Error(`Unknown tour id: ${id}`);
  return tour;
};
