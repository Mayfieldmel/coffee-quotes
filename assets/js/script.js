// variables defined
    var formEl = document.querySelector("#form-box");
    var submitBtnEl = document.querySelector("#submit");
    var foodImageEl = document.querySelector("#food-image");
    var quoteTypeEl = document.querySelector("#quote-type");
    var selectFoodEl = document.querySelector("#select-food");
    var authorSpace = document.querySelector("#quote-author");
    var quoteSpace = document.querySelector("#quote");
    var foodTypeInput 
    var quoteTypeInput

<<<<<<< HEAD
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

//capture quote topic
var getQuoteType = function()  {
    quoteTypeInput = event.target.value.trim();
        console.log(quoteTypeInput);
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
    console.log(quoteTypeInput);
    var quoteApiUrl = "https://api.quotable.io/random?tags=" + quoteTypeInput;
      fetch(quoteApiUrl).then(function(response) {
          if(response.ok) {
              response.json().then(function(data) {
                  displayQuote(data);
                  displayAuthor(data)
              })
          }
      })
    };
    

var getData = function(event) {
    event.preventDefault();
    getFoodImage(getFoodType);
    getQuote(getQuoteType);
}

// event listeners
quoteTypeEl.addEventListener("change", getQuoteType)
selectFoodEl.addEventListener("change", getFoodType);
formEl.addEventListener("submit", getData);
=======

// materialize says we must initialize the select element for the dropdown list. this was their example:
document.addEventListener('DOMContentLoaded', function () {
  var elems = document.querySelectorAll('select');
  var instances = M.FormSelect.init(elems);
});

// //   var imageEl = document.querySelector
//   var apiUrl = "https://api.quotable.io/random"

//     fetch(apiUrl).then(function(response) {
//         if(response.ok) {
//             response.json().then(function(data) {
//                 console.log(data)
//             })
//         }
//     });
// 
var formEl = document.querySelector("#form-box");
var submitBtnEl = document.querySelector("#submit");
var foodImageEl = document.querySelector("#food-image");

var selectFoodEl = document.querySelector("#select-food");
// var foodTypeInput = selectFoodEl.value;

// get food type
var getFoodType = function () {
  console.log(selectFoodEl)
  console.log(event.target);
};

selectFoodEl.addEventListener("change", getFoodType)

var displayImage = function (data) {
  var randomImage = data.image;
  console.log(randomImage);
  foodImageEl.setAttribute("src", randomImage)
}

var getFoodImage = function (event) {
  console.log("click");
  event.preventDefault();
  // console.log(foodTypeInput)
  // var apiLink = "https://foodish-api.herokuapp.com/images/api" + foodTypeInput + "/";
  var apiLink = "https://foodish-api.herokuapp.com/api/images/burger/"
  fetch(apiLink).then(function (response) {
    if (response.ok) {
      response.json().then(function (data) {
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

var userVal = function () {
  var userEl = document.getElementById(selectFoodEl).value;
  return userEl;
};
console.log(userEl)
userVal();

var tagLink = function () {
  apiLinkimage.searchParams.append(userEl);
}

selectFoodEl.addEventListener("submit", getFoodImage)

//   var quoteEl = document.querySelector
var apiUrl = "https://api.quotable.io/random"

fetch(apiUrl).then(function (response) {
  if (response.ok) {
    response.json().then(function (data) {
      console.log(data)
    })
  }
});

//get "tag" value from dropdown list - 
var tagVal = function () {
  var selectEl = document.querySelector("#quote-type")
  selectEl.addEventListener("change", function () {
    var tagEl = document.getElementById(selectEl).value;
    return tagEl;
  });
  console.log(tagEl)
}

//add "tag" value to end of URL to get quote from that "tag" value
var tagUrl = function () {
  apiUrlquote.searchParams.append(tagEl);
  var newUrl = apiUrlquote.toString();
}


//display author & content values in "quote-author" & "quote-content"
var addAuthor = function () {
  var authorSpace = document.querySelector("#quote-author");
  var selectedAuthor = document.author.
    selectedAuthor.textContent = document.author.value;



}

// local storage for previous searches 
//const selectedFood = document.getElementById('select-food',);

//selectedFood.addEventListener('change', (event) => {
// let currentArea = event.target.value;
//localStorage.setItem('Food', currentArea);
//});

var foodChoice = document.getElementById("select")
var quoteChoice = document.getElementById(".Quote")
var Choices = [quoteChoice, foodChoice]
//console.log(Choices);
console.log(foodChoice)
console.log(quoteChoice)
>>>>>>> e7b152080fe16a13f52aa1395d28008cf2ea1600
