/*第2章 利用测试和调试武装自己
自己写个log函数，代替系统的console.log*/
    function log(){
        console.log.apply(console,arguments);
    }
    log("I am Harry");

    // 使用assert函数进行断言测试

// window.onload是事件处理机制调用
// window.onload是一个函数，或者是函数的引用，不能是函数的执行，如果是函数的执行相当于是一个新的onload属性
    window.onload = function (){
    	// 这样可以执行
    }
    // 或者
    var a = function(){

    };
    // 这里的a并没有执行，直到浏览器加载完毕并触发load事件才执行
    window.onload = a;
    // 这样使用是不正确的行为
    window.onload = a(); 

    document.createElement("ul") 返回的是ul元素

 //    第3章 函数是根基

 //    javascript 的数据类型
	// 简单数据类型	
 //    undefined
 //    null
 //    boolean
 //    String
 //    Number
 //    复杂数据类型
 //    Object

 //    函数可以被任意对象进行引用，或声明成对象字面量

// 函数作为参数传递和接收，交将该函数作为回调函数进行调用
function useless(callback){return callback();}
values.sort的排序结果是按字符编码顺序，10,16,1965,2058
values.sort(function(value2-value1){return value2-value1;}) //降序，value1-value2是升序 按字母顺序蛙

// 声明一个命名函数，此名称在当前作用域有效，并隐式在window上添加一个属性，比如onload
canFly = function(){}
// 创建一个匿名函数，并赋值给canFly变量，此变量是一个window属性，通过它的引用 canFly()调用
// 作用域是由function进行声明的，不是代码块。
// 函数可以在其作用域内提前被引用，但变量不行。
// 如果传入的参数个数和声明的形参数量不一致，不会报错，JavaScript有处理。
如果声明的形参数量大于实际传递的数量，没有对应的参数会赋值为undefined
所有的函数调用都会传递两个隐式参数arguments和this，隐式是指这些参数不会显示列在函数签名里，但是它们默默地传递给函数并存在于函数作用域内。
函数的四种调用方式
function creep(){return this;}
var sneak = creep; //这里只是创建函数的一个引用 ，并不创建函数的实例。
1. 作用函数 - 这时调用函数test()的上下文是全局上下文window
2. 作为方法 var a = {};a.test = function(){} || var ninja1 = {shulk:creep};ninja1.shulk();
3. 作为构造器进行调用 var ninja1 = new creep(); var ninja2 = new creep(); //使用new会创建一个对象实例
4. 使用apply()和call()方法进行调用
函数进行调用之间的主要差异是：作为this参数传递给执行函数的上下文对象之间的区别
call，需要传递两个参数，1-函数上下文化，2-参数列表
apply,需要传递两个参数，1-函数上下文化，2-参数数组

第4章 挥舞函数
var ninja ={
	chirp : function singal(n){
		return n > 1 ? singal(n-1) + "-chrip" : "chirp";
	}
};
niaja = {};

arguments不是真正的数组，所以很多数组的操作不支持
Aarry.prototype.push.call(this,elem)
Array.prototype.slice.call(arguments,1);
fn.length函数的参数，形参
arguments.length函数的参数，实参

