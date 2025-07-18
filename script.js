document.addEventListener("DOMContentLoaded", () => {
  const quotes = [
    "Discipline is the bridge between goals and accomplishment. – Jim Rohn",
    "Start where you are. Use what you have. Do what you can. – Arthur Ashe",
    "If it doesn’t challenge you, it won’t change you. – Fred DeVito",
    "You are confined only by the walls you build yourself.",
    "Success doesn’t come to you. You go to it. – Marva Collins",
    "Wake up with determination. Go to bed with satisfaction.",
    "Great things never come from comfort zones.",
    "Push yourself, because no one else is going to do it for you.",
    "Be stronger than your excuses.",
    "Small progress is still progress.",
    "A winner is just a loser who tried one more time. – George M. Moore Jr.",
    "Don't watch the clock; do what it does. Keep going. – Sam Levenson",
    "Challenges are what make life interesting. – Joshua J. Marine",
    "Dreams don’t work unless you do. – John C. Maxwell",
    "Don’t let yesterday take up too much of today. – Will Rogers",
    "Work hard in silence, let success make the noise.",
    "Stay away from those people who try to disparage your ambitions. – Mark Twain",
    "Education is the most powerful weapon you can use to change the world. – Nelson Mandela",
    "If you're going through hell, keep going. – Winston Churchill",
    "Do something today that your future self will thank you for."
  ];

  const quoteText = document.getElementById("quoteText");
  const quoteContainer = document.getElementById("quoteContainer");
  const newQuoteBtn = document.getElementById("newQuoteBtn");

  const buttonColors = [
    "#ff6f61", "#ffb347", "#90ee90", "#6a5acd", "#00bcd4",
    "#e91e63", "#009688", "#ff9800", "#673ab7", "#3f51b5"
  ];

  async function fetchImage(keyword) {
    const apiKey = "wT5h2gunsOKt3LpngIiWFhCccROJsOduGG6skubmd6g";
    try {
      const response = await fetch(`https://api.unsplash.com/photos/random?query=${keyword}&client_id=${apiKey}`);
      const data = await response.json();
      return data.urls?.full || "";
    } catch (error) {
      console.error("Image fetch failed:", error);
      return "";
    }
  }

  async function showNewQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const selectedQuote = quotes[randomIndex];
    quoteText.innerText = selectedQuote;

    const keyword = selectedQuote.split(" ").slice(0, 3).join(" ");
    const imageUrl = await fetchImage(keyword);
    if (imageUrl) {
      document.body.style.backgroundImage = `url('${imageUrl}')`;
    }

    // Random button color
    const randomButtonColor = buttonColors[Math.floor(Math.random() * buttonColors.length)];
    newQuoteBtn.style.backgroundColor = randomButtonColor;
    newQuoteBtn.style.color = "#fff";
    quoteText.style.color = "#ffffff";  // Always white on dark container
  }

  newQuoteBtn.addEventListener("click", showNewQuote);
  showNewQuote();
});











