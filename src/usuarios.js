
db.usuarios.deleteMany({})
db.usuarios.insertOne({
    _id: 1,
    nombre: "Elena Muñoz Cuevas",
    fechaNacimiento: new Date("1992-04-02"),
    idioma: ["español"],
    direccion: 
        {
        comunidad: "Andalucía",
        provincia: "Sevilla"
        },
    hijos:
        [ 
            {nombre: "José Fernández Muñoz", fecha: new Date("1996-04-02")},
            {nombre: "Lucía Fernández Muñoz", fecha: new Date("1998-10-08")},
            {nombre: "Marta Fernández Muñoz", fecha: new Date("2006-02-22")}
        ],  
    ingresosMensuales: 620.18,
    inscritoSEPE: true,
    discapacidad: "30%",     
    profesion: ["Electricista", "Pintora", "mecánica chapista"],
    programas:
        {
        insercion: true,
        escuelaPadres: true
        }, 
    visitaEducador: [7, 14, 28],
    relevante: "Hijos de matrimonio anterior/n Vivienda VPO",
    ayudaMensual: 82,
    coordenadas: 
    { 
        type: "Point", 
        coordinates: [-5.996100, 37.399090 ] 
    }
})



db.usuarios.insertMany([
        {_id: 2, nombre: "Juan Galán Pérez", fechaNacimiento: new Date("1992-04-02"), idioma: ["rumano"], direccion: {comunidad: "Andalucía", provincia: "Sevilla"}, hijos: [ {nombre: "Miguel Galán Cuevas", fecha: new Date("1998-06-02")}, {nombre: "Laura Galán Cuevas", fecha: new Date("2007-07-23")}], ingresosMensuales: 620.18, inscritoSEPE: true, discapacidad: "31%", profesion: ["Pintor", "Decorador interiores"], programas: {insercion: true, escuelaPadres: false}, visitaEducador: [3, 15, 18], relevante: "Salió de la cárcel en abril de 2020", ayudaMensual: 282, coordenadas:{type: "Point", coordinates: [ -5.987758, 37.388390 ]}},
        {_id: 3, nombre: "Encarnación Alcántara Robles", fechaNacimiento: new Date("1984-12-02"), idioma: ["español"], direccion: {comunidad: "Andalucía", provincia: "Huelva"}, hijos: [ {nombre: "Manuel Alcántara Cer", fecha: new Date("2004-04-13")}], ingresosMensuales: 300.5, inscritoSEPE: true, discapacidad: "66%", profesion: ["Pianista"], programas: {insercion: true, escuelaPadres: true}, visitaEducador: [6, 13, 27], relevante: "Vivienda VPO", ayudaMensual: 250, coordenadas:{type: "Point", coordinates: [ -6.934045, 37.266921 ]}},
        {_id: 4, nombre: "Mohammed Jadrán Albil", fechaNacimiento: new Date("1976-01-17"), idioma: ["árabe"], direccion: {comunidad: "Andalucía", provincia: "Sevilla"}, hijos: [ {nombre: "Abdel Jadrán Jadrán", fecha: new Date("1996-01-02")}, {nombre: "Lucía Fernández Cuevas", fecha: new Date("1994-11-08")}, {nombre: "Antara Jadrán Jadrán", fecha: new Date("2015-07-30")}], ingresosMensuales: 920.18, inscritoSEPE: true, profesion: ["Vendedor", "mecánico electrónico"], programas: {insercion: true, escuelaPadres: true}, visitaEducador: [6, 13, 22], relevante: "Colabora con la entidad", ayudaMensual: 82, coordenadas:{type: "Point", coordinates: [ -5.956229, 37.371992 ]}},  
        {_id: 5, nombre: "Carlos Vállegas Bernard", fechaNacimiento: new Date("1964-03-02"), idioma: ["francés"], direccion: {comunidad: "Extremadura", provincia: "Cáceres"}, hijos: [ {nombre: "María Vállegas Ferrán", fecha: new Date("2004-06-02")}], ingresosMensuales: 200.24, inscritoSEPE: false, discapacidad: "19%", profesion: ["Electricista"], programas: {insercion: true, escuelaPadres: false}, visitaEducador: [1, 13, 25], relevante: "Ha salido de la cárcel en abril de 2021/n Vivienda Vpo", ayudaMensual: 150, coordenadas:{type: "Point", coordinates: [ -6.372966, 39.470982]}},
        {_id: 6, nombre: "Desiree Cabrera Muñoz", fechaNacimiento: new Date("1968-11-02"), idioma: ["español"], direccion: {comunidad: "Andalucía", provincia: "Sevilla"}, hijos: [ {nombre: "Raúl López Cabrera", fecha: new Date("2003-06-01")}, {nombre: "Martina Fonseca Cabrera", fecha: new Date("2012-05-08")}], ingresosMensuales: 800, inscritoSEPE: true, profesion: ["Maestra educación primaria"], programas: {insercion: false, escuelaPadres: false}, visitaEducador: [6, 16, 26], relevante: "Hijos de dos matrimonios", ayudaMensual: 50.30, coordenadas:{type: "Point", coordinates: [ -5.962835, 37.374160]}},
        {_id: 7, nombre: "Miriam Ocaña Nistal", fechaNacimiento: new Date("1995-04-03"),idioma: ["español", "árabe", "inglés"], direccion: {comunidad: "Andalucía", provincia: "Huelva"}, hijos: [ {nombre: "Javier García Ocaña", fecha: new Date("2014-10-22")}], ingresosMensuales: 60.18, inscritoSEPE: true, profesion: ["Mecánica de bicicletas"], programas: {insercion: true, escuelaPadres: true}, visitaEducador: [2, 9, 24], relevante: "Situación de alto riesgo", ayudaMensual: 200, coordenadas:{type: "Point", coordinates: [-6.887707, 37.225197]}},
        {_id: 8, nombre: "Javier López Zabala", fechaNacimiento: new Date("1982-11-11"), idioma: ["español", "inglés"], direccion: {comunidad: "Andalucía", provincia: "Sevilla"}, hijos: [ {nombre: "Julián López Cerdeña", fecha: new Date("2010-12-12")}], ingresosMensuales: 650.1, inscritoSEPE: true, discapacidad: "10%", profesion: ["informático"], programas: {insercion: false, escuelaPadres: true}, visitaEducador: [2, 14, 20], relevante: "Vivienda VPO", ayudaMensual: 0, coordenadas:{type: "Point", coordinates: [ -6.044980, 37.351844]}},    
        {_id: 9, nombre: "Dominíc Irt Trosky", fechaNacimiento: new Date("1979-06-08"), idioma: ["español", "rumano"], direccion: {comunidad: "Comunidad Valenciana", provincia: "Valencia"}, hijos: [ {nombre: "Trosky Irt Arfgh", fecha: new Date("2018-03-12")}], ingresosMensuales: 2000.70, inscritoSEPE: false, profesion: ["Big Data"], programas: {insercion: false, escuelaPadres: false}, visitaEducador: [5, 17, 24], relevante: "Padre soltero", ayudaMensual: 0, coordenadas:{type: "Point", coordinates: [ -0.383403, 39.462857]}},        
        {_id: 10, nombre: "Zarah Mnilui Alcaz", fechaNacimiento: new Date("1977-07-21"), idioma: ["español", "árabe"], direccion: {comunidad: "Andalucía", provincia: "Sevilla"}, hijos: [ {nombre: "Jamal Drotfaz Mnilui", fecha: new Date("2019-03-02")}, {nombre: "Halimá  Drotfaz Mnilui", fecha: new Date("2020-01-08")}], ingresosMensuales: 554.70, inscritoSEPE: false, profesion: ["Maestra educación secundaria"], programas: {insercion: true, escuelaPadres: true}, visitaEducador: [8, 24, 27], relevante: "Vivienda vpo/nTrabaja de interina", ayudaMensual: 140.80, coordenadas:{type: "Point", coordinates: [ -5.915814, 37.278442]}},       
        {_id: 11, nombre: "Abraham Robles Linares", fechaNacimiento: new Date("1982-04-27"), idioma: ["español"], direccion: {comunidad: "Andalucía", provincia: "Sevilla"}, hijos: [ {nombre: "Abraham Robles Hidalgo", fecha: new Date("2000-04-22")}], ingresosMensuales: 801, inscritoSEPE: true, profesion: ["mecánico motocicletas"], programas: {insercion: true, escuelaPadres: true}, visitaEducador: [9, 16, 28], relevante: "Menor con necesidades especiales", ayudaMensual: 300, coordenadas:{type: "Point", coordinates: [ -5.963232, 37.357714]}},
        {_id: 12, nombre: "Marta Alonso Sánchez", fechaNacimiento: new Date("1950-01-29"), idioma: ["español"], direccion: {comunidad: "Andalucía", provincia: "Sevilla"}, hijos: [ {nombre: "José Robledo Alonso", fecha: new Date("2015-08-11")}], ingresosMensuales: 102.80, inscritoSEPE: false, discapacidad: "52%", profesion: ["Médico"], programas: {insercion: true, escuelaPadres: false}, visitaEducador: [6, 14, 21], relevante: "Debido a su discapacidad no peude ejercer como médico", ayudaMensual: 212, coordenadas:{type: "Point", coordinates: [ -5.989251, 37.387177]}},
        {_id: 13, nombre: "Natalia Lázaro Pérez", fechaNacimiento: new Date("1988-02-17"), idioma: ["español"], direccion: {comunidad: "Castilla la Mancha", provincia: "Guadalajara"}, hijos: [ {nombre: "Ramiro Doñoro Lázaro", fecha: new Date("1997-09-08")}], ingresosMensuales: 1620.18, inscritoSEPE: true, profesion: ["Programador"], programas: {insercion: false, escuelaPadres: false}, visitaEducador: [7, 2, 28], relevante: "Inscrito SEPE en mejora de empleo/n Menor con necesidades especiales", ayudaMensual: 0, coordenadas:{type: "Point", coordinates: [ -3.167192, 40.628648]}},
        {_id: 14, nombre: "Christian Manchón Raskyth", fechaNacimiento: new Date("1975-09-14"), idioma: ["rumano"], direccion: {comunidad: "Andalucía", provincia: "Sevilla"}, hijos: 0, ingresosMensuales: 600.8, inscritoSEPE: true, profesion: ["Limpiador"], programas: {insercion: true, escuelaPadres: false}, visitaEducador: [3, 11, 23], relevante: "Necesita traductor", ayudaMensual: 50, coordenadas:{type: "Point", coordinates: [ -6.008960, 37.387233]}},
        {_id: 15, nombre: "Pablo Rodríguez Palacio", fechaNacimiento: new Date("1991-08-21"), idioma: ["español"], direccion: {comunidad: "Andalucía", provincia: "Sevilla"}, hijos: [ {nombre: "Javier Rodríguez Martín", fecha: new Date("2015-07-01")}, {nombre: "Lucía Rodríguez Martín", fecha: new Date("2017-10-10")}], ingresosMensuales: 1020.18, inscritoSEPE: false, profesion: ["Mecánico chapista"], programas: {insercion: false, escuelaPadres: false}, visitaEducador: [6, 18, 24], relevante: "Vivienda vpo", ayudaMensual: 20, coordenadas:{type: "Point", coordinates: [ -5.969309, 37.412553]}},
        {_id: 16, nombre: "Iker Aramburu Andueza", fechaNacimiento: new Date("1993-04-04"), idioma: ["español"], direccion: {comunidad: "Castilla la Mancha", provincia: "Toledo"}, hijos: [ {nombre: "José Aramburu Correa", fecha: new Date("2012-04-14")}], ingresosMensuales: 450.50, inscritoSEPE: true, discapacidad: "80%", profesion: ["Programador"], programas: {insercion: true, escuelaPadres: true}, visitaEducador: [3, 11, 26], relevante: "Vivienda VPO sin adaptar", ayudaMensual: 350, coordenadas:{type: "Point", coordinates: [-4.034964, 39.867343]}},
        {_id: 17, nombre: "Nidal Ahmed Jadran", fechaNacimiento: new Date("1972-08-06"), idioma: ["árabe"], direccion: {comunidad: "Madrid", provincia: "Madrid"}, hijos: [ {nombre: "Mohammed Ahmed Jadrán", fecha: new Date("2020-06-13")}], ingresosMensuales: 1220.18, inscritoSEPE: false, profesion: ["Oficial mecánico"], programas: {insercion: false, escuelaPadres: false}, visitaEducador: [4, 14, 28], relevante: "Salió de la cárcel en 2016", ayudaMensual: 20.20, coordenadas:{type: "Point", coordinates: [-3.486545, 40.394006]}},
        {_id: 18, nombre: "Susana Muñoz Cervantes", fechaNacimiento: new Date("1982-10-07"), idioma: ["español"], direccion: {comunidad: "Andalucía", provincia: "Málaga"}, hijos: [ {nombre: "Inés Muñoz Escobedo", fecha: new Date("2004-10-12")}, {nombre: "Lorena Muñoz Escobedo", fecha: new Date("2007-10-04")}], ingresosMensuales: 1620.18, inscritoSEPE: false, discapacidad: "20%", profesion: ["mecánica pintura"], programas: {insercion: false, escuelaPadres: true}, visitaEducador: [7, 17, 24], relevante: "Vivienda VPO", ayudaMensual: 0, coordenadas:{type: "Point", coordinates: [-4.444278, 36.716845]}},
        {_id: 19, nombre: "Marco Vázquez Fernández", fechaNacimiento: new Date("1987-09-04"), idioma: ["español"], direccion: {comunidad: "Andalucía", provincia: "Sevilla"}, hijos: [ {nombre: "Ramón Vázquez Simón", fecha: new Date("2017-01-04")}], ingresosMensuales: 400.35, inscritoSEPE: true, profesion: ["Maestro de educación especial"], programas: {insercion: false, escuelaPadres: true}, visitaEducador: [2, 7, 25], relevante: "Familia extensa en Colombia", ayudaMensual: 140, coordenadas:{type: "Point", coordinates: [ -6.075441, 37.369067]}},
        {_id: 20, nombre: "William Smith Andrews", fechaNacimiento: new Date("1997-11-02"), idioma: ["español", "inglés"], direccion: {comunidad: "Andalucía", provincia: "Sevilla"}, hijos: 0, ingresosMensuales: 70.40, inscritoSEPE: false, profesion: ["Maestro de educación primaria"], programas: {insercion: true, escuelaPadres: false}, visitaEducador: [4, 14, 23], relevante: "Búsqueda activa de empleo", ayudaMensual: 152, coordenadas:{type: "Point", coordinates: [ -5.967617, 37.385629]}}
    
])