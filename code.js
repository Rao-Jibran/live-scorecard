
var team1 = prompt("Enter first team name : ")
var team2 = prompt("Enter Second team name : ")
var over = +prompt("enter overs : ")
var over2 = 6
var score = 0



    console.log( "the match is between "+ team1 + " and " + team2)
     sleepFor(1000)
  

  var num= Math.random()*1
  var generate=Math.round(num)
   
 

    if (generate==0){
        console.log(team1+ " Won the toss ")
    }
     sleepFor(2000)
  


    if (generate==0){
        console.log(team1+ " is batting ")
    }
    sleepFor(2000)
  

    if (generate==1){
        console.log(team2+ " Won the toss ")
    }
        sleepFor(2000)
  

    if (generate==1){
        console.log(team2+ " is batting ")

    }
    sleepFor(2000)
  

    
     

    for(i= 1; i <= over ; i++ ){
        console.log("over started "+i)
        for(j = 1; j <= over2; j++ ){

                console.log("ball "+j)

                var balls= Math.random()*6
                var generate2=Math.round(balls)
                score=score+generate2
                console.log(generate2)

                if(generate2===0){
                    alert("OUT")
                }
                else if(generate2===4){
                    alert("It`s a 4")
                }
                else if(generate2===6){
                    alert("It`s a 6 BOOM BOOM AFRIDI ")
                }
        } 

        console.log(score)
    }
    sleepFor(3000)
  
     
   

   
 





    function sleepFor(sleepDuration) {
        var now = new Date().getTime();
        while (new Date().getTime() < now + sleepDuration) { /* do nothing */ }
      }