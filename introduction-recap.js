// var favoriteBook = '4 hour work week';
// console.log(favoriteBook);

// array 
var bookList = ['positioning', 'hooked', 'start with', 'shoe dog'];
var shoeDogInex = bookList.indexOf('start with');

bookList[1] = 'Story Brand';
bookList[2] = 'yousuf';
bookList[3] = 'korim';
bookList[4] = 'gamil';
bookList.push('Yousuf Rahman', 'Nishat')
bookList.pop()
console.log(shoeDogInex);
console.log(bookList);

/*conditionals (3)*/
if (bookList[1] == 'hooked') {
    console.log('I am hooked');
}
else {
    console.log('I am not hooked');
}

/*loop*/
// while
var i = 0; //loop variable
while (i < 15) {
    i++;
    console.log(i);
    console.log('looping looping looping');
}


var number = 0;
while (number < 40) {
    number++;
    console.log(number);
    console.log('i dont know your name');
}

// for loop
for (var number = 0; number < 40; number++) {
    console.log(number, 'i hope you know me');
}


