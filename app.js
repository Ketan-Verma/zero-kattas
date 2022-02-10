const circleSvg ="<svg height=\"100\" width=\"100\"><circle cx=\"50\" cy=\"50\" r=\"40\" stroke=\"#006fff\" stroke-width=\"3\" fill=\"none\" /></svg>" ;
const crossSvg = "<svg height=\"100\" width=\"100\"><line x1=\"10\" y1=\"10\" x2=\"90\" y2=\"90\" style=\"stroke:#006fff;stroke-width:2\" /><line x1=\"90\" y1=\"10\" x2=\"10\" y2=\"90\" style=\"stroke:#006fff;stroke-width:2\" /></svg>" ;

let cardArray = [
" "," "," ",
" "," "," ",
" "," "," ",];
let cross = true;
// document.getElementById("turnspan").innerHTML="X";
let move = 0 ;
let winnner=false;
let winnnerIs ;
function flipcard(id){
   if(!winnner){
        if (cardArray[id-1]===" ") {
        move++;
        if(cross){
            cardArray[id-1]='x';
            cross=false;
            document.getElementById(id).innerHTML=crossSvg;
            document.getElementById("turnspan").innerHTML="O";
        }else{
            cardArray[id-1]='o';
            cross=true;
            document.getElementById(id).innerHTML=circleSvg;
            document.getElementById("turnspan").innerHTML="X";
        }
        if(move>4){
            checkForWinner();
        }
    }}
}
function checkForWinner()
{
    this.x='x';
    this.y='y';
    //digo
        if(cardArray[0]===cardArray[4]&&cardArray[8]===cardArray[4]&&cardArray[8]===cardArray[0]&&cardArray[0]!==' '){
            winnner=true;
            winnnerIs=cardArray[0];
            highLight(1,5,9);
            // console.log("winner is " +winnnerIs);
            }
    
    //cross digo
        if(cardArray[6]===cardArray[2]&&cardArray[6]===cardArray[4]&&cardArray[4]===cardArray[2]&&cardArray[2]!==' '){
            winnner=true;
            winnnerIs=cardArray[2];
            highLight(3,5,7);
            // console.log("winner is " +winnnerIs);

        }
    //row
    for (let i = 0; i < 8; i+=3) {
        if(cardArray[i]===cardArray[i+1]&&cardArray[i]===cardArray[i+2]&&cardArray[i+1]===cardArray[i+2]&&cardArray[i]!==' '){
            winnner=true;
            winnnerIs=cardArray[i];
            highLight(i+1,i+2,i+3);
            // console.log("winner is " +winnnerIs);

        }
    }
    //col
    for (let i = 0; i < 3; i++) 
    {
        if(cardArray[i]===cardArray[i+3]&&cardArray[i]===cardArray[i+6]&&cardArray[i+3]===cardArray[i+6]&&cardArray[i]!==' ')
        {
            winnner=true;
            winnnerIs=cardArray[i];
            highLight(i+1,i+4,i+7);
            // console.log("winner is " +winnnerIs);

        }    
        
    }    
    
}
function highLight(a,b,c){
    document.getElementById(a).style.backgroundColor="cyan";
    document.getElementById(b).style.backgroundColor="cyan";
    document.getElementById(c).style.backgroundColor="cyan";
    document.getElementById("turnspan").innerHTML=" ";
    document.getElementById("turn").innerHTML=" ";
    document.getElementById("winner").innerHTML= "<b>"+cardArray[a-1]+"</b>" + " Won the Game" ;

}
function reset(){
    cardArray = [
        " "," "," ",
        " "," "," ",
        " "," "," ",];
        for (let i = 1; i < 10; i++) {
            document.getElementById(i).innerHTML="";
            document.getElementById(i).style.backgroundColor="#ffff33";
            document.getElementById("turnspan").innerHTML="X";
            document.getElementById("turn").innerHTML="Your Turn : ";
            document.getElementById("winner").innerHTML="";
        }
    cross   = true;
    move    = 0 ;
    winnner = false;
        
}
