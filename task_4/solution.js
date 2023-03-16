// Задание 4.1. Вывод карточек товаров

function parseProducts(json) {
   
let data = 0;
data = JSON.parse(json);
let products = 0;
products = data.products;
    return products
}


function renderProductsCards(json){ 
    clearProducts();
    let products = 0;
    products = parseProducts(json);
    let length = products.length;
    for (let i = 0; i < length; i += 1){
        addProduct(products[i]);
    }
}
 
