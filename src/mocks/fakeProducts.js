import { LocalFireDepartment } from "@mui/icons-material";

const products = [
    {
        id: 1,
        name: "Corbata",
        abstract: "Corbata blanca 2020",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
        price: 3000,
        stock: 10,
        image: 'corbata/corbata_2020_blanca.png'
    },
    {
        id: 2,
        name: "Corbata",
        abstract: "Corbata roja 2020",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
        price: 3000,
        stock: 9,
        image: 'corbata/corbata_2020_roja.png'
    },
    {
        id: 3,
        name: "Corbata",
        abstract: "Corbata negra 2014",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
        price: 3000,
        stock: 13,
        image: 'corbata/corbata_2014_negro.png'
    },
    {
        id: 4,
        name: "Corbata",
        abstract: "Corbata azul 2014",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
        price: 3000,
        stock: 13,
        image: 'corbata/corbata_2014_azul.png'
    },
];

export const getData = new Promise ((resolve, reject) =>{
    let condition = true;
    setTimeout(()=>{
        condition ? resolve(products) : reject('Error en la petición');
    },1000)
});


export const getProduct = (id) => new Promise ((resolve, reject) =>{
    let condition = true
    const productFound = products.find(product => product.id === Number(id));
    setTimeout(()=>{
        condition ? resolve(productFound) : reject('Error en la petición');
    },2000)
}); 