// let text1 = document.getElementById("text").value;

function showText() {
  let text1 = document.getElementById("text").value;
  // document.getElementById("display").innerHTML += text1;
  // document.getElementById("display").style.display = "block";

  if (text1 === "") {
    alert("Enter task Name");
    document.getElementById("display").style.display = "none";
  } else {
    document.getElementById("display").innerHTML += text1;
    document.getElementById("display").style.display = "block";
  }

  let moreTask = [];
  document.getElementById("display").innerHTML  = moreTask.push(text1);
}
