none = 0;
x = 1;
o = 2;
var turn = "X"
var timesPlayed = 0;
var win = false;
var col1 = [none, none, none];
var col2 = [none, none, none];
var col3 = [none, none, none];

function xWon(){
    if((col1[0] == x && col1[1] == x && col1[2] == x) || (col2[0] == x && col2[1] == x && col2[2] == x) || (col3[0] == x && col3[1] == x && col3[2] == x)){
        return true;
    }
    else if(col1[0] == x && col2[0] == x && col3[0] == x){
        return true;
    }
    else if(col1[1] == x && col2[1] == x && col3[1] == x){
        return true;
    }
    else if(col1[2] == x && col2[2] == x && col3[2] == x){
        return true;
    }
    else if(col1[0] == x && col2[1] == x && col3[2] == x){
        return true;
    }
    else if(col1[2] == x && col2[1] == x && col3[0] == x){
        return true;
    }
    console.log(x);
    return false;
}

function oWon(){
    if((col1[0] == o && col1[1] == o && col1[2] == o) || (col2[0] == o && col2[1] == o && col2[2] == o) || (col3[0] == o && col3[1] == o && col3[2] == o)){
        return true;
    }
    else if(col1[0] == o && col2[0] == o && col3[0] == o){
        return true;
    }
    else if(col1[1] == o && col2[1] == o && col3[1] == o){
        return true;
    }
    else if(col1[2] == o && col2[2] == o && col3[2] == o){
        return true;
    }
    else if(col1[0] == o && col2[1] == o && col3[2] == o){
        return true;
    }
    else if(col1[2] == o && col2[1] == o && col3[0] == o){
        return true;
    }
    return false;
}

function winManager(){
    if(xWon()){
        document.getElementById("winText").innerHTML = "X won this round!";
        win = true;
        console.log(col1, col2, col3);
        return;
    }
    if(oWon()){
        document.getElementById("winText").innerHTML = "O won this round!";
        win = true;
        console.log(col1, col2, col3);
        return;
    }

    for(var i = 0; i < 3; i++){
        console.log(col1[i], col2[i], col3[i]);
        if(col1[i] == none || col2[i] == none || col3[i] == none){
            return;
        }
    }
    
    console.log("tie")
    document.getElementById("winText").innerHTML = "Tie!";
    console.log(col1, col2, col3);
    win = true;
}

function update(){
    turn = turn == "X" ? "O" : "X";
    winManager();
    document.getElementById("turn").innerHTML = turn + " turn to play.";
    timesPlayed++;
}

function onClickSquare(row, col){
    if(win){
        return;
    }
    if(col == 1){
        if(row == 1 && col1[0] == none){
            col1[0] = turn == "X" ? x : o;
            createPic(row, col);
        }
        else if(row == 2 && col1[1] == none){
            col1[1] = turn == "X" ? x : o;
            createPic(row, col);
        }
        else if(row == 3 && col1[2] == none){
            col1[2] = turn == "X" ? x : o;
            createPic(row, col);
        }
    }
    else if(col == 2){
        if(row == 1 && col2[0] == none){
            col2[0] = turn == "X" ? x : o;
            createPic(row, col);
        }
        else if(row == 2 && col2[1] == none){
            col2[1] = turn == "X" ? x : o;
            createPic(row, col);
        }
        else if(row == 3 && col2[2] == none){
            col2[2] = turn == "X" ? x : o;
            createPic(row, col);
        }
    }
    else if(col == 3){
        if(row == 1 && col3[0] == none){
            col3[0] = turn == "X" ? x : o;
            createPic(row, col);
        }
        else if(row == 2 && col3[1] == none){
            col3[1] = turn == "X" ? x : o;
            createPic(row, col);
        }
        else if(row == 3 && col3[2] == none){
            col3[2] = turn == "X" ? x : o;
            createPic(row, col);
        }
    }
}

function restart(){
    col1 = [none, none, none];
    col2 = [none, none, none];
    col3 = [none, none, none];
    for(var x = 1; x < 4; x++){
        for(var y = 1; y < 4; y++){
            document.getElementById("x" + x + "y" + y).innerHTML = "";
        }
    }

    turn = "X";
    win = false;
    document.getElementById("winText").innerHTML = "";
    document.getElementById("turn").innerHTML = turn + " turn to play.";
    timesPlayed = 0;
}

function createPic(row, col){
    pic = document.createElement("img");
    pic.src = turn + ".png";
    pic.width = 100;
    pic.hieght = 100;
    pic.style.display = "block";
    pic.setAttribute('draggable', false);
    document.getElementById("x" + row + "y" + col).appendChild(pic);
    update();
}