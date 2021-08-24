# TheGamingMachine-Website
## Stack
El proyecto está armado con NodeJS por lo cuál corre en un entorno de NGINX.

Se compone por:

 - Armado web en servidor (SSR)
 - REST API

**Keywords**: NodeJS, EJS, API, MongoDB, Heroku

## Levantar el proyecto
Para levantar el proyecto local:

 1. Descarga del repo
 2. Instalar módulos en el **/website** y en la  **/api**

    *npm i* 

Para que funcione el sitio es necesario primero levantar el servicio en **/api**.

#### Levantar API

 1. Levantar una instancia local de MongoDB que exponga el puerto 27017. 
 2. Crear una base llamada **origen** en MongoDB
 3. Levantar el servicio con el comando `node index.js` dentro de **api/src**. Opcionalmente se puede usar `nodemon index.js` si se va a trabajar sobre la API

#### Levantar Website

Una vez corriendo el servicio, levantar el proyecto **website** con los comandos `node app.js` o `nodemon app.js` en la carpeta **/website**

#### Equipo
El equipo esta compuesto por una sola persona, yo :)

###  Sobre la Página - Web - Blog
Al dia de hoy la pagina es simplemente un hub donde se muestra informacion de los juegos y los respectivos lougares donde comprarlos, a largo plazo la idea es formar tambien un blog para que la gente pueda comentar, publicar, y hacer aportes a la página.

### Base de datos
La base de datos esta alogada en Atlas de Mongo db y se accede a ella mediante heroku.