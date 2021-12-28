//Start.
function start1() {
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
    document.getElementsByClassName("introContainer")[0].style.display = "none"
    document.getElementsByClassName("container")[0].style.display = "block";
}
}

//Next question buttons.
function nextb(id) {
        document.getElementsByClassName("container")[id-1].style.display = "none"
        document.getElementsByClassName("container")[id].style.display = "block";
    }



//Next questions normal.
function next(id) {
    document.getElementsByClassName("container")[id-1].style.display = "none"
    document.getElementsByClassName("container")[id].style.display = "block";
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