// Friend Data Configuration - ONLY PLACE TO MAKE CONTENT CHANGES
const friendData = {
    name: "Soubik",
    nickname: "Mera Smart bhai!",
    emoji: "👓",
    photo: "profile.jpg",
    birthday: "sep 29",
    zodiac: "🐍",
    superpower: "Talented, topper, codder & photographer!",
    pyaar: "pink clothes? ahem ahem",
    moodEmoji: "🤪",
    primaryColor: "#ff6b6b",
    secondaryColor: "#ca2f2f",
    accentColor: "#ffe66d",
    memories: {
        howWeMet: "BEST bus, yaad hai hum sab ek sath the last seat pe baithe the🥺 humne selfie bhi li thi😂💓",
        funnyMoment: "Staircase, tere and mere gharpe , garden area ,tiffin, ehsaas , readingroom and many places",
        photo: "card.jpg",
        insideJoke: "tu mera photo le mai tera leta hu😂 *wink*"
    },
    funFacts: {
        weirdHabit: "tu mast hai re!😂",
        catchphrase: "Coding kr nikhil😭",
        animal: "u would be rabbit🐇"
    },
    awards: [
        "medal for Codding!",
        "Award for Codding!",
        "Code lover!"
    ],
    quote: "I'm not arguing, I'm just explaining why I'm right!",
    social: {
        instagram: "https://www.instagram.com/nikhil__nk12?igsh=MWw3MnViMXphaTk5",
        snapchat: "https://www.snapchat.com/add/nikhil122004?share_id=Ppae_7GqDhQ&locale=en-IN",
    },
    status: "Procrastinating like a pro",
    game: {
        correctAnswer: "Bhaii...code krle!",
        options: [
            "Bhaii...code krle!",
            "Bhaii...photo lele!",
            "bhai...muje bhi bula leta!"
        ]
    }
};

// DOM Content Loaded - GENERATES ALL HTML DYNAMICALLY
document.addEventListener('DOMContentLoaded', function () {
    // Generate the entire page
    document.getElementById('app').innerHTML = generatePage();

    // Set up interactive elements
    setupMiniGame();
    addConfetti();

    // Set creation date
    document.getElementById('creationDate').textContent = new Date().toLocaleDateString('en-US', {
        month: 'long',
        year: 'numeric'
    });
});

// Generate the entire page HTML
function generatePage() {
    return `
        <!-- Welcome Banner -->
        <section class="hero" id="hero">
            <div class="hero-content">
                <h1 id="greeting">Hey <span id="friendName">${friendData.name}</span>! <span id="emoji">${friendData.emoji}</span></h1>
                <p id="subtitle">We've been expecting you...</p>
                <div class="speech-bubble pop-in">Ready for some nostalgia?</div>
            </div>
        </section>

        <!-- Profile Section -->
        <section class="profile card">
            <div class="profile-pic-frame">
                <img src="${friendData.photo}" alt="${friendData.name}'s Profile Picture" id="profilePic">
                <div class="comic-dots"></div>
            </div>
            <div class="profile-info">
                <h2><span id="nickname">${friendData.nickname}</span> <span id="statusEmoji">${friendData.moodEmoji}</span></h2>
                <div class="profile-grid">
                    <div class="profile-item">
                        <span class="label">Birthday:</span>
                        <span id="birthday">${friendData.birthday}</span>
                        <span id="zodiac" class="zodiac-badge">${friendData.zodiac}</span>
                    </div>
                    <div class="profile-item">
                        <span class="label">Superpower:</span>
                        <span id="superpower">${friendData.superpower}</span>
                    </div>
                    <div class="profile-item">
                        <span class="label">tera pehla pyaar:</span>
                        <span id="pyaar">${friendData.pyaar}</span>
                        <span id="moodEmoji">${friendData.moodEmoji}</span>
                    </div>
                </div>
            </div>
        </section>

        <!-- Memory Lane -->
        <section class="memory-lane">
            <h2 class="section-title">Memory Lane <span class="emoji">🛣️</span></h2>
            <div class="memory-gallery">
                <div class="memory-card" id="howWeMet">
                    <h3>How We Met</h3>
                    <p class="memory-text">${friendData.memories.howWeMet}</p>
                </div>
                <div class="memory-card" id="funnyMoment">
                    <h3>Funny Moment</h3>
                    <p class="memory-text">${friendData.memories.funnyMoment}</p>
                </div>
                <div class="memory-card" id="photoMemory">
                    <img src="${friendData.memories.photo}" alt="Memory with ${friendData.name}" class="memory-photo">
                </div>
                <div class="memory-card" id="insideJoke">
                    <h3>Inside Joke</h3>
                    <div class="comic-bubble">"${friendData.memories.insideJoke}"</div>
                </div>
            </div>
        </section>

        <!-- Fun Facts -->
        <section class="fun-facts card">
            <h2 class="section-title">Fun Facts <span class="emoji">🤪</span></h2>
            <div class="fact-bubbles">
                <div class="bubble wobble">Weird habit: <span id="weirdHabit">${friendData.funFacts.weirdHabit}</span></div>
                <div class="bubble wobble">Catchphrase: "<span id="catchphrase">${friendData.funFacts.catchphrase}</span>"</div>
                <div class="bubble wobble">If you were a animal: <span id="animal">${friendData.funFacts.animal}</span></div>
            </div>
        </section>

        <!-- Wall of Fame -->
        <section class="wall-of-fame">
            <h2 class="section-title">Wall of Fame <span class="emoji">🏆</span></h2>
            <div class="trophies">
                ${friendData.awards.map(award => `
                    <div class="trophy spin">
                        <div class="trophy-icon">${getTrophyIcon(award)}</div>
                        <div class="trophy-title">${award}</div>
                    </div>
                `).join('')}
            </div>
        </section>

        <!-- Custom Quote -->
        <section class="custom-quote card">
            <div class="quote-bubble">
                <p id="signatureQuote">"${friendData.quote}"</p>
                <div class="quote-arrow"></div>
            </div>
        </section>

        <!-- Social Zone -->
        <section class="social-zone">
            <h2 class="section-title">Find Me Online <span class="emoji">🌐</span></h2>
            <div class="social-icons">
                <a href="${friendData.social.instagram}" class="social-icon pulse" id="instagram">📸</a>
                <a href="${friendData.social.snapchat}" class="social-icon pulse" id="snapchat">👻</a>
               
            </div>
            <div class="status-update">
                Current status: <span id="currentStatus">${friendData.status}</span>
            </div>
        </section>

        <!-- Mini Game -->
        <section class="mini-game card">
            <h2 class="section-title">Guess Our Inside Joke <span class="emoji">🎮</span></h2>
            <div class="game-container">
                <div class="game-options">
                    ${friendData.game.options.map(option => `
                        <button class="game-btn" data-answer="${option === friendData.game.correctAnswer ? 'correct' : 'wrong'}">
                            "${option}"
                        </button>
                    `).join('')}
                </div>
                <div id="gameFeedback"></div>
            </div>
        </section>

        <!-- Closing Message -->
        <section class="closing-message">
            <div class="message-content">
                <h2>Thanks for being awesome!</h2>
                <p>P.S. You're stuck with me forever <span class="emoji">😎</span></p>
                <div class="confetti"></div>
            </div>
        </section>

        <!-- Footer -->
        <footer>
            <p>Made with love, memes, and 99% friendship</p>
            <a href="../../index.html" class="home-btn">Back to Friends Forever</a>
            <p class="signature">Created on <span id="creationDate">June 2023</span> by NIkkk</p>
        </footer>
    `;
}

// Helper function for trophy icons
function getTrophyIcon(award) {
    if (award.includes("medal")) return "🥇";
    if (award.includes("award")) return "🌙";
    if (award.includes("lover")) return "🍕";
    return "🏆";
}

// Setup the mini game
function setupMiniGame() {
    const buttons = document.querySelectorAll('.game-btn');
    const feedback = document.getElementById('gameFeedback');

    buttons.forEach(button => {
        button.addEventListener('click', function () {
            if (this.dataset.answer === 'correct') {
                feedback.textContent = "🎉 Correct! That's our secret joke!";
                feedback.style.color = "green";
                setTimeout(() => {
                    feedback.innerHTML += `<div class="hidden-message">You're the best! Here's a secret: NIK loves you!</div>`;
                }, 1000);
            } else {
                feedback.textContent = "🤔 Nope, try again!";
                feedback.style.color = "red";
            }
        });
    });
}

// Add confetti effect to closing message
function addConfetti() {
    const colors = [friendData.primaryColor, friendData.secondaryColor, friendData.accentColor, '#ffffff'];
    const confettiContainer = document.querySelector('.confetti');

    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti-piece';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.animationDuration = (Math.random() * 3 + 2) + 's';
        confetti.style.animationDelay = (Math.random() * 2) + 's';
        confetti.style.opacity = Math.random() * 0.5 + 0.5;
        confetti.style.width = (Math.random() * 10 + 5) + 'px';
        confetti.style.height = (Math.random() * 10 + 5) + 'px';
        confettiContainer.appendChild(confetti);
    }
}

// Add CSS for confetti via JavaScript
const style = document.createElement('style');
style.textContent = `
    .confetti-piece {
        position: absolute;
        animation: confetti-fall linear infinite;
        transform: rotate(45deg);
    }
    
    @keyframes confetti-fall {
        0% { 
            top: -10px; 
            transform: rotate(45deg) translateX(0);
        }
        100% { 
            top: 100vh; 
            transform: rotate(45deg) translateX(100px);
        }
    }
    
    .hidden-message {
        margin-top: 1rem;
        animation: fadeIn 1s ease;
    }
`;
document.head.appendChild(style);