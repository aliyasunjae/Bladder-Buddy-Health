function showPage(page) {
  const pages = ["home", "learn", "track", "flashcards", "quiz"];

  pages.forEach(p => {
    let el = document.getElementById(p);
    if (el) {
      el.classList.add("hidden");
    }
  });

  let currentPage = document.getElementById(page);
  if (currentPage) {
    currentPage.classList.remove("hidden");
  }
}

/* NAV */
function showPage(page) {
  document.querySelectorAll(".page").forEach(p => p.classList.add("hidden"));
  document.getElementById(page).classList.remove("hidden");
}

/* TRACK */
let water = 0;

function addWater() {
  if (water < 8) water++;
  updateWater();
}

function resetWater() {
  water = 0;
  updateWater();
}

function updateWater() {
  document.getElementById("water").innerText = "💧 " + water + " / 8";
  document.getElementById("water-fill").style.height = (water/8)*100 + "%";

  let msg = document.getElementById("message");
  if (water === 8) msg.innerText = "🎉 Goal reached!";
  else if (water >= 5) msg.innerText = "🔥 Almost there!";
  else if (water > 0) msg.innerText = "💪 Keep going!";
  else msg.innerText = "";
}

/* LEARN */
function toggleAccordion(el) {
  let content = el.querySelector(".content");
  content.style.display = content.style.display === "block" ? "none" : "block";
}

/* FLASHCARD */
let flashcards = [
  { q: "Dark yellow urine means?", a: "You are dehydrated 💧 Drink water & monitor urine color" },

  { q: "How to keep bladder healthy?", a: "Drink water regularly & don’t hold urine 🚫" },

  { q: "Hygiene care tips?", a: "Wipe front → back, keep dry, don’t hold urine 🧼" },

  { q: "When to see a doctor?", a: "Pain, blood, bubbles or fever 🚨" },

  { q: "How to prevent bedwetting?", a: "Pee before sleep & reduce drinks at night 🌙" },

  { q: "Tips to manage leakage at school?", a: "Bring clothes & inform teacher 👕" },

  { q: "Golden rule for bladder health?", a: "🚫 DO NOT HOLD YOUR URINE!" },

  { q: "Holding urine frequently causes?", a: "UTI, pain, cramps, kidney stones ⚠️" },

  { q: "Myths:", a: "Only females & adult can have leakage. Water does not helps 💧" },
  
  { q: "Facts:", a: "Both males & students can have leakage. Water helps 💧" },

  { q: "Drinks that affecting bladder health", a: "Soda, acidic drinks & sweeteners 🥤" },

  { q: "Danger signs in urine?", a: "Blood, cloudy urine, foam, strong smell 🚨" },

  { q: "How often should you pee?", a: "6–7 times per day 🚽" },

  { q: "Importance of emptying bladder?", a: "Prevents infection (bacteria growth) 🦠" },

  { q: "Enough water indicator?", a: "Light yellow urine 💛" },

  { q: "Night urination normal?", a: "Sometimes yes, frequent → check doctor" },

  { q: "Does coffee affect bladder?", a: "Yes, irritates bladder & increases urination ☕" },

  { q: "Daily water intake?", a: "1.5–2 liters 💧" },

  { q: "How much urine can the bladder hold?", a: "Adults ~500ml, children ~350-450ml" },

  { q: "What is bedwetting?", a: "Urine release during sleep (nocturnal enuresis)" }
];

// ===== FLASHCARD LOGIC =====
let index = 0;

function showFlashcard() {

  document.getElementById("cardFront").innerText = flashcards[index].q;

  document.getElementById("cardBack").innerText = flashcards[index].a;

  document.getElementById("cardCount").innerText =

    (index + 1) + "/" + flashcards.length;

}

function nextFlashcard() {

  index = (index + 1) % flashcards.length;

  showFlashcard();

  document.querySelector(".card").classList.remove("flip");

}

function prevFlashcard() {

  index = (index - 1 + flashcards.length) % flashcards.length;

  showFlashcard();

  document.querySelector(".card").classList.remove("flip");

}

function flipCard() {

  document.querySelector(".card").classList.toggle("flip");

}

// LOAD FIRST CARD
showFlashcard();

/* QUIZ */
let current = 0;
let score = 0;
let answered = false;

const questions = [
  {
    q: "How many glasses of water per day?",
    A: "2–3",
    B: "4–5",
    C: "6–8",
    D: "Only when thirsty",
    correct: "C"
  },
  {
    q: "Is it okay to hold urine for long?",
    A: "Yes",
    B: "No",
    C: "Sometimes",
    D: "Only at school",
    correct: "B"
  },
  {
    q: "Dark yellow urine means:",
    A: "Healthy",
    B: "Dehydrated",
    C: "Too much water",
    D: "Normal",
    correct: "B"
  },
  {
    q: "Which drink is BEST?",
    A: "Coffee",
    B: "Soft drink",
    C: "Water",
    D: "Energy drink",
    correct: "C"
  },
  {
    q: "Normal pee frequency per day?",
    A: "1–2",
    B: "2–3",
    C: "4–8",
    D: "Once",
    correct: "C"
  },
  {
    q: "Holding urine too long can cause:",
    A: "Stronger bladder",
    B: "UTI",
    C: "Better health",
    D: "No effect",
    correct: "B"
  },
  {
    q: "When should you go toilet?",
    A: "When very full",
    B: "When urge comes",
    C: "Once daily",
    D: "Before sleep only",
    correct: "B"
  },
  {
    q: "Warning sign of bladder problem?",
    A: "Clear urine",
    B: "No smell",
    C: "Pain when peeing",
    D: "Feeling normal",
    correct: "C"
  },
  {
    q: "After sports you should:",
    A: "Ignore",
    B: "Drink water",
    C: "Sleep",
    D: "Drink coffee",
    correct: "B"
  },
  {
    q: "Good hygiene includes:",
    A: "No washing",
    B: "Same underwear",
    C: "Clean & dry",
    D: "Avoid toilet",
    correct: "C"
  }
];

function loadQuestion() {
  answered = false; // ✅ ADD THIS LINE

  let q = questions[current];

  document.getElementById("progress").innerText =
    "Question " + (current + 1) + "/" + questions.length;

  document.getElementById("question").innerText = q.q;

  document.getElementById("btnA").innerText = q.A;
  document.getElementById("btnB").innerText = q.B;
  document.getElementById("btnC").innerText = q.C;
  document.getElementById("btnD").innerText = q.D;

  document.getElementById("result").innerText = "";

  resetColors();
}

function checkAnswer(choice) {
  if (answered) return;
  answered = true;

  let correct = questions[current].correct;

  if (choice === correct) {
    document.getElementById("btn" + choice).style.background = "green";
    score++;
  } else {
    document.getElementById("btn" + choice).style.background = "red";
    document.getElementById("btn" + correct).style.background = "green";
  }

  // disable all buttons visually
  ["A","B","C","D"].forEach(l => {
    document.getElementById("btn" + l).style.opacity = "0.7";
  });

  setTimeout(() => {
    nextQuestion();
  }, 1000);
}

function nextQuestion() {
  current++;

  if (current < questions.length) {
    loadQuestion();
  } else {
    showScore();
  }
}

function showScore() {
  document.getElementById("quiz").innerHTML = `
    <h2>🎉 Your Score: ${score}/${questions.length}</h2>
    <p>${getMessage()}</p>
    <button onclick="restartQuiz()">Restart 🔁</button>
  `;
}

function getMessage() {
  if (score <= 2) return "😬 Tahan Master";
  if (score <= 4) return "🙂 Getting There";
  return "😎 Hydration Pro";
}

function restartQuiz() {
  current = 0;
  score = 0;

  document.getElementById("quiz").innerHTML = `
    <h2>🎮 Bladder Quiz</h2>
    <p id="progress"></p>
    <p id="question"></p>

    <div class="answers">
      <button id="btnA" onclick="checkAnswer('A')"></button>
      <button id="btnB" onclick="checkAnswer('B')"></button>
      <button id="btnC" onclick="checkAnswer('C')"></button>
      <button id="btnD" onclick="checkAnswer('D')"></button>
    </div>

    <p id="result"></p>
    <button onclick="nextQuestion()">Next ➡️</button>
  `;

  loadQuestion(); // reload first question properly
}

function resetColors() {
  ["A","B","C","D"].forEach(letter => {
    let btn = document.getElementById("btn" + letter);
    btn.style.background = "#0077ff"; // back to blue
    btn.style.color = "white";
  });
}