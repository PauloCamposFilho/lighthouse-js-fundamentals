const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']  

function finalPosition(moves) {
  let x = 0;
  let y = 0;
  for (let i in moves) {
    switch(moves[i]) {
      case 'north': {
        y++;
        break;
      }
      case 'south': {
        y--;
        break;
      }
      case 'east': {
        x++;
        break;
      }
      case 'west': {
        x--;
        break;
      }
    }
    console.log(x + "," + y);
  }
  return [x,y];
}

console.log(finalPosition(moves));