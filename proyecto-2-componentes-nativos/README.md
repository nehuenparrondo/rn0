# Proyecto 2 · Componentes nativos

Proyecto independiente del punto 1. React Native 0.86.3, Expo SDK 57, Expo Router y TypeScript estricto.

## Consigna

Mostrar los componentes nativos de React Native y explicar para qué se usan, con un diseño. Se mantiene la identidad violeta oscuro y rosa/fucsia y el tema claro/oscuro persistente.

El control de tema es flotante y está abajo a la derecha, encima del botón **Volver arriba**. Este último aparece después de desplazarse y regresa al inicio con animación. Ambos respetan los márgenes seguros; la animación respeta la preferencia del sistema de reducir movimiento.

## Catálogo

25 entradas: los 24 componentes públicos de la documentación de React Native 0.86 y ProgressBarAndroid como componente legado.

Cada tarjeta incluye descripción en español, caso de uso, propiedades principales, fragmento orientativo de JSX y una demostración. Las listas se prueban horizontalmente; teclado, modal y actualización abren ventanas de ejemplo.

- Android e iOS comparten las demostraciones generales.
- DrawerLayoutAndroid, TouchableNativeFeedback y ProgressBarAndroid solo se ejecutan en Android.
- InputAccessoryView y el SafeAreaView original solo se ejecutan en iOS.
- SafeAreaView y ProgressBarAndroid están marcados como obsoletos. La aplicación usa react-native-safe-area-context para sus áreas seguras.
- No se presentan APIs como Alert, StyleSheet o Animated como si fueran componentes. Se excluyen exportaciones internas y experimentales.

Las imágenes están incluidas en assets; no dependen de servicios externos.

## Ejecutar

```powershell
npm install
npm start -- --lan --port 8082
```

Escanear el QR con Expo Go, en la misma red que la PC. En iPhone, Expo CLI y Expo Go deben usar la misma cuenta de Expo.

```powershell
npm run web -- --port 8082
npm run lint
npm run typecheck
npm run build:web
npm run build:all
npx expo-doctor
```

## Organización

- src/app: rutas de Expo Router.
- src/pages: vista completa del catálogo.
- src/components/atoms: textos y botones reutilizables.
- src/components/molecules: ventanas compuestas con controles y textos.
- src/components/organisms: tarjetas y demostraciones interactivas.
- src/components/templates: estructura responsive.
- src/data: contenido del catálogo.
- src/context, src/hooks, src/services, src/styles y src/types: tema y persistencia.

## Comprobación en celular

Recorrer las tarjetas, escribir en TextInput, pulsar los controles, cambiar Switch, deslizar las listas, abrir y cerrar Modal, mostrar el teclado y recargar con RefreshControl. Alternar el tema y comprobar su persistencia después de cerrar y abrir. Revisar orientación vertical y horizontal.

## Referencias

- [Componentes de React Native 0.86](https://reactnative.dev/docs/0.86/components-and-apis)
- Cada componente: https://reactnative.dev/docs/0.86/ seguido de su nombre en minúsculas.
- [Referencia de Expo SDK 57](https://docs.expo.dev/versions/v57.0.0/)
- [Inicio de sesión de Expo Go en iOS](https://docs.expo.dev/troubleshooting/expo-go-sign-in-required/)
