
//Validate input.
function validate(id, length){
    if(document.getElementById(id).value.length < length) {        
        document.getElementById("alert-"+id).classList.remove("hidden");
        document.getElementById('progress_bar').style.width = "15%";
        return false;
     }
     else{
         document.getElementById("alert-"+id).classList.add("hidden");
         document.getElementById('progress_bar').style.width = "30%";
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
    if(q1[0].checked||q1[1].checked||q1[2].checked||q1[3].checked)
    {
        document.getElementsByClassName("container")[id-1].style.display = "none"
        document.getElementsByClassName("container")[id].style.display = "block";
        document.getElementById('progress_bar').style.width = "45%";
    }
    else {
        document.getElementById("qst1").classList.remove("hidden");
        document.getElementById('progress_bar').style.width = "30%";
}
}

//Next 2questions.
function nextC(id) {
    var q2 = document.getElementsByClassName("q2")
    if(q2[0].checked||q2[1].checked||q2[2].checked||q2[3].checked)
    {
        document.getElementsByClassName("container")[id-1].style.display = "none"
        document.getElementsByClassName("container")[id].style.display = "block";
        document.getElementById('progress_bar').style.width = "60%";
    }
    else {
        document.getElementById("qst2").classList.remove("hidden");
        document.getElementById('progress_bar').style.width = "45%";
    } 
}

//Next 3questions.
function nextD(id) {
    var q3 = document.getElementsByClassName("q3")
    if(q3[0].checked||q3[1].checked||q3[2].checked||q3[3].checked)
    {
        document.getElementsByClassName("container")[id-1].style.display = "none"
        document.getElementsByClassName("container")[id].style.display = "block";
        document.getElementById('progress_bar').style.width = "75%";
    }
    else {
        document.getElementById("qst3").classList.remove("hidden");
        document.getElementById('progress_bar').style.width = "60%";
    } 

}

//Next 4questions.
function nextE(id) {
    var q4 = document.getElementsByClassName("q4")
    if(q4[0].checked||q4[1].checked||q4[2].checked||q4[3].checked)
    {
        document.getElementsByClassName("container")[id-1].style.display = "none"
        document.getElementsByClassName("container")[id].style.display = "block";
        document.getElementById('progress_bar').style.width = "90%";
    }
    else {
        document.getElementById("qst4").classList.remove("hidden");
        document.getElementById('progress_bar').style.width = "75%";
    } 


}

//Next 5questions.
function nextF(id) {
    var q5 = document.getElementsByClassName("q5")
    if(q5[0].checked||q5[1].checked||q5[2].checked||q5[3].checked)
    {
        document.getElementsByClassName("container")[id-1].style.display = "none"
        document.getElementsByClassName("container")[id].style.display = "block";
        document.getElementById('progress_bar').style.width = "100%";
    }
    else {
        document.getElementById("qst5").classList.remove("hidden");
        document.getElementById('progress_bar').style.width = "90%";
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
    document.getElementById("res").innerHTML = "You are exceptional for being a part of this experience. You tried and did it, from 5 questions you answered correct the total of "+score ;
}

