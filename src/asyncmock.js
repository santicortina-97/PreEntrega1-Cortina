const misProductos =[
    {id:"1", nombre: "Reloj Tommy Hilfiger", precio:65395, img: "../img/relojHombre1.jpg", idCat: "1" },
    {id:"2", nombre: "Reloj Lacoste 12.12 MOVE", precio:67795, img: "../img/relojHombre2.jpg", idCat: "1" },
    {id:"3", nombre: "Reloj Swatch Blue Boat Again", precio:86995, img: "../img/relojHombre3.jpg", idCat: "1" },
    {id:"4", nombre: "Reloj Tommy Hilfiger", precio:110000, img: "../img/relojMujer1.jpg", idCat: "2" },
    {id:"5", nombre: "Reloj Swatch Metal Knit", precio:78995, img: "../img/relojMujer2.jpg", idCat: "2" },
    {id:"6", nombre: "Reloj Swatch Kiroyal de acero", precio:55000, img: "../img/relojMujer3.jpg", idCat: "2" },
    {id:"7", nombre: "Samsung Galaxy Watch5", precio:80000, img: "../img/relojSmart1.jpg", idCat: "3" },
    {id:"8", nombre: "Xiaomi Watch S1 Active", precio:66000, img: "../img/relojSmart2.jpg", idCat: "3" },
    {id:"9", nombre: "Grow Home Gr68 Negro", precio:50000, img: "../img/relojSmart3.jpg", idCat: "3" }
]

export const getProductos = () =>{
    return new Promise((resolve) =>{
        setTimeout(()=>{
            resolve(misProductos)
        },100)
    })
}

//creamos una función similar a la anterior pero que nos retorne un solo item

export const getUnProducto = (id) =>{
    return new Promise(resolve =>{
        setTimeout(() =>{
            const producto = misProductos.find(prod => prod.id === id);
            resolve(producto);
        }, 100)
    })
}

//Funcion que retorna toda una categoria
export const getCategoria = (idCategoria) =>{
    return new Promise(resolve=>{
        setTimeout(()=>{
            const prodCategoria = misProductos.filter(prod => prod.idCat === idCategoria)
            resolve(prodCategoria)
        }, 100)
    })
}