/**
 * Every photo on the site comes from Wikimedia Commons. CC0 images need no
 * attribution, the CC BY / CC BY-SA ones do — all of them are listed on the
 * /creditos page, which renders this array.
 *
 * Generated at build time from the Commons API; re-run the sourcing script if
 * you add or replace a photo.
 */
export interface PhotoCredit {
  file: string;
  author: string;
  license: string;
  licenseUrl: string;
  source: string;
}

export const PHOTO_CREDITS: PhotoCredit[] = [
  {
    file: 'hero-sahara-amanecer.jpg',
    author: 'Azer Koçulu azer',
    license: 'CC0',
    licenseUrl: 'http://creativecommons.org/publicdomain/zero/1.0/deed.en',
    source: 'https://commons.wikimedia.org/wiki/File:Sahara_Desert_(Unsplash_68fskQsfusY).jpg',
  },
  {
    file: 'cta-amanecer-dunas.jpg',
    author: 'Red Morley Hewitt redvers',
    license: 'CC0',
    licenseUrl: 'http://creativecommons.org/publicdomain/zero/1.0/deed.en',
    source: 'https://commons.wikimedia.org/wiki/File:Desert_Sunrise_(Unsplash).jpg',
  },
  {
    file: 'dromedarios-descanso.jpg',
    author: 'José Martín Ramírez C martinirc',
    license: 'CC0',
    licenseUrl: 'http://creativecommons.org/publicdomain/zero/1.0/deed.en',
    source: 'https://commons.wikimedia.org/wiki/File:Camel_Pit_Stop_(Unsplash).jpg',
  },
  {
    file: 'erg-chebbi-cresta.jpg',
    author: 'Thomas Fuhrmann',
    license: 'CC BY-SA 4.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0',
    source: 'https://commons.wikimedia.org/wiki/File:Erg_Chebbi_in_the_evening_light.jpg',
  },
  {
    file: 'erg-chebbi-atardecer.jpg',
    author: 'Thomas Fuhrmann',
    license: 'CC BY-SA 4.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0',
    source: 'https://commons.wikimedia.org/wiki/File:Erg_Chebbi_sunset.jpg',
  },
  {
    file: 'chefchaouen.jpg',
    author: 'Ekaterina Kvelidze',
    license: 'CC BY-SA 4.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0',
    source: 'https://commons.wikimedia.org/wiki/File:Chefchaouen_-_blue_city_in_Morocco.jpg',
  },
  {
    file: 'ait-ben-haddou.jpg',
    author: 'xiquinhosilva',
    license: 'CC BY 2.0',
    licenseUrl: 'https://creativecommons.org/licenses/by/2.0',
    source: 'https://commons.wikimedia.org/wiki/File:31590-Ait_Ben_Haddou_(12291647033).jpg',
  },
  {
    file: 'gargantas-todra.jpg',
    author: 't_y_l',
    license: 'CC BY-SA 2.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/2.0',
    source: 'https://commons.wikimedia.org/wiki/File:Todgha_Gorge_in_Morocco_-_P4101250_(26038759564).jpg',
  },
  {
    file: 'marrakech-koutoubia.jpg',
    author: 'Werner100359',
    license: 'CC BY-SA 4.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0',
    source: 'https://commons.wikimedia.org/wiki/File:Jamaa_El_Fna_(Marrakesch,_Marokko)_01.jpg',
  },
  {
    file: 'valle-ziz.jpg',
    author: 'Jorge Franganillo',
    license: 'CC BY 2.0',
    licenseUrl: 'https://creativecommons.org/licenses/by/2.0',
    source: 'https://commons.wikimedia.org/wiki/File:Ziz_Valley_(54243669083).jpg',
  },
  {
    file: 'fez-artesania.jpg',
    author: 'AdilElouarti',
    license: 'CC0',
    licenseUrl: 'http://creativecommons.org/publicdomain/zero/1.0/deed.en',
    source:
      'https://commons.wikimedia.org/wiki/File:Intricately_decorated_Moroccan_ceramics_and_Zellige_pottery_in_Fes_Medina.jpg',
  },
  {
    file: 'valle-dades.jpg',
    author: 'Mike Prince from Bangalore, India',
    license: 'CC BY 2.0',
    licenseUrl: 'https://creativecommons.org/licenses/by/2.0',
    source: 'https://commons.wikimedia.org/wiki/File:Dades_Gorge_(4989722700).jpg',
  },
  {
    file: 'tanger-kasbah.jpg',
    author: 'Hiroki Ogawa',
    license: 'CC BY 3.0',
    licenseUrl: 'https://creativecommons.org/licenses/by/3.0',
    source: 'https://commons.wikimedia.org/wiki/File:Kasbah_Tanger.Morocco_-_panoramio.jpg',
  },
];
