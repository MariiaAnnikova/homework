function getMessage1 (name, age) {
    if (age < 18) {
        return `Dear ${name}, you are younger than 18`
} else { 
    return `Dear ${name}, you are adult`
}
}

const getMessage1_arrow = (name, age) => {
    if (age <18) {
        return `Dear ${name}, you are younger than 18`
    } else {
        return `Dear ${name}, you are adults`
    }
}

const getMessage1_tern = (name, age) => {
    return age < 18 ? `Dear ${name}, you are younger than 18`: `Dear ${name}, you are adults`
}
console.log(getMessage1_tern('Nelly', 27));
console.log(getMessage1_tern('Mariia', 12));


function getMultiplication(num1, num2 = 2) {
    return num1 * num2
}
const getMultiplication_arrow = (num1, num2) => num1 * num2;

function getMinNum(num1, num2) {
    return Math.min(num1, num2)
}
const getMultiplication_arrow1 = (num1, num2) => Math.min (num1, num2);
console.log(getMinNum(2,15));