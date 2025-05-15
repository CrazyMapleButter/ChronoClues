const dailyPuzzles = [
  {
    date: "2025-05-15",
    answer: 1998,
    clues: [
      "The first Harry Potter book is published.",
      "Google is founded.",
      "France wins the World Cup in men's soccer."
    ]
  },
  {
    date: "2025-05-16",
    answer: 1969,
    clues: [
      "Humans land on the Moon.",
      "The Beatles release Abbey Road.",
      "The first episode of Sesame Street is broadcast."
    ]
  },
];

const today = new Date().toISOString().slice(0, 10);
const puzzle = dailyPuzzles.find(p => p.date === today);

if (!puzzle) {
  document.getElementById("clues").innerHTML = "<p>No puzzle available for today.</p>";
} else {
  let attempts = 0;
  const maxAttempts = 6;

  document.getElementById("clues").innerHTML = puzzle.clues
    .map(clue => `<p>• ${clue}</p>`)
    .join("");

  function submitGuess() {
  const yearInput = document.getElementById("yearInput");
  const year = parseInt(yearInput.value);
  const feedbackDiv = document.getElementById("feedback");

  if (isNaN(year)) {
    feedbackDiv.innerHTML = "❗ Please enter a valid year.";
    return;
  }

  if (attempts >= maxAttempts) {
    feedbackDiv.innerHTML = `❌ No guesses left! The year was <strong>${puzzle.answer}</strong>.`;
    return;
  }

  attempts++;

  let feedback = "";

  if (year === puzzle.answer) {
    feedback += `<strong>✅ Correct! You got it in ${attempts} ${attempts === 1 ? 'guess' : 'guesses'}!</strong>`;
    yearInput.disabled = true;
  } else if (year < puzzle.answer) {
    feedback += `📈 The correct year is <strong>later</strong> than ${year}.<br>`;
    feedback += `🕐 ${maxAttempts - attempts} guess${maxAttempts - attempts === 1 ? '' : 'es'} left.`;
  } else {
    feedback += `📉 The correct year is <strong>earlier</strong> than ${year}.<br>`;
    feedback += `🕐 ${maxAttempts - attempts} guess${maxAttempts - attempts === 1 ? '' : 'es'} left.`;
  }

  if (attempts >= maxAttempts && year !== puzzle.answer) {
    feedback += `<br>❌ Game over! The correct year was <strong>${puzzle.answer}</strong>.`;
    yearInput.disabled = true;
  }

  feedbackDiv.innerHTML = feedback;
  yearInput.value = "";
  yearInput.focus();
}

  window.submitGuess = submitGuess;
}
