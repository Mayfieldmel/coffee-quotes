// variables defined
var formEl = document.querySelector("#form-box");
var submitBtnEl = document.querySelector("#submit");
var foodImageEl = document.querySelector("#food-image");
var quoteTypeEl = document.querySelector("#quote-type");
var selectFoodEl = document.querySelector("#select-food");
var authorSpace = document.querySelector("#quote-author");
var quoteSpace = document.querySelector("#quote");
var priorSearchesEl = document.querySelector("#prior-searches");
var foodTypeInput 
var quoteTypeInput
var foodArr = [];
var foodObj = {}
var quoteArr = [];
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

    // display random food image
    var displayImage = function(data) {
        var randomImage = data.image;
        foodImageEl.setAttribute("src", randomImage)
    }
    

    var getFoodImage = function(event) {
        console.log("click");
        event.preventDefault();
        // console.log(foodTypeInput)
        // var apiLink = "https://foodish-api.herokuapp.com/images/api" + foodTypeInput + "/";
        var apiLink = "https://foodish-api.herokuapp.com/api/images/burger/"
        fetch(apiLink).then(function(response) {

            if(response.ok) {
                response.json().then(function(data) {
                    displayImage(data);
                    saveFood(foodTypeInput, foodApiUrl);
                })
            } else {
                alert('Error: ' + response.statusText);
              }
        })
            .catch(function (error) {
              alert('Unable to connect to foodish database');
              console.log(error);
            })    
    };

    
          var userVal= function(){
                var userEl = document.getElementById(selectFoodEl).value;
                return userEl;
              });
          console.log(userEl)
            }; userVal();

            var tagLink =function () {
              apiLinkimage.searchParams.append(userEl);
            }
            
    selectFoodEl.addEventListener("submit", getFoodImage)


//display fetched quote and quote author 
var displayQuote = function(data) {
    var randomQuote = data.content;
    console.log(randomQuote); 
    quoteSpace.textContent =  '"' + randomQuote + '"';
  };
var displayAuthor = function(data) {
    var quoteAuthor = data.author;
    console.log(quoteAuthor);
    authorSpace.textContent = quoteAuthor;
  };

//   fetch quote from API
var getQuote = function() {
    var quoteApiUrl = "https://api.quotable.io/random?tags=" + quoteTypeInput;
      fetch(quoteApiUrl).then(function(response) {
          if(response.ok) {
              response.json().then(function(data) {
                  displayQuote(data);
                  displayAuthor(data);
                  saveQuote(quoteTypeInput, quoteApiUrl);
              })
          }
      })
    };
 
    
// create modal that alerts user to select food type
document.querySelector("#submit").addEventListener("click", function() {
    if (foodTypeInput === "" || quoteTypeInput === "") {
      console.log("error");
      //document.getElementbyId("#error-modal").classList.remove("none");
    }
  });

var getData = function(event) {
    event.preventDefault();
    getFoodImage(getFoodType);
    getQuote(getQuoteType);
    // displaySavedSearches();
}
    
   
// store food data in local storage
function saveFood(foodType, foodUrl) {
    foodObj = {
        type: foodType,
        url: foodUrl
    };
    localStorage.getItem("foodArr");
    foodArr.push(foodObj);
    localStorage.setItem("foodArr", JSON.stringify(foodArr));
};

// store quote data in local storage
function saveQuote(quoteTopic, quoteUrl) {
    quoteObj = {
        type: quoteTopic,
        url: quoteUrl
    };
    localStorage.getItem("quoteArr");
    quoteArr.push(quoteObj);
    localStorage.setItem("quoteArr", JSON.stringify(quoteArr));
 
};

// display data from local storage
var displaySavedSearches = function() {
     // create link
    returnArr = localStorage.getItem("quoteArr");
        console.log(returnArr);
     for (let i = 0; i < quoteArr.length; i++) {
     var savedQuote = document.createElement("li");
        priorSearchesEl.appendChild(savedQuote);
     var savedQuoteLink = document.createElement("a");
        savedQuoteLink.textContent = quoteArr[i].type;
        savedQuoteLink.classList = "links";
        savedQuoteLink.setAttribute("href", "#")
        savedQuote.appendChild(savedQuoteLink);
    };

    localStorage.getItem("foodArr");
    for (let i = 0; i < foodArr.length; i++) {
        savedQuoteLink.textContent += foodType;
    };
};

// event listeners
quoteTypeEl.addEventListener("change", getQuoteType)
selectFoodEl.addEventListener("change", getFoodType);
formEl.addEventListener("submit", getData);



