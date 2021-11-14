/*
Se quiere promocionar el programa de Escuela de Padres de Andalucía,
es necesario localizar a aquellos usuarios que tengan hijos menores de edad y no se encuentren ya en el programa.
Mostrar exclusivamente _id, nombre e hijos. 
*/



db.usuarios.find(
{
    $and:
    [
        {"programas.escuelaPadres": false},
        {"direccion.comunidad": "Andalucía"},
        {"hijos.fecha": {$gte: new Date("2003-11-09")}}
    ]
},
{
    _id: 1, nombre:1, hijos:1
}
)






/*
La Junta de Andalucía nos ha otorgado una ayuda económica para el empleo jóven. Los requisitos son: 
- Vivir en Andalucía.
- Estar inscrito en el SEPE.
- No tener ingresos mensuales iguales o superiores a 800€. 
- Ser menor de 30 años.
*/




db.usuarios.find({
    $and:[
        {fechaNacimiento: {$gt: new Date("1991-10-14")}},
        {"direccion.comunidad": {$eq: "Andalucía"}},
        {inscritoSEPE: {$eq: true}},
        {ingresosMensuales: {$lt: 800}}
    ]
}).pretty()






/*
TUSSAM nos ha facilitado bonos de transporte para los usuarios de nuestros programas y cumplan uno de estos requisitos:

- Participantes de la escuela de padres que tengan algún hijo menor de edad y vivan en Sevilla.
- Participantes del programa de inserión con discapacidad y vivan en Sevilla.

*/



db.usuarios.find(
{ 
    "direccion.provincia": {$eq: "Sevilla"},
    $or:
    [
        {$and:
         [
            {hijos: {fecha: {$gte: new Date("2003-11-09")}}},
            {"programas.escuelaPadres": {$eq: true}}
         ]
        },
        {$and: 
         [  
            {discapacidad: {$exists: true}},
            {"programas.insercion": {$eq: true}}
         ]
        },
    ]
}).pretty()




/*
El educador no puede asistir los días 14, 15, 16, 17 de visita de este mes, tenemos que avisar a todos los usuarios de la cancelación de la visita,
tenemos que sacar una lista que incluya el _id, nombre, días en los que va el educador e idioma de los usuarios que tengan visita del educador esos días para comunicárselo.
*/




db.usuarios.find(
    {
    visitaEducador: {$elemMatch: {$gte: 14, $lte: 17}}
    },
    {
        _id: 1, nombre:1, idioma:1, visitaEducador:1
    }
)








/* Necesitamos una lista de nuestros usuarios que residan en una vivienda VPO, sean mayores de 18 años y menores de 35 años. Además necesitamos saber cuantos son */

db.usuarios.find( 
{ 
    $and:
    [
        {fechaNacimiento: {$gt: new Date("1986-11-11")}},
        {fechaNacimiento: {$lt: new Date("2003-11-11")}},
        {relevante: {$regex: /VPO/mi } }
    ]
}
)




db.usuarios.find( 
    { 
        $and:
        [
            {fechaNacimiento: {$gt: new Date("1986-11-11")}},
            {fechaNacimiento: {$lt: new Date("2003-11-11")}},
            {relevante: {$regex: /VPO/mi } }
        ]
    }
    ).count()






/* 
Necesitamos saber si hay algún mecánico o mecánica de cualquier tipo entre nuestros usuarios.
Necesitamos apuntar el nombre, la dirección y su/sus profesiones.
*/



db.usuarios.find(
    {
    profesion: {$regex: /mecánic/mi}
    },
    {
    nombre:1, direccion: 1, profesion:1
    }
)





/* 
Queremos saber cuanto suman las ayudas mensuales que perciben los usuarios que están inscritos en el SEPE
y cuanto suman los que no están inscritos en el SEPE
*/




 
 db.usuarios.aggregate(
    [
        {$match: 
            {$or: 
                [
                    {inscritoSEPE: true},
                    {inscritoSEPE: false}
                ]
            }
        },
        {$group:
            {
                _id: "$inscritoSEPE", 
                total:
                {$sum:"$ayudaMensual"}
            }
        }

    ]
)

                    // { "_id" : true, "total" : 1786.3 }
                    // { "_id" : false, "total" : 695 }



