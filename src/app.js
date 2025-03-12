import DataService from "./services/data-service.js";

const service = new DataService();

function orderByTitle(){
    const bookData = service.getBooksByTitle();
    reder(bookData);
}

function orderByYop(){
    const bookData = service.getBooksByYop();
    reder(bookData);
}

function orderByCategory(){
    const bookData = service.getBooksByCategory('Romanzo');
    reder(bookData);
}

window.orderByTitle = orderByTitle;
window.orderByYop = orderByYop;
window.orderByCategory = orderByCategory;

function reder(bookData) {
    const container = document.getElementById('books-container');
    container.innerHTML = '';

    for (let i = 0; i < bookData.length; i++) {
        const book = bookData[i];

        const bookContainer = document.createElement('div');
        bookContainer.classList.add('book-container');

        const titleContainer = createTextElement('span', 'Title: ' + book.title);

        const authorContainer = createTextElement('span','Author: ' + book.author);

        const isbnContainer = createTextElement('span','ISBN: ' + book.isbn);

        const categoryContainer = createTextElement('span','Category: ' + book.category);

        const yopContainer = createTextElement('span','Year of Publication: ' + book.yop);

        bookContainer.appendChild(titleContainer);
        bookContainer.appendChild(authorContainer);
        bookContainer.appendChild(isbnContainer);
        bookContainer.appendChild(categoryContainer);
        bookContainer.appendChild(yopContainer);

        container.appendChild(bookContainer);
    }
}

function createTextElement(elementTag, text, nameClass = null){
    const element = document.createElement(elementTag);

    const node = document.createTextNode(text);

    if(nameClass){
        element.classList.add(nameClass);
    }

    element.appendChild(node);

    return element;
}