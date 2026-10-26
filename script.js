/* ScamShield — beginner-friendly, dependency-free interactions. */
"use strict";

const quizQuestions = [
  {
    question: "You receive a text saying your bank account will close unless you click a link in the next 10 minutes. What is the safest next step?",
    options: [
      "Click quickly so the account stays open",
      "Reply with your account details to confirm ownership",
      "Open the bank's official app or contact it using a trusted number",
      "Forward the message to friends to see if it is real"
    ],
    answer: 2,
    feedback: "Urgency is a common pressure tactic. Avoid the message link and verify through the bank's official app or a trusted contact method."
  },
  {
    question: "A recruiter offers you a job but says you must pay a fee to secure your position. What should you do?",
    options: [
      "Pay if the recruiter uses a professional logo",
      "Pause and independently verify the employer and offer",
      "Send the fee and ask for a receipt afterward",
      "Share your bank PIN to speed up onboarding"
    ],
    answer: 1,
    feedback: "An upfront payment demand is a serious warning sign. Verify the vacancy using the employer's official website and contact details you find independently."
  },
  {
    question: "Someone claiming to be support asks for the one-time code sent to your phone. Which response is safest?",
    options: [
      "Share it if they know your name",
      "Share only the first half of the code",
      "Ask them to send a different code",
      "Do not share it; contact the service through its official channel"
    ],
    answer: 3,
    feedback: "One-time codes can let someone access your account or approve an action. Never disclose them to someone who contacts you."
  },
  {
    question: "Which website address deserves the closest inspection?",
    options: [
      "A familiar domain typed directly into your browser",
      "A link with misspellings or extra words around a brand name",
      "A bookmarked official website you have used before",
      "An address confirmed through the organization's official app"
    ],
    answer: 1,
    feedback: "Lookalike domains can imitate real brands. Inspect the full hostname and use a trusted route rather than relying on a message link."
  },
  {
    question: "You sent money to someone you now suspect is a scammer. What should you do first?",
    options: [
      "Pay them again to unlock a refund",
      "Delete all messages immediately",
      "Contact your bank or payment provider through an official channel",
      "Post your full card and account details online to warn others"
    ],
    answer: 2,
    feedback: "Contact your bank or payment provider promptly to ask about stopping, recalling, or disputing the transaction. Preserve evidence and do not pay recovery fees."
  }
];

const quizContent = document.getElementById("quizContent");
const questionCounter = document.getElementById("questionCounter");
const progressPercent = document.getElementById("progressPercent");
const progressBar = document.getElementById("progressBar");
const backButton = document.getElementById("backButton");
const nextButton = document.getElementById("nextButton");
const quizFeedback = document.getElementById("quizFeedback");
let questionIndex = 0;
let selectedAnswers = Array(quizQuestions.length).fill(null);
let checkedAnswers = Array(quizQuestions.length).fill(false);

function renderQuestion() {
  const item = quizQuestions[questionIndex];
  const selected = selectedAnswers[questionIndex];
  const checked = checkedAnswers[questionIndex];
  questionCounter.textContent = `Question ${questionIndex + 1} of ${quizQuestions.length}`;
  const percent = Math.round(((questionIndex + 1) / quizQuestions.length) * 100);
  progressPercent.textContent = `${percent}%`;
  progressBar.style.width = `${percent}%`;
  quizFeedback.textContent = "";
  quizFeedback.className = "quiz-feedback";
  quizContent.innerHTML = "";

  const heading = document.createElement("h3");
  heading.className = "quiz-question";
  heading.textContent = item.question;
  quizContent.appendChild(heading);

  const options = document.createElement("div");
  options.className = "quiz-options";
  item.options.forEach((option, index) => {
    const label = document.createElement("label");
    label.className = "quiz-option";
    if (selected === index) label.classList.add("selected");
    if (checked && index === item.answer) label.classList.add("correct");
    if (checked && selected === index && selected !== item.answer) label.classList.add("incorrect");

    const radio = document.createElement("input");
    radio.type = "radio";
    radio.name = "quizAnswer";
    radio.value = String(index);
    radio.checked = selected === index;
    radio.disabled = checked;
    radio.addEventListener("change", () => {
      selectedAnswers[questionIndex] = index;
      renderQuestion();
    });

    const text = document.createElement("span");
    text.textContent = option;
    label.append(radio, text);
    options.appendChild(label);
  });
  quizContent.appendChild(options);

  backButton.disabled = questionIndex === 0;
  nextButton.disabled = selected === null && !checked;
  nextButton.textContent = checked
    ? (questionIndex === quizQuestions.length - 1 ? "View results" : "Next question →")
    : "Check answer";

  if (checked) {
    const correct = selected === item.answer;
    quizFeedback.textContent = `${correct ? "That's right. " : "Not quite. "}${item.feedback}`;
    quizFeedback.classList.add(correct ? "good" : "bad");
  }
}

function renderResults() {
  const score = checkedAnswers.reduce((total, checked, index) =>
    total + (checked && selectedAnswers[index] === quizQuestions[index].answer ? 1 : 0), 0);
  questionCounter.textContent = "Quiz complete";
  progressPercent.textContent = "100%";
  progressBar.style.width = "100%";
  quizContent.innerHTML = "";
  const result = document.createElement("div");
  result.className = "quiz-result";
  const scoreBadge = document.createElement("div");
  scoreBadge.className = "result-score";
  scoreBadge.textContent = `${score}/${quizQuestions.length}`;
  const heading = document.createElement("h3");
  heading.textContent = score === quizQuestions.length ? "Excellent awareness!" : score >= 3 ? "Good work — keep learning" : "Keep practicing";
  const paragraph = document.createElement("p");
  paragraph.textContent = score >= 4
    ? "You recognized most of the warning signs. Keep verifying unusual requests before clicking, sharing details, or paying."
    : "Review the warning signs and try again. Scams can be convincing, and pausing to verify is a skill you can build.";
  const restart = document.createElement("button");
  restart.className = "button button-primary";
  restart.type = "button";
  restart.textContent = "Try again";
  restart.addEventListener("click", () => {
    questionIndex = 0;
    selectedAnswers = Array(quizQuestions.length).fill(null);
    checkedAnswers = Array(quizQuestions.length).fill(false);
    renderQuestion();
  });
  result.append(scoreBadge, heading, paragraph, restart);
  quizContent.appendChild(result);
  backButton.disabled = true;
  nextButton.disabled = true;
  nextButton.textContent = "Completed";
  quizFeedback.textContent = "Your answers are handled in this page only; this site does not send them to a server.";
  quizFeedback.className = "quiz-feedback";
}

nextButton.addEventListener("click", () => {
  if (!checkedAnswers[questionIndex]) {
    if (selectedAnswers[questionIndex] === null) return;
    checkedAnswers[questionIndex] = true;
    renderQuestion();
    return;
  }
  if (questionIndex < quizQuestions.length - 1) {
    questionIndex += 1;
    renderQuestion();
  } else {
    renderResults();
  }
});
backButton.addEventListener("click", () => {
  if (questionIndex > 0) {
    questionIndex -= 1;
    renderQuestion();
  }
});
renderQuestion();

// Safety checklist: local page state only, no network or browser storage.
const checklistInputs = Array.from(document.querySelectorAll("#checklistItems input[type='checkbox']"));
const checkCount = document.getElementById("checkCount");
const checkProgress = document.getElementById("checkProgress");
function updateChecklist() {
  const checked = checklistInputs.filter(input => input.checked).length;
  checkCount.textContent = `${checked} of ${checklistInputs.length}`;
  checkProgress.style.width = `${(checked / checklistInputs.length) * 100}%`;
}
checklistInputs.forEach(input => input.addEventListener("change", updateChecklist));
document.getElementById("resetChecklist").addEventListener("click", () => {
  checklistInputs.forEach(input => { input.checked = false; });
  updateChecklist();
});
updateChecklist();

// Mobile navigation.
const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");
menuToggle.addEventListener("click", () => {
  const isOpen = mainNav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.textContent = isOpen ? "✕" : "☰";
});
mainNav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  mainNav.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.textContent = "☰";
}));

// Share using native share support where available, otherwise copy the current URL.
const toast = document.getElementById("toast");
let toastTimer;
function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2800);
}
document.getElementById("shareButton").addEventListener("click", async () => {
  const shareData = {
    title: "ScamShield — Scam Awareness Toolkit",
    text: "Free, practical guidance to recognize online scams and stay safer online.",
    url: window.location.href
  };
  try {
    if (navigator.share) {
      await navigator.share(shareData);
    } else if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(window.location.href);
      showToast("Page link copied. Share it with someone who may find it useful.");
    } else {
      showToast("Copy the page address from your browser to share this toolkit.");
    }
  } catch (error) {
    if (error && error.name !== "AbortError") showToast("You can copy the page address from your browser to share it.");
  }
});

document.getElementById("year").textContent = new Date().getFullYear();
