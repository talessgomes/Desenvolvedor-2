let stringNome = "Tales";

let stringInvertida = "";

for (let i = stringNome.length -1; i >= 0; i--) {
    stringInvertida += stringNome[i];
}

console.log("String original: " + stringNome);
console.log("String invertida: " + stringInvertida);