// No need to edit this! But feel free to play around :)

(function () {
  var quiz1 = document.getElementById('quiz1');
  var quiz2 = document.getElementById('quiz2');
  var quiz3 = document.getElementById('quiz3');
  var quiz4 = document.getElementById('quiz4');
  var grade = document.getElementById('grade');
  var calc = document.getElementById('calculate');
  var output = document.getElementById('average');

  calc.onclick = function () {
    var average = Math.round(10 *
      ((parseFloat(quiz1.value) || 0) +
        (parseFloat(quiz2.value) || 0) +
        (parseFloat(quiz3.value) || 0) +
        (parseFloat(quiz4.value) || 0)) / 4) / 10;
    output.innerHTML = average.toString();
  };
})();