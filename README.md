# Mundo Digital — Web comercial (versión 1)

Web estática HTML/CSS/JavaScript lista para abrir en el navegador o desplegar en hosting estático.

## Abrir en tu computadora
1. Extrae el ZIP.
2. Abre `index.html` en Chrome (o desde VS Code con Live Server).
3. Prueba los filtros, muestras, navegación y formulario.

## Antes de publicar
- En `script.js`, modifica `CONFIG.whatsapp` con tu número comercial en formato internacional, **solo dígitos, sin + ni espacios**. Por ejemplo, un número de Ecuador empieza con 593. Si lo dejas vacío, el formulario ofrece copiar el pedido en lugar de mostrar un enlace roto.
- Revisa precios (en `script.js`, arreglo `products`) y confirma que son los que deseas ofrecer.
- Sustituye las demostraciones conceptuales por trabajos reales a medida que estén listos. No anuncies funciones no implementadas como si ya estuvieran disponibles.
- Revisa el nombre comercial, la disponibilidad del dominio y textos legales (privacidad, condiciones, tiempos de entrega) antes de vender.

## Publicar sin servidor propio
- Netlify Drop: abre https://app.netlify.com/drop y arrastra la carpeta completa (con index.html al nivel raíz).
- Cloudflare Pages: entra en Workers & Pages > Create application > Pages > Direct Upload y sube el ZIP o carpeta.
- Desde Cloudflare Pages > Custom domains, añade el dominio comprado y sigue las instrucciones DNS. Hasta entonces usarás un subdominio gratuito.

## Estructura
- `index.html`: secciones y contenido general.
- `styles.css`: aspecto responsivo y animaciones.
- `script.js`: catálogo, filtros, muestras y formulario.
- `assets/logo.png`: imagen de marca.

## Limitaciones de esta primera versión
No incluye pagos automáticos, envío de formularios a servidor, subida de archivos, panel de clientes ni productos QR individuales generados automáticamente. Las vistas de catálogo son muestras conceptuales. Los datos escritos en el formulario se procesan en el navegador; no se almacenan en un backend.
