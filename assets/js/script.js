

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
    