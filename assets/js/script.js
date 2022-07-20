// variables defined
var formEl = document.querySelector("#form-box");
var submitBtnEl = document.querySelector("#submit");
var foodImageEl = document.querySelector("#food-image");
var quoteTypeEl = document.querySelector("#quote-type");
var selectFoodEl = document.querySelector("#select-food");
var authorSpace = document.querySelector("#quote-author");
var quoteSpace = document.querySelector("#quote");
var secondServingBtn = document.querySelector("#second-serving");
var priorSearchesEl = document.querySelector("#prior-searches");
var priorSearchList = document.querySelector("#prior-search-list");
var foodTypeInput 
var quoteTypeInput
var foodObj = {}
var quoteObj = {}
    
// materialize says we must initialize the select element for the dropdown list. 
document.addEventListener('DOMContentLoaded', function() {
var elems = document.querySelectorAll('select');
var instances = M.FormSelect.init(elems);
});

   // capture user food choice
var getFoodType = function() {
    foodTypeInput = event.target.value.trim();
};
    
    // fetch and display food image
var getFoodImage = function(event) {
    var foodApiUrl = "https://foodish-api.herokuapp.com/api/images/" + foodTypeInput + "/";
    fetch(foodApiUrl).then(function(response) {
        if(response.ok) {
            response.json().then(function(data) {
                // display random food image
                var randomImage = data.image;
                foodImageEl.setAttribute("src", randomImage);
                // save food type and image
                saveFood(foodTypeInput, randomImage);
                console.log(foodTypeInput, randomImage);
            })
        }
    })   
};

// capture user quote topic
var getQuoteType = function() {
    quoteTypeInput = event.target.value.trim();
};

//   fetch quote from API
var getQuote = function() {
    var quoteApiUrl = "https://api.quotable.io/random?tags=" + quoteTypeInput;
      fetch(quoteApiUrl).then(function(response) {
          if(response.ok) {
              response.json().then(function(data) {
               //display fetched quote and quote author 
                var randomQuote = data.content;
                quoteSpace.textContent =  '"' + randomQuote + '"';
                var quoteAuthor = data.author;
                authorSpace.textContent = quoteAuthor;
                // save quote type, quote and author
                var quoteWithAuthor = randomQuote + "/" + quoteAuthor;
                saveQuote(quoteTypeInput, quoteWithAuthor);
                console.log(quoteTypeInput, quoteWithAuthor)
                displaySavedSearches();
              })
          }
      })
};

// get food and quote data & display on page upon "submit"
var getData = function(event) {
    event.preventDefault();
    getFoodImage(getFoodType);
    getQuote(getQuoteType);
}   
   
// store food data in local storage
function saveFood(foodType, foodUrl) {
    foodObj = {
        type: foodType,
        image: foodUrl
    };
    var foodArr = JSON.parse(localStorage.getItem("foodArr")) || [];
    foodArr.push(foodObj);
    localStorage.setItem("foodArr", JSON.stringify(foodArr));
};

// store quote data in local storage
function saveQuote(quoteType, quoteUrl) {
    quoteObj = {
        type: quoteType,
        data: quoteUrl
    };
    var quoteArr = JSON.parse(localStorage.getItem("quoteArr")) || [];
    quoteArr.push(quoteObj);
    localStorage.setItem("quoteArr", JSON.stringify(quoteArr));
};

// display data from local storage as links
var displaySavedSearches = function() {
    var foodArr = JSON.parse(localStorage.getItem("foodArr")) || [];
    var quoteArr = JSON.parse(localStorage.getItem("quoteArr")) || [];
    priorSearchesEl.innerHTML = '';
    // loop through both arrays to create hyperlinks
     quoteArr.forEach((type1, index) => {
        const type2 = foodArr[index];
        var savedQuote = document.createElement("li");
        priorSearchesEl.appendChild(savedQuote);
        var savedQuoteLink = document.createElement("a");
        savedQuoteLink.textContent = type1.type + "/" + type2.type;
        savedQuoteLink.classList = "links";
        savedQuoteLink.setAttribute("href", "#return")
        savedQuoteLink.setAttribute("data-image", type2.image)
        savedQuoteLink.setAttribute("data-quote", type1.data)
        savedQuote.appendChild(savedQuoteLink);
    }); 
};

// use data from local storage to recreate past searches & results upon click
var priorSearch = function() {
    var image = event.target.getAttribute("data-image");
        foodImageEl.setAttribute("src", image);
    var quote = event.target.getAttribute("data-quote").split("/")[0];
        quoteSpace.textContent =  '"' + quote + '"';
    var author = event.target.getAttribute("data-quote").split("/")[1];
    authorSpace.textContent = author;
};

// event listeners
priorSearchList.addEventListener("click", priorSearch);
quoteTypeEl.addEventListener("change", getQuoteType);
selectFoodEl.addEventListener("change", getFoodType);
formEl.addEventListener("submit", getData);
secondServingBtn.addEventListener("click", function() {
    location.reload();
})

// display saved searches on page load
displaySavedSearches()
