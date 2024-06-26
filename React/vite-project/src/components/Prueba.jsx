export function Prueba({ nombre, Apellido }) {
  const products = [
    { title: "Col", id: 1, description: "Col verde, 1 kg $500" },
    { title: "Ajo", id: 2, description: "Ajo, 1/2 kg, $250" },
    { title: "Manzana", id: 3, description: "Manzana, 1 kg $420" },
  ];

  return (
    <>
      <h1>
        Hola {nombre} {Apellido}
      </h1>

      {products.map((producto, i) => {
        return (
          <div key={producto.id}>
            <h2 className="bg-color">Title: {producto.title} </h2>
            <p>{producto.description}</p>
          </div>
        );
      })}
    </>
  );
}
