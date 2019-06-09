class Snake {
  color = 'green'
  direction = 'east'
  location = { x: 0, y: 0 }

  crawl () {
    switch (this.direction) {
      case 'east': this.location.x = this.location.x + 1; break;
      case 'west': this.location.x = this.location.x - 1; break;
      case 'north': this.location.y = this.location.y - 1; break;
      case 'south': this.location.y = this.location.y + 1; break;
    }
  }

}

class Game {

  board = document.getElementById('board')
  snake = new Snake()

  createBoard (rowCount, colCount) {
    const td = '<td></td>'
    const tr = '<tr>'+ td.repeat(colCount) +'</tr>'
    const table = '<table>'+ tr.repeat(rowCount) +'</table>'

    this.board.insertAdjacentHTML('afterbegin', table)
  }

  changeAllBackgroundColor () {
    const tds = this.board.getElementsByTagName('td')
    for (let td of tds) {
      td.style.backgroundColor = 'lightgray'
    }
  }

  changeBackgroundColor (x, y, color) {
    // tr == y
    // td == x
    const tr = this.board.getElementsByTagName('tr')[y]
    const td = tr.getElementsByTagName('td')[x]
    td.style.backgroundColor = color
  }

  play () {
    this.createBoard(30, 30)

    document.addEventListener('keydown', (event) => {
      const keyName = event.key
      switch (keyName) {
        case 'ArrowUp': this.snake.direction = 'north'; break;
        case 'ArrowDown': this.snake.direction = 'south'; break;
        case 'ArrowLeft': this.snake.direction = 'west'; break;
        case 'ArrowRight': this.snake.direction = 'east'; break;
        case 'Escape': clearInterval(interval); break;
      }
    })

    const interval = setInterval(() => {
      this.changeAllBackgroundColor()
      this.changeBackgroundColor(this.snake.location.x, this.snake.location.y, this.snake.color)
      this.snake.crawl()
    }, 200)
  }

}

const game = new Game()
game.play()
