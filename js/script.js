{
  function getMoveName(argMoveId) {
    if (argMoveId == 1) {
      return 'kamień';
    } else if (argMoveId == 2) {
      return 'papier';
    } else if (argMoveId == 3) {
      return 'nożyce';
    } else {
      printMessage('Nie znam ruchu o id ' + argMoveId + '.');
      return 'nieznany ruch';
    }
  }

  function displayResult(argComputerMove, argPlayerMove) {
    console.log('moves:', argComputerMove, argPlayerMove);
    printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
    if ((argComputerMove == 'kamień' && argPlayerMove == 'papier') || (argComputerMove == 'nożyce' && argPlayerMove == 'kamień') ||
      (argComputerMove == 'papier' && argPlayerMove == 'nożyce')) {
      printMessage('Ty wygrywasz!');
    } else if (argComputerMove == argPlayerMove) {
      printMessage('Wybraliście takie same ruchy. Spróbuj ponownie!');
      console.log('Comp i player wybrali ten sam ruch');
    } else if (argPlayerMove == 'nieznany ruch') {
      printMessage('Czy na pewno wybrałaś/eś 1, 2 lub 3?');
      console.log('Gracz wybrał nieznany ruch: ' + argPlayerMove);
    } else {
      printMessage('Niestety, tym razem przegrałeś/aś. Spróbuj jeszcze raz!');
      console.log('Gracz przgerał')
    }
  }

  function playGame(playerInput) {
    clearMessages();

    const randomNumber = Math.floor(Math.random() * 3 + 1);

    console.log('Wylosowana liczba to: ' + randomNumber);

    const computerMove = getMoveName(randomNumber);

    printMessage('Komputer ruch to: ' + computerMove);

    // let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

    console.log('Gracz wpisał: ' + playerInput);

    let playerMove = getMoveName(playerInput);

    printMessage('Twój ruch to: ' + playerMove);


    displayResult(computerMove, playerMove);
  }
  function buttonClicked() {
    printMessage('Wybrałeś kamień');
    playGame(1);
  }

  const playRock = document.getElementById('play-rock');

  playRock.addEventListener('click', buttonClicked);

  function buttonPaper() {
    printMessage('Wybrałeś papier');
    playGame(2);
  }

  const playPaper = document.getElementById('play-paper');
  playPaper.addEventListener('click', buttonPaper);

  function buttonScissors() {
    printMessage('Wybrałeś nożyce');
    playGame(3);
  }

  const playScissors = document.getElementById('play-scissors');
  playScissors.addEventListener('click', buttonScissors);
  //playGame(3);
}
