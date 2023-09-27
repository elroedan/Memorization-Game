// Step 1: Define variables and constants
const cards = ["🤦‍♀️", "🤦‍♀️","🤦‍♂️","🤦‍♂️","😜","😜","😊", "😊", "😂", "😂", "🤣","🤣", "❤️", "❤️", "😍", "😍", "😒", "😒", "👌", "👌", "😘", "😘", "💕", "💕", "😁","😁", "👍", "👍", "🙌","🙌" /* Add more card IDs */];
let flippedCards = [];
let matchedPairs = 0;
let attempts = 0;

// Step 2: Shuffle the cards (You'll need a shuffleCards() function)
function shuffleCards(cards) 
{
    var shuffleCard = cards.sort(() => (Math.random() > .5) ? 2 : -1);
    for (var i = 0; i < cards.length; i++) 
    {
        let box = document.createElement('div')
        box.className = 'item';
        box.innerHTML = shuffleCard[i]

        box.onclick = function()
    {
        this.classList.add('boxOpen')
        setTimeout(function()
        {
            if (document.querySelectorAll('.boxOpen').length > 1 )
            {
                if (document.querySelectorAll('.boxOpen')[0].innerHTML == document.querySelectorAll('.boxOpen')[1].innerHTML)
                {
                    document.querySelectorAll('.boxOpen')[0].classList.add('boxMatch')
                    document.querySelectorAll('.boxOpen')[1].classList.add('boxMatch')
                    document.querySelectorAll('.boxOpen')[1].classList.remove('boxOpen')
                    document.querySelectorAll('.boxOpen')[0].classList.remove('boxOpen')

                    if(document.querySelectorAll('.boxMatch').length == cards.length)
                    {
                        alert('win')
                    }
                }
                    else 
                    {
                        document.querySelectorAll('.boxOpen')[1].classList.remove('boxOpen')
                        document.querySelectorAll('.boxOpen')[0].classList.remove('boxOpen')
        
                    }
                }
        }, 500)
    
    }
    document.querySelector('.game').appendChild(box);
    }
}
shuffleCards(cards)
// Step 3: Create a function to handle card flipping
function flipCard(cardId) {
    // Implement card flipping logic
}

// Step 4: Create a function to check for matching pairs
function checkForMatch() {
    // Implement matching logic
}

// Step 5: Create a function to handle a successful match
function handleMatch() {
    // Implement actions to take when a pair is matched
}

// Step 6: Create a function to handle card mismatch
function handleMismatch() {
    // Implement actions to take when cards don't match
}

// Step 7: Create a function to update the game board
function updateGameBoard() {
    // Implement actions to update the UI
}

// Step 8: Create an event listener for card clicks
function cardClickHandler(event) {
    // Implement card click event handling
}

// Step 9: Create a function to start or restart the game
function startGame() {
    // Implement game initialization logic
}

// Step 10: Add event listener for the "Start Game" button click

// Step 11: Call the startGame() function to initialize the game

// Step 12: Implement a timer for tracking game duration (optional)

// Step 13: Add a win condition and end-of-game logic

// Step 14: Add comments to enhance code readability and maintainability

// Step 15: Test the memorization game functionality

// Step 16: Handle additional features like a timer display, scoring, or difficulty levels (if desired)

// Step 17: Optimize and refactor code as needed

// Step 18: Add CSS styles and HTML structure for the game board

// Step 19: Test the game thoroughly and gather user feedback

// Step 20: Document the code, including instructions for users and developers
