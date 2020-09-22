var allIds = ["card1", "card2", "card3", "card4", "card5"] ;
var place = "" ;
var count = 0;

function flipCard(direction){
    //lets first check if we are at either end of the array and deal with those situations

    // we are at beginning position and turning backwards
    if(direction == "left" && count == 0){
    
        //make card1 invisible
        document.getElementById("card1").className = "invis";

        //move our pointer to the end of the array
        count = 4;
        //make the last card visible
        document.getElementById(allIds[count]).classList.remove("invis");

        console.log("count is" + count + "and we are at the beginning trying to move backwards") ;
        return count;

    }

    //we are at the end and swing back to beginning.
    if(direction == "right" && count == 4){

        //make card5 invisible
        document.getElementById("card5").className = "invis" ;

        //move our pointer to the beginning of the array
        count = 0;

        //make the first card visible
        document.getElementById("card1").classList.remove("invis");


        console.log("count is" + count + "and we are at the end trying to move to beginning") ;

        return count;
    }

    //we have the ends covered now lets just check direction and move accordingly

    if(direction == "right"){
        //make the current card invisible
        document.getElementById(allIds[count]).className = "invis" ;

        //move our pointer in the proper direction
        count = count + 1;

        //make the new card visible
        document.getElementById(allIds[count]).classList.remove("invis");

        console.log("count is" + count + " and we are moving right") ;
        return count;

    }

    // mostly the same logic as above double check direction fist
    if(direction == "left"){
        //make the current card invisible
        document.getElementById(allIds[count]).className = "invis" ;

        //move our pointer in the proper direction
        count = count -1 ;

        //make the new card visible
        document.getElementById(allIds[count]).classList.remove("invis");

        console.log("count is" + count + " and we are trying to move backwards") ;
        return count;

    }

    return ;

}


//this runs on load to start on highlights (card1) and make other sections invisible
function pageInit(){
    document.getElementById('card2').className = "invis";
    document.getElementById('card3').className = "invis";
    document.getElementById('card4').className = "invis";
    document.getElementById('card5').className = "invis";
}