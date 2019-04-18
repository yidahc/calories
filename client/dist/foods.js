const apiURL = "https://api.edamam.com/api/food-database/parser?ingr=";
const apiKey = "&app_id=6faf9cc7&app_key=5c9b29569582527e3c87130f130cb58d";

const fetchCals = ingredient => {
  var ing = findAndReplace(ingredient, " ", "%20");
    const url =  `${apiURL}${ing}${apiKey}`;
    fetch(url)
    .then(response => response.json())
    .then(ingrData => {
        console.log(ingrData);
        // addToList(ingrData)
    });
};

function findAndReplace(string, target, replacement) {
  for (var i = 0; i < string.length; i++) {
    s = s.replace(target, replacement);
  }
  return string;
}