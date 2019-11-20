function getMoveName(argMoveId){
  if(argMoveId == 1){
    return 'kamień';
  } else {
    printMessage('Nie znam ruchu o id ' + argMoveId + '.');
    return 'nieznany ruch';
  }
  if(argMoveId == 2){
    return 'papier';
  } else {
    printMessage('Nie znam ruchu o id ' + argMoveId + '.');
    return 'nieznany ruch';
  }
  if(argMoveId == 3){
    return 'nożyce';
  } else {
    printMessage('Nie znam ruchu o id ' + argMoveId + '.');
    return 'nieznany ruch';
  }
}

let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove = getMoveName(randomNumber);

/* if(randomNumber == 1){
  computerMove = 'kamień';
} else if (randomNumber == 2) {
  computerMove = 'papier';
} else if (randomNumber == 3) {
  computerMove = 'nożyce';
}*/

printMessage('Mój ruch to: ' + computerMove);

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let playerMove = getMoveName(randomNumber);

/* if(playerInput == '1'){
  playerMove = 'kamień';
} else if (playerInput == '2') {
  playerMove = 'papier';
} else if (playerInput == '3') {
  playerMove = 'nożyce'; */

printMessage('Twój ruch to: ' + playerMove);


/*if( computerMove == 'kamień' && playerMove == 'papier'){
  printMessage('Ty wygrywasz!');
} else {
  printMessage('Spróbuj jeszcze raz!');
}
if( computerMove == 'nożyce' && playerMove == 'kamień'){
  printMessage('Ty wygrywasz!');
} else {
  printMessage('Spróbuj jeszzce raz!');
}
if( computerMove == 'papier' && playerMove == 'nożyce'){
  printMessage('Ty wygrywasz!');
} else {
  printMessage('Spróbuj jeszzce raz!');
}
if( computerMove == playerMove){
  printMessage('Wybraliście takie same ruchy. Spróbuj ponownie!');
if( playerMove == 'nieznany ruch'){
  printMessage('Czy na pewno wybrałaś/eś 1, 2 lub 3?');

function displayResult (argComputerMove, argPlayerMove) {
  printMessage('Zagrałem ' + argComputerMove + ', a ty ' + argPlayerMove);
} */

if(( computerMove == 'kamień' && playerMove == 'papier')||(computerMove == 'nożyce' && playerMove == 'kamień')||
(computerMove == 'papier' && playerMove == 'nożyce')){
  printMessage('Ty wygrywasz!');
} else if (computerMove == playerMove){
  printMessage('Wybraliście takie same ruchy. Spróbuj ponownie!');
} else if (playerMove == 'nieznany ruch'){
  printMessage('Czy na pewno wybrałaś/eś 1, 2 lub 3?');
} else {
  printMessage('Spróbuj jeszcze raz!');
}
