var body = document.getElementsByClassName("snake"); // snake 클래스
var house = document.getElementById("snakehouse"); // snakehouse 아이디
var board = 20; // 가로, 세로 칸 수
var start = document.getElementById("start"); // 시작 버튼
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

var LR = 0; // 좌우 방향
var TB = 1; // 상하 방향

var gameInterval;

var snake = new Array(); // 뱀 array 생성
var apple = new Array(); // 사과 array 생성


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
        return snake();
    }
}


// 먹이 초기화
// function initFood() {
//     var x;
//     var y;
//
//     do{
//         x = generateRandom(0, board-1);
//         y = generateRandom(0, board-1);
//     }while{
//     ($('#'))
//     }
// }




// 뱀 이동
function move() {
    var head = new Array(); // 뱀 머리?
    head[0] = snake[0][0];
    head[1] = snake[0][1];

    // 벽 부딪힌 여부
    var tmp = head[0] + 1 * TB; // ?
    if(tmp >= 0 && tmp <= board) {
        head[0] = tmp;
    }else{
        alert('점수: '+ score);
        end();
        initAll();
        return;
    }

    snake.unshift(head); // unshift는 head 배열의 맨 앞에 원소를 추가
                         // [참고] .push()는 배열의 맨 끝에, .shift()는 맨 앞의 원소를 제거함


    if(drawSnake() != 'eat'){ // 사과를 먹지 않았으면
        snake.pop(); // 꼬리 연장 ㄴㄴ
    }

}

function left() {
    if(TB == 0) return; // 반대 방향으로 방향전환 불가
    LR = -1;
    TB = 0;
}
function right() {
    if(TB == 0) return; // 반대 방향으로 방향전환 불가
    LR = 1;
    TB = 0;
}
function up() {
    if(LR == 0) return; // 반대 방향으로 방향전환 불가
    LR = 0;
    TB = -1;
}
function down() {
    if(LR == 0) return; // 반대 방향으로 방향전환 불가
    LR = 0;
    TB = 1;
}


// start 버튼을 눌렀을 시
$(document).on('click','#start', function () {
    var key = $(this).attr('data-key');
    if(key == 'up'){
        up();
    }else if(key == 'down'){
        down();
    }else if(key == 'left'){
        left();
    }else if(key == 'right'){
        right();
    }
});



function initAll() {
    score = 0; // 잠수 초기화
    // initMap(); // 앱 초기화
    initFood(); // 먹이 초기화
    initSnake(); //init snake
    LR = 0; // 좌우 방향 초기화
    TB = 1; // 상하 방향 초기화
}

// 시작함수
function start() {
    gameInterval = setInterval(move, 400);
}

function end() {
    clearInterval(gameInterval);
}

$(document).ready(function () {
    initAll();
});









