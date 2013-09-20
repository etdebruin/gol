$(document).ready(function () {

  var life = [];
  var rotatorTest = makeArray(5,5);
  kill_array(rotatorTest);
  rotatorTest[2][1] = 1;
  rotatorTest[2][2] = 1;
  rotatorTest[2][3] = 1;
  printArray(rotatorTest);


  //life = makeArray(10,10);
  //life = seed(life);
  life = rotatorTest;
  //printArray(life);


  //life = evaluateState(life);
  //printArray(linfe);


  $('#setGrid').click(function (e) {
    var width = $('#width').val();
    var height = $('#height').val();

    if ($.isNumeric(width) && $.isNumeric(height)) {
      life = makeArray(width, height);
      life = seed(life);
      tableOut(life);
    } else {
      alert("Come on, dude. That's not a number.");
    };
  });

  $('td').bind('click', function () {
    $(this).toggleClass('alive');
  });

  function kill_array(a)
  {

    for (var i = 0; i < a.length; i++) {
      for (var j = 0; j < a[i].length; j++) {
        a[i][j] = 0;
      }
    }

  }

  function live_die(neighbor_sum,current_state){
    var out_state = current_state;
    if(current_state == 1){
      if (neighbor_sum < 2) {
        out_state = 0;
      }
      else if (neighbor_sum > 3) {
        out_state = 0;
      }
    }
    else
    {
      if (neighbor_sum == 3) {
        out_state = 1;
      }
    }
    return out_state;
  }

  function evaluateState(a){
    var out_state = makeArray(a.length,a[0].length)
    for (var i = 0; i < a.length; i++) {
      for (var j = 0; j < a[i].length; j++) {
        var focused_cell = a[i][j];
        var neighbors = getNeighbors(a,i,j);
        var sum_of_numbers = 0;
        for (var k=0; k < neighbors.length; k++) {
          sum_of_numbers +=  neighbors[k];
        }
        out_state[i][j] = live_die(sum_of_numbers, focused_cell);
      }
    }
    return out_state;
  }

  function getNeighbors(a,targ_x,targ_y){
    var arr_x_length = a.length;
    var arr_y_length = a[0].length;

    var x = [-1,0,1];
    var y = [-1,0,1];
    var neighbors = [];

    for(var i = 0; i < x.length; i++) {
      for (var j = 0; j < y.length; j++){
        var computed_x = targ_x + x[i];
        var computed_y = targ_y + y[j];
        var is_self = ((x[i] == 0) && (y[j] == 0))
        if (!is_self) {
          if (computed_x > 0 && computed_y > 0){
            if (computed_y < arr_y_length  && computed_x < arr_x_length){
              neighbors.push(a[computed_x][computed_y]);
            }
          }
        }
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

    for (var i = 0; i < a.length; i++) {
      for (var j = 0; j < a[i].length; j++) {
        o = o + " " + a[i][j];
      }
      o = o + "<br />";
    }

    $('#output').html(o);
  }

  function tableOut(grid) {
    var html = '';
    $.each(grid, function (yIndex, yValue) {
      console.log('yIndex:' + yIndex);
      console.log('yValue:' + yValue);
      html += '<tr>';
      $.each(grid[yIndex], function (xIndex, xValue) {
        console.log('xIndex:' + xIndex);
        console.log('xValue:' + xValue);
        var state = xValue ? 'alive' : '';
        html += '<td class="' + state + '" data-x="' + xIndex + '" data-y="' + yIndex + '"></td>';
      });
      html += '</tr>';
    });
    $('#theGame').html('<table>' + html + '</table>');
  }


  function makeArray(x, y) {
    y = parseInt(y);
    x = parseInt(x);
    var arr = [];
    for (var i = 0; i < y; i++) {
      arr[i] = new Array(x);
    }
    return arr;
  }

});
