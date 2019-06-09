var body = document.getElementsByClassName("snake"); // snake 클래스
var house = document.getElementById("snakehouse"); // snakehouse 아이디
var start = document.getElementById("start"); // 시작 버튼
var direction = "right"; // 이동방향

var score = 0; // 점수
var board = 15; // 가로, 세로 칸 수
var gameInterval; // 뱀 이동 속도

var snake = []; // 뱀 배열 var snake = new Array();와 같은 코드
var apple = []; 

function initMap() { // tr td 생성
    var tableLine = '';
    // tr 생성
    for(var i = 0;i <= board; i++){
        tableLine += '<tr>';
        // tr 안에 td 반복 생성
        var rowLine = '';
        for(var j = 0; j <= board; j++){
            rowLine += '<td id="block'+i+'_'+j+'"></td>'
        }
        tableLine += rowLine + '</tr>';

        // #snakehouse에 tableLine 입력
        $("#snakehouse").html(tableLine);
    }
}

function initSnake(){ // 게임판 위에 뱀 초기 상태
    snake = [];
    snake.push([0,1]);
    drawSnake();
}

function drawSnake() { // 뱀 그리기
    var state = '';
    $("#snakehouse td").removeClass('snake');
    for(var i = 0;i < snake.length;i++){
        $('#block'+snake[i][0]+'_'+snake[i][1]).addClass('snake');
    }
}

function move() {
    var head = new Array();
    head[0] = snake[0][0];
    head[1] = snake[0][1];


}


// 화면 시작 시 상태
function setting() {
    score = 0;
    initMap(); // 게임 판 초기화
    initFood(); // 먹이 초기화
    initSnake(); // 뱀 위치 초기화
    LR = 0; // 좌우 방향 초기화
    TB = 1; // 상하 방향 초기화
}

// // 시작
// function start() {
//     gameInterval = setInterval(move, 500);
// }
// // 끝
// function end(){
//     clearInterval(gameInterval);
// }

$(document).ready(function () {
    setting();
})

