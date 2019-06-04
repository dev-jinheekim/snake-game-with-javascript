var body = document.getElementsByClassName("snake"); // snake 클래스
var house = document.getElementById("snakehouse"); // snakehouse 아이디
var board = 20; // 가로, 세로 칸 수


var direction = "right"; // 이동방향

//
// function init(){ // 칸
//     snake = [];
//     arr.push([0,1]);
//     onsnake();
// }
//
// function onsnake() { // 뱀 그리기
//     $("#snakehouse td").removeClass('snake');
//     for(var i = 0; i <= board; i++){
//
//     }
// }
//
// function move() { // 뱀 이동
//      var head = new Array();
//      head[0] = snake[0][0];
//      head[1] = snake[0][1];
//
// }

var score = 0;

var lr = 0; // 좌우
var tb = 0; // 상하

var gameInterval;

var snake = new Array(); // 뱀 몸통
var apple = new Array(); // 사과


// 뱀을 표 위에 그림
function initSnake() {
    snake = []; // 배열
    snake.push([0,1]); // snake 배열을 0,1로 반환..?
    drawSnake();
}



// 뱀 그리기
function drawSnake() {
    var state = '';
    $("#snakehouse td").removeClass('snake');
    for(var i = 0; i < snake.length; i++){ // 뱀 길이가 늘어나는 동안 반복
        $(snake[0][i] + snake[i][1]).addClass('snake'); // snake 클래스를 가진 블록이 한칸씩 이동?
    }

}