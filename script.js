
document.getElementById("answer-area").style.visibility = "hidden";


const question = 'Please provide a';
let data = [
  ['n exclamation', '(Wow!, Oh!, Yuck!)', '! he said '],
  ['n adverb', 'An action', ' as he jumped into his convertible '],
  [' noun', 'person, place or thing', ' and drove off with his '],
  [' adjective', 'A describing word', ' wife.']
];

let product = '';
const startButton = document.getElementById('start-button');
const enterButton = document.getElementById('enterButton');
const questionSpan = document.querySelector('#question-span');
const textArea = document.querySelector('textarea');

function doMadLib() {
  questionSpan.innerHTML = question + data[0][0];
  textArea.setAttribute('placeholder', data[0][1]);
  document.getElementById("answer-area").style.visibility = "visible";

  console.log(product);

  var p = document.createElement("P");
  var text = document.createTextNode(product);
  p.appendChild(text);
  document.getElementById("mad-lib-generated").appendChild(p);
  product = '';
}

startButton.addEventListener("click", doMadLib, false);
