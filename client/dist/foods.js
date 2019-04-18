const apiURL = "https://api.edamam.com/api/food-database/parser?ingr=";
const apiKey = "&app_id=6faf9cc7&app_key=5c9b29569582527e3c87130f130cb58d";

function findAndReplace(string, target, replacement) {
  for (var i = 0; i < string.length; i++) {
    s = string.replace(target, replacement);
  }
  return string;
}
const fetchHints = ingredient => {
  var ing = findAndReplace(ingredient, " ", "%20");
    const url =  `${apiURL}${ing}${apiKey}`;
    fetch(url)
    .then(response => response.json())
    .then(ingrData => {
          ingrData.hints.map(e => {
          inputHints = e
          console.log(inputHints)
           // addToList(inputHints)
        })
;
       
    });
};

const fetchCals = hint => {
hint.nutrients.ENERC_KCAL
          console.log(inputHints)
           // addToList(inputHints)
        }

let searchResults = fetchHints ("Apple-Crisp Baked Apples")

let ingrCals = fetchCals(searchResults)

// fetchHints ("Apple-Crisp Baked Apples")
