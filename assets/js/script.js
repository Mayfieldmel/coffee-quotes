// variables defined
    var formEl = document.querySelector("#form-box");
    var submitBtnEl = document.querySelector("#submit");
    var foodImageEl = document.querySelector("#food-image");
    var selectFoodEl = document.querySelector("#select-food");
    var authorSpace = document.querySelector("#quote-author");
    var quoteSpace = document.querySelector("#quote");
    // var foodTypeInput = selectFoodEl.value;

// materialize says we must initialize the select element for the dropdown list. 
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems);
  });

   // capture user food choice
   var userVal= function() {
    console.log("click"); }


    // get food type
    var getFoodType = function() {
        console.log(selectFoodEl)
        console.log(event.target);
        };
  
        selectFoodEl.addEventListener("change", getFoodType)

    // display random food image
    var displayImage = function(data) {
        var randomImage = data.image;
        console.log(randomImage);
        foodImageEl.setAttribute("src", randomImage)
    }
    
    // fetch food image from API
    var getFoodImage = function(event) {
        // console.log(foodTypeInput)
        // var apiUrl = "https://foodish-api.herokuapp.com/images/api" + foodTypeInput + "/";
        var apiUrl = "https://foodish-api.herokuapp.com/api/images/burger/"
        fetch(apiUrl).then(function(response) {
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
    
   


  //get "tag" value from dropdown list - 
//   var tagVal = function() {
//     var selectEl = document.querySelector("#quote-type")
//     selectEl.addEventListener("change", function() {
//     var tagEl = selectEl.textContent;
//     return tagEl;
//     });
//     console.log(tagEl)
//   }; tagVal();

  //add "tag" value to end of URL to get quote from that "tag" value
// var tagUrl = function () {
// apiUrlquote.searchParams.append(tagEl);
// var newUrl = apiUrlquote.toString();
// }

// fetch quote from API
var getQuote = function() {
var apiUrl = "https://api.quotable.io/random"
 
  fetch(apiUrl).then(function(response) {
      if(response.ok) {
          response.json().then(function(data) {
              console.log(data)
              displayQuote(data);
              addAuthor(data)
          })
      }
  });
};

  //display fetched quote and quote author 
var displayQuote = function(data) {
        var randomQuote = data.content;
        console.log(randomQuote); 
        quoteSpace.textContent =  '"' + randomQuote + '"';
  }
  var addAuthor = function(data) {
    var quoteAuthor = data.author
    console.log(quoteAuthor)
    authorSpace.textContent = quoteAuthor;
  };


var getData = function() {
    event.preventDefault();
    getFoodImage();
    getQuote();
}

formEl.addEventListener("submit", getData);