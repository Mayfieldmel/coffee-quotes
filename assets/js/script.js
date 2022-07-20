// variables defined
console.log('script')
var formEl = document.querySelector("#form-box");
var submitBtnEl = document.querySelector("#submit");
var foodImageEl = document.querySelector("#food-image");
var quoteTypeEl = document.querySelector("#quote-type");
var selectFoodEl = document.querySelector("#select-food");
var authorSpace = document.querySelector("#quote-author");
var quoteSpace = document.querySelector("#quote");
var secondServingBtn = document.querySelector("#second-serving");
var priorSearchesEl = document.querySelector("#prior-searches");
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

    var getQuoteType = function() {
        quoteTypeInput = event.target.value.trim();
     };

    // display random food image
    var displayImage = function(data) {
        var randomImage = data.image;
        foodImageEl.setAttribute("src", randomImage);
    }
    

    var getFoodImage = function(event) {
        console.log("click");
        // console.log(foodTypeInput)
        var foodApiUrl = "https://foodish-api.herokuapp.com/api/images/" + foodTypeInput + "/";
        fetch(foodApiUrl).then(function(response) {


            if(response.ok) {
                response.json().then(function(data) {
                    displayImage(data);
                    saveFood(foodTypeInput, foodApiUrl);
                })
            }
        })
            .catch(function (error) {
              alert('Unable to connect to foodish database');
              console.log(error);
            })    
    };


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
    console.log(quoteTypeInput)
      fetch(quoteApiUrl).then(function(response) {
          if(response.ok) {
              response.json().then(function(data) {
                  displayQuote(data);
                  displayAuthor(data);
                  saveQuote(quoteTypeInput, quoteApiUrl);
                  displaySavedSearches();
              })
          }
      })
    };
 
    
// create modal that alerts user to select food type
// document.querySelector("#submit").addEventListener("click", function() {
//     if (foodTypeInput === "" || quoteTypeInput === "") {
//       console.log("error");
//       //document.getElementbyId("#error-modal").classList.remove("none");
//     }
//   });

var getData = function(event) {
    event.preventDefault();
    getFoodImage(getFoodType);
    getQuote(getQuoteType);
}
    
   
// store food data in local storage
function saveFood(foodType, foodUrl) {
    foodObj = {
        type: foodType,
        url: foodUrl
    };
    var foodArr = JSON.parse(localStorage.getItem("foodArr")) || [];
    foodArr.push(foodObj);
    localStorage.setItem("foodArr", JSON.stringify(foodArr));
};

// store quote data in local storage
function saveQuote(quoteTopic, quoteUrl) {
    quoteObj = {
        type: quoteTopic,
        url: quoteUrl
    };
    var quoteArr = JSON.parse(localStorage.getItem("quoteArr")) || [];
    quoteArr.push(quoteObj);
    localStorage.setItem("quoteArr", JSON.stringify(quoteArr));
 
};

// display data from local storage
var displaySavedSearches = function() {
    var foodArr = JSON.parse(localStorage.getItem("foodArr")) || [];
    var quoteArr = JSON.parse(localStorage.getItem("quoteArr")) || [];
    console.log(quoteArr);
    priorSearchesEl.innerHTML = '';
    // loop through both arrays to create hyperlinks
     quoteArr.forEach((type1, index) => {
        const type2 = foodArr[index];
        var savedQuote = document.createElement("li");
        priorSearchesEl.appendChild(savedQuote);
        var savedQuoteLink = document.createElement("a");
        savedQuoteLink.textContent = type1.type + "/" + type2.type;
        savedQuoteLink.classList = "links";
        savedQuoteLink.setAttribute("href", "#")
        savedQuote.appendChild(savedQuoteLink);
<<<<<<< HEAD
    };

    var foodArr = JSON.parse(localStorage.getItem("foodArr")) || [];
    for (let i = 0; i < foodArr.length; i++) {
        savedQuoteLink.textContent += foodArr[i].type;
    };

    var priorSearch = function() {
        console.log(event.target)
        // quoteApiUrl = quoteArr[i].url;
        // foodApiUrl = foodArr[i].url;
        // getQuote(quoteApiUrl)
        // getFoodImage(foodApiUrl)
    }
    savedQuote.addEventListener("click", priorSearch)
=======
    });
    // var priorSearch = function() {}
    // savedQuote.addEventListener("click", priorSearch)
>>>>>>> develop
};

// event listeners
quoteTypeEl.addEventListener("change", getQuoteType)
selectFoodEl.addEventListener("change", getFoodType);
formEl.addEventListener("submit", getData);
secondServingBtn.addEventListener("click", function() {
    location.reload();
})

displaySavedSearches()
