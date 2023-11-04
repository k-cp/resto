import "./sass/styles.scss";
import createHome from "./pages/home";
import loadMenu from "./pages/menu";
import loadHome from "./pages/home";


const createHeader = function(){
    const headerDiv = document.createElement('div');
    headerDiv.className = 'header';

    const nameDiv = document.createElement('div');
    nameDiv.className = 'name';

    const nameH1 = document.createElement('h1');
    nameH1.textContent = 'Pizza';
    nameH1.addEventListener('click', loadHome);
    nameDiv.appendChild(nameH1);

    const navDiv = document.createElement('div');
    navDiv.className = 'nav';

    const navUl = document.createElement('ul');
    const menuItems = ['Menu', 'Group dining', 'Gift cards', 'Catering'];

    menuItems.forEach((itemText) => {
        const navLi = document.createElement('li');
        navLi.textContent = itemText;
        navLi.classList.add(`${itemText.replace(/\s/g, '') + 'Nav'}`);
        if (itemText === 'Menu') {
            navLi.addEventListener('click', loadMenu);
        }
        navUl.appendChild(navLi);
    });

    navDiv.appendChild(navUl);

    headerDiv.appendChild(nameDiv);
    headerDiv.appendChild(navDiv);
    const main = document.createElement('div');
    main.id = 'main';
    content.appendChild(headerDiv);
    content.appendChild(main)
}

createHeader()
loadHome()



