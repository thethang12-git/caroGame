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
    tablee += `<td data-row="${a}" data-col="${b}" onclick="clickEvent(event);check(event);computerTurn()">   ${BigArr[a][b]} </td>`;
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
    isTurn = true
    userTurnChoose = {
      row :row,
      col :col
    }
  }
  // console.log( userTurnChoose,BigArr)

}

// function computerTurn (){
//   // bắt đầu soát 1 lượt từ chiều dọc tới chiều ngang của ô mà user vừa đánh
//   // BigArr.forEach((itm,num) => 
//     // ví trí tìm sẽ là bao quanh ô người dùng đánh, ô nào có nhiều con thì bắt đầu lặp tiếp từ ô đó
//     // {
//       let position
//       let computerRow
//     let computerCol
//       let userRow = Number(userTurnChoose.row)
//       let userCol = Number(userTurnChoose.col)
//       let topLeft = []
//       let topMiddle = []
//       let topRight = []
//       let centerLeft = []
//       let centerRight = []
//       let bottomLeft = []
//       let bottomCenter = []
//       let bottomRight = []
//       for(let i = 1;i < 6 ; i++){
//         topLeft.unshift(BigArr[userRow-i]?.[userCol -i] || '')
//         topMiddle.unshift(BigArr[userRow - i]?.[userCol] || '')
//         topRight.unshift(BigArr[userRow -i]?.[userCol +i] || '')

//         centerLeft.unshift(BigArr[userRow]?.[userCol - i] || '')
//         centerRight.push(BigArr[userRow]?.[userCol +i] || '')

//         bottomLeft.push(BigArr[userRow +i]?.[userCol -i] || '')
//         bottomCenter.push(BigArr[userRow + i]?.[userCol] || '')
//         bottomRight.push(BigArr[userRow + i]?.[userCol +i] || '')
//       }
//       let diagonalLeft = [...topLeft,'item',...bottomRight]
//       let diagonalRight = [...topRight,'item',...bottomLeft]
//       let horizontal = [...centerLeft,'item',...centerRight]
//       let vertical = [...topMiddle,'item',...bottomCenter]
//       let cloneArr = [diagonalLeft,diagonalRight,horizontal,vertical]
//       let targetArray
//       let targetIndex
//       let length
//       cloneArr.forEach((itm,num) => {
//         let emptyAllowRight = 0
//         let emptyAllowLeft = 0
//         let tempArr = []
//         // tìm những phần tử sau hoặc trước item mà không bị gián đoạn bởi 2 lần giá trị rỗng, chỉ cho phép nhận 1 giá trị rỗng lần 1, sau đó cộng tổng độ dài cái đó lại, return về giá trị ưu tiên xử lý
//         for(let i = 1;i < 6;i++){
//           if(!itm[5-i] || itm[5-i] !== 'X') {
//             emptyAllowLeft++ 
//             if(emptyAllowLeft === 2){
//               break
//             }
//           }
//           else {
//             tempArr.push(itm[5 - i])
//           }}
//         for(let z = 1;z < 6;z++) {
//           if(!itm[5 + z] || itm[5 + z] !== 'X') {
//             emptyAllowRight++
//             if(emptyAllowRight === 2){
//               break
//                   }
//                 }
//                 else {
//                   tempArr.push(itm[5 + z])
//                 }
//         }
//         if(num === 0) {
//           targetArray = itm
//           length = tempArr
//           targetIndex = num
//         }
//         else {
//           if(length.length < tempArr.length){
//             targetArray = itm
//             length = tempArr
//             targetIndex = num
//           }
//         }
//     }  
//   )
//   console.log(cloneArr[targetIndex])
//     let arr = cloneArr[targetIndex]
//     let item
//     let left
//     let right
//     let leftSideLeng
//     let rightSideLeng
//     switch (targetIndex) {
// case 0:
//             item = arr.indexOf('item');
//             // xử lý bên trái
//             left = item - 1
//             while (left >= 0 && arr[left] === 'X') {
//                 left--
//             }
//             // Xử lý bên phải
//             right = item + 1
//             while (right <= 10 && arr[right] === 'X') {
//                 right++
//             }
//             // nếu ngay sau left hoặc right có tồn tại 1 giá trị X thì vị trí khả thi sẽ là vị trí của left hoặc right tương ứng
//             leftSideLeng = arr.slice(0, item).filter(itm => itm === 'X' ).length
//             rightSideLeng = arr.slice(item + 1).filter(itm => itm === 'X' ).length
//             if (arr[left - 1] === 'X' && arr[left - 2] === 'X') {
//                 if(leftSideLeng >= rightSideLeng) {
//                     position = left
//                     // console.log('left!!')
//                 }

//             }
//             else if (arr[right + 1] === 'X' && arr[right + 2] === 'X') {
//                 if(rightSideLeng >= leftSideLeng){
//                     position = right
//                     // console.log('right!!')
//                 }
//             }
//             if(!position) {
//                 if(leftSideLeng > rightSideLeng) {
//                     position = left
//                     if (arr[right +1] === 'X' && arr[right + 2] === 'X' && right === 6){
//                         position = right
//                     }
//                     // console.log('left!!!!!!!!!')
//                 }  else {
//                     position = right
//                     if (arr[left - 1] === 'X' && arr[left - 2] === 'X' && left === 4){
//                         position = left
//                     }
//                     // console.log('right!!!!!!!!')
//                 }
//             }
//             console.log('case 0')
//             if (position < 5) {
//                 // console.log('position < 5')
//                 computerRow = userRow - (5 - position)
//                 computerCol = userCol - (5 - position)
//                 let isValid = userRow - (5 - position) < 0 || userCol - (5 - position) < 0
//                 // xử lý nếu position trả về mà ô đó đã có giá trị
//                 if(BigArr[computerRow][computerCol] === '' && !isValid) {
//                     BigArr[computerRow][computerCol] = 'Y'
//                 }
//                 else {
//                     position = right
//                     computerRow = userRow + (position - 5)
//                     computerCol = userCol + (position - 5)
//                 }
//             }
//             else {
//                 // console.log('position > 5')
//                 computerRow = userRow + (position - 5)
//                 computerCol = userCol + (position - 5)
//                 let isValid = userRow + (position - 5) > 9 || userCol + (position - 5) > 9
//                 // xử lý nếu position trả về mà ô đó đã có giá trị
//                 if(BigArr[computerRow][computerCol] === '' && !isValid) {
//                     BigArr[computerRow][computerCol] = 'Y'
//                 }
//                 else {
//                     position = left
//                     computerRow = userRow - (5 - position)
//                     computerCol = userCol - (5 - position)
//                 }
//             }
//             break;
// case 1:
//             item = arr.indexOf('item');
//             // xử lý bên trái
//             left = item - 1
//             while (left >= 0 && arr[left] === 'X') {
//                 left--
//             }
//             // Xử lý bên phải
//             right = item + 1
//             while (right <= 10 && arr[right] === 'X') {
//                 right++
//             }
//             // nếu ngay sau left hoặc right có tồn tại 1 giá trị X thì vị trí khả thi sẽ là vị trí của left hoặc right tương ứng
//             leftSideLeng = arr.slice(0, item).filter(itm => itm === 'X' ).length
//             rightSideLeng = arr.slice(item + 1).filter(itm => itm === 'X' ).length
//             if (arr[left - 1] === 'X' && arr[left - 2] === 'X') {
//                 if(leftSideLeng >= rightSideLeng) {
//                     position = left
//                 }

//             }
//             else if (arr[right + 1] === 'X' && arr[right + 2] === 'X') {
//                 if(rightSideLeng >= leftSideLeng){
//                     position = right
//                 }
//             }
//             if(!position) {
//                 if(leftSideLeng > rightSideLeng) {
//                     position = left
//                     if (arr[right +1] === 'X' && arr[right + 2] === 'X' && right === 6){
//                         position = right
//                     }
//                 }  else {
//                     position = right
//                     if (arr[left - 1] === 'X' && arr[left - 2] === 'X' && left === 4){
//                         position = left
//                     }
//                 }
//             }
//             console.log('case 1')
//             if (position < 5) {
//                 // console.log('position < 5')
//                 computerRow = (userRow + position) - 5
//                 computerCol = (5 - position) + userCol
//                 let isValid = (userRow + position) - 5 < 0 || (5 - position) + userCol < 0
//                 // xử lý nếu position trả về mà ô đó đã có giá trị
//                 if(BigArr[computerRow][computerCol] === '' && !isValid) {
//                     BigArr[computerRow][computerCol] = 'Y'
//                 }
//                 else {
//                     position = right
//                     computerRow = position - 5 + userRow
//                     computerCol = (5 + userCol) - position
//                 }
//             }
//             else {
//                 // console.log('positioin > 5')
//                 computerRow = position - 5 + userRow
//                 computerCol = (5 + userCol) - position
//                 let isValid = position - 5 + userRow > 9 || (5 + userCol) - position > 9
//                 // xử lý nếu position trả về mà ô đó đã có giá trị
//                 if(BigArr[computerRow][computerCol] === '' && !isValid) {
//                     BigArr[computerRow][computerCol] = 'Y'
//                 }
//                 else {
//                     position = left
//                     computerRow = (userRow + position) - 5
//                     computerCol = (5 - position) + userCol
//                 }
//             }
//             break;
// case 2:
//         item = arr.indexOf('item');
//         // xử lý bên trái
//         left = item - 1
//         while (left >= 0 && arr[left] === 'X') {
//             left--
//         }
//         // Xử lý bên phải
//         right = item + 1
//         while (right <= 10 && arr[right] === 'X') {
//             right++
//         }
//         // nếu ngay sau left hoặc right có tồn tại 1 giá trị X thì vị trí khả thi sẽ là vị trí của left hoặc right tương ứng
//         leftSideLeng = arr.slice(0, item).filter(itm => itm === 'X' ).length
//         rightSideLeng = arr.slice(item + 1).filter(itm => itm === 'X' ).length
//         if (arr[left - 1] === 'X' && arr[left - 2] === 'X') {
//             if(leftSideLeng >= rightSideLeng) {
//                 position = left
//             }

//         }
//         else if (arr[right + 1] === 'X' && arr[right + 2] === 'X') {
//             if(rightSideLeng >= leftSideLeng){
//                 position = right
//             }
//         }
//         if(!position) {
//             if(leftSideLeng > rightSideLeng) {
//                 position = left
//                 if (arr[right +1] === 'X' && arr[right + 2] === 'X' && right === 6){
//                     position = right
//                 }
//             }  else {
//                 position = right
//                 if (arr[left - 1] === 'X' && arr[left - 2] === 'X' && left === 4){
//                     position = left
//                 }
//             }
//         }
//         console.log('case 2')
//         if (position < 5) {
//             // console.log('case nhỏ hơn 5')
//             computerRow = userRow
//             computerCol = userCol - (5 - position)
//             let isValid = userCol - (5 - position) < 0
//             // xử lý nếu position trả về mà ô đó đã có giá trị
//             if(BigArr[computerRow][computerCol] === '' && !isValid) {
//                 BigArr[computerRow][computerCol] = 'Y'
//             }
//             else {
//                 position = right
//                 computerRow = userRow
//                 computerCol = position - (5 - userCol)
//             }
//         }
//         else {
//             // console.log('case lớn hơn 5')
//             computerRow = userRow
//             computerCol = position - (5 - userCol)
//             console.log(computerRow,computerCol)
//             let isValid = position - (5 - userCol) > 9
//             // xử lý nếu position trả về mà ô đó đã có giá trị
//             if(BigArr[computerRow][computerCol] === '' && !isValid) {
//                 BigArr[computerRow][computerCol] = 'Y'
//             }
//             else {
//                 position = left
//                 computerRow = userRow
//                 computerCol = userCol - (5 - position)
//             }
//         }
//             break;
// case 3:
//             item = arr.indexOf('item');
//             // xử lý bên trái
//             left = item - 1
//             while (left >= 0 && arr[left] === 'X') {
//                 left--
//             }
//             // Xử lý bên phải
//             right = item + 1
//             while (right <= 10 && arr[right] === 'X') {
//                 right++
//             }
//             // nếu ngay sau left hoặc right có tồn tại 1 giá trị X thì vị trí khả thi sẽ là vị trí của left hoặc right tương ứng
//             leftSideLeng = arr.slice(0, item).filter(itm => itm === 'X' ).length
//             rightSideLeng = arr.slice(item + 1).filter(itm => itm === 'X' ).length
//             if (arr[left - 1] === 'X' && arr[left - 2] === 'X') {
//                 if(leftSideLeng >= rightSideLeng) {
//                     position = left
//                 }

//             }
//             else if (arr[right + 1] === 'X' && arr[right + 2] === 'X') {
//                 if(rightSideLeng >= leftSideLeng){
//                     position = right
//                 }
//             }
//             if(!position) {
//                 if(leftSideLeng > rightSideLeng) {
//                     position = left
//                     if (arr[right +1] === 'X' && arr[right + 2] === 'X' && right === 6){
//                         position = right
//                     }
//                 }  else {
//                     position = right
//                     if (arr[left - 1] === 'X' && arr[left - 2] === 'X' && left === 4){
//                         position = left
//                     }
//                 }
//             }
//             console.log('case 3',position,userRow,userCol)
//             if (position < 5) {
//                 console.log('case nhỏ hơn 5')
//                 computerRow = position - (5 - userRow)
//                 computerCol = userCol
//                 console.log(computerRow)
//                 let isValid = position - (5 - userRow) < 0
//                 // xử lý nếu position trả về mà ô đó đã có giá trị
//                 if(BigArr[computerRow][computerCol] === '' && !isValid) {
//                     BigArr[computerRow][computerCol] = 'Y'
//                 }
//                 else {
//                     position = right
//                     computerRow = position - (5 - userRow)
//                     computerCol = userCol
//                 }
//             }
//             else {
//                 console.log('case lớn hơn 5')
//                 computerRow = position - (5 - userRow)
//                 computerCol = userCol
//                 console.log(computerRow)
//                 let isValid = position - (5 - userRow) > 9
//                 // xử lý nếu position trả về mà ô đó đã có giá trị
//                 if(BigArr[computerRow][computerCol] === '' && !isValid) {
//                     BigArr[computerRow][computerCol] = 'Y'
//                 }
//                 else {
//                     position = left
//                     computerRow = position - (5 - userRow)
//                     computerCol = userCol
//                 }
//             }
//             break;
//     }
//     BigArr[computerRow][computerCol] = 'Y';
//     let element = document.querySelector(`[data-col="${computerCol}"][data-row="${computerRow}"]`);
//     element.innerHTML = '<canvas width="50" height="50"></canvas>';
//     const canvas = element.querySelector('canvas');
//     drawCircle(canvas, "white");
//   if (isTurn){
//       let element = document.querySelector(`[data-col="${computerCol}"][data-row="${computerRow}"]`);
//     element.innerHTML = '<canvas width="50" height="50"></canvas>';
//     const canvas = element.querySelector('canvas');
//     const color = 'white';
//     drawCircle(canvas, color);
//     BigArr[computerRow][computerCol] = 'Y';
//     isTurn = false
//     console.log('running')
//   }
// }



// 
let rowHanleAfter 
function rowHandle(value,length,otherValue) {
  for(let row = 0;row < BigArr.length; row++){
      // rowHanleAfter =[]
      // let allowEmpty = 0
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
  return AiTurn
}

  function computerTurn () {
    let AiTurn = listFindRunning()
    if(AiTurn && isTurn){
    let element = document.querySelector(`[data-col="${AiTurn.col}"][data-row="${AiTurn.row}"]`);
    element.innerHTML = '<canvas width="50" height="50"></canvas>';
    const canvas = element.querySelector('canvas');
    const color = 'white';
    drawCircle(canvas, color);
    InputValue = 'Y'
    BigArr[AiTurn.row][AiTurn.col] = InputValue;
    isTurn = false
    }
}
function rowCheck(){
    let newArr = BigArr.flat()
    for (let x = 10; x < newArr.length; x += 11){newArr.splice(x,0,',')}
    let clone = []
    for(let x = 0;x < newArr.length; x++){
        if (newArr[x] !== '' && newArr[x] === newArr[x+1]){
            if(clone.length === 0){clone.push(newArr[x])}
            clone.push(newArr[x+1]);
            if (clone.length === 4){break}
        }
        else if(newArr[x] !== newArr[x+1]){
            clone = []
        }
    }
    if (clone.length === 4){
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

function diagonalCheck() {
  const size = BigArr.length;

  for (let row = 0; row <= size - 5; row++) {
    for (let col = 0; col <= size - 5; col++) {
      let isWinning = true;

      for (let i = 0; i < 5; i++) {
        if (BigArr[row + i][col + i] !== 'X') {
          isWinning = false;
          break;
        }
      }
      if (isWinning) {
        return true;
      }
    }
  }
  return false;
}

// function diagonalCheck(event) {
//     let count = 1
//     let count1 = 1
//     let clone = test3(event)
//     for (let x = 0;x < clone.length -1;x++ ){
//       if (clone[x] !== '' && clone[x] === clone[x + 1]) {
//       count++;
//       if (count >= 5) {
//         break;
//   }
//       } 
//       else {
//         count = 1;
//       }
//     }
//     let clone1 = test4(event)
//     for (let x = 0;x < clone1.length -1;x++ ){
//         if (clone1[x] !== '' && clone1[x] === clone1[x + 1]) {
//             count1++;
//             if (count1 >= 5) {
//                 break;
//             }
//         }
//         else {
//             count1 = 1;
//         }
//     }
//     return count >= 5 || count1 >= 5;

//   }

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
            tablee += `<td data-row="${a}" data-col="${b}" onclick="clickEvent(event);check();computerTurn()"> </td>`;
        }
        tablee += '</tr>';
    }

    document.getElementById('table').innerHTML = tablee;
}

function checkWin(){
    if(rowCheck()){return true}
    if(colCheck()){return true}
    if(diagonalCheck()){return true}
    return false
}

function check(event){
    if (checkWin(event)){alert(`${isTurn ? 'white' : 'black'} thắng`)
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
