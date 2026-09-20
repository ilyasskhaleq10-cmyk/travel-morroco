# Viajes Marruecos — web de venta de tours

Sitio estático en **Astro 7 + Tailwind 4**, en cuatro idiomas (español, inglés,
francés y árabe con maquetación RTL). Construido sobre la plantilla
[AstroWind](https://github.com/onwidget/astrowind) (MIT).

No necesita servidor Node en producción: `npm run build` genera HTML y nginx
lo sirve tal cual.

## Arrancar en local

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # genera dist/
npm run preview    # sirve dist/ para comprobarlo antes de subir
```

## Qué tocar para cambiar el contenido

Todo el texto está separado del diseño. Para cambiar algo no hace falta abrir
ningún componente:

| Qué quieres cambiar                               | Fichero                             |
| ------------------------------------------------- | ----------------------------------- |
| Nombre, teléfono, WhatsApp, email, redes, dominio | `src/config/business.ts`            |
| Precios, duración, fotos de cada tour             | `src/data/tours.ts`                 |
| **Todos los textos en español**                   | `src/i18n/es.ts`                    |
| Textos en inglés / francés / árabe                | `src/i18n/en.ts`, `fr.ts`, `ar.ts`  |
| Idiomas disponibles                               | `src/i18n/locales.ts`               |
| Colores y tipografías                             | `src/components/CustomStyles.astro` |
| Créditos de las fotos                             | `src/data/photo-credits.ts`         |

Los cuatro diccionarios comparten la misma forma (`src/i18n/types.ts`), así que
si añades un campo en uno, TypeScript te avisa de los otros tres.

### Añadir un tour

1. Añade el id en `TourId` (`src/i18n/types.ts`).
2. Añade su bloque en los cuatro diccionarios, con su `slug` por idioma.
3. Añade la entrada en `TOURS` (`src/data/tours.ts`) con precio e imágenes.

Las rutas (`/tours/<slug>`, `/en/tours/<slug>`…) se generan solas.

## Rutas que genera

```
/                         /en          /fr          /ar
/tours/<slug>             /en/tours/<slug>          …
/creditos                 /en/credits               …
/404.html
```

El español no lleva prefijo; los demás idiomas sí. Cada página incluye sus
etiquetas `hreflang` y datos estructurados de schema.org (`TravelAgency` y
`TouristTrip`).

## Fotografías

Las fotos vienen de Wikimedia Commons, con licencia CC0, CC BY o CC BY-SA.
Están guardadas en `src/assets/images/marruecos/` (Astro las optimiza a WebP en
el build) y la atribución se publica en `/creditos`.

**Cuando el cliente tenga fotos propias de sus viajes, conviene sustituirlas:**
venden mucho más que una foto de archivo. Basta con reemplazar los ficheros
manteniendo el nombre y borrar la entrada correspondiente de
`src/data/photo-credits.ts`.

## Desplegar en el VPS

```bash
npm ci
npm run build
rsync -av --delete dist/ usuario@vps:/var/www/viajes-marruecos/
```

En `nginx/nginx.conf` hay un server de ejemplo: ajusta `server_name` y `root`.
Incluye la redirección de `/ruta/` a `/ruta` (el build usa `trailingSlash:
false`) y caché larga para `/_astro/`.

## Pendiente

- Nombre real del negocio, email y dominio (`src/config/business.ts`, todavía
  con valores de ejemplo). El teléfono y el WhatsApp ya son los reales.
- Precio del tour de 3 días de ida y vuelta y del gran tour de 6 días: ahora
  muestran «Precio a consultar». El de Marrakech → Fez está a 260 €.
- Fotos propias.
