export const listadoProductos=[
    { 
    id:1,
    category:"zapatillas",
    name:"Zapatillas Grand Court",
    description:"ZAPATILLAS GRAND COURT. ZAPATILLAS MINIMALISTAS CON UN ESTILO CLÁSICO",
    img:"../src/assets/Zapatillas_Response_Super_3.0_Negro_GW1371_01_standard.avif",
    price:12499,
    stock:5
    }
]


export const getItem = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(listadoProductos[0]);
        }, 3000);
    });
}


