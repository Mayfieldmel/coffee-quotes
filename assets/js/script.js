// variables defined
    var formEl = document.querySelector("#form-box");
    var submitBtnEl = document.querySelector("#submit");
    var foodImageEl = document.querySelector("#food-image");
    var selectFoodEl = document.querySelector("#select-food");
    var authorSpace = document.querySelector("#quote-author");
    var quoteSpace = document.querySelector("#quote");
    var foodTypeInput 

// materialize says we must initialize the select element for the dropdown list. 
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems);
  });

   // capture user food choice
    var getFoodType = function() {
       foodTypeInput = event.target.value.trim();
        console.log(event.target.value);
        };

    // display random food image
    var displayImage = function(data) {
        var randomImage = data.image;
        console.log(randomImage);
        foodImageEl.setAttribute("src", randomImage)
    }
    
    // fetch food image from API
    var getFoodImage = function() {
        console.log(foodTypeInput);
        var foodApiUrl = "https://foodish-api.herokuapp.com/api/images/" + foodTypeInput + "/";
        fetch(foodApiUrl).then(function(response) {
            if(response.ok) {
                response.json().then(function(data) {
                    console.log(data);
                    displayImage(data);
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

var getQuote = function() {
var quoteApiUrl = "https://api.quotable.io/random";
  fetch(quoteApiUrl).then(function(response) {
      if(response.ok) {
          response.json().then(function(data) {
              console.log(data)
              displayQuote(data);
              addAuthor(data)
          })
      }
  })
};

  //display fetched quote and quote author 
var displayQuote = function(data) {
        var randomQuote = data.content;
        console.log(randomQuote); 
        quoteSpace.textContent =  '"' + randomQuote + '"';
  }
  var addAuthor = function(data) {
    var quoteAuthor = data.author;
    console.log(quoteAuthor);
    authorSpace.textContent = quoteAuthor;
  };


var getData = function(event) {
    event.preventDefault();
    getFoodImage(getFoodType);
    getQuote();
}

// event listeners
selectFoodEl.addEventListener("change", getFoodType);
formEl.addEventListener("submit", getData);