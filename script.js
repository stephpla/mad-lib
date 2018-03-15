console.log("The script linked properly");

const question = 'Please provide a';
let neededInput = [
  'n exclamation',
  'n adverb',
  ' noun',
  ' adjective'
];
let madLib = [
  '! he said ',
  ' as he jumped into his convertible ',
  ' and drove off with his ',
  ' wife.'
];
let product = '';
const button = document.getElementById('button');

function doMadLib() {
  for (let i = 0; i < neededInput.length; i++) {
    let answer = prompt(question+neededInput[i]);
    product += answer + madLib[i];
  }
  console.log(product);

  var p = document.createElement("P");
  var text = document.createTextNode(product);
  p.appendChild(text);
  document.getElementById("mad-lib-generated").appendChild(p);
}

button.addEventListener("click", doMadLib, false);
