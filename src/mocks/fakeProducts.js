import { LocalFireDepartment } from "@mui/icons-material";

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
];
const product = {
    id: 1,
    name: "Corbata",
    abstract: "Corbata blanca 2020",
    description: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    price: 3000,
    stock: 10,
    image: 'corbata/corbata_2020_blanca.png'
};

export const getData = new Promise ((resolve, reject) =>{
    let condition = true;
    setTimeout(()=>{
        condition ? resolve(products) : reject('Error en la petición');
    },1000)
});

export const getProduct = new Promise ((resolve, reject) =>{
    let condition = true
    setTimeout(()=>{
        condition ? resolve(product) : reject('Error en la petición');
    },2000)
}); 