# A9 - OWASP Top 10: 2017
Proyecto con vulnerabilidades conocidas.

## Requerimientos
	1. npm

## Instalación
1. Instalar dependencias del proyecto `npm install`
2. Instalar [grunt](https://gruntjs.com/) globalmente `npm install -g grunt`
3. Instalar [retire.js](https://retirejs.github.io/retire.js/) globalmente `npm install -g retire`

## Escanear vulnerabilidades
Con las siguientes opciones se puede realizar un escaneo de las dependencias instaladas en el proyecto y detectar vulnerabilidades:

### Opción 1 (Grunt y retire)
Correr nuevamente `npm install` para instalar grunt y grunt-retire para poder ejecutar la tarea de escaneo.		  
Escanear con el comando `grunt retire`

### Opción 2 (Retire)
Escaneo completo con el comando `retire`

### Opción 3 (npm)
Escanear con el comando `npm audit`