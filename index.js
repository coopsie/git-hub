const fruitArr = ["apple", "pear"];

const printFruit = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === "apple") {
        console.log(`I like ${arr[i]}s`);
        } else if (arr[i] === "pear") {
        console.log(`I don't like ${arr[i]}s`);
        }    
    }

};

printFruit(fruitArr);