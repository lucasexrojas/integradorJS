const offersContainer = document.querySelector(".offers__container");
const showMore = document.querySelector(".showMore");
const categoriesContainer = document.querySelector(".offers__categories");
const categoriesList = document.querySelectorAll(".category");

const createProductCard = (product) => {
    const {id, name, price, cardImg} = product
    return `
        <div class="offers__info">
            <h2>${name}</h2>
            <div class="offers__info__img">
                <img class="product-img" src=${cardImg} alt=${name}/>
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
                data-img="${cardImg}" 
                >
            </i>
        </div>`
}


const renderProducts = (listProduct) => {
    offersContainer.innerHTML += listProduct.map(createProductCard).join("");
}

const isLastIndex = () => {
    if(appState.currentProductsIndex === appState.productsLimit - 1){
       return showMore.classList.add("hidden");
    }
};


const showMoreProducts = (e) => {
    e.preventDefault();
    appState.currentProductsIndex += 1;
    let {products, currentProductsIndex} = appState;
    renderProducts(products[currentProductsIndex]);
    isLastIndex();
}


const inactiveFilter = (element) => {
    return (
        element.classList.contains("category") &&
        !element.classList.contains("active")
    );
};

const changeBtnActiveState = (selectedCategory) => {
    const categories = [...categoriesList];
    categories.forEach((categoryBtn) => {
        if (categoryBtn.dataset.category !== selectedCategory) {
            categoryBtn.classList.remove("active");
        } else {
            categoryBtn.classList.add("active");
        }
    });
};

const changeFilerState = (btn) => {
    appState.activeFilter = btn.dataset.category;
    changeBtnActiveState(appState.activeFilter);
};

const applyfilter = ({ target }) => {
    if(!inactiveFilter(target)) {   
        return;
    }
    changeFilerState(target);
};

const init = () => {
    renderProducts(appState.products[appState.currentProductsIndex]);
    showMore.addEventListener("click",showMoreProducts);
    categoriesContainer.addEventListener("click",applyfilter);
    changeFilerState(target);
}

init();