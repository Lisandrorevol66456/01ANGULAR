console.log("Inicio");
// Resolve, cuando todo funciona correctamente, reject cuando algo falla. Son 2 funciones
const prom1 = new Promise((resolve, reject) => {
setTimeout(() => {
resolve("Se terminó el timeout");
}, 1000);
});
// El then, es lo que va a suceder cuando funcione correctamente y en "mensaje", va a llegar lo que
//devuelva la promesa en el resolve
// En el catch, lo que devolvería como error, si sucede un reject.
prom1
.then((mensaje) => console.log(mensaje))
.catch((error) => console.warn(error));
console.log("Fin");