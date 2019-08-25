
const wordnikAPI = "https://api.wordnik.com/v4/words.json/randomWord?&minLength=5&maxLength=-1&api_key=48dd829661f515d5abc0d03197a00582e888cc7da2484d5c7";
const giphyAPI = "https://api.giphy.com/v1/gifs/search?rating=PG&api_key=dc6zaTOxFJmzC&q=";


function setup() {
  createCanvas(500,500);
  fetch(wordnikAPI)
    .then(response => response.json())
    .then(json => {
      text(json.word,0,0);
      return fetch(giphyAPI + json.word);
    })
    .then(response => response.json())
    .then(json => {
      let Pic = createImg(json.data[0].images['fixed_height_small'].url);
    })
    .catch(err => console.log(err));
}
function draw() {
  background(51);
}
