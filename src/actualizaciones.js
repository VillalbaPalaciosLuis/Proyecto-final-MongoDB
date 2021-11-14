/* 
Como estamos a final de mes, tenemos que actualizar nuestra base de datos con los datos que han cambiado de nuestros usuarios.

- Elena Muñoz Cuevas: Cobra 20 euros menos.
- Nidal Ahmed Jadran: Nos ha dicho que le han ascendido y ahora cobra el doble. 
- Hubo un error con Javier López Zabala y le han retirado el 10% de discapacidad, hay que eliminar ese campo de su ficha.
- Christian Manchón Raskyth ha terminado el curso de soldador, asique tenemos que añadirlo a su profesión
- Para evitar errores con el campo discapacidad de nuestra base de datos, vamos a renombrarlo "porcentajeDiscapacidad"

*/

db.usuarios.update(
    { nombre: "Elena Muñoz Cuevas" },
    { $inc: { ingresosMensuales: -20 } }
 )
 
 db.usuarios.update(
    { nombre: "Nidal Ahmed Jadran" },
     { $mul: { ingresosMensuales: 2 } }
  )

  db.usuarios.update(
    { nombre: "Javier López Zabala" },
     { $unset: { discapacidad: "10%" } }
  )

  db.usuarios.update(
    { nombre: "Christian Manchón Raskyth" },
    { $addToSet: { profesion: "Soldador" } }
 )

 db.usuarios.updateMany({}, { $rename: { discapacidad: "porcentajeDiscapacidad"} } )

