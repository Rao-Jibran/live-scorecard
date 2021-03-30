
var team1 = prompt("Enter first team name : ")
var team2 = prompt("Enter Second team name : ")
var over = +prompt("enter overs : ")
var over2 = 6

setTimeout(() => {

    console.log( "the match is between "+ team1 + " and " + team2)
     
   }, 1000);

  var num= Math.random()*1
  var generate=Math.round(num)
   
  setTimeout(() => {

    if (generate==0){
        console.log(team1+ " Won the toss ")

    }
     
   }, 2000);
   setTimeout(() => {

    if (generate==0){
        console.log(team1+ " is batting ")

    }
     
   }, 4000);

   setTimeout(() => {

    if (generate==1){
        console.log(team2+ " Won the toss ")

    }
     
   }, 2000);
   setTimeout(() => {

    if (generate==1){
        console.log(team2+ " is batting ")

    }
     
   }, 4000);


   

    for(i= 1; i <= over ; i++ ){
        console.log("over started "+i)
        for(j = 1; j <= over2; j++ ){
            setTimeout(()=>{
                console.log("ball "+j)
            },8000)
           
        } 
    }
     
   
 



