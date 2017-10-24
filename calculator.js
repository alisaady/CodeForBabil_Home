
var x;
var z;
function ca(n1) {

  document.getElementById('txt1').value += n1;

}
function math(m1) {
   x = eval(m1);
        // document.getElementById('txt1').value ="";

}
function equal(z1) {
  var y = eval(z1);
    document.getElementById('txt1').value = eval(x + y);

}
