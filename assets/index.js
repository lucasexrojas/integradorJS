//elementos del DOM
const offersContainer = document.querySelector(".offers__container");
const showMore = document.querySelector(".showMore");
const categoriesContainer = document.querySelector(".offers__categories");
const categoriesList = document.querySelectorAll(".category");
const cartLabel = document.querySelector(".cart-label");
const cartMenu = document.querySelector(".cart");
const menu = document.querySelector(".menu-label");
const navbarList = document.querySelector(".navbar-list");
const overlay = document.querySelector(".overlay");
const profile = document.querySelector(".profile-label");
const loginAndRegister = document.querySelector(".login-register");
const cartContainer =document.querySelector(".cart-container");
const total = document.querySelector(".total");
const addComment = document.querySelector(".add-comment");
const buy = document.querySelector(".buy");
const deleteProduct = document.querySelector(".delete-product");
const cartIcon = document.querySelector(".cart-icon");

let productCart = JSON.parse(localStorage.getItem("cart")) || [];

const saveProductInCart = () => {
localStorage.setItem("cart",JSON.stringify(productCart));
};

// Crea una card de producto basada en los datos de cada uno
const createProductCard = (product) => {
    const {id, name, price, img} = product;
    return `
        <div class="offers__info">
            <h2>${name}</h2>
            <div class="offers__info__img">
                <img class="product-img" src=${img} alt=${name}/>
            </div>
            <div>
                <h3>${price}
                    <span>8% OFF</span>
                </h3>
                <p>6 cuotas sin interes  
                    <span>Envio gratis</span>
                </p>
            </div>
            <i class="fa-solid fa-cart-shopping btn-add"
                data-id="${id}"
                data-name="${name}"
                data-price="${price}"
                data-img="${img}" 
                >
            </i>
        </div>`
}

// Renderiza los productos en el contenedor de ofertas
const renderProducts = (listProduct) => {
    offersContainer.innerHTML += listProduct.map(createProductCard).join("");
}

// Comprueba si es el último índice para ocultar el botón "Ver más"
const isLastIndex = () => {
    if(appState.currentProductsIndex === appState.productsLimit - 1){
       return showMore.classList.add("hidden");
    }
};

// Muestra más productos al hacer clic en "Ver más"
const showMoreProducts = (e) => {
    e.preventDefault();
    appState.currentProductsIndex += 1;
    let {products, currentProductsIndex} = appState;
    renderProducts(products[currentProductsIndex]);
    isLastIndex();
}

// Verifica si un elemento no esta activo y es una categoría
const isInactiveFilter = (element) => {
    return (
        element.classList.contains("category") &&
        !element.classList.contains("active")
    );
};

// Cambia el estado active de los botones de categoría
const changeBtnActiveState = (selectedCategory) => {
    const categories = [...categoriesList];
    categories.forEach((categoryBtn) => {
        if (categoryBtn.dataset.category === selectedCategory) {
            categoryBtn.classList.add("active");
        } else {
            categoryBtn.classList.remove("active");
        }
    });
};

// Remueve el botón "Ver más" si hay un filtro activo
const setShowMoreVisibility = () => {
    const isVisible = appState.activeFilter;
    showMore.classList.toggle("hidden", isVisible);
  };

// Cambia el estado del filtro al hacer clic en un botón de categoría
const changeFilerState = (btn) => {
    appState.activeFilter = btn.dataset.category;
    changeBtnActiveState(appState.activeFilter);
    setShowMoreVisibility();
};

const renderFilteredProducts = () => {
    const filteredProducts = productsData.filter((product) =>{
        return product.category === appState.activeFilter
    });
    renderProducts(filteredProducts);
}

// Aplica el filtro al hacer clic en un elemento y verifica si es un botón de categoría
const applyfilter = ({ target }) => {
    if(!isInactiveFilter(target)) {   
        return;
    }
    changeFilerState(target);
    offersContainer.innerHTML = "";
    if (appState.activeFilter) {
        renderFilteredProducts();
        appState.currentProductsIndex = 0;
    }else {
        renderProducts(appState.products[0]);
    }
};

const toggleCart = () => {
    cartMenu.classList.toggle("open-cart");
    
    if (navbarList.classList.contains("open-menu")) {
      navbarList.classList.remove("open-menu");
      return;
    } else if (loginAndRegister.classList.contains("open-login-register")) {
        loginAndRegister.classList.remove("open-login-register");
        return;
    };
    overlay.classList.toggle("show-overlay");
  };
  
const toggleMenu = () => {
  navbarList.classList.toggle("open-menu");
  
  if (cartMenu.classList.contains("open-cart")) {
    cartMenu.classList.remove("open-cart");
    return;
  } else if (loginAndRegister.classList.contains("open-login-register")) {
      loginAndRegister.classList.remove("open-login-register");
      return;
  };
  overlay.classList.toggle("show-overlay");
};
  
const toggleProfile = () => {
  loginAndRegister.classList.toggle("open-login-register");
  
  if (cartMenu.classList.contains("open-cart")) {
    cartMenu.classList.remove("open-cart");
    return;
  } else if (navbarList.classList.contains("open-menu")) {
    navbarList.classList.remove("open-menu");
    return;
  };
  overlay.classList.toggle("show-overlay");
};

const closeOnScroll = () => {
    if(cartMenu.classList.toggle("open-cart") || 
    navbarList.classList.toggle("open-menu") || 
    loginAndRegister.classList.toggle("open-login-register")) {
        cartMenu.classList.remove("open-cart");
        navbarList.classList.remove("open-menu");
        loginAndRegister.classList.remove("open-login-register");
        overlay.classList.remove("show-overlay");
    }
};

const createProductInCart = (cartProduct) => {
    const {id, name, img, price, quantity}  = cartProduct;
    return `
    <div class="item-cart">
        <img src=${img} alt=${name}/>
        <div class="item-info">
            <h3 class="item.title">${name}</h3>
            <p class="item-bid">6 cuotas sin interes</p>
            <span class="item-price">$${price}</span>
        </div>
        <div class="item-handler">
            <span class="quantity-handler up" data-id="${id}">+</span>
            <span class="item-quantity">${quantity}</span>
            <span class="quantity-handler down" data-id="${id}">-</span>
        </div>
    </div>
    `;
};

const renderCart = () => {
    if(!productCart.length) {
        cartContainer.innerHTML = `<p class="item-bid">No hay productos seleccionados</p>`
        return;
    }else {
        cartContainer.innerHTML = productCart.map(createProductInCart).join("");
    };
};

const getCartTotal = () => {
    return productCart.reduce((acc, val)=> {
        return acc + Number(val.price) * Number(val.quantity);
    }, 0);
};

const showCartTotal = () => {
    total.innerHTML = `$${getCartTotal().toFixed()}`;
};

const createProductData = (product) => {
    const {id, name, img, price} = product;
    return {id, name, img, price};
};

const existingCartProduct = (productId) => {
    return productCart.find((item) => {
        return item.id === productId;
    });
};

const unitToPruduct = (product) => {
    productCart = productCart.map((cartProduct) => {
        return cartProduct.id === product.id
            ? { ...cartProduct, quantity: cartProduct.quantity + 1 }
            : cartProduct;
    });
};

const showSuccessComment = (msg) => {
    addComment.classList.add("active-comment");
    addComment.textContent = msg;
    setTimeout(() => {
        addComment.classList.remove("active-comment");
    },2000);
};

const createCartProdcut = (product) => {
    productCart =[
        ...productCart,
        {
            ...product,
            quantity: 1,
        },
    ];
};

const hideButton = (btn) => {
    if (!productCart.length) {
        btn.classList.add("hidden");
    }else {
        btn.classList.remove("hidden");
    }
};

const cartAlert = () => {
    if (productCart.length) {
        cartIcon.classList.add("has-products");
    } else {
        cartIcon.classList.remove("has-products");
    };
};

const updateCart = () => {
    saveProductInCart();
    renderCart();
    showCartTotal();
    hideButton(buy);
    hideButton(deleteProduct);
    cartAlert();
};

const addProduct = (e) => {
    if (!e.target.classList.contains("btn-add")){
        return;
    }
    const product = createProductData(e.target.dataset);
    if(existingCartProduct(product.id)){
        unitToPruduct(product);
        showSuccessComment("Agregaste otra unidad al producto seleccionado");
    }else {
        createCartProdcut(product);
        showSuccessComment("Se ha agregado un nuevo producto con exito")
    };
    updateCart();
};

const removeProductFromCart = (existingProduct) => {
    productCart = productCart.filter((product) => {
        return product.id !== existingProduct.id
    });
    updateCart();
};

const substractProductUnit = (existingProduct) =>{
    productCart = productCart.map((product) =>{
        return product.id === existingProduct.id
                ? {...product, quantity: Number(product.quantity) - 1}
                : product
    });
};

const handleMinusBtn = (id) => {
    const existingProduct = productCart.find((item) =>  item.id === id);
    if(existingProduct.quantity === 1) {
        if(window.confirm("¿Desea aliminar el porducto?")) {
            removeProductFromCart(existingProduct);
        }
        return
    };
    substractProductUnit(existingProduct);
};

const handlePlusBtn = (id) => {
    const existingProduct = productCart.find((item) =>  item.id === id);
    unitToPruduct(existingProduct);
};

const handleQuantity = (e) => {
     if(e.target.classList.contains("down")) {
        handleMinusBtn(e.target.dataset.id);
     } else if(e.target.classList.contains("up")) {
        handlePlusBtn(e.target.dataset.id);
     };
     updateCart();
};

const resetCart = () => {
    productCart = [];
    updateCart();
}

const completeCartAction = (confirmMsg, successMSg) => {
    if(productCart.length === 0) {
        return
    }if(window.confirm(confirmMsg)) {
        resetCart();
        alert(successMSg);
    }
}

const completeBuy = () => {
    completeCartAction("¿Desea concretar la compra?","¡Compra realizada con exito!");
};

const deleleCart = () => {
    completeCartAction("¿Desea vacir el carrito?","¡Ah eliminado los productos!");
};

// Inicializa la aplicación
const init = () => {
    renderProducts(appState.products[appState.currentProductsIndex]);
    showMore.addEventListener("click",showMoreProducts);
    categoriesContainer.addEventListener("click",applyfilter);
    cartLabel.addEventListener("click", toggleCart);
    menu.addEventListener("click", toggleMenu);
    profile.addEventListener("click", toggleProfile);
    window.addEventListener("scroll", closeOnScroll);
    document.addEventListener("DOMContentLoaded", renderCart);
    document.addEventListener("DOMContentLoaded", showCartTotal);
    offersContainer.addEventListener("click", addProduct);
    buy.addEventListener("click",completeBuy);
    deleteProduct.addEventListener("click",deleleCart);
    hideButton(buy);
    hideButton(deleteProduct);
    cartAlert();
    cartContainer. addEventListener("click",handleQuantity);
    
};

init();