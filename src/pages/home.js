import Food from '../img/food1.jpg';
import margherita from '../img/margherita.jpeg';
import pugliese from '../img/pugliese.jpeg';
import loadFooter from './footer';


const createHome = function() {

    const mainDiv = document.createElement('div');
    mainDiv.id = 'main';

    const showDiv = document.createElement('div');
    showDiv.id = 'show';
    showDiv.style.backgroundImage = `url(${Food})`;
    const showH2 = document.createElement('h2');
    showH2.textContent = 'Delicious';

    const showP = document.createElement('p');
    showP.textContent = 'Best pizza in your area';

    const orderButton = document.createElement('button');
    orderButton.textContent = 'Order now';

    showDiv.appendChild(showH2);
    showDiv.appendChild(showP);
    showDiv.appendChild(orderButton);

    const menuDiv = document.createElement('div');
    menuDiv.id = 'menu';

    const menuTitle = document.createElement('h2');
    menuTitle.textContent = 'Our bests:';
    menuDiv.appendChild(menuTitle);

    // Create the "Margherita" pizza section
    const margheDiv = document.createElement('div');
    margheDiv.className = 'marghe';


    const margheImgDiv = document.createElement('div');
    margheImgDiv.className = 'margheImg';

    const margheritaImg = document.createElement('img');
    margheritaImg.alt = 'Margherita';
    margheritaImg.className = 'margherita';
    margheritaImg.src = margherita;
    margheritaImg.style.width = '100%';

    margheImgDiv.appendChild(margheritaImg);

    const margheTextDiv = document.createElement('div');
    margheTextDiv.className = 'margheText';

    const margheH2 = document.createElement('h2');
    margheH2.textContent = 'Margherita';

    const margheP = document.createElement('p');
    margheP.textContent = 'A popular contemporary legend holds that the archetypal pizza Margherita was\
    invented in June 1889, when the Royal Palace of Capodimonte commissioned the\
    Neapolitan pizzaiolo (pizza maker) Raffaele Esposito to create a pizza in honor of the visiting\
    Queen Margherita. Of the three different pizzas he created, the Queen strongly preferred\
    a pizza swathed in the colors of the Italian flag — red (tomato), green (basil),\
    and white (mozzarella).'; 

    margheTextDiv.appendChild(margheH2);
    margheTextDiv.appendChild(margheP);

    margheDiv.appendChild(margheImgDiv);
    margheDiv.appendChild(margheTextDiv);

    // Create the "Pugliese" pizza section (similar to Margherita)
    const pugDiv = document.createElement('div');
    pugDiv.className = 'pug';

    const puglieseImgDiv = document.createElement('div');
    puglieseImgDiv.className = 'puglieseImg';

    const puglieseImg = document.createElement('img');
    puglieseImg.alt = 'Pugliese';
    puglieseImg.className = 'pugliese';
    puglieseImg.src = pugliese;
    puglieseImg.style.width = '100%';

    puglieseImgDiv.appendChild(puglieseImg);

    const pugTextDiv = document.createElement('div');
    pugTextDiv.className = 'pugText';

    const pugH2 = document.createElement('h2');
    pugH2.textContent = 'Pugliese';

    const pugP = document.createElement('p');
    pugP.textContent = 'Pizza pugliese is a style of pizza\
    in Italian cuisine prepared with tomato, onion, and mozzarella.\
     It is named after the region of Apulia (called in Italian "Puglia").\
     It should not be confused with pizza barese, the local Barese variant of\
     preparing the pizza dough, which tends to be thinner and crispier than pizza napoletana.'; 


    const footer = document.createElement('div');
    footer.classList.add('footer');
    const footerP = document.createElement('div');
    footerP.textContent = 'Links';
    footer.appendChild(footerP);


    pugTextDiv.appendChild(pugH2);
    pugTextDiv.appendChild(pugP);

    pugDiv.appendChild(puglieseImgDiv);
    pugDiv.appendChild(pugTextDiv);

    // Append the "Margherita" and "Pugliese" sections to the menuDiv
    menuDiv.appendChild(margheDiv);
    menuDiv.appendChild(pugDiv);

    mainDiv.appendChild(showDiv);
    mainDiv.appendChild(menuDiv);

    
    return mainDiv
}

const loadHome = function() {
    const main = document.getElementById('main');
    main.textContent = '';
    main.appendChild(createHome());
    loadFooter()
}

export default loadHome;