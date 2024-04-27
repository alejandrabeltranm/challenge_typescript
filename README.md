# Typescript

## Index 10 abril
1. [Install typescript](#npm)
2. [Compile TS](#compile)
3. [Execute TS](#execute)
4. [watch](#watch)
5. [Help](#help)

6. [Config Project](#config)

## Contenido
<a name="npm"></a>
### Instalación de Typescript
***
* npm i -g typescript
* tsc -v

<a name="compile"></a>
### Compilacion de archivos ts
***
* tsc index.ts

<a name="execute"></a>
### Ejecución de archivos js
***
*node index.js
*tsc index.ts && node index.js

<a name="watch"></a>
### Directorios de salida y vigilantes de cambios
*tsc --outDir dist index.ts
*tsc --outDir dist index.ts --watch

<a name="help"></a>
### Ayudas de typescript
* tsc --help

<a name="config"></a>
### Configuración del proyecto
* tsc --init
* se seguirá usando tsc para ejecución 