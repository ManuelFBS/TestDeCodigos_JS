// Desestructuración de Objetos y Funciones
/*La Desestructuración de Objetos se puede utilizar 
para asignar parámetros a funciones:*/

function persona({ nombre: x = 'Caroline', trabajo: y = 'Desarrollador' } = {}) {
        console.log(x);
}

persona({ nombre: 'María' });
