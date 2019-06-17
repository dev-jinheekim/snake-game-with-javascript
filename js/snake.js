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
        // #block에서 snake 배열의 x축과 y축에 snake 클래스를 부여
        // = 사과를 먹었을 때 클래스 부여
        // hasClass는 클래스명을 가져오는 명령
        // 반복
        if($('#block'+snake[i][0]+'_'+snake[i][1].hasClass('food')){ // 사과를 먹었을 경우
            score++; // 점수 증가
            $("#score").text(score); // 점수 반영
            food.pop(); // 데이터가 있는지 확인 한 후 데이터를 빼내는 함수
            initFood(); // 새로운 먹이 추가
            state = 'eat';
        }

    }
    return state;
}

function move() { // 움직이는 함수
    var head = new Array();
    head[0] = snake[0][0];
    head[1] = snake[0][1];
    
    
}

function left() {
    if(TB == 0) return; // 반대방향으로 뱡향전환 불가능
    LR = -1; // 좌우 방향이 -(왼쪽)으로 향함
    TB = 0; // 상하 방향 영향 없음
}

function right(){
    if(TB == 0) return; // return은 값을 돌려줌(또는 현재 함수에서 나감)
    LR = 1;
    TB = 0;
}

function up() {
    if(LR == 0) return;
    LR = 0;
    TB = -1;
}

function down() {
    if(LR == 0) return;
    LR = 0;
    TB = 1;
}




$(document).on('click','#startBtn',function () {
    end();
    start();
})



// 화면 시작 시 상태
function setting() {
    score = 0; // 점수 초기화
    initMap(); // 게임 판 초기화
    initFood(); // 먹이 초기화
    initSnake(); // 뱀 위치 초기화
    LR = 0; // 좌우 방향 초기화
    TB = 1; // 상하 방향 초기화
}

// 시작
function start(){
    gameInterval = setInterval(move,500); // 타이머를 시작시킴
}

// 끝
function end(){
    clearInterval(gameInterval); // 타이머를 끝냄
}


// // 끝
// function end(){
//     clearInterval(gameInterval);
// }

$(document).ready(function () {
    setting();
})

