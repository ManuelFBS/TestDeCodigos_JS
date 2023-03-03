// Usando Valores Predeterminados...
// Los valores predeterminados también se pueden 
// usar en la desestructuración de objetos, en el 
// caso de que una variable del objeto que se quiere 
// extraer datos esté undefined:

let persona = {
        nombre: 'Manuel', 
        pais: 'Venezuela', 
        trabajo: 'Desarrollador'
};

let { nombre = 'miNombre', amigo = 'Marcos' } = persona;

console.log(nombre);
console.log(amigo);
