let myAdd: (x: number, y: number) => number 
  = function(x: number, y: number): number {return x + y}

function buildName(firstName: string, lastName?: string ) {
  if(lastName) {
    return firstName + lastName
  }else {
    return firstName
  }
}
// 可选参数后面加?
// 默认参数用=设置默认值; 设置了默认值肯定也是可输入可不输入的

function shengyu(firstName: string, ...restOfName: string[]) {
  return firstName + restOfName.join(' ')
}

let shengyuFun: (fname: string, ...rest: string[]) => string = shengyu;
// ...剩余形参，是一个数组


let deck = {
  suits: ['hearts', 'spades', 'clubs', 'diamonds'],
  cards: Array(52),
  createCardPicker() {
    return ()=> {
      let pickedCard = Math.floor(Math.random() * 52);
      let pickedSuit = Math.floor(pickedCard / 13);
      console.log(this.suits)
      return {
        suit: this.suits[pickedSuit],
        card: pickedCard % 13
      }
    }
  }
}
let cardPicker = deck.createCardPicker();
let pickedCard = cardPicker();
console.log("card: " + pickedCard.card + " of " + pickedCard.suit);