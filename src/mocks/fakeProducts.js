
const products = [
    {
        id: 1,
        name: "Corbata",
        description: "Corbata blanca 2020",
        price: 3000,
        stock: 10,
        image: 'corbata/corbata_2020_blanca.png'
    },
    {
        id: 2,
        name: "Corbata",
        description: "Corbata roja 2020",
        price: 3000,
        stock: 9,
        image: 'corbata/corbata_2020_roja.png'
    },
    {
        id: 3,
        name: "Corbata",
        description: "Corbata negra 2014",
        price: 3000,
        stock: 13,
        image: 'corbata/corbata_2014_negro.png'
    },
    {
        id: 4,
        name: "Corbata",
        description: "Corbata azul 2014",
        price: 3000,
        stock: 13,
        image: 'corbata/corbata_2014_azul.png'
    },
]

export const getData = new Promise ((resolve, reject) =>{

    let condition = true

    setTimeout(()=>{
    if(condition){
        resolve(products)
    }else{
        reject('error en la peticion')
    }
    },3000)
})