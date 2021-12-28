//Start questions.
function nextA(id) {
    document.getElementsByClassName("introContainer")[id-1].style.display = "none"
    document.getElementsByClassName("container")[id].style.display = "block";
}

//Next questions.
function nextB(id) {
    document.getElementsByClassName("container")[id-1].style.display = "none"
    document.getElementsByClassName("container")[id].style.display = "block";}


// Total score function.
function result () {
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
   document.write("Your score is: "+score);
}


// Total score function.
