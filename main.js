const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';
const validInput = ['L','R','U','D'];

class Field {
    constructor(field) {
        this.field = field;
    }

    print() {
        let curRow = 0;
        let curCol = 0;
        const totalRows = this.field.length;
        const totalCols = this.field[0].length;
        
        while (true) {
            this.field.forEach(row => {
            console.log(row.join(''))
        });
            const input = prompt('Which direction you want to go? Choose from L,R,U,D: ')
            let inputUpper = input.toUpperCase();
            
            switch(inputUpper) {
                case 'L':
                    curCol -= 1;
                    break;
                case 'R':
                    curCol += 1;
                    break;
                case 'U':
                    curRow -= 1;
                    break;
                case 'D':
                    curRow += 1;
                    break;
                default:
                    console.log('Wrong Input entered. Try from L,R,U,D')
                    break;
                }
            
            if (curRow < totalRows && curRow >= 0 && curCol < totalCols && curCol >= 0) {
                if (this.field[curRow][curCol] === hole) {
                    console.log('You lost! You dropped in a hole.')
                    break;
                }
                else if (this.field[curRow][curCol] === hat) {
                    console.log('You Won! You found you hat.')
                    break;
                }
                else {
                this.field[curRow][curCol] = pathCharacter;
                }
            }
            else {
                console.log('You lost! You are out of bounds.')
                break;
            }
        }
    }
}

const myField = new Field([
    ['*', '░', 'O'],
    ['░', 'O', '░'],
    ['░', '^', '░'],
  ]);
myField.print();