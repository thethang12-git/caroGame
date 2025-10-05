let tablee = ''
let BigArr = []
let val =  '';
let isTurn 
let current;
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
    tablee += `<td data-row="${a}" data-col="${b}" onclick="clickEvent(event);check();computerTurn()">   ${BigArr[a][b]} </td>`;
  }
  tablee += '</tr>'
}
document.getElementById('table').innerHTML = tablee

// 
let userTurnChoose 
function clickEvent(event){
  let row = event.currentTarget.getAttribute('data-row');
  let col = event.currentTarget.getAttribute('data-col');
  let current = 'X'   ;
  // if(BigArr[row][col] !== ''){return}
    if (event.currentTarget.innerText === '' && !isTurn){
    event.currentTarget.innerHTML = '<canvas width="50" height="50"></canvas>';
    const canvas = event.currentTarget.querySelector('canvas');
    const color = 'black' ;
    drawCircle(canvas, color);
    BigArr[row][col] = current;
    // isTurn = true
    
    userTurnChoose = {
      row :row,
      col :col
    }
  }
  // console.log( userTurnChoose,BigArr)

}

        // userRow - 1[userCol -1,userCol,userCol + 1]
        // userRow [userCol -1,userCol + 1]
        // userRow +1[userCol -1,userCol,userCol + 1]
        // console.log(topLeft,topMiddle,topRight,centerLeft,centerRight,bottomLeft,bottomCenter,bottomRight)

function computerTurn (){
  // bắt đầu soát 1 lượt từ chiều dọc tới chiều ngang của ô mà user vừa đánh
  // BigArr.forEach((itm,num) => 
    // ví trí tìm sẽ là bao quanh ô người dùng đánh, ô nào có nhiều con thì bắt đầu lặp tiếp từ ô đó
    // {
      let userRow = Number(userTurnChoose.row)
      let userCol = Number(userTurnChoose.col)
      let topLeft = []
      let topMiddle = []
      let topRight = []
      let centerLeft = []
      let centerRight = []
      let bottomLeft = []
      let bottomCenter = []
      let bottomRight = []
      for(i = 1;i < 6 ; i++){
        topLeft.unshift(BigArr[userRow-i]?.[userCol -i] || '')
        topMiddle.unshift(BigArr[userRow - i]?.[userCol] || '')
        topRight.unshift(BigArr[userRow -i]?.[userCol +i] || '')

        centerLeft.unshift(BigArr[userRow]?.[userCol - i] || '')
        centerRight.push(BigArr[userRow]?.[userCol +i] || '')

        bottomLeft.push(BigArr[userRow +i]?.[userCol -i] || '')
        bottomCenter.push(BigArr[userRow + i]?.[userCol] || '')
        bottomRight.push(BigArr[userRow + i]?.[userCol +i] || '')
      }
      let diagonalLeft = [...topLeft,'item',...bottomRight]
      let diagonalRight = [...topRight,'item',...bottomLeft]
      let horizontal = [...centerLeft,'item',...centerRight]
      let vertical = [...topMiddle,'item',...bottomCenter]
      let cloneArr = [diagonalLeft,diagonalRight,horizontal,vertical]
      let targetArray
      let targetIndex
      let length 
      cloneArr.forEach((itm,num) => {
        let emptyAllowRight = 0
        let emptyAllowLeft = 0
        let tempArr = []
        // tìm những phần tử sau hoặc trước item mà không bị gián đoạn bởi 2 lần giá trị rỗng, chỉ cho phép nhận 1 giá trị rỗng lần 1, sau đó cộng tổng độ dài cái đó lại, return về giá trị ưu tiên xử lý
        for(let i = 1;i < 6;i++){
          if(!itm[5-i]) {
            emptyAllowLeft++ 
            if(emptyAllowLeft === 2){
              break
            }
          }
          else {
            tempArr.push(itm[5 - i])
          }}
        for(let z = 1;z < 6;z++) {
          if(!itm[5 + z]) {
            emptyAllowRight++
            if(emptyAllowRight === 2){
              break
                  }
                }
                else {
                  tempArr.push(itm[5 + z])
                }
        }
        if(num == 0) {
          targetArray = itm
          length = tempArr
          targetIndex = num
        }
        else {
          if(length.length < tempArr.length){
            targetArray = itm
            length = tempArr
            targetIndex = num
          }
        }
    }  
  )
  console.log(cloneArr[targetIndex])
      // console.log('chéo trái sang phải ',diagonalLeft)
      // console.log('chéo phải qua trái',diagonalRight)
      // console.log('chiều ngang',horizontal)
      // console.log('chiều dọc',vertical)
  if (isTurn){
    // event.currentTarget.innerHTML = '<canvas width="50" height="50"></canvas>';
    // const canvas = event.currentTarget.querySelector('canvas');
    // const color = 'white';
    // drawCircle(canvas, color);
    // BigArr[row][col] = current;
    isTurn = false
    console.log('running')
  }
}
// chạy ở đây
// setInterval(computerTurn,200)
// 
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

function colCheck(){
    let CloneCol = []
  for (let x = 0; x < 10; x++) {
    let Clonearr = []
    CloneCol.push(Clonearr)
    for (let y = 0; y < 10; y++) {
      Clonearr.push(BigArr[y][x])
    }
  }
    let newArr = CloneCol.flat()
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

function diagonalCheck(event) {
    let count = 1
    let count1 = 1
    let clone = test3(event)
    for (let x = 0;x < clone.length -1;x++ ){
      if (clone[x] !== '' && clone[x] === clone[x + 1]) {
      count++;
      if (count >= 5) {
        break;
  }
      } 
      else {
        count = 1;
      }
    }
    let clone1 = test4(event)
    for (let x = 0;x < clone1.length -1;x++ ){
        if (clone1[x] !== '' && clone1[x] === clone1[x + 1]) {
            count1++;
            if (count1 >= 5) {
                break;
            }
        }
        else {
            count1 = 1;
        }
    }
    // console.log(clone,count,clone1,count1)
    return count >= 5 || count1 >= 5;

  }

function test3(event){
  let row = parseInt(event.target.getAttribute('data-row'));
  let col = parseInt(event.target.getAttribute('data-col'));
  let current = col - row
  let clone = []
  for (let x = 0; x <= BigArr.length - 1;x++){
    if(!BigArr[x][current+ x]){clone.push('')}
    else {clone.push(BigArr[x][current +x ])}
  }
  return clone
}


function test4(event){
  let row = parseInt(event.target.getAttribute('data-row'));
  let col = parseInt(event.target.getAttribute('data-col'));
  let current = col + row
  let clone = []
  for(let x = 0;x <= BigArr.length - 1;x++){
    if(current - x < 0 || !BigArr[x][current -x]){clone.push('');continue}
    clone.push(BigArr[x][current - x])
  }
  return clone
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
    isTurn = true;
    current = null;

    creatCell()

    for (let a = 0; a < 10; a++) {
        tablee += '<tr>';
        for (let b = 0; b < 10; b++) {
            tablee += `<td data-row="${a}" data-col="${b}" onclick="clickEvent(event);check()"> </td>`;
        }
        tablee += '</tr>';
    }

    document.getElementById('table').innerHTML = tablee;
}

function checkWin(){
    if(rowCheck()){return true}
    if(colCheck()){return true}
    if(diagonalCheck(event)){return true}
    return false
}

function check(){
    if (checkWin()){current = !current ; alert(`${current = isTurn ? 'white' : 'black'} thắng`)
        if (confirm(' muốn chơi lại không  ')){
            reset()
        }
        else {
            document.getElementById('table').style.pointerEvents = 'none'
        }
    }
    if(BigArr.flat().every(value => value !== "")){
        alert('hoà rồi!!!!!');
        if (confirm(' muốn chơi lại không  ')){
            reset()
        }
        else {
            document.getElementById('table').style.pointerEvents = 'none'
        }
    }
}
