// Get references to the buttons
let btnPizza = document.getElementsByClassName('pizza')[0];
let btnSalad = document.getElementsByClassName('salad')[0];
let btnNoodle = document.getElementsByClassName('noodle')[0];

// Get references to all cards
let pizzaCards = document.querySelectorAll('.pizza-cards');
let saladCards = document.querySelectorAll('.salad-cards');
let noodleCards = document.querySelectorAll('.noodle-cards');

// Function to show only pizza cards
btnPizza.addEventListener('click', function(event) {
    event.preventDefault();
    setActiveButton(btnPizza);
    showOnlyCards(pizzaCards, [saladCards, noodleCards]);
});

// Function to show only salad cards
btnSalad.addEventListener('click', function(event) {
    event.preventDefault();
    setActiveButton(btnSalad);
    showOnlyCards(saladCards, [pizzaCards, noodleCards]);
});

// Function to show only noodle cards
btnNoodle.addEventListener('click', function(event) {
    event.preventDefault();
    setActiveButton(btnNoodle);
    showOnlyCards(noodleCards, [pizzaCards, saladCards]);
});

// Function to set active button style
function setActiveButton(activeButton) {
    // Remove active class from all buttons
    let buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.classList.remove('active');
    });
    activeButton.classList.add('active');
}

// Function to show specified cards and hide others
function showOnlyCards(cardsToShow, cardsToHideArrays) {
    cardsToShow.forEach(card => {
        card.style.display = 'block';
    });
    
    // Hide other cards
    cardsToHideArrays.forEach(cardArray => {
        cardArray.forEach(card => {
            card.style.display = 'none';
        });
    });
}
