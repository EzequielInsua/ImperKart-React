const products = [
    {
        id: 1,
        name: "Corbata",
        abstract: "Corbata blanca 2020",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
        category: "plasticos",
        price: 3000,
        stock: 10,
        image: 'corbata/corbata_2020_blanca.png'
    },
    {
        id: 2,
        name: "Corbata",
        abstract: "Corbata roja 2020",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
        category: "plasticos",
        price: 3000,
        stock: 9,
        image: 'corbata/corbata_2020_roja.png'
    },
    {
        id: 3,
        name: "Corbata",
        abstract: "Corbata negra 2014",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
        category: "plasticos",
        price: 3000,
        stock: 13,
        image: 'corbata/corbata_2014_negro.png'
    },
    {
        id: 4,
        name: "Corbata",
        abstract: "Corbata azul 2014",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
        category: "plasticos",
        price: 3000,
        stock: 13,
        image: 'corbata/corbata_2014_azul.png'
    },
    {
        id: 5,
        name: "Llanta",
        abstract: "Llanta delantera 4",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
        category: "llantas",
        price: 8000,
        stock: 15,
        image: 'llantas/Llanta_delantera_4.png'
    },
    {
        id: 6,
        name: "Cuna",
        abstract: "Cuna para 150 azul",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
        category: "chasis",
        price: 5000,
        stock: 15,
        image: 'cuna/Cuna_para_150_azul.png'
    },
    {
        id: 7,
        name: "Llanta",
        abstract: "Llanta trasera 8",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
        category: "llantas",
        price: 10000,
        stock: 15,
        image: 'llantas/Llanta_trasera_8.png'
    },
    {
        id: 8,
        name: "Trompa",
        abstract: "Trompa tierra 2015",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
        category: "plasticos",
        price: 6000,
        stock: 15,
        image: 'trompa/trompa_tierra_2015_negra.png'
    },
    {
        id: 9,
        name: "Volante",
        abstract: "Volante hierro con gamuza",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
        category: "chasis",
        price: 10000,
        stock: 15,
        image: 'volantes/Volante_hierro_gamuza.png'
    },
];

export const getData = (categoryId) => new Promise ((resolve, reject) =>{
    let condition = true;
    const productsFound = products.filter((product) => product.category === categoryId);
    setTimeout(()=>{
        categoryId ? resolve(productsFound) : resolve(products);
    },1000)

});


export const getProduct = (id) => new Promise ((resolve, reject) =>{

    let condition = true;
    const productFound = products.find( product => product.id === Number(id) );

    setTimeout(()=>{
        condition ? resolve(productFound) : reject('Error en la petición');
    },1000)

}); 