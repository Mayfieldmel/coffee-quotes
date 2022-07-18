

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