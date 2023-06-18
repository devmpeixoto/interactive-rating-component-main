// Selecionando todos os elementos com a classe 'card-number' e armazenando em uma variável chamada 'cardsElements'
const cardsElements = document.querySelectorAll('.card-number');

// Selecionando o elemento com a classe 'btn' e armazenando em uma variável chamada 'btnElement'
const btnElement = document.querySelector('.btn');

// Selecionando o elemento com a classe 'desktop-style' e armazenando em uma variável chamada 'desktopElement'
const desktopElement = document.querySelector('.desktop-style');

// Selecionando o elemento com a classe 'mobile-style' e armazenando em uma variável chamada 'mobileElement'
const mobileElement = document.querySelector('.mobile-style');

// Selecionando o elemento com a classe 'rating-selected' e armazenando em uma variável chamada 'ratingElement'
const ratingElement = document.querySelector('.rating-selected');

// Inicializando a variável 'rate' com uma string vazia
let rate = "";

// Iterando sobre cada elemento na coleção 'cardsElements' usando a função 'forEach'
cardsElements.forEach(function (cardElement) {
    // Adicionando um ouvinte de evento de clique em cada elemento de cartão
    cardElement.addEventListener('click', function () {
        // Removendo a classe 'checked' de todos os elementos de cartão
        cardsElements.forEach(function (card) {
            card.classList.remove('checked');
        });

        // Adicionando a classe 'checked' ao elemento de cartão clicado
        cardElement.classList.add('checked');

        // Atualizando a variável 'rate' com o texto do elemento de cartão clicado
        rate = cardElement.innerText;
    });
});

// Adicionando um ouvinte de evento de clique no elemento 'btnElement'
btnElement.addEventListener('click', function () {
    // Atualizando o texto do elemento 'ratingElement' com o valor da variável 'rate'
    ratingElement.innerText = rate;

    // Alternando a classe 'hide' nos elementos 'desktopElement' e 'mobileElement'
    desktopElement.classList.toggle('hide');
    mobileElement.classList.toggle('hide');
});
