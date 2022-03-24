const gridNumber = document.getElementById("gridSize")
const playerCourtNumber = document.getElementById("playerCount")
const submit = document.getElementById("submit")


submit.addEventListener("click" ,function (){
    let gridValue = gridNumber.value ;
    let playerCourtValue = playerCourtNumber.value ;
    const diceDataBase = [] ;
    for(let i = 0 ; i< playerCourtValue ; i++){
        diceDataBase.push({
            id:i,
            playerPosition:[0],
            rollHistory:[],
            reach:0

        })
    }


    let maxReach = 0 ;
    let maxReachId = -1 ;
    let box = gridValue*gridValue ;
    let p = 0;

while(maxReach < box){
    for(let i = 0 ; i < playerCourtValue ; i++){
        let rndm = random() ;
        
        
        
        diceDataBase[i].rollHistory.push(rndm) ;
        //diceDataBase[i].reach =  rndm ;
        let newReach = diceDataBase[i].reach + rndm ;
        diceDataBase[i].reach = newReach ;
        diceDataBase[i].playerPosition.push(newReach) ;
        if(newReach>maxReach){
            maxReach = newReach ;
            maxReachId = diceDataBase[i].id ;
        }

        if(maxReach>=box){
            break ;
        }

        
    }
    //p++;
    
}
//console.log(box)
console.log(diceDataBase) ;
createCard(diceDataBase , maxReachId ,playerCourtValue)
    
})


function createCard(diceDataBase , maxReachId ,playerCourtValue){
    const tableCard = document.getElementById("card-body")
    tableCard.innerHTML = ""
    for(let i = 0 ;i < playerCourtValue ; i++){
    const tr = document.createElement("tr")
    const tdId = document.createElement("td")
    const tdDiceRoll = document.createElement("td")
    const tdDiceRollHistory = document.createElement("td")
    const tdPositionHistory = document.createElement("td")
    const tdWinnerStatus = document.createElement("td")

    tdId.innerHTML = diceDataBase[i].id + 1;
    tdDiceRollHistory.innerHTML = diceDataBase[i].rollHistory.toString()
    tdPositionHistory.innerHTML = diceDataBase[i].playerPosition.toString()
    if(diceDataBase[i].id == maxReachId){
        tdWinnerStatus.innerHTML = "Winner"
    }else{
        tdWinnerStatus.innerHTML = ""
    }

    const tempRoll = diceDataBase[i].rollHistory.length - 1

    
    if(tempRoll>=0){
        tdDiceRoll.innerHTML = diceDataBase[i].rollHistory[tempRoll]
    }




    tr.appendChild(tdId)
    tr.appendChild(tdDiceRoll)
    tr.appendChild(tdDiceRollHistory)
    tr.appendChild(tdPositionHistory)
    tr.appendChild(tdWinnerStatus)

    tableCard.appendChild(tr)
    }
    
}

function random(){
    
    return Math.floor(Math.random()*6 + 1) ;
}


