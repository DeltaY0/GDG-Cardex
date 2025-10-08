const suits = ['h', 'd', 'c', 's'];
const ranks = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

const deck = [];

for (const suit of suits) {
    for (const rank of ranks) {
        deck.push(suit + rank);
    }
}

const back = '../res/deck/back.png';

const questions = {
    hA: {
        A: "What is your favorite color?", AA: "answer to A side",
        B: "What is your favorite animal?", BB: "answer to B side"
    },
    hK: {
        A: "What is your favorite food?",
        B: "What is your favorite drink?", AA: "Pizza", BB: "Coffee"
    },
    hQ: {
        A: "What is your favorite movie?",
        B: "What is your favorite book?", AA: "The Matrix", BB: "The Hobbit"
    },
    hJ: {
        A: "What is your favorite song?",
        B: "What is your favorite band?", AA: "Bohemian Rhapsody", BB: "Queen"
    },
    h10: {
        A: "What is your favorite TV show?",
        B: "What is your favorite podcast?", AA: "Breaking Bad", BB: "The Joe Rogan Experience"
    },
    h9: {
        A: "What is your favorite sport?",
        B: "What is your favorite team?", AA: "Soccer", BB: "Manchester United"
    },
    h8: {
        A: "What is your favorite hobby?",
        B: "What is your favorite game?", AA: "Playing guitar", BB: "The Legend of Zelda"
    },
    h7: {
        A: "What is your favorite place to travel?",
        B: "What is your favorite city?", AA: "Japan", BB: "Kyoto"
    },
    h6: {
        A: "What is your favorite season?",
        B: "What is your favorite holiday?", AA: "Autumn", BB: "Christmas"
    },
    h5: {
        A: "What is your favorite thing to do on a rainy day?",
        B: "What is your favorite thing to do on a sunny day?", AA: "Read a book", BB: "Go to the beach"
    },
    h4: {
        A: "What is your favorite thing to do with friends?",
        B: "What is your favorite thing to do alone?", AA: "Play board games", BB: "Watch a movie"
    },
    h3: {
        A: "What is your favorite memory?",
        B: "What is your biggest dream?", AA: "My first concert", BB: "To travel the world"
    },
    h2: {
        A: "What is your biggest fear?",
        B: "What is your biggest accomplishment?", AA: "Spiders", BB: "Graduating college"
    },
    dA: {
        A: "What is your favorite color?",
        B: "What is your favorite animal?", AA: "Blue", BB: "Dog"
    },
    dK: {
        A: "What is your favorite food?",
        B: "What is your favorite drink?", AA: "Sushi", BB: "Green Tea"
    },
    dQ: {
        A: "What is your favorite movie?",
        B: "What is your favorite book?", AA: "Inception", BB: "1984"
    },
    dJ: {
        A: "What is your favorite song?",
        B: "What is your favorite band?", AA: "Stairway to Heaven", BB: "Led Zeppelin"
    },
    d10: {
        A: "What is your favorite TV show?",
        B: "What is your favorite podcast?", AA: "Game of Thrones", BB: "Hardcore History"
    },
    d9: {
        A: "What is your favorite sport?",
        B: "What is your favorite team?", AA: "Basketball", BB: "Los Angeles Lakers"
    },
    d8: {
        A: "What is your favorite hobby?",
        B: "What is your favorite game?", AA: "Photography", BB: "Chess"
    },
    d7: {
        A: "What is your favorite place to travel?",
        B: "What is your favorite city?", AA: "Italy", BB: "Rome"
    },
    d6: {
        A: "What is your favorite season?",
        B: "What is your favorite holiday?", AA: "Spring", BB: "New Year's Eve"
    },
    d5: {
        A: "What is your favorite thing to do on a rainy day?",
        B: "What is your favorite thing to do on a sunny day?", AA: "Bake cookies", BB: "Go for a hike"
    },
    d4: {
        A: "What is your favorite thing to do with friends?",
        B: "What is your favorite thing to do alone?", AA: "Go to a concert", BB: "Listen to music"
    },
    d3: {
        A: "What is your favorite memory?",
        B: "What is your biggest dream?", AA: "Family vacation", BB: "To write a book"
    },
    d2: {
        A: "What is your biggest fear?",
        B: "What is your biggest accomplishment?", AA: "Heights", BB: "Learning a new language"
    },
    cA: {
        A: "What is your favorite color?",
        B: "What is your favorite animal?", AA: "Green", BB: "Cat"
    },
    cK: {
        A: "What is your favorite food?",
        B: "What is your favorite drink?", AA: "Tacos", BB: "Margarita"
    },
    cQ: {
        A: "What is your favorite movie?",
        B: "What is your favorite book?", AA: "Pulp Fiction", BB: "The Great Gatsby"
    },
    cJ: {
        A: "What is your favorite song?",
        B: "What is your favorite band?", AA: "Hotel California", BB: "The Eagles"
    },
    c10: {
        A: "What is your favorite TV show?",
        B: "What is your favorite podcast?", AA: "The Office", BB: "My Favorite Murder"
    },
    c9: {
        A: "What is your favorite sport?",
        B: "What is your favorite team?", AA: "Baseball", BB: "New York Yankees"
    },
    c8: {
        A: "What is your favorite hobby?",
        B: "What is your favorite game?", AA: "Gardening", BB: "Monopoly"
    },
    c7: {
        A: "What is your favorite place to travel?",
        B: "What is your favorite city?", AA: "France", BB: "Paris"
    },
    c6: {
        A: "What is your favorite season?",
        B: "What is your favorite holiday?", AA: "Summer", BB: "Thanksgiving"
    },
    c5: {
        A: "What is your favorite thing to do on a rainy day?",
        B: "What is your favorite thing to do on a sunny day?", AA: "Watch a documentary", BB: "Have a picnic"
    },
    c4: {
        A: "What is your favorite thing to do with friends?",
        B: "What is your favorite thing to do alone?", AA: "Have a bonfire", BB: "Go for a walk"
    },
    c3: {
        A: "What is your favorite memory?",
        B: "What is your biggest dream?", AA: "High school graduation", BB: "To start a business"
    },
    c2: {
        A: "What is your biggest fear?",
        B: "What is your biggest accomplishment?", AA: "Public speaking", BB: "Running a marathon"
    },
    sA: {
        A: "What is your favorite color?",
        B: "What is your favorite animal?", AA: "Red", BB: "Lion"
    },
    sK: {
        A: "What is your favorite food?",
        B: "What is your favorite drink?", AA: "Steak", BB: "Whiskey"
    },
    sQ: {
        A: "What is your favorite movie?",
        B: "What is your favorite book?", AA: "The Godfather", BB: "To Kill a Mockingbird"
    },
    sJ: {
        A: "What is your favorite song?",
        B: "What is your favorite band?", AA: "Smells Like Teen Spirit", BB: "Nirvana"
    },
    s10: {
        A: "What is your favorite TV show?",
        B: "What is your favorite podcast?", AA: "Stranger Things", BB: "Serial"
    },
    s9: {
        A: "What is your favorite sport?",
        B: "What is your favorite team?", AA: "American Football", BB: "Green Bay Packers"
    },
    s8: {
        A: "What is your favorite hobby?",
        B: "What is your favorite game?", AA: "Woodworking", BB: "Poker"
    },
    s7: {
        A: "What is your favorite place to travel?",
        B: "What is your favorite city?", AA: "Spain", BB: "Barcelona"
    },
    s6: {
        A: "What is your favorite season?",
        B: "What is your favorite holiday?", AA: "Winter", BB: "Halloween"
    },
    s5: {
        A: "What is your favorite thing to do on a rainy day?",
        B: "What is your favorite thing to do on a sunny day?", AA: "Solve a puzzle", BB: "Go swimming"
    },
    s4: {
        A: "What is your favorite thing to do with friends?",
        B: "What is your favorite thing to do alone?", AA: "Go bowling", BB: "Meditate"
    },
    s3: {
        A: "What is your favorite memory?",
        B: "What is your biggest dream?", AA: "Learning to ride a bike", BB: "To own a home"
    },
    s2: {
        A: "What is your biggest fear?",
        B: "What is your biggest accomplishment?", AA: "Failure", BB: "Building this app"
    }
};

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
        const imagePath = `../res/deck/${selectedRank}_${selectedSuit}.png`;

        // Set the back of the card to the chosen card image *before* flipping
        cardImageBack.src = imagePath;

        // Flip the card by adding the 'is-flipped' class
        const cardElement = document.querySelector('.card');
        cardElement.classList.add('is-flipped');

        // Get question and randomly choose side A or B
        const question = questions[currentCardId];
        if (Math.random() < 0.5) {
            questionSide = 'A';
            questionText.textContent = `Side A: ${question.A}`;
        } else {
            questionSide = 'B';
            questionText.textContent = `Side B: ${question.B}`;
        }

        // Update UI visibility
        selectionControls.classList.add('hidden');
        suitControls.classList.add('hidden');
        showAnswerButton.classList.remove('hidden');
    }
});

showAnswerButton.addEventListener('click', () => {
    // Construct the answer key ('AA' or 'BB') and display the answer
    const answerKey = questionSide + questionSide;
    const answer = questions[currentCardId][answerKey];
    questionText.innerHTML += `<br><br><strong>Answer:</strong> ${answer}`;

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
    suitControls.classList.remove('hidden');

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
