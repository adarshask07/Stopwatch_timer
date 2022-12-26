var hrs = 0 ; 
var min = 0 ; 
var sec = 0 ; 
var tens = 0 ; 
var timer_status = false ; 


function start (){
    timer_status =true ; 
    document.getElementById("button-start").disabled =true ;
    stopwatch() ; 
}

function stop (){
    timer_status = false ;
    document.getElementById("button-start").disabled =false ;
}

function reset (){
    timer_status= false ;  
    document.getElementById("button-start").disabled =false ;
    hrs = 0 ; 
    min = 0 ; 
    sec = 0 ; 
    tens =0 ; 
    document.getElementById("tens").innerHTML = "0"+tens ; 
    document.getElementById("sec").innerHTML = "0"+sec ; 
    document.getElementById("min").innerHTML = "0"+min ; 
    document.getElementById("hrs").innerHTML = "0"+hrs ; 

}

function stopwatch(){

        if (timer_status==true) {
            tens = tens+1 ; 
        
        // for increasing seconds. 
            if (tens==99){
                sec = sec +1 ; 
                tens = 0 ;
                }
    
        // for increasing minutes. 
            if (sec ==59){
                min = min+1 ; 
                sec = 0 ; 
            }
        
        //for increasing hours. 
            if(min==59){
                hrs = hrs+1 ; 
                min = 0 ; 
                sec = 0 ; 
            }

        //inserting all the data into the innerHTML by targetting the ids of elements. 
        // adding zeros before if the numbers are one digit. 
        //tens------------------------------------------------------------
        if (tens<10){
            document.getElementById("tens").innerHTML = "0"+tens ; 
        }
        else{
            document.getElementById("tens").innerHTML = tens ; 
        }
        
        //sec-----------------------------------------------------------------
        if (sec<10){
            document.getElementById("sec").innerHTML = "0"+sec ; 
        }
        else{
            document.getElementById("sec").innerHTML = sec ; 
        }
        
        //min----------------------------------------------------------------
        if (min<10){
            document.getElementById("min").innerHTML = "0"+min ; 
        }
        else{
            document.getElementById("min").innerHTML = min ; 
        }
        
        //hrs------------------------------------------------------------------
        if (hrs<10){
            document.getElementById("hrs").innerHTML = "0"+hrs ; 
        }
        else{
            document.getElementById("hrs").innerHTML = hrs ; 
        }
        
        //----------------------------------------------------------------
           
        //calling the stopwatch function after 10 ms repeatedly. 
            setTimeout(stopwatch ,10) ;
        }
}
