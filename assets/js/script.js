

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

    //   var quoteEl = document.querySelector
  var apiUrl = "https://api.quotable.io/random"
 
  fetch(apiUrl).then(function(response) {
      if(response.ok) {
          response.json().then(function(data) {
              console.log(data)
          })
      }
  });

  //get "tag" value from dropdown list - 
  var tagVal = function(event) {
    var selectEl = document.querySelector("#quote-type")
    selectEl.addEventListener("change",function(event) {
      var tagEl = document.getElementById(selectEl).value;
    })
  }

  //add "tag" value to end of URL to get quote from that "tag" value
var tagUrl = function () {
apiUrlquote.searchParams.append(tagEl);
var newUrl = apiUrlquote.toString();
}


  //display author & content values in "quote-author" & "quote-content"