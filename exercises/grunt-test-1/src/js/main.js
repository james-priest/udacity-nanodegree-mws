// import './jquery-3.3.1';

// let myOtherApp = myOtherApp || {};

var myApp = (function () {
    var xyz = 789;

    function getNum() {
        return xyz;
    }
    return getNum();
})();

var myOtherApp = {
    abc: 123,
    getNum: function () {
        return this.abc;
    }
};

// console.log($.isNumeric(myOtherApp.getNum()));
// console.log($.isNumeric(myOtherApp.getNum()));
// console.log(myOtherApp.getNum());
console.log(myApp);