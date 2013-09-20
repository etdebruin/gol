$(document).ready(function () {

  var life = [];

  life = makeArray(10,10);
  life = seed(life);

  printArray(life);

  function live_die(neighbor_sum,current_state){
    var out_state = current_state;
    if(current_state == 1){
      if (neighbor_sum < 2)
      {
        out_state = 0;
      }
      else if (neighbor_sum > 3)
      {
        out_state = 0;
      }
    }
    else
    {
      if (neighbor_sum < 2)
      {
        out_state = 0;
      }
    }
    return out_state;
  }

  function evaluateState(a){
    var out_state = $.extend({}, a);
    for (i = 0; i < a.length; i++) {
      for (j = 0; j < a[i].length; j++) { 
        var focused_cell = a[i][j];
        var neighbors = getNeighbors(a,i,j);
        var sum_of_numbers = 0;
        for k=0; k < neighbors.length; k++{
          sum_of_numbers +=  neighbors[k];
        }
        out_state[i][j] = live_die(sum_of_numbers, focused_cell);
      }
    }
    return out_state;
  }

  function getNeightbors(a,targ_x,targ_y){
    arr_x_length = a.length;
    arr_y_length = a[0].length;

    x = [-1,0,1];
    y = [-1,0,1];
    neighbors = [];

    for(i = 0; i < x.length; i++) {
        for (j=0; j < y.length; j++){
          computed_x = targ_x + x[i];
          computed_y = targ_y + y[1];
          if (computed_x > 0 && computed_y > 0){
          if (computed_y < arr_y_length  && computed_x < arr_x_length){
            neighbors.push(arr[computed_x][computed_y]);
          }}
        }
    }
    return neighbors;
  }
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

    for (i = 0; i < 10; i++) {
      for (j = 0; j < 10; j++) {
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
