// Uso de getters (accesores) y setters (mutadores) 
// para controlar el acceso a un objeto.

/*Puedes obtener valores de un objeto y establecer el valor de una propiedad 
dentro de un objeto. Estas operaciones clásicamente se llaman getters y setters.
Las funciones getter están destinadas a simplemente devolver (get) el valor de 
la variable privada de un objeto al usuario sin que el usuario acceda directamente 
a la variable privada. Las funciones setter están destinadas a modificar (set) el 
valor de la variable privada de un objeto basado en el valor pasado a la función 
setter. Este cambio podría implicar cálculos, o incluso sobrescribir completamente 
el valor anterior.*/

class Thermostat {
        constructor(fahrenheit) {
          this._fahrenheit = fahrenheit;
        }
        get temperature() {
          return (5 / 9) * (this._fahrenheit - 32);
        }
      
        set temperature(celsius) {
          this._fahrenheit = (celsius * 9.0) / 5 + 32;
        }
}

const thermos = new Thermostat(76); // Ajuste en escala Farenheit
let temp = thermos.temperature; // 24.44 en Celsius
thermos.temperature = 26;
temp = thermos.temperature; // 26 en Celsius

console.log(temp);