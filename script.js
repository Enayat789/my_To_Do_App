// let text1 = document.getElementById("text").value;

function showText() {
  let text1 = document.getElementById("text").value;
  document.getElementById("display").innerHTML = text1;

  if (text1 == 0) {
    alert("Enter task Name");
  }
}
