

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
  var tagVal = function() {
    var selectEl = document.querySelector("#quote-type")
    selectEl.addEventListener("change",function() {
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
  var addAuthor = function() {
    var authorSpace = document.querySelector("#quote-author");
    var selectedAuthor = document.author.
    selectedAuthor.textContent = document.author.value;
    


  }
  
