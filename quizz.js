//Validate input.
function validate(id, length){
    if(document.getElementById(id).value.length < length) {        
        document.getElementById("alert-"+id).classList.remove("hidden");
        return false; 
     }
     else{
         document.getElementById("alert-"+id).classList.add("hidden");
         return true; 
     }
}

//Start questions.
function nextA(id) {
    if (validate("name",10)
    &validate("email",13)
    &validate("number",5)
    &validate("phone",8)){
    document.getElementsByClassName("introContainer")[id-1].style.display = "none"
    document.getElementsByClassName("container")[id].style.display = "block";
}
}

//Next 1questions.
function nextB(id) {
    var q1 = document.getElementsByClassName("q1") 
    if(q1[0].checked||q1[1].checked||q1[2].checked)
    {
        document.getElementsByClassName("container")[id-1].style.display = "none"
        document.getElementsByClassName("container")[id].style.display = "block";
    }
    else {
        document.getElementById("qst1").classList.remove("hidden");
}
}

//Next 2questions.
function nextC(id) {
    var q2 = document.getElementsByClassName("q2")
    if(q2[0].checked||q2[1].checked||q2[2].checked)
    {
        document.getElementsByClassName("container")[id-1].style.display = "none"
        document.getElementsByClassName("container")[id].style.display = "block";
    }
    else {
        document.getElementById("qst2").classList.remove("hidden");
    } 
}

//Next 3questions.
function nextD(id) {
    var q2 = document.getElementsByClassName("q3")
    if(q2[0].checked||q2[1].checked||q2[2].checked)
    {
        document.getElementsByClassName("container")[id-1].style.display = "none"
        document.getElementsByClassName("container")[id].style.display = "block";
    }
    else {
        document.getElementById("qst3").classList.remove("hidden");
    } 

}

//Next 4questions.
function nextE(id) {
    var q2 = document.getElementsByClassName("q4")
    if(q2[0].checked||q2[1].checked||q2[2].checked)
    {
        document.getElementsByClassName("container")[id-1].style.display = "none"
        document.getElementsByClassName("container")[id].style.display = "block";
    }
    else {
        document.getElementById("qst4").classList.remove("hidden");
    } 


}

//Next 5questions.
function nextF(id) {
    var q2 = document.getElementsByClassName("q5")
    if(q2[0].checked||q2[1].checked||q2[2].checked)
    {
        document.getElementsByClassName("container")[id-1].style.display = "none"
        document.getElementsByClassName("container")[id].style.display = "block";
    }
    else {
        document.getElementById("qst5").classList.remove("hidden");
    } 


}


// Total score function.
function result() {
    var score=0;
    if (document.getElementById('correct1').checked)
    {
        score++;
    }
    if (document.getElementById('correct2').checked)
    {
        score++;
    }
    if (document.getElementById('correct3').checked)
    {
        score++;
    }
    if (document.getElementById('correct4').checked)
    {
        score++;
    }
    if (document.getElementById('correct5').checked)
    {
        score++;
    }
    document.getElementById("res").innerHTML = "Your score is: "+score;
}

