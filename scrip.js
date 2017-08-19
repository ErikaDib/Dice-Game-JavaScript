/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
//function btn(){
    
//}

//btn();
//dice=Math.floor(Math.random()*6)+1;
//console.log(dice);

//document.querySelector('#current-'+activePlayer).textContent=dice;
//document.querySelector('#current-'+activePlayer).innerHTML='<em>'+dice+'</em>';

//var x = document.querySelector('#score-0').textContent;
//console.log(x);


var score,roundScore,activePlayer,gamePlaying;

init();

var lastDice;



document.querySelector('.btn-roll').addEventListener('click',function(){
    if(gamePlaying){
        
   
    //1. random number
    var dice1=Math.floor(Math.random()*6)+1;
    var dice2=Math.floor(Math.random()*6)+1;
    //2.displey result
    //var diceDOM=document.querySelector('.dice');
    document.getElementById('dice-1').style.display='block';
    document.getElementById('dice-2').style.display='block';
    document.getElementById('dice-1').src='dice-'+dice1+'.png';
    document.getElementById('dice-2').src='dice-'+dice2+'.png';
        
        
        
        
        
    //3. update the rounf score if the rolled number was not a 1
        if(dice1 !==1 && dice2 !==1){
            roundScore+=dice1+dice2;
            document.querySelector('#current-'+activePlayer).textContent=roundScore;
        }else{
            nextPlayer();
        }
        
        
        
        
        
        /*
    if(dice===6 && lastDice ===6 ){
        scores[activePlayer]=0;
        document.querySelector('#score-'+activePlayer).textContent=0;
        nextPlayer();
    }else if(dice !== 1){
        //add score
        roundScore+=dice;
        document.querySelector('#current-'+activePlayer).textContent=roundScore;
    }else{
        //next player
        nextPlayer();
    }
         lastDice=dice;
        */
    }
});


document.querySelector('.btn-hold').addEventListener('click',function(){
    // add cuurent score to global score
    
    if(gamePlaying){
        scores[activePlayer]+=roundScore;
      
      //update UI
document.querySelector('#score-'+ activePlayer).textContent=scores[activePlayer];
      
      
        var input=document.querySelector('.final-score').value; 
        var winnigScore
        //Undefinen, o, null or '' are coherced to false
        //anything else is coherced to tue
        if(input){
           winnigScore=input; 
        }else{
            winningScore=100;
        }
        
      //check if player won the game
if(scores[activePlayer]>=winnigScore){
    document.querySelector('#name-'+activePlayer).textContent='Winner!';
    document.querySelector('.dice-1').style.display='none';
    document.querySelector('.dice-2').style.display='none';
    document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner');
    document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');
    gamePlaying=false;
}else{
    nextPlayer();
}
        
    }
                                               
    });

function nextPlayer(){
    //next player
        activePlayer===0? activePlayer=1:activePlayer=0;
        roundScore=0;
        document.getElementById('current-0').textContent='0';
        document.getElementById('current-1').textContent='0';
        
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
        
        document.getElementById('dice-1').style.display='none';
        document.getElementById('dice-2').style.display='none';
        
        //document.querySelector('.player-0-panel').classList.remove('active');
        //document.querySelector('.player-1-panel').classList.add('active');
}

document.querySelector('.btn-new').addEventListener('click',init);
   

function init(){
    scores=[0,0];
    activePlayer=0;
    roundScore=0;
    gamePlaying=true;
    
document.getElementById('dice-1').style.display='none';
document.getElementById('dice-2').style.display='none';
    
document.getElementById('score-0').textContent='0';
document.getElementById('score-1').textContent='0';
document.getElementById('current-0').textContent='0';
document.getElementById('current-1').textContent='0';
    document.getElementById('name-0').textContent='Player 1';
    document.getElementById('name-1').textContent='Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
}



