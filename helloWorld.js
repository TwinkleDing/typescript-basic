"use strict";
class Site {
    name() {
        console.log('runoob');
    }
}
;
var ooo = new Site();
ooo.name();
var str = '1';
var str2 = str;
console.log(str2);
var global_num = 12;
class Numbers {
    constructor() {
        this.num_val = 13;
    }
    storeNum() {
        var local_num = 14;
    }
}
Numbers.sval = 10;
console.log('全局变量：' + global_num);
console.log(Numbers.sval);
var obj = new Numbers();
console.log('实例变量：' + obj.num_val);
function getSex(s) {
    return s;
}
getSex('男');
// ts是js的超集，强化了输入输出类类型校验；因为js是弱类型语言，在定义变量时添加变量的类型
