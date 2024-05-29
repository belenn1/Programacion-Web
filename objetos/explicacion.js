const persona = {
  name: "Belen",
  lastName: "Chijo",
  isWorking: true,
  age: 17,
  cats: ["minnie"],
  walk: () => {
    return "hola";
  },
};
console.log(persona.age); //accedemos a la propiedad
console.log(persona["name"]); //accedemos a la propiedad
persona.belen = "belen"; //agregamos una nueva propiedad
delete persona.age; //borra la propieedad deseada

console.log(persona);
