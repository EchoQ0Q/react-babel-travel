export default `// let命令只在所在的代码块内有效
var a = [];
for (let i = 0; i < 10; i++) {
  a[i] = function () {
    console.log(i);
  };
}
console.log(a[6]()); // 6


//const声明一个只读的常量。一旦声明，常量的值就不能改变。
const PI = 3.1415;
console.log(PI) // 3.1415

PI = 3;
// TypeError: Assignment to constant variable.`;
