const flashcards = [
    { term: "HTML", definition: "HyperText Markup Language" },
    { term: "CSS", definition: "Cascading Style Sheets" },
    { term: "JavaScript", definition: "Programming language of the web" }
];

// You can use flashcards.length to get the length of the array
let flashcard = document.getElementById('flashcard');
let flashcardContent = document.getElementById('card-content');

// These two variables will come in handy
let currentIndex = 0;
let showingTerm = true;

// Start with this function to simply display the card
function displayCard() {
    if (showingTerm){
        flashcardContent.innerHTML = flashcards[currentIndex].term;
    } else {
        flashcardContent.innerHTML = flashcards[currentIndex].definition;
    }
}

// The rest of the code you will write is apart of event listeners
let nextBtn = document.getElementById('next-btn');
let prevBtn = document.getElementById('prev-btn');
let addBtn = document.getElementById('add-card-btn');


// event listener for the next button
nextBtn.addEventListener('click', function () {
    if (currentIndex === flashcards.length - 1){
        currentIndex = 0;
    } else {
        currentIndex++;
    }
    displayCard();
});

// event listener for the previous button
prevBtn.addEventListener('click', function () {
    if (currentIndex === 0){
        currentIndex = flashcards.length - 1;
    } else {
        currentIndex--;
    }
    displayCard();
});

// event listener for flipping the flashcard
flashcard.addEventListener('click', function () {
    if (showingTerm){
        showingTerm = false;
    } else {
        showingTerm = true;
    }
    displayCard();
});

// event listener for adding a flashcard
addBtn.addEventListener('click', function () {
    let term = document.getElementById('new-term');
    let definition = document.getElementById('new-definition');

    flashcards.push({term: term.value, definition: definition.value});
});


// This line will display the card when the page is refreshed
window.onload = displayCard;