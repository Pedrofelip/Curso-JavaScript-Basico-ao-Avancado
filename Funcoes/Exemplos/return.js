function testeSemReturn (num1, num2) {
    num1 + num2
}

function testeComReturn (num1, num2) {
    return num1 + num2
 }

console.log(testeSemReturn(1,1)) //undefined
console.log(testeComReturn(1,1)) //2