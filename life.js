$(document).ready(function () {

  var life = [];

  life = makeArray(100,100);
  life = seed(life);
  printArray(life);


  function seed(a) {

    for (i = 0; i < a.length; i++) {
      for (j = 0; j < a[i].length; j++) {
        a[i][j] = Math.floor((Math.random()*2));
      }
    }

    return a;
  }

  function printArray(a) {
    var o = "";

    for (i = 0; i < a.length; i++) {
      for (j = 0; j < a[i].length; j++) {
        o = o + " " + a[i][j];
      }
      o = o + "<br />";
    }

    $('#output').html(o);
  }

  function makeArray(x, y) {
    var arr = new Array(x), i;
    for (i=0; i<y; i++) {
      arr[i] = new Array(x);
    }
    return arr;
  }

});
