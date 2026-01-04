let tablee = ''
let BigArr = []
let val =  '';
let isTurn 
let InputValue;
function creatCell(){
  for (let x = 0; x < 10; x++){
    let arr = []
    BigArr.push(arr)
    for(let y = 0; y < 10;  y++ ){
      arr.push(val)
    }
  }
}
creatCell();
for (let a = 0; a < 10; a++){
  tablee += '<tr>'
  for (let b = 0; b < 10; b++ ){
    tablee += `<td data-row="${a}" data-col="${b}" onclick="clickEvent(event);computerTurn()">   ${BigArr[a][b]} </td>`;
  }
  tablee += '</tr>'
}
document.getElementById('table').innerHTML = tablee

//
let userTurnChoose
function clickEvent(event){
  let row = event.currentTarget.getAttribute('data-row');
  let col = event.currentTarget.getAttribute('data-col');
  InputValue = 'X'   ;
  if(BigArr[row][col] !== ''){return}
    if (event.currentTarget.innerText === '' && !isTurn){
    event.currentTarget.innerHTML = '<canvas width="50" height="50"></canvas>';
    const canvas = event.currentTarget.querySelector('canvas');
    const color = 'black' ;
    drawCircle(canvas, color);
    BigArr[row][col] = InputValue;
    check(row,col);
    isTurn = true;
    userTurnChoose = {
      row :row,
      col :col
    }
  }
console.log('user vừa đánh : ' , userTurnChoose,isTurn);
}

let rowHanleAfter 
function rowHandle(value,length,otherValue) {
  for(let row = 0;row < BigArr.length; row++){
      for(let col = 0;col <= BigArr[row].length - length;col++){
        let arr = BigArr[row].slice(col,col + length)
        // đằng trước có giá trị Y rồi thì dừng, k cần chặn nữa
        if ((col - 1 >= 0 && BigArr[row][col - 1] === otherValue) || (BigArr[row][col + length] === otherValue && col + length < BigArr[row].length)){
          continue
        }
        let filteredEmpty = arr.filter(itm => itm == '')
        let filterItem = arr.filter (itm => itm === value)
        if(filteredEmpty.length !== 1  || filterItem.length !== length - 1){
          continue
        }
        rowHanleAfter = {
          row:row,
          col: col + Number(arr.indexOf('')),
          // index : arr.indexOf(''),
          array : arr
        }
        // arr.forEach((itm,num) => {
        //   rowHanleAfter.array.push(col + num)
        //   })
        return rowHanleAfter
      }    
  }
}
let colHandlerAfter
function colHandler(value,length,otherValue) {
  for(let col = 0;col < BigArr[0].length;col++){
    let cloneArr = []
    for(let i = 0;i < BigArr.length; i ++){
        cloneArr.push(BigArr[i][col])
      }
    for(let row = 0;row <= BigArr.length - length;row++ ) {
      let arr = cloneArr.slice(row,row + length)
      // xử lý nếu đằng trước hoặc sau đã có giá trị
      // 
      if((row - 1 >= 0 && cloneArr[row - 1] === otherValue) || (row+length <= cloneArr.length && cloneArr[row + length ] === otherValue)){
          continue
        }
      // 

      let filteredEmpty = arr.filter(itm => itm == '')
      let filterItem = arr.filter (itm => itm === value)
      if(filteredEmpty.length !== 1  || filterItem.length !== length - 1){
          continue
        }
        colHandlerAfter = {
          col:col,
          row: row + Number(arr.indexOf('')), 
          // index : arr.indexOf(''),
          array : arr
        }
        // arr.forEach((itm,num) => {
        //   colHandlerAfter.array.push(row + num)
        //   })
        return colHandlerAfter
    }
  }
}
// chéo từ trái qua phải, trên xuống dưới
let diagoLToRAfter
function diagoLToR(value,length,otherValue){
  for(let row = 0;row < BigArr.length ;row++){
    for (let col = 0 ;col <= BigArr.length;col++) {
      let cloneDiago = []
      for(let i = 0;i <= BigArr.length;i++){
        if(row + i >= BigArr.length || col + i >= BigArr.length ){break}
        cloneDiago.push(BigArr[row + i][col +i])
      }
      if(cloneDiago.length < length) {continue}
      let arr = cloneDiago.slice(0,length )
      // 
      if(length < cloneDiago.length && cloneDiago[length] === otherValue){
        continue
      }
      if (col - 1 >= 0 && row - 1 >= 0 && BigArr[row - 1][col - 1] === otherValue) {
        continue;
      }
      // 
      let filteredEmpty = arr.filter(itm => itm === '')
      let filterItem = arr.filter (itm => itm === value)
      if(filteredEmpty.length !== 1  || filterItem.length !== length - 1){
          continue
        }
        diagoLToRAfter= {
          col:col + Number(arr.indexOf('')),
          row : row + Number(arr.indexOf('')),
          array : arr,
        }
        // if ((diagoLToRAfter.col - 1 >= 0 && diagoLToRAfter.row- 1 >= 0 && BigArr[diagoLToRAfter.col - 1][diagoLToRAfter.row - 1] === otherValue ) || (diagoLToRAfter.col + 5 < BigArr.length && diagoLToRAfter.row + 5 < BigArr.length && BigArr[diagoLToRAfter.col +5][diagoLToRAfter.row + 5] === otherValue ))
        //   {
        //     continue
        //   }
        return diagoLToRAfter
    }
  }
}
// chéo từ phải qua trái, trên xuống dưới
let diagoRToLAfter 
function diagoRToL (value,length,otherValue) {
  for (let row = 0;row < BigArr.length;row++)
  {
    for(let col = BigArr[0].length - 1;col >= 0;col--)
    {
      let cloneDiago2 = []
      for(let i = 0;i < BigArr.length;i++)
      {
        if(row + i > BigArr.length - 1 || col - i < 0) {break}
        cloneDiago2.push(BigArr[row + i][col - i])
      }
      if(cloneDiago2.length < length) {continue}
      let arr = cloneDiago2.slice(0,length)
      // 
      if(length < cloneDiago2.length && cloneDiago2[length] === otherValue){
        continue
      }
      if (row - 1 >= 0 && col + 1 < BigArr[0].length && BigArr[row - 1][col + 1] === otherValue) {
        continue;
      }
      
      let filteredEmpty = arr.filter(itm => itm == '')
      let filterItem = arr.filter (itm => itm === value)
      if(filteredEmpty.length !== 1  || filterItem.length !== length - 1){
          continue
        }

        diagoRToLAfter = {
          col:col - Number(arr.indexOf('')),
          row : row + Number(arr.indexOf('')),
          array : arr,
        }
        return diagoRToLAfter
    }
  }
  return false
}
// 
 
function findWinning(value,length,otherValue) {
  let arr = [rowHandle(value,length,otherValue),colHandler(value,length,otherValue),diagoLToR(value,length,otherValue),diagoRToL(value,length,otherValue)];
  for (let i = 0; i < arr.length; i++) {
        if(arr[i]){
          let AiTurn = arr[i]
          return AiTurn
        }
    }
}

function findWinningFirst() {
  for (let i = 5; i >= 4; i--){
    let AiFind = findWinning('Y', i ,'X')
    if(AiFind) 
      return AiFind
  }
  return null
}


let cloneArrHandle
function listFindRunning() {
  let isWinning = findWinningFirst()
  if(isWinning) return isWinning
  cloneArrHandle = []
  for(let i = 5; i >= 2;i --){
    let arr = [rowHandle('X',i,'Y'),colHandler('X',i,'Y'),diagoLToR('X',i,'Y'),diagoRToL('X',i,'Y')];
    arr.forEach(element => {
      if(element){
        cloneArrHandle.push(element)
      }
    }); }
    if(cloneArrHandle.length === 0) return null
    let AiTurn = cloneArrHandle[0]
    let countX = AiTurn.array.filter(itm => itm === 'X').length
    cloneArrHandle.forEach (itm => {
    let countItem = itm.array.filter(item => item === 'X').length
    if(countItem > countX){
      AiTurn = itm
    }
  })
    // console.log('solution :',AiTurn)
  return AiTurn
}

  function computerTurn () {
    let AiTurn = listFindRunning()
      setTimeout(() => {
          if(AiTurn && isTurn){
              let element = document.querySelector(`[data-col="${AiTurn.col}"][data-row="${AiTurn.row}"]`);
              element.innerHTML = '<canvas width="50" height="50"></canvas>';
              const canvas = element.querySelector('canvas');
              const color = 'white';
              drawCircle(canvas, color);
              InputValue = 'Y'
              BigArr[AiTurn.row][AiTurn.col] = InputValue;
              check(AiTurn.row, AiTurn.col);
              isTurn = false
          }
          if(!AiTurn) {
              alert('hoà rồi!')
              return
          }
          console.log('máy vừa đánh :', {row,col} = AiTurn,isTurn)
      },0.2)

}
function rowCheck(){
    let newArr = BigArr.flat()
    for (let x = 10; x < newArr.length; x += 11){newArr.splice(x,0,',')}
    let clone = []
    for(let x = 0;x < newArr.length; x++){
        if (newArr[x] !== '' && newArr[x] === newArr[x+1]){
            if(clone.length === 0){clone.push(newArr[x])}
            clone.push(newArr[x+1]);
            if (clone.length === 5){break}
        }
        else if(newArr[x] !== newArr[x+1]){
            clone = []
        }
    }
    if (clone.length === 5){
        return true
    }
}

function colCheck() {
  const size = BigArr.length;
  for (let col = 0; col < size; col++) {
    let count = 0;

    for (let row = 0; row < size; row++) {
      if (BigArr[row][col] === InputValue) {
        count++;
        if (count === 5) {
          return true;
        }
      } else {
        count = 0;
      }
    }
  }
  return false;
}

function diagonalCheck(row, col) {
    row = Number(row);
    col = Number(col);
    const player = BigArr[row][col];
    console.log(row,col)
    let count = 1;
    for (let i = 1; row - i >= 0 && col - i >= 0; i++) {
        if (BigArr[row - i][col - i] === player) count++;
        else break;
    }
    for (let i = 1; row + i < BigArr.length && col + i < BigArr.length; i++) {
        if (BigArr[row + i][col + i] === player) count++;
        else break;
    }
    if (count >= 5) return true;

    count = 1;
    for (let i = 1; row - i >= 0 && col + i < BigArr.length; i++) {
        if (BigArr[row - i][col + i] === player) count++;
        else break;
    }
    for (let i = 1; row + i < BigArr.length && col - i >= 0; i++) {
        if (BigArr[row + i][col - i] === player) count++;
        else break;
    }
    return count >= 5;
}

function drawCircle(canvas, color) {
    const ctx = canvas.getContext('2d');
    const radius = (Math.min(canvas.width, canvas.height) - 4) / 2;
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;

    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
    ctx.fillStyle = color;
    ctx.fill();
}

function reset() {
    BigArr = [];
    tablee = '';
    val = '';
    isTurn = false;
    current = null;
    rowHanleAfter = null;
    diagoLToRAfter = null;
    colHandlerAfter = null;
    diagoRToLAfter = null;
    creatCell()

    for (let a = 0; a < 10; a++) {
        tablee += '<tr>';
        for (let b = 0; b < 10; b++) {
            tablee += `<td data-row="${a}" data-col="${b}" onclick="clickEvent(event);computerTurn()"> </td>`;
        }
        tablee += '</tr>';
    }

    document.getElementById('table').innerHTML = tablee;
}

function checkWin(row,col){
    if(rowCheck()){return true}
    if(colCheck()){return true}
    if(diagonalCheck(row,col)){return true}
    return false
}

function check(row,col){
    if (checkWin(row,col)){alert(`${isTurn ? 'white' : 'black'} thắng`)
        if (confirm(' muốn chơi lại không  ')){
            reset()
        }
        else {
          document.getElementById('table').style.pointerEvents = 'none'
        }
    }
    else if(BigArr.flat().every(value => value !== "")){
        alert('hoà rồi!!!!!');
        if (confirm(' muốn chơi lại không  ')){
            reset()
        }
        else {
            document.getElementById('table').style.pointerEvents = 'none'
        }
    }
    else { return false }
}
