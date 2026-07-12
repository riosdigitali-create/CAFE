# Café Calandria — Sitio web

Sitio de una sola página para **Café Calandria (Calandria Premium Coffee)**, café de especialidad
100% arábica y orgánico de las montañas de Huatusco, Veracruz.

**Café de la montaña** · *Descubre la pasión centenaria de las montañas*

---

## Contenido

| Sección | Qué hace |
|---|---|
| Hero | Presentación con la bolsa Veracruz, parallax y datos de origen |
| Origen | Historia de las fincas Esmeralda y La Esperanza + contadores animados |
| Proceso | Scroll horizontal de 6 etapas: cosecha, selección, beneficio, secado, tueste, empaque |
| Cafés | Catálogo filtrable (lavado / honey / natural / maceración) con pedido por WhatsApp |
| Perfil | Comparador sensorial interactivo (cuerpo, acidez, dulzor, aroma, residual + puntaje SCA) |
| Mayoreo | Verde, tostado a granel y marca blanca |
| Galería | Masonry con lightbox (teclado: ← → Esc) |
| Instagram | Grid + reel enlazado a [@calandria_coffee](https://www.instagram.com/calandria_coffee) |

## Stack

Sin dependencias, sin build. HTML + CSS + JavaScript vanilla en un solo archivo.
Única carga externa: Google Fonts.

Tipografías de la marca:

- **Cinzel** — capitulares romanas del logotipo (equivalente libre de Trajan).
- **Montserrat** — sans geométrico del empaque ("PREMIUM COFFEE").

Todos los archivos van en la raíz, sin subcarpetas: `index.html`, `favicon.png`,
`.nojekyll`, `.gitignore`, `README.md` y las 31 imágenes (`.webp` + el logo `.png`).

## Publicar en GitHub Pages

```bash
git init
git add .
git commit -m "Café Calandria"
git branch -M main
git remote add origin https://github.com/USUARIO/REPO.git
git push -u origin main
```

Luego: **Settings → Pages → Source: `main` / `root`**. Queda en `https://USUARIO.github.io/REPO/`.

Para dominio propio, crea un archivo `CNAME` en la raíz con el dominio y apunta el DNS a GitHub Pages.

## Personalizar

- **Tipografías** — la etiqueta `<link>` de Google Fonts en el `<head>`.
- **WhatsApp** — busca `wa.me/message/3EYY3K5L5V6RK1` en `index.html` (aparece en nav, cada tarjeta, mayoreo, contacto y botón flotante).
- **Colores** — bloque `:root` al inicio del `<style>`: `--gold`, `--deep`, `--emerald`, `--night`, `--bone`.
- **Productos** — cada `<article class="card">` en `#cafes`. El atributo `data-cat` controla el filtro; los `<s class="f">` marcan el nivel de tueste.
- **Perfil sensorial** — objeto `P` en el `<script>`: valores 0-100 por atributo y puntaje.

## Nota sobre los datos

Las notas de cata, altitudes y puntajes SCA de los lotes distintos al **Veracruz** (el único con
ficha impresa en el empaque) son valores de ejemplo coherentes con cada proceso. Sustitúyelos por
las fichas reales de catación antes de publicar.

## Paleta

| | Hex | Uso |
|---|---|---|
| Oro | `#C9A24B` | Marca, acentos, tipografía destacada |
| Verde profundo | `#0B3B2E` | Fondos de sección |
| Esmeralda | `#12523F` | Degradados |
| Noche | `#060D0A` | Fondo base |
| Hueso | `#F2ECE0` | Texto |
