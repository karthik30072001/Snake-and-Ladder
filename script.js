const prompt =  require("prompt-sync")()
//User Interface
console.log("Computer Automatically roll the dice but You have to press the key")

max = 100
player_1 = 0
computer = 0
ladder_feet = [12,14,17,22,41,54]
ladder_top  = [50,55,45,58,79,88]
snake_mouth = [96,94,75,47,37,26]
snake_tail  = [42,71,32,16,3,10]
value = 2


//loop
const randomFunction = () => {
    return  Math.floor(Math.random()*6+1)
}
while(value>0){
    if(player_1<1){
        console.log("Player 1 turn:- ")
        ans = prompt(`Press 'R' key to roll the dice ==> `)
        if(ans == 'r'|| ans == 'R'){
            temp = randomFunction()
            if(temp == 1){
                player_1 = temp
                console.log("You entred into the game")
                value--
            }
            else{
                console.log("'Try again',If you want to enter into the game your dice value must be 1")
            }
        }
        else{
            console.log("Press 'R' key only ")
            continue
        }

    }

    if(computer<1){
        console.log("Computer's  Turn:-  ")
        temp = randomFunction()
        if(temp ==1){
            computer = temp
            console.log("Hey Computer You are enterd into the game! ")
            value--
        }
        else{
            console.log("'Try again',If you want to enter into the game your dice value must be 1")
        }
    
    }

    
    if(value==0){
        value = 1
    }
    if(player_1>0){
        
        ans = prompt(`Press 'R' key to roll the dice ==> `)
        if(ans == 'r'||ans == 'R'){
            dice = randomFunction()
            console.log("Your dice value ==> ",dice)
            player_1 = dice + player_1
            if(player_1>max){
                player_1 = player_1 - dice
                console.log(`You have to roll the dice less than or Equal to ${max - player_1}`)
            }
            console.log('Player 1 position => ',player_1)
            console.log('Computer postions => ',computer)
            if(max == player_1){
                console.log("Great! You are the Winner!")
                break
            }
        
            //ladder check
            if(player_1 == computer){
                computer = 1
                console.log("Sorry Computer, you are lost your position")
                console.log("Player 1 Position => ",player_1)
                console.log("Computer New Position =>",computer)
            }
            
            again = 0
            for(let j=0;j<ladder_feet.length;j++){
                
                if(player_1 == ladder_feet[j]){
                    player_1 = ladder_top[j]
                    again++
                    console.log('Superb! You are climbed the ladder, You can roll the dice again')
                    console.log("Player 1 New position => ",player_1)
                    console.log("computer's position => ",computer)
                    
                    if(player_1 == computer){
                        computer = 1
                        console.log("Sorry Computer, you are lost your position")
                        console.log("Player 1 Position => ",player_1)
                        console.log("Computer's New Position =>",computer)
                    }
                    break
                }
                else if(player_1 == snake_mouth[j]){
                    player_1 = snake_tail[j]
                    console.log("Sorry You were bited by snake!")
                    console.log("Your New Position => ",player_1)
                    console.log("Computer Postion => ",computer)
                    if(player_1 == computer){
                        computer = 1
                        console.log("Sorry Computer, you are lost your position")
                        console.log("Player 1 Position => ",player_1)
                        console.log("Computer Position =>",computer)
                    }
                    break
                }

                
            } 
            //If Player_1 Climbed the ladder give him another chance
            if(again>0){
                ans = prompt(`To Roll the dice again press "R" =>`)
                if(ans == "r" || ans == "R"){
                
                    dice = randomFunction()
                    console.log("Player_1 ==> ",dice)
                    player_1 = dice + player_1
                    console.log('Your New position => ',player_1)
                    console.log("Computer position => ",computer)
                    if(player_1 == computer){
                        computer = 1
                        console.log("Sorry Computer, you are lost your position")
                        console.log("Player 1 Position => ",player_1)
                        console.log("Computer New Position =>",computer)
                }
                    again =0
                }
                else{
                    console.log("Press 'R' key only")
                    continue
                }
            }
            
        }
        else{
            console.log("Press 'R' key only")
            continue
        }
        
        

    }
    if(computer>0){
        dice = randomFunction()
        console.log("Computer Dice Value ==> ",dice)
        computer = dice + computer
            if(computer>max){
                computer = computer - dice
                console.log(`Computer have to roll the dice less than or Equal to ${max - computer}`)
            }
            console.log('Player 1 position => ',player_1)
            console.log('Computer postions => ',computer)
            if(max == computer){
                console.log("Great! Computer is the Winner!")
                break
            }
        
            //ladder check
            if(computer == player_1){
                player_1 = 1
                console.log("Sorry Player 1, you are lost your position")
                console.log("Player 1 New Position => ",player_1)
                console.log("Computer Position =>",computer)
            }
            
            again = 0
            for(let j=0;j<ladder_feet.length;j++){
                
                if(computer == ladder_feet[j]){
                    computer = ladder_top[j]
                    again++
                    console.log('Amazing! Computer is climbed the ladder, Computer can roll the dice again')
                    console.log("Player 1 position => ",player_1)
                    console.log("computer's New position => ",computer)
                    
                    if(computer == player_1){
                        player_1 = 1
                        console.log("Sorry Player 1, you are lost your position")
                        console.log("Player 1's New Position => ",player_1)
                        console.log("Computer's Position =>",computer)
                    }
                    break
                }
                else if(computer == snake_mouth[j]){
                    computer = snake_tail[j]
                    console.log("Sorry Computer, You were bited by snake!")
                    console.log("Your  Position => ",player_1)
                    console.log("Computer's New Postion => ",computer)
                    if(computer == player_1){
                        player_1 = 1
                        console.log("Sorry Player 1, you are lost your position")
                        console.log("Player 1's New Position => ",player_1)
                        console.log("Computer Position =>",computer)
                    }
                    break
                }

                
            } 
            //If Player_1 Climbed the ladder give him another chance
            if(again>0){
                
                dice = randomFunction()
                console.log("Computer dice value ==> ",dice)
                computer = dice + computer
                console.log('Your position => ',player_1)
                console.log("Computer's New position => ",computer)
                if(computer == player_1){
                    player_1 = 1
                    console.log("Sorry Player 1, you are lost your position")
                    console.log("Player 1 New Position => ",player_1)
                    console.log("Computer Position =>",computer)
                }
                again =0
            }
            
            if(max == computer){
                console.log("Computer Wins the game!")
                break
            }
            console.log("_______________________________________________________________")
                
    }
            
}
    
        


