const createFooter = function (){
    const footer = document.createElement('div');
    footer.classList.add('footer');
    
    return footer
}

const loadFooter = function (){
    if (document.querySelector('.footer')) {
        return
    }
    const content = document.getElementById('content');
    content.appendChild(createFooter());
}

export default loadFooter