// scripts/auth.js
document.addEventListener('DOMContentLoaded', function () {
    console.log("Authentication script loaded"); // Debugging
    displayFriendCards();
    rotateQuotes();

    const form = document.getElementById('friendForm');
    if (form) {
        form.addEventListener('submit', function (e) {
            e.preventDefault();
            console.log("Form submitted"); // Debugging
            authenticateFriend();
        });
    }
});

function authenticateFriend() {
    const name = document.getElementById('name').value.trim();
    const secretCode = document.getElementById('secretCode').value;
    const birthdate = document.getElementById('birthdate').value;

    console.log("Trying to authenticate:", name); // Debugging

    // Check if friend exists (case insensitive)
    const friendEntry = Object.entries(window.friendsDatabase).find(
        ([friendName]) => friendName.toLowerCase() === name.toLowerCase()
    );

    if (friendEntry) {
        const [friendName, friendData] = friendEntry;
        console.log("Friend found:", friendName); // Debugging

        if (secretCode === friendData.secretCode && birthdate === friendData.birthdate) {
            console.log("Redirecting to:", `friends/${friendData.page}`); // Debugging
            window.location.href = `friends/${friendData.page}`;
        } else {
            console.log("Invalid credentials"); // Debugging
            showError("Invalid credentials! Please try again.");
        }
    } else {
        console.log("Friend not found"); // Debugging
        showError("Friend not found! Check your name.");
    }
}

// scripts/auth.js
function displayFriendCards() {
    const container = document.getElementById('friendCards');
    if (!container) return;

    container.innerHTML = '';

    // Add Demo card with full details
    if (window.friendsDatabase["Demo"]) {
        const demoData = window.friendsDatabase["Demo"];
        const demoCard = document.createElement('div');
        demoCard.className = 'friend-card';
        demoCard.innerHTML = `
            <h3>Demo</h3>
            <div class="emoji">👋</div>
            <div class="friend-meta">
                <small>Code: ${demoData.secretCode}</small>
                <small>Birthday: ${formatDate(demoData.birthdate)}</small>
                      
            </div>
            </div>
        `;

        demoCard.addEventListener('click', () => {
            document.getElementById('name').value = "Demo";
            document.getElementById('birthdate').value = demoData.birthdate;
            document.getElementById('secretCode').value = demoData.secretCode;
        });

        container.appendChild(demoCard);
    }

    // Add other friend cards (excluding Demo)
    Object.keys(window.friendsDatabase).forEach(name => {
        if (name !== "Demo") {
            const friendData = window.friendsDatabase[name];
            const card = document.createElement('div');
            card.className = 'friend-card';
            card.innerHTML = `
              
                <div class="emoji">👋</div>
                <div class="friend-meta">
                    <small>Birthday: ${formatDate(friendData.birthdate)}</small>
                </div>
            `;

            card.addEventListener('click', () => {
                document.getElementById('name').focus();
                document.getElementById('birthdate').value = friendData.birthdate;
                document.getElementById('secretCode').focus();
            });

            container.appendChild(card);
        }
    });
}

// Keep all other existing functions exactly the same
// (authenticateFriend, showError, rotateQuotes, etc.)

function formatDate(dateString) {
    const options = { month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
}

function showError(message) {
    const existingError = document.querySelector('.error-message');
    if (existingError) existingError.remove();

    const errorElement = document.createElement('div');
    errorElement.className = 'error-message';
    errorElement.textContent = message;
    errorElement.style.color = '#ff3333';
    errorElement.style.marginTop = '10px';
    errorElement.style.textAlign = 'center';

    const form = document.getElementById('friendForm');
    form.parentNode.insertBefore(errorElement, form.nextSibling);
}

// Quote rotation function
const friendshipQuotes = [
    "\"You're not weird. You're just limited edition!\"",
    "\"Friends buy you lunch. Best friends eat your lunch.\"",
    // ... keep all your existing quotes ...
];

function rotateQuotes() {
    const quoteElement = document.getElementById('quoteDisplay');
    if (!quoteElement) return;

    let currentIndex = 0;
    quoteElement.textContent = friendshipQuotes[currentIndex];

    setInterval(() => {
        currentIndex = (currentIndex + 1) % friendshipQuotes.length;
        quoteElement.style.opacity = 0;

        setTimeout(() => {
            quoteElement.textContent = friendshipQuotes[currentIndex];
            quoteElement.style.opacity = 1;
        }, 500);
    }, 5000);
}