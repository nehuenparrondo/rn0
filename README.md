# React Native · Proyectos 1 y 2

Dos aplicaciones independientes realizadas con React Native, Expo SDK 57 y TypeScript.

## Proyectos

- [Proyecto 1: Hola Mundo](proyecto-1-hola-mundo/README.md): pantalla de saludo con cambio de estilos y tema claro/oscuro persistente.
- [Proyecto 2: Componentes nativos](proyecto-2-componentes-nativos/README.md): catálogo con explicaciones y demostraciones de componentes de React Native.

## Ejecutar

Abrir una terminal dentro de la carpeta del proyecto elegido:

```powershell
npm ci
npm start
```

Para abrir los dos proyectos simultáneamente, usar puertos distintos:

```powershell
# Dentro de proyecto-1-hola-mundo
npm start -- --lan --port 8081

# Dentro de proyecto-2-componentes-nativos
npm start -- --lan --port 8082
```

## Verificar

Ejecutar dentro de cada proyecto:

```powershell
npm run lint
npm run typecheck
npm run build:web
```

Consultar el README de cada aplicación para más detalles.
El repositorio no incluye el proyecto 3, dependencias instaladas, cachés ni archivos privados.
