// Optional: Smooth scrolling effect
document.querySelectorAll(".sidebar a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});
var typed = new Typed("#element1", {
  strings: [
    "ALL API",
    "E-commerce template",
    "Portfolio-Template",
    "Food-Template",
    "Figm-template",
  ],
  typeSpeed: 50,
  loop: true,
});
let genratedJSON = "";
const burgerNames = [
  "Classic Burger",
  "Cheese Burger",
  "Bacon Burger",
  "Veggie BUrger",
  "Chicken Burger",
];
const ingredient = [
  "Lettuce",
  "Tomato",
  "Onion",
  "Pickles",
  "Bacon",
  "Cheese",
  "Chicken",
  "Beef",
  "Mushrooms",
];
const sizes = ["small", "Medium", "Large"];
const sauces = ["Ketchup", "Mustard", "Mayo", "BBQ", "Spicy Sauce"];
function getRandomElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}
function generateFakeAPI() {
  let fakeBurgers = [];
  for (let i = 0; i < 100; i++) {
    let burger = {
      id: i,
      name: getRandomElement(burgerNames),
      sizes: getRandomElement(sizes),
      price: (Math.random() * 10 + 5).toFixed(2),
      ingredient: Array.from({ length: 3 }, () => getRandomElement(ingredient)),
      sauce: getRandomElement(sauces),
      available: Math.random() > 0.5,
    };
    fakeBurgers.push(burger);
  }
  generatedJSON = JSON.stringify(fakeBurgers, null, 2);
  const jsonDisplay = document.getElementById("jsonDisplay");
  jsonDisplay.style.display = "block";
  jsonDisplay.textContent = generatedJSON;
  const downloadBtnburger = document.getElementById("downloadBtnburger");
  downloadBtn.style.display = "inline-block";
  const downloadBtndress = document.getElementById("downloadBtndress");
  downloadBtn.style.display = "inline-block";
}
function downloadFakeAPI() {
  const blob = new Blob([generatedJSON], { type: "application/json" });
  const url = URL.createObjectURL(blob);

  // Create a temporary download link and trigger a click
  const a = document.createElement("a");
  a.href = url;
  a.download = "fake-api.json";
  a.click();

  // Revoke the object URL after the download
  URL.revokeObjectURL(url);
}
document.getElementById("apiForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const url = document.getElementById("url").value;
  const method = document.getElementById("method").value;
  const requestBody = document.getElementById("requestBody").value;

  // Set up fetch options
  let options = {
    method: method,
    headers: {
      "Content-Type": "application/json",
    },
  };

  // Add body only if method is POST or PUT
  if (method === "POST" || method === "PUT") {
    options.body = requestBody ? requestBody : "{}";
  }

  // Send the API request
  fetch(url, options)
    .then((response) => response.json())
    .then((data) => {
      document.getElementById("responseText").textContent = JSON.stringify(
        data,
        null,
        2
      );
    })
    .catch((error) => {
      document.getElementById("responseText").textContent = `Error: ${error}`;
    });
});
