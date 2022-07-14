

// materialize says we must initialize the select element for the dropdown list. this was their example:
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems);
  });

//   var imageEl = document.querySelector
  var apiUrl = "https://cors-anywhere.herokuapp.com/https://zenquotes.io/api/quotes"
 
    fetch(apiUrl).then(function(response) {
        if(response.ok) {
            response.json().then(function(data) {
                console.log(data)
            })
        }
    });
    
    // var foodtype = 

    // var getCityData = function(lat, long) {
    //     var apiUrl = "https://foodish-api.herokuapp.com/images/" + foodtype;
    //     fetch(apiUrl).then(function(response) {
    //         if(response.ok) {
    //             response.json().then(function(data){
    //                 console.log(data);
    //                 displayCityData(data, cityName);
    //             });
    //         } else {
    //             alert('Error: ' + response.statusText);
    //           }
    //         })
    //         .catch(function (error) {
    //           alert('Unable to connect to openweathermap.org');
    //         });
    //     };