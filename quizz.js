// Display first block.
document.getElementsByClassName('container')[0].style.display = "block";

// Next function.
function next(id) {
    document.getElementsByClassName('container')[id-1].style.display = "none";
    document.getElementsByClassName('container')[id].style.display = "none";
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