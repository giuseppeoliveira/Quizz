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
    if(document.getElementById("correct2").checked) {
        document.getElementsByClassName("container")[id-1].style.display = "none"
        document.getElementsByClassName("container")[id].style.display = "block";
    }
    else if(document.getElementById("wrong2").checked) {
        document.getElementsByClassName("container")[id-1].style.display = "none"
        document.getElementsByClassName("container")[id].style.display = "block";
    }
    else {
        alert('Please mark one option!');
}
}

//Next 3questions.
function nextD(id) {
    if(document.getElementById("correct3").checked) {
        document.getElementsByClassName("container")[id-1].style.display = "none"
        document.getElementsByClassName("container")[id].style.display = "block";
    }
    else if(document.getElementById("wrong3").checked) {
        document.getElementsByClassName("container")[id-1].style.display = "none"
        document.getElementsByClassName("container")[id].style.display = "block";
    }
    else {
        alert('Please mark one option!');
}
}

//Next 4questions.
function nextE(id) {
    if(document.getElementById("correct4").checked) {
        document.getElementsByClassName("container")[id-1].style.display = "none"
        document.getElementsByClassName("container")[id].style.display = "block";
    }
    else if(document.getElementById("wrong4").checked) {
        document.getElementsByClassName("container")[id-1].style.display = "none"
        document.getElementsByClassName("container")[id].style.display = "block";
    }
    else {
        alert('Please mark one option!');
}
}

//Next 5questions.
function nextF(id) {
    if(document.getElementById("correct5").checked) {
        document.getElementsByClassName("container")[id-1].style.display = "none"
        document.getElementsByClassName("container")[id].style.display = "block";
    }
    else if(document.getElementById("wrong5").checked) {
        document.getElementsByClassName("container")[id-1].style.display = "none"
        document.getElementsByClassName("container")[id].style.display = "block";
    }
    else {
        alert('Please mark one option!');
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
   alert("Your score is: "+score );
}

