console.log("This is Tic Tac Toe Game");
let audioTurn= new Audio("ting.mp3");
let gameover=new Audio("gameover.mp3");
let music= new Audio("music.mp3");
let isgameover=false;
let turn="X";

//function to change the turn
const changeTurn =()=>{
    return turn==="X"? "0":"X";
}

//function to check for win
const checkWin=()=>{
    let boxtexts=document.querySelectorAll(".boxtext");
    let wins=[
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]
    wins.forEach(e=>{
        if((boxtexts[e[0]].innerText===boxtexts[e[1]].innerText && boxtexts[e[2]].innerText===boxtexts[e[1]].innerText && boxtexts[e[0]].innerText!=="")){
            document.querySelector(".info").innerText=boxtexts[e[0]].innerText + " Won";
            isgameover=true;
            document.querySelector(".imgbox").getElementsByTagName("img")[0].style.width="200px";
        }
    
    })
    
}


//function for game logic
let boxes=document.querySelectorAll(".box");
Array.from(boxes).forEach(Element=>{
    let boxtext=Element.querySelector(".boxtext");
    Element.addEventListener("click", ()=>{
        if(boxtext.innerText===""){
            boxtext.innerText=turn;
            turn=changeTurn();
            audioTurn.play();
            checkWin();
            if(!isgameover){
                document.querySelector(".info").innerText="Turn for " + turn;
            }
            

        }
    })
})

//onclick event on reset button
document.querySelector("#reset").addEventListener("click", ()=>{
    let boxtextss=document.querySelectorAll(".boxtext");
    Array.from(boxtextss).forEach(Element=>{
        Element.innerText="";

    })
    turn="X";
    isgameover=false;
    document.querySelector(".info").innerText="Turn for " +turn;
    document.querySelector(".imgbox").getElementsByTagName("img")[0].style.width="0px";
    
})