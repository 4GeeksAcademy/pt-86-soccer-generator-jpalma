import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  document.querySelector(".btn").addEventListener("click",generateSoccer) 
};
const generateSoccer= ()=>{
  let player =["Ronaldo","Messi","Mbappe","Foden","Lamine Yamal"];
  let stadium =["Anfield","Wembley","Bernabeu","Camp Nou","Old Trafford"];
  let team=["Real Madrid","Barcelona","Liverpool","Arsenal","Inter Miami"];
  let league =["Serie A","Premier league","La Liga","MLS","Bundesliga"];
  let position =["Striker","Left Wing","Center Back","Right Wing","Midfielder"];


  let playerChoice=Math.floor(Math.random()*player.length);
  let stadiumChoice =Math.floor(Math.random()*stadium.length);
  let teamChoice=Math.floor(Math.random()*team.length);
  let leagueChoice=Math.floor(Math.random()*league.length);
  let positionChoice =Math.floor(Math.random()*position.length);

  let playerDiv =document.getElementById('player');
  let stadiumDiv =document.getElementById('stadium');
  let teamDiv =document.getElementById('team');
  let leagueDiv =document.getElementById('league');
  let positionDiv =document.getElementById('position');

  
  playerDiv.innerHTML = player[playerChoice];
  stadiumDiv.innerHTML = stadium[stadiumChoice];
  teamDiv.innerHTML = team[teamChoice];
  leagueDiv.innerHTML = league[leagueChoice];
  positionDiv.innerHTML = position[positionChoice];
}
