

// materialize says we must initialize the select element for the dropdown list. this was their example:
document.addEventListener('DOMContentLoaded', function() {
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
    var formEl = document.querySelector(".form")
    var submitBtnEl = document.querySelector("#submit")
        var submit = function() {
            submitBtnEl.preventDefault();
        };
    var selectFoodEl = document.querySelector("#select-food")
    var foodTypeInput = selectFoodEl.value
        
    
    

    var getFoodImage = function() {
        
        // var apiUrl = "https://foodish-api.herokuapp.com/images/" + foodTypeInput + "/";
        var apiUrl = "https://cors-anywhere.herokuapp.com/https://foodish-api.herokuapp.com/images/pizza/"
        fetch(apiUrl).then(function(response) {
            if(response.ok) {
                response.json().then(function(data){
                    console.log(data);
                });
            } else {
                alert('Error: ' + response.statusText);
              }
            })
            .catch(function (error) {
              alert('Unable to connect to foodish database');
            });
        };
    console.log(foodTypeInput)

formEl.addEventListener("submit", getFoodImage());

//     //   var quoteEl = document.querySelector
//   var apiUrl = "https://api.quotable.io/random"
 
//   fetch(apiUrl).then(function(response) {
//       if(response.ok) {
//           response.json().then(function(data) {
//               console.log(data)
//           })
//       }
//   });

//   //get "tag" value from dropdown list - 
//   var tagVal = function() {
//     var selectEl = document.querySelector("#quote-type")
//     selectEl.addEventListener("change",function() {
//     var tagEl = document.getElementById(selectEl).value;
//     return tagEl;
//     });
//     console.log(tagEl)
//   }

//   //add "tag" value to end of URL to get quote from that "tag" value
// var tagUrl = function () {
// apiUrlquote.searchParams.append(tagEl);
// var newUrl = apiUrlquote.toString();
// }


//   //display author & content values in "quote-author" & "quote-content"
//   var addAuthor = function() {
//     var authorSpace = document.querySelector("#quote-author");
//     var selectedAuthor = document.author.
//     selectedAuthor.textContent = document.author.value;
    


  }
  
