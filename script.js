let Username = "" + prompt("what is your name")


if (Username[0] === "A" || Username[0] === "a") {
    alert("go")
} else {
    alert("stop")
}

let age = + prompt("how old are tou")
if (age >= 18) {
    alert("welcome")
} else {
    alert("go to home")
}


let use = +prompt("напишите имя").length

if (use % 2) {
    alert('bad')
} else {
    alert('good')
}


let number = +prompt ("напишите цифру")

if (number % 2) {
    alert('нечётный число')
} else {
    alert('чётный число')
}

let a = +prompt('первое число');

let m = prompt('оператор (/,+,*,-)');

let b = +prompt('второе число');


if (m === "+") {
    alert( a + b) 
} else if(m === "-") {
    alert( a - b)
}else if (m=== "/") {
    alert ( a / b)
}else if (m=== "%") {
    alert( a % b)
}