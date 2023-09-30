// Step 1: Define variables and constants
const cards = ["🤦‍♀️", "🤦‍♀️", "🤦‍♂️", "🤦‍♂️", "😜", "😜", "😊", "😊", "😂", "😂", "🤣", "🤣", "❤️", "❤️", "😍", "😍", "😒", "😒", "👌", "👌", "😘", "😘", "💕", "💕", "😁", "😁", "👍", "👍", "🙌", "🙌" /* Add more card IDs */];
let flippedCards = [];
let matchedPairs = 0;
let attempts = 0;

// Step 2: Shuffle the cards (You'll need a shuffleCards() function)
function shuffleCards(cards) {
    // Shuffle the cards using the Fisher-Yates algorithm
    for (let i = cards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [cards[i], cards[j]] = [cards[j], cards[i]];
    }
    return cards;
}

// Step 3: Create a function to handle card clicking and matching
function cardClickHandler(event) {
    const card = event.target;

    // Check if the clicked card is already matched or if two cards are already flipped
    if (!card.classList.contains('boxOpen') && flippedCards.length < 2) {
        card.classList.add('boxOpen'); // Flip the card

        flippedCards.push(card);

        // Check if two cards are flipped
        if (flippedCards.length === 2) {
            attempts++;

            // Compare the symbols on the two flipped cards
            if (flippedCards[0].innerHTML === flippedCards[1].innerHTML) {
                // If they match, add a match class and clear the flippedCards array
                flippedCards[0].classList.add('boxMatch');
                flippedCards[1].classList.add('boxMatch');
                flippedCards.length = 0; // Clear the flippedCards array

                matchedPairs++;

                // Check if all pairs are matched
                if (matchedPairs === cards.length / 2) {
                    alert('You win!');
                }
            } else {
                // If they don't match, flip the cards back after a short delay
                setTimeout(() => {
                    flippedCards[0].classList.remove('boxOpen');
                    flippedCards[1].classList.remove('boxOpen');
                    flippedCards.length = 0; // Clear the flippedCards array
                }, 500);
            }
        }
    }
}

// Step 4: Create a function to initialize the game
function startGame() {
    // Clear the game board
    const gameContainer = document.querySelector('.game');
    gameContainer.innerHTML = '';

    // Shuffle the cards
    const shuffledCards = shuffleCards(cards);

    // Create card elements and attach event listeners
    for (const symbol of shuffledCards) {
        const card = document.createElement('div');
        card.className = 'item';
        card.innerHTML = symbol;

        // Add a click event listener to each card
        card.addEventListener('click', cardClickHandler);

        // Append the card to the game container
        gameContainer.appendChild(card);
    }

    // Reset game state variables
    flippedCards = [];
    matchedPairs = 0;
    attempts = 0;
}

// Shuffle and initialize the game when the page loads
shuffleCards(cards);
startGame();
