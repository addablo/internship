var upRow = 1;
var downRow = 2;
var leftCol = 5;
var rightCol = 6;
var bottom = 15;
var verifica = 0;
var matrix = [];

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function addTable() {
    var myTableDiv = document.getElementById("tableDiv");

    var table = document.createElement('table');
    table.border = '1';

    var tableBody = document.createElement('tbody');
    table.appendChild(tableBody);

    for (var i = 1; i <= 15; i++) {

        var tr = document.createElement('tr');
        tableBody.appendChild(tr);

        for (var j = 1; j <= 10; j++) {
            var td = document.createElement('td');
            td.width = '10%';
            td.id = "row-" + i + "-col-" + j;
          //  td.appendChild(document.createTextNode("Cell " + i + "," + j));
            tr.appendChild(td);
        }
    }
    myTableDiv.appendChild(table);
}
addTable();

function makeMatrixTrue() {
    matrix[upRow][leftCol] = 1;
    matrix[upRow][rightCol] = 1;
    matrix[downRow][leftCol] = 1;
    matrix[downRow][rightCol] = 1;
}

makeColorRed();

for (var i = 1; i <= 16; i++) {
    matrix.push([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
}

makeMatrixTrue();

function key() {
    if (downRow < bottom) {
        var x = event.key;
        if (x == "ArrowRight" && rightCol <= 10 && matrix[upRow][rightCol + 1] == 0 && matrix[downRow][rightCol + 1] == 0) {
            makeColorWhite();
            makeMatrixFalse();
            leftCol++;
            rightCol++;

        }
        if (x == "ArrowLeft" && leftCol >= 2 && matrix[upRow][leftCol - 1] == 0 && matrix[downRow][leftCol - 1] == 0) {
            makeColorWhite();
            makeMatrixFalse();
            leftCol--;
            rightCol--;

        }
        makeColorRed();
        makeMatrixTrue();
    }
}

setInterval(drop, 250);

function drop() {
    if (downRow + 1 == bottom && matrix[downRow + 1][leftCol] == 0 && matrix[downRow + 1][rightCol] == 0) {
        makeMatrixFalse();
        makeColorWhite();
        upRow++;
        downRow++;
        makeColorRed();
        makeMatrixTrue();
        document.getElementById('container').style.backgroundColor = getRandomColor();
        clear();
        reset();
    } else {
        if (matrix[downRow + 1][leftCol] == 0 && matrix[downRow + 1][rightCol] == 0) {
            makeMatrixFalse();
            makeColorWhite();
            upRow++;
            downRow++;
            document.getElementById('container').style.backgroundColor = getRandomColor();
            makeColorRed();
            makeMatrixTrue();
        }
        else{
            clear();
            if (matrix[1][5] == 1 || matrix[1][6] == 1){
              gameOver();
              reset();
              document.getElementById('container').style.backgroundColor = "grey";
            }
            else{
              reset();
              document.getElementById('container').style.backgroundColor = getRandomColor();
            }
        }
    }
}

function makeColorWhite() {
    document.getElementById("row-" + upRow + "-col-" + leftCol).style.background = "white";
    document.getElementById("row-" + upRow + "-col-" + rightCol).style.background = "white";
    document.getElementById("row-" + downRow + "-col-" + leftCol).style.background = "white";
    document.getElementById("row-" + downRow + "-col-" + rightCol).style.background = "white";
}

function makeColorRed() {
    document.getElementById("row-" + upRow + "-col-" + leftCol).style.background = "red";
    document.getElementById("row-" + upRow + "-col-" + rightCol).style.background = "red";
    document.getElementById("row-" + downRow + "-col-" + leftCol).style.background = "red";
    document.getElementById("row-" + downRow + "-col-" + rightCol).style.background = "red";
}


function makeMatrixFalse() {
    matrix[upRow][leftCol] = 0;
    matrix[upRow][rightCol] = 0;
    matrix[downRow][leftCol] = 0;
    matrix[downRow][rightCol] = 0;
}

function reset(){
  document.getElementById("row-" + 1 + "-col-" + 5).style.background = "red";
  document.getElementById("row-" + 1 + "-col-" + 6).style.background = "red";
  document.getElementById("row-" + 2 + "-col-" + 5).style.background = "red";
  document.getElementById("row-" + 2 + "-col-" + 6).style.background = "red";
  upRow = 1;
  downRow = 2;
  leftCol = 5;
  rightCol = 6;
  bottom = 15;
  makeMatrixTrue();
}

function clear(){
  for (var i = 1; i <= 15; i++){
    var ok = 1;
    for (var j = 1; j <= 10; j++){
      if(matrix[i][j] != 1){
        ok = 0;
      }
    }
    if (ok == 1){
      for (var j = 1; j <= 10; j++){
        document.getElementById("row-" + i + "-col-" + j).style.background = "white";
        matrix[i][j] = 0;
      }
      for (var k = i - 1; k >= 1; k--){
        for (var j = 1; j <= 10; j++){
          if (matrix[k][j] == 1){
            var asd = k+1;
            matrix[k][j]=0;
            document.getElementById("row-" + k + "-col-" + j).style.background = "white";
            document.getElementById("row-" + asd + "-col-" + j).style.background = "red";
            matrix[k+1][j]=1;
          }
        }
      }
    }
  }
}

function gameOver(){
  alert("You lost ! :(");
  for (var i = 1; i <= 15; i++){
    for (var j = 1; j <= 10; j++){
      matrix[i][j] = 0;
      document.getElementById("row-" + i + "-col-" + j).style.background = "white";
    }
  }
}
