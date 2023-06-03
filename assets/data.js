//crear el array de objetos.

//crear las cards con innerHTML.

//guardarlo en localStorage.

//Iniciar sesion y registrarse.

//Validaciones al formulario.

//Guardar las cards en el carrito.

//que no se pisen el menu haburguesa y el carrito.

//Que al recargar la pagina se mantengan guardados los cambios e iniciada la sesion.

//checklist-integrador-js.vercel.app/


const productsData = [
    //Cellulares
	{
		id: 1,
		name: "Samsung Galaxy A04s 128 Gb  Negro 4 Gb Ram",
		price: 69.999,
		category: "celulares",
        // item: "",
		cardImg:"./assets/img/celulares/A04s.webp",
	},
    {
		id: 2,
		name: " Moto G42 128 Gb  Rosa Metálico 4 Gb Ram",
		price: 89.999,
		category: "celulares",
        // item: "",
		cardImg: "./assets/img/celulares/G42.webp",
	},
    {
		id: 3,
		name: "Samsung Galaxy A04e 64 Gb  Negro 3 Gb Ram",
		price: 49.999,
		category: "celulares",
        // item: "",
		cardImg: "./assets/img/celulares/a04e.webp",
	},
    {
		id: 4,
		name: "Motorola Edge 30 Fusion 256 Gb  Lazuli Blue 12 Gb Ram",
		price: 239.999,
		category: "celulares",
        // item: "",
		cardImg: "./assets/img/celulares/Edge-30.webp",
	},
    {
		id: 5,
		name: "Samsung Galaxy Z Flip4 5g 5g 256 Gb  Graphite 8 Gb Ram",
		price: 339.999,
		category: "celulares",
        // item: "",
		cardImg: "./assets/img/celulares/Z-Flip4.webp",
	},
    //Tablets
    {
		id: 6,
		name: "Tablet  Samsung Galaxy Tab A A7 Lite Sm-t220 8.7",
		price: 79.999,
		category: "tablets",
        // item: "",
		cardImg: "./assets/img/tablets/Galaxy-Tab-A7-Lite.webp",
	},
    {
		id: 7,
		name: "Tablet  Samsung Galaxy Tab S S8+",
		price: 555.999,
		category: "tablets",
        // item: "",
		cardImg: "./assets/img/tablets/Tab-S8.webp",
	},
    {
		id: 8,
		name: "Tablet Samsung Galaxy Tab S6 Lite",
		price: 193.999,
		category: "tablets",
        // item: "",
		cardImg: "./assets/img/tablets/Tab-S6.webp",
	},
    {
		id: 9,
		name: "Tablet  Samsung Galaxy Ta A8 Sm-x200 10.5  64gb Gray Y 4gb ",
		price: 134.999,
		category: "tablets",
        // item: "",
		cardImg: "./assets/img/tablets/Ta-A8.webp",
	},
    {
		id: 10,
		name: "Tablet Samsung Galaxy Tab A7 Lite 32/3gb Silver",
		price: 79.999,
		category: "tablets",
        // item: "",
		cardImg: "./assets/img/tablets/Tab-A7-Lite-32.webp",
	},
    //Noteboks
    {
		id: 11,
		name: "Notebook Vaio Intelcore I5 10210u W11home 8gb 256gb Ssd Fe15",
		price: 278.999,
		category: "notebooks",
        // item: "",
		cardImg: "./assets/img/notebooks/Vaio-Intelcore-I5.webp",
	},
    {
		id: 12,
		name: "Notebook Vaio Fe 15  (intel I5 1235u 8gm Ram/256ssd)",
		price: 276.999,
		category: "notebooks",
        // item: "",
		cardImg: "./assets/img/notebooks/Vaio-Fe-15.webp",
	},
    {
		id: 13,
		name: "Notebook Asus Core I7-1260p 32gb 512gb Sdd + 1tb  Pcie G3 Ss",
		price: 760.999,
		category: "notebooks",
        // item: "",
		cardImg: "./assets/img/notebooks/Asus-Core-I7.webp",
	},
    {
		id: 14,
		name: "Notebook Acer Nitro (gaming) Intel Corei7-11800h 8gb+512gb S",
		price: 805.999,
		category: "notebooks",
        // item: "",
		cardImg: "./assets/img/notebooks/AcerNitro.webp",
	},
    {
		id: 15,
		name: "Notebook Dell Latitude 3420 I5-1135g7 (th Gen) Spanish Kbgb ",
		price: 509.999,
		category: "notebooks",
        // item: "",
		cardImg: "./assets/img/notebooks/Dell-Latitude-3420-I5.webp",
	},
    //Gamers
    {
		id: 16,
		name: "Silla Gaming Shooter Dw-sga001na Rotación 360° Rojo Daewoo",
		price: 60.999,
		category: "gamers",
        // item: "",
		cardImg: "./assets/img/gamers/Silla-Gaming-Rojo.webp",
	},
    {
		id: 17,
		name: "Joystick Inalámbrico Sony Playstation Dualsense Cfi-zct1 Galactic Purple",
		price: 36.999,
		category: "gamers",
        // item: "",
		cardImg: "./assets/img/gamers/Joystick-Purple.webp",
	},
    {
		id: 18,
		name: "Joystick Inalámbrico Sony Playstation Dualsense Cfi-zct1 Cosmic Red",
		price: 36.999,
		category: "gamers",
        // item: "",
		cardImg: "./assets/img/gamers/Joystick-Red.webp",
	},
    {
		id: 19,
		name: "Monitor Color 27  Led Ips Samsung G4 240hz 1ms",
		price: 209.999,
		category: "gamers",
        // item: "",
		cardImg: "./assets/img/gamers/Monitor-Color-27.webp",
	},
    {
		id: 20,
		name: "Silla Gamer Daewoo Shooter Green Dw-sga001nv",
		price: 62.999,
		category: "gamers",
        // item: "",
		cardImg: "./assets/img/gamers/Silla-Gaming-green.webp",
	},
    //Smartwatchs
    {
		id: 21,
		name: "Smartwatch Reloj Inteligente Amazfit T-rex 2 Gps Oxímetro",
		price: 133.748,
		category: "accesorios",
        // item: "",
		cardImg: "./assets/img/accesorios/D_NQ_NP_618995-MLA51652186268_092022-V.webp",
	},
    {
		id: 22,
		name: "Samsung Galaxy Watch5 Pro (bluetooth) 1.4 ",
		price: 195.999,
		category: "accesorios",
        // item: "",
		cardImg: "./assets/img/accesorios/D_NQ_NP_936069-MLA51439791973_092022-V.webp",
	},
    {
		id: 23,
		name: "Amazfit Gts 2 Pink ",
		price: 89.999,
		category: "accesorios",
        // item: "",
		cardImg: "./assets/img/accesorios/D_NQ_NP_893375-MLA69141989093_042023-V.webp",
	},
    {
		id: 24,
		name: "Smartwatch Amazfit Gts 4 Misty Blanco ",
		price: 133.748,
		category: "accesorios",
        // item: "",
		cardImg: "./assets/img/accesorios/D_NQ_NP_629227-MLA69137154644_042023-V.webp",
	},
    {
		id: 25,
		name: "Smartwatch Amazfit T-rex 2 Ember Negro",
		price: 135.999,
		category: "accesorios",
        // item: "",
		cardImg: "./assets/img/accesorios/D_NQ_NP_835768-MLA69141917461_042023-V.webp",
	},
];    

//dividir los producotos en partes mas pewqueñas
splitProdcuts = (num) => {  
    let listProduct = [];
    for(let i = 0; i < productsData.length; i += num){
        listProduct.push(productsData.slice(i, i + num));
    }
    return listProduct;

};

const dividedProducts = splitProdcuts(5);

const appState = {
	products: dividedProducts,
	currentProductsIndex: 0,
	productsLimit: dividedProducts.length,
	activeFilter: null,
};