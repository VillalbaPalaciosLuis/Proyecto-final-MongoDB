/* Primero necesitamos crear nuestro Index para utlizar la geolocalización*/



db.usuarios.createIndex( { coordenadas : "2dsphere" } )


// Reiniciar mongo
//Tener en cuenta que primero se especifica la longitud y luego la latitud 



/*

Necesitamos saber que usuarios se encuentran en un radio de 5 km de nuestra sede ubicada en tiro de línea de Sevilla 
(Latitud: 37.366222  Longitud:  -5.980841) . Sólo nos interesa saber el _id, el nombre y las coordenadas de los usuarios. 

*/


db.usuarios.find(
{
    coordenadas: 
    {
      $near: {
        $geometry: {
           type: "Point" ,
           coordinates: [ -5.980841, 37.366222]
        },
        
        $maxDistance: 5000
        
      }
    }
 
},
{
  _id: 1, nombre:1, coordenadas: 1
}).pretty()






/* Se quiere conocer que usuarios se encuentran en un radio de distancia mínima de 1 km y distancia máxima de 3 km 
de la Giralda, cuyas coordenadas son 37.386193 (lat), -5.992438 (long) */




db.usuarios.find(
  {
  
      coordenadas: 
      {
        $near:
        {
          $geometry:
          {
             type: "Point" ,
             coordinates: [ -5.992438,
              37.386193]
           },
      $maxDistance: 4000,
      $minDistance: 1000
        }
      }
   
  }, 
  {
  _id: 1, nombre:1, coordenadas: 1
  }).pretty()


