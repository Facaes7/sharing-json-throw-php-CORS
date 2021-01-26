# sharing-json-throw-php-CORS
Con un encabezado CORS se logra compartir información en un fichero php
Con un botón se llama la función leeJson cuyo argumento es la dirección URL donde se encuentra el archivo comDatosJson.php
En la página web se muestran los datos leidos que estaban almacenados en el fichero comDatosJson.php
Gracias al encabezado CORS:
header("Access-Control-Allow-Origin: *");
