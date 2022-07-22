function getComputerChoice  (){
    const computer = ['Rock' , 'Paper', 'Scissors' ];
    var randomComputer = Math.floor(Math.random()*computer.length);
   return computer[randomComputer];
    }
    console.log(getComputerChoice());
    let playerSelection = prompt('what is your choice'); 
    const computerSelection = getComputerChoice(); 
    console.log(playerSelection);
    let playerScore=0;
    let computerScore=0;

    function playRound(playerSelection, computerSelection){
      computerSelection = getComputerChoice().toLowerCase();
      playerSelection = playerSelection.toLowerCase(); 
       if (computerSelection=playerSelection)
               return 'it is a Tie ';
       else 
         if ( ((computerSelection='rock') && (playerSelection='paper') ) ||
              ((computerSelection='paper') && (playerSelection='scissors')) ||
              ((computerSelection='scissors') && (playerSelection='rock'))
            ){
               playerScore++;
               return ' player wins '
            }
     else 
         if ( ((playerSelection='rock') && (computerSelection='paper') ) ||
              ((playerSelection='paper') && (computerSelection='scissors')) ||
              ((playerSelection='scissors') && (computerSelection='rock'))
            ){
               computerScore++;
               return ' computer wins '
            } 
    }
   
    console.log(playRound(playerSelection,computerSelection));
    function game (){
      for (let i = 0; i < 5; i++) {
        playRound(playerSelection, computerSelection)
        
      }
    }
   