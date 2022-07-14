// materialize says we must initialize the select element for the dropdown list. this was their example:
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems);


      var Foodicon = document.querySelector("#icons");
      var apilink = "https://foodish-api.herokuapp.com/images/pizza/"    
  
      fetch(apilink)
        .then(function(response) {
        if(response.ok) {
            response.json().then(function(data) {
              Foodicon.addEventListener("change",function(event) {
          
              });
                console.log(data)
            })
        }
    });
  
  

    });
