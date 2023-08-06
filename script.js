// let text1 = document.getElementById("text").value;

// let text5 ="";
function showText() {
  let text1 = document.getElementById("text").value;
  // document.getElementById("display").innerHTML += text1;

  if (text1 === "") {
    alert("Enter task Name");
    // document.getElementById("display").style.display = "none";
  } else {
    document.getElementById("display").innerHTML += text1 + " <br> "; // its show the list one by one
    document.getElementById("display").style.display = "block";
    document.getElementById("text").value = ""; // it clear the input fild
  }
}
