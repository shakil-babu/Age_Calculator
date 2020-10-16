document.getElementById("calculateBtn").addEventListener("click", function () {
  var presentYear = parseFloat(document.getElementById("presentYear").value);
  var presentMonth = parseFloat(document.getElementById("presentMonth").value);
  var presentDay = parseFloat(document.getElementById("presentDay").value);

  var birthYear = parseFloat(document.getElementById("birthYear").value);
  var birthMonth = parseFloat(document.getElementById("birthMonth").value);
  var birthDay = parseFloat(document.getElementById("birthDay").value);

  //for month
  var oneMonth30Days = presentMonth * 30;
  var a = oneMonth30Days - 30;
  var b = a / 30;

  //for year
  var oneYear12Month = presentYear * 12;
  var substract = oneYear12Month - 12;
  var Allyear = substract / 12;

  if (birthDay > presentDay) {
    presentDay += 30;
    var day = presentDay - birthDay;
    document.getElementById("showDay").innerHTML = day + " দিন";
  } else {
    var day = presentDay - birthDay;
    document.getElementById("showDay").innerHTML = day + " দিন";

    if (day < 10) {
      document.getElementById("showDay").innerHTML = "0" + day + " দিন";
    }
  }

  if (birthMonth > presentMonth) {
    var plus12Month = b + 12;
    var month = plus12Month - birthMonth;
    document.getElementById("showMonth").innerHTML = month + " মাস";
  } else if (b > birthMonth) {
    var month = b - birthMonth;
    document.getElementById("showMonth").innerHTML = month + " মাস";

    if (month < 10) {
      document.getElementById("showMonth").innerHTML = "0" + month + " মাস";
    }
  } else {
    var month = presentMonth - birthMonth;
    document.getElementById("showMonth").innerHTML = month + " মাস";
  }
  if (
    presentDay > birthDay &&
    presentMonth > birthMonth &&
    presentYear > birthYear
  ) {
    var year = presentYear - birthYear;
    document.getElementById("showYear").innerHTML = year + " বছর";
  } else {
    var year = Allyear - birthYear;
    document.getElementById("showYear").innerHTML = year + " বছর";
  }

  document.getElementById("calculatedAge").style.display = "block";

  //name input
  var input = document.getElementById("nameInput").value;
  document.getElementById("showName").innerHTML = input;
});

//for first step

document.getElementById("eiinBtn").addEventListener("click", function () {
  var error = (document.getElementById("showE").innerHTML =
    '<h5 class="animated swing alert-danger p-2" style="color:red;">Fill in the blank!</h5>');
  var input = document.getElementById("nameInput").value;
  if (input === "") {
    error;
    setTimeout(clear, 5000);
  } else {
    document.getElementById("showMain").style.display = "none";
    document.getElementById("Main").style.display = "block";
  }
});

function clear() {
  document.querySelector("#showE").style.display = "none";
}
