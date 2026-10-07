# Hola Mundo

Proyecto con Expo SDK 57 y TypeScript estricto.

Una pantalla limpia con Hola Mundo y el botón **Cambiar estilos** centrados en el mismo contenedor. Cada pulsación recorre cuatro variantes: negrita, cursiva, monoespaciada y mayúsculas espaciadas. Cambian la tipografía, el tamaño y los colores del saludo; el botón permanece debajo.

El botón flotante permite cambiar entre modo claro y oscuro; la elección se guarda con AsyncStorage. Se retiró el control de scroll y el espacio artificial para desplazarse.

Se mantiene la paleta violeta oscuro y rosa/fucsia de la referencia. No hay pestañas de navegación ni secciones adicionales.

## Ejecutar

```powershell
npm install
npm run web
```

## Validar

```powershell
npm run lint
npm run typecheck
npm run build:web
```

La ruta principal está en `src/app/index.tsx`, la vista en `src/pages/HomePage.tsx` y los componentes reutilizables en `src/components`. La antigua URL `/explore` redirige a `/`. La exportación web genera `dist/`.
