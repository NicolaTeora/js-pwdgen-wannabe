/*document.getElementById('pssw').innerText = 'Genera la tua password';*/

// dichiarazione
let FristName; 
let LastName;
let FavouriteColor;
let MyPassword;
let NumCasual;

// assegnazione
NumCasual = 91;

FristName = prompt('Inserisci il tuo Nome');
console.log(FristName);

LastName = prompt('Inserisci il tuo Cognome');
console.log(LastName);

FavouriteColor = prompt('Il tuo colore preferito');
console.log(FavouriteColor);

// genero lo password con i 3 dati raccolti piu numero "casuale"

MyPassword = FristName + LastName + FavouriteColor + NumCasual;
console.log(MyPassword);

// trasmetto a schermo
document.getElementById('pssw').innerText = MyPassword;