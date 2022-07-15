

// materialize says we must initialize the select element for the dropdown list. this was their example:
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems);
  });

// //   var imageEl = document.querySelector
//   var apiUrl = "https://cors-anywhere.herokuapp.com/https://zenquotes.io/api/quotes"
 
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