const suits = ['h', 'd', 'c', 's'];
const ranks = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

const deck = [];

for (const suit of suits) {
    for (const rank of ranks) {
        deck.push(suit + rank);
    }
}

const back = 'res/deck/back.png';

let questions = {};

async function loadQuestions() {
    // popup that let's the user choose which question pack to load
    const pack = window.prompt("Enter Question Pack Number (1-4): ");
    const path = 'res/questions/pack_' + pack + '.csv';
    const response = await fetch(path);

    const csvText = await response.text();
    const lines = csvText.trim().split('\n');
    const headers = lines.shift().split(',');

    const cardNameMapping = {
        'Ace': 'A', 'King': 'K', 'Queen': 'Q', 'Jack': 'J'
    };

    const parsedQuestions = {};
    // Regex to split CSV row while respecting quotes
    const regex = /,(?=(?:(?:[^"]*"){2})*[^"]*$)/;

    for (const line of lines) {
        const values = line.split(regex).map(v => v.trim().replace(/^"|"$/g, ''));
        const suit = values[0].toLowerCase();
        const card = cardNameMapping[values[1]] || values[1];
        const cardId = suit + card;

        parsedQuestions[cardId] = {
            A: values[2],
            AA: values[3],
            B: values[4],
            BB: values[5]
        };
    }
    return parsedQuestions;
}

// DOM Element References
const suitButtons = document.querySelectorAll('.suit');
const rankButtons = document.querySelectorAll('.rank');
const leftPanel = document.querySelector('.left-panel');
const confirmButton = document.getElementById('confirm');
const showAnswerButton = document.getElementById('show-answer');
const continueButton = document.getElementById('continue-button'); // Corrected from continue-button
const cardImage = document.getElementById('card-image');
const cardImageBack = document.getElementById('card-image-back');
const questionText = document.getElementById('question');
const selectionControls = document.querySelector('.bottom-panel');
const suitControls = document.querySelector('.suits');

// Game State
let selectedSuit = null;
let selectedRank = null;
const card = document.querySelector('.card-container');
let currentCardId = null;
let questionSide = null; // 'A' or 'B'

async function initializeGame() {
    questions = await loadQuestions();

    // Event Listeners for Suit Selection
    suitButtons.forEach(button => {
        button.addEventListener('click', () => {
            suitButtons.forEach(btn => btn.classList.remove('selected'));
            button.classList.add('selected');
            selectedSuit = button.dataset.suit;
        });
    });

    // Event Listeners for Rank Selection
    rankButtons.forEach(button => {
        button.addEventListener('click', () => {
            rankButtons.forEach(btn => btn.classList.remove('selected'));
            button.classList.add('selected');
            selectedRank = button.dataset.rank;
        });
    });

    // Event Listener for Confirm Button
    confirmButton.addEventListener('click', () => {
        if (selectedSuit && selectedRank) {
            currentCardId = selectedSuit + selectedRank;
            // Construct the image path based on the RANK_SUIT.png naming convention.
            // e.g., selectedRank='Q', selectedSuit='s' -> 'Q_s.png'
            const imagePath = `res/deck/${selectedRank}_${selectedSuit}.png`;

            // Set the back of the card to the chosen card image *before* flipping
            cardImageBack.src = imagePath;

            // Flip the card by adding the 'is-flipped' class
            const cardElement = document.querySelector('.card');
            cardElement.classList.add('is-flipped');

            // Get question and randomly choose side A or B
            const question = questions[currentCardId];
            if (Math.random() < 0.5) {
                questionSide = 'A';
                questionText.innerHTML = `<span class="question-side">A Side:</span><br>${question.A}`;

            } else {
                questionSide = 'B';
                questionText.innerHTML = `<span class="question-side">B Side:</span><br>${question.B}`;
            }

            // Update UI visibility
            selectionControls.classList.add('hidden');
            showAnswerButton.classList.remove('hidden');
        }
    });

    showAnswerButton.addEventListener('click', () => {
        // Construct the answer key ('AA' or 'BB') and display the answer
        const answerKey = questionSide + questionSide;
        const answer = questions[currentCardId][answerKey];
        questionText.innerHTML += `<br><br><span class="answer-label">Answer:</span><br>${answer}`;

        // Update UI visibility
        showAnswerButton.classList.add('hidden');
        continueButton.classList.remove('hidden');
    });

    continueButton.addEventListener('click', () => {
        // Reset game state
        questionText.textContent = 'Choose a card';

        // Flip the card back
        const cardElement = document.querySelector('.card');
        cardElement.classList.remove('is-flipped');
        selectedSuit = null;
        selectedRank = null;
        currentCardId = null;
        suitButtons.forEach(btn => btn.classList.remove('selected'));
        rankButtons.forEach(btn => btn.classList.remove('selected'));

        // Update UI visibility
        continueButton.classList.add('hidden');
        selectionControls.classList.remove('hidden');

        // Reset the front-face image to the back after the flip-back animation
        setTimeout(() => {
            cardImageBack.src = back; // Reset the back face for the next turn
        }, 400);
    });

    // 3D Perspective Effect on Mouse Move
    leftPanel.addEventListener('mousemove', (e) => {
        const { width, height, left, top } = leftPanel.getBoundingClientRect();
        const x = e.clientX - left;
        const y = e.clientY - top;

        const centerX = width / 2;
        const centerY = height / 2;

        const deltaX = x - centerX;
        const deltaY = y - centerY;

        // Define the intensity of the rotation
        const rotateX = (deltaY / centerY) * -10; // Invert for natural feel
        const rotateY = (deltaX / centerX) * 10;

        // Apply the transform. The floating animation is handled by the 'float' keyframes,
        // so we only need to add the perspective rotation here.
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });

    // Reset card perspective when the mouse leaves the area
    leftPanel.addEventListener('mouseleave', () => {
        // Resetting the transform will allow the CSS animation to take over again smoothly.
        // We set a transition in the CSS for this.
        card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
    });
}

initializeGame();
