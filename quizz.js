//Start questions.
function nextA(id) {
    if(document.getElementById("name").value.length < 10) {
        alert('Please fill your name!');
    }
    else if (document.getElementById("email").value.length < 13){
        alert('Please fill your email!');
    }
    else if (document.getElementById("number").value.length < 5){
        alert('Please fill yout employe number!');
    }    
    else if (document.getElementById("phone").value.length < 8){
        alert('Please fill yout number with country code');
    }
    else {
    document.getElementsByClassName("introContainer")[id-1].style.display = "none"
    document.getElementsByClassName("container")[id].style.display = "block";
}
}

//Next 1questions.
function nextB(id) {
    if(document.getElementById("correct1").checked) {
        document.getElementsByClassName("container")[id-1].style.display = "none"
        document.getElementsByClassName("container")[id].style.display = "block";
    }
    else if(document.getElementById("wrong1").checked) {
        document.getElementsByClassName("container")[id-1].style.display = "none"
        document.getElementsByClassName("container")[id].style.display = "block";
    }
    else {
        alert('Please mark one option!');
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

