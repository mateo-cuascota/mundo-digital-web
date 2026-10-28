# Mundo Digital 2.0 — sitio comercial

Esta versión mejora el proyecto inicial de Mundo Digital y está lista para publicarse en el **mismo** proyecto de Cloudflare Pages, conectado a GitHub: `mateo-cuascota/mundo-digital-web`.

## Cambios de la versión 2.0

- Encabezado con monograma **MD** corregido (sin letras desalineadas).
- Diseño futurista responsive para pantallas grandes y teléfonos.
- 6 líneas de servicios y catálogo filtrable con 8 productos.
- 2 demostraciones interactivas reales: regalo romántico e invitación de muestra.
- Código QR que abre la demostración romántica publicada.
- Formulario que **prepara un texto** para copiar y enviar por DM. No transmite datos a un servidor ni procesa pagos.
- Metadatos SEO, imagen para compartir, favicon, preguntas frecuentes y enlaces a TikTok.

## Archivos

```
index.html
styles.css
script.js
assets/
  favicon.svg
  logo.png
  qr-demo-carta.png
  social-preview.png
demos/
  carta-romantica.html
  invitacion.html
README.md
```

## Cómo probarlo en Visual Studio Code

1. Extrae este ZIP.
2. Abre **la carpeta que contiene `index.html`** en VS Code.
3. En Git Bash o PowerShell ejecuta `npx serve .`.
4. Abre la dirección local que te muestre la terminal, por ejemplo `http://localhost:3000`.
5. Comprueba filtros, detalles, formulario y las dos demostraciones.

## Cómo actualizar tu web pública sin cambiar el dominio

1. Abre tu carpeta original del repositorio `mundo-digital-web` en VS Code.
2. **Haz una copia de seguridad** de cualquier archivo que hayas modificado desde la versión anterior.
3. Copia **el contenido** de este ZIP dentro de esa carpeta original y acepta reemplazar los archivos del proyecto (`index.html`, `styles.css`, `script.js`, etc.). Debes copiar también las carpetas `assets` y `demos`. **No borres la carpeta oculta `.git`.**
4. En la terminal, desde la raíz del repositorio, ejecuta:

```bash
git status
git add .
git commit -m "Mundo Digital 2.0: catalogo y demos"
git push origin main
```

5. En Cloudflare Pages consulta el nuevo despliegue. Si termina correctamente, se actualizará **https://mundodigitallab.pages.dev/** sin volver a configurar el dominio.

## Personalización antes de vender

- **WhatsApp:** en `script.js`, cambia `CONFIG.whatsapp = ''` por el número comercial internacional de solo dígitos, si deseas activar el botón de WhatsApp. Ejemplo de formato para Ecuador: `5939XXXXXXXX`. **No uses un teléfono de prueba**.
- **Precios:** edítalos en el arreglo `products` de `script.js`. Son precios **referenciales** de lanzamiento, no compromisos comerciales.
- **TikTok:** revisa enlaces a `@mundodigital.lab`.
- **Regalos:** los ejemplos de `demos/` son demostraciones. Para clientes reales tendrás que acordar el tiempo de publicación, personalización, pagos y privacidad.
- **QR:** `assets/qr-demo-carta.png` enlaza a `https://mundodigitallab.pages.dev/demos/carta-romantica.html`.
- **Formulario:** sin número de WhatsApp, el cliente copia el mensaje y lo envía por TikTok. No hay backend, envío de correo ni almacenamiento de clientes.
- **SEO:** cuando contrates dominio `.com`, cambia el `canonical` y los enlaces `og:` de `index.html`, y regenera el QR si quieres que use ese nuevo dominio.

## Límites actuales

No existe tienda de pago automatizada, panel de administración, sistema de reservas/RSVP, base de datos ni subida de archivos de clientes. Una tienda online es uno de los **servicios a cotizar**, no una función de la propia web comercial.

Mundo Digital · 2026
