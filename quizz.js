//Start
function start1() {
    document.getElementsByClassName("introContainer")[0].style.display = "none"
    document.getElementsByClassName("container")[0].style.display = "block";
}



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
    if (document.getElementById('correct4'),document.getElementById('correct5').checked)
    {
        score++;
    }
   document.write("Your score is: "+score);
}