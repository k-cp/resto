import loadFooter from "./footer";

const createMenu = function(){
    const menuList = document.createElement('div');
    menuList.classList.add('menuList');

    const menuArray = [];
    function createFood(name, price, description){
        const newObj = {name, price, description}
        menuArray.push(newObj);

        return newObj
    }
    const peperoncino = createFood('Peperoncino spaghetti', 10.9, 'A traditional dish from Naples,\
    Italy, flavoured with peperoncino');
    const carbonara = createFood('Carbonara spaghetti', 11.9, 'A traditional Italian pasta dish \
    made with eggs, hard cheese, cured pork, and black pepper.');
    const carabrese = createFood('Carabrese spaghetti', 11.9, 'A traditional Italian pasta.');
    menuArray.forEach((food) =>{
        const foodDiv = document.createElement('div');
        foodDiv.classList.add('menuFood');

        const foodImg = document.createElement('img');
        foodImg.alt = `${food.name}`;
        food.src = '#';
        const foodName = document.createElement('h2');
        foodName.textContent = food.name
        const foodPrice = document.createElement('h4');
        foodPrice.textContent = `£ ${food.price}`;
        const foodDescription = document.createElement('p');
        foodDescription.textContent = food.description;
        foodDiv.appendChild(foodImg);
        foodDiv.appendChild(foodName);
        foodDiv.appendChild(foodPrice);
        foodDiv.appendChild(foodDescription);

        menuList.appendChild(foodDiv);
    })

    return menuList

}


const loadMenu = function(){
    const main = document.getElementById('main');
    main.textContent = '';
    main.appendChild(createMenu());
    loadFooter()
}

export default loadMenu;