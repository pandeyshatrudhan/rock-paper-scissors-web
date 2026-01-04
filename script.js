   function rock(){//rock=0,paper=1,Scissors=2;
            user=0
            computer=Math.floor(Math.random()*(2-0+1)+0);
            if(user==computer){
                document.getElementById("ans").innerHTML="Draw <br>"+"Computer Chocice:Rock"
            }
            else if( computer==2){
                document.getElementById("ans").innerHTML="You Win <br>"+"Computer Chocice:Scissors"
            }
            else if( computer==1){
                document.getElementById("ans").innerHTML="You Lose<br>"+"Computer Chocice:Paper"
            }

        }
         function paper(){//rock=0,paper=1,Scissors=2;
            user=1
            computer=Math.floor(Math.random()*(2-0+1)+0);
            if(user==computer){
                document.getElementById("ans").innerHTML="Draw <br>"+"Computer Chocice:Paper"
            }
            else if(computer==2){
                document.getElementById("ans").innerHTML="You Lose <br>"+"Computer Chocice:Scissors"
            }
            else if( computer==0){
                document.getElementById("ans").innerHTML="You Win<br>"+"Computer Chocice:Rock"
            }

        }
         function Scissors(){//rock=0,paper=1,Scissors=2;
            user=2
            computer=Math.floor(Math.random()*(2-0+1)+0);
            if(user==computer){
                document.getElementById("ans").innerHTML="Draw <br>"+"computer chocice:Scissors"
            }
            else if(computer==0){
                document.getElementById("ans").innerHTML="You Lose <br>"+"computer chocice:rock"
            }
            else if( computer==1){
                document.getElementById("ans").innerHTML="You Win<br>"+"computer chocice:Paper"
            }

        }
            var i=1
           
            function background(){
                if(i%2==0){
                document.body.style.backgroundColor="white"
                document.getElementById("background").value="🌙"
                document.getElementsByClassName("btnbackground")[0].style.backgroundColor="black"
                i++
                }
                else{
                    document.body.style.backgroundColor="black"
                    document.getElementById("background").value="☀️"
                    document.getElementsByClassName("btnbackground")[0].style.backgroundColor="white"
                    i++
                }
            }
            