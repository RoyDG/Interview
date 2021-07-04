//in console if we type arr. it will access lots of built in methods and properties.
let arr = ["jon", "roy"];

//suppose we have an object and a method init
let object = {
    name:"roy",
    city:"dhaka",
    getIntro: function() {
        console.log(this.name + "from" + this.city)
    }
}
//function
function fun(){
    //
}

//putting mybind method into prototype which can be inherit (access) to other functions or methods

Function.prototype.mybind = function() {
    console.log("happy coding")
}

function fun () {
    
}
function fun2 () {
    
}
//if you type fun.mybind it will show happy coding