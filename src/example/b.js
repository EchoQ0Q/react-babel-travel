export default `// 箭头函数语法非常简单：标识符=>表达式。箭头函数没有自己的this，this指向始终指向上层作用域
// ES6的方法语法 
var app = { 

    add(piece) {
      this.curPiece = piece;
			return piece;
    },

    addAll(pieces) { 
        _.each(pieces, piece => this.add(piece)); 
    } 

};`;
