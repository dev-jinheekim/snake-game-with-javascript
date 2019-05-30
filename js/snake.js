var body = document.getElementsByClassName("snake"); // snake 클래스
var house = document.getElementById("snakehouse"); // snakehouse 아이디
var board = 20; // 가로, 세로 칸 수

var snake = new Array(); // 뱀 몸통

var apple = new Array();
var direction = "right"; // 이동방향


function init(){ // 칸
    snake = [];
    arr.push([0,1]);
    onsnake();
}

function onsnake() { // 뱀 그리기
    $("#snakehouse td").removeClass('snake');
    for(var i = 0; i <= board; i++){

    }
}

function move() { // 뱀 이동
     var head = new Array();
     head[0] = snake[0][0];
     head[1] = snake[0][1];

}