// var i = 0; while (i < 10) {
//     console.log(i);
//     if (i == 5) {
//         break;
//     }
//     if (i == 3)
//         break;
//     i++;
// }
// console.log(i)

// for (var i = 0; i < 20; i++) {
//     console.log(i);
//     if (i == 8)
//         break;

// }


// var numbers = [54, 35, 21, 98, 23, 101, 45, 67]
// for (var i = 0; i < numbers.length; i++) {
//     var number = numbers[i];
//     if (number > 90);
//     break;
//     {
//         // console.log(number);

//     }
// }
// var numbers = [34, 25, 35, 40, 46, 50, 58, 80]
// for (var i = 0; i < numbers.length; i++) {
//     var number = numbers[i];
//     if (number > 46)
//         break
//     {
//         console.log(number);
//     }
// }









// for (i = 0; i < numbers.length; i++) {
//     var number = numbers[i];
//     if (number > 700)
//         break;
//     {
//         console.log(number);
//     }

// }



// var numbers = [100, 200, 300, 400, 500, 600, 700, 800, 900]
// for (i = 0; i < numbers.length; i++) {
//     var number = numbers[i];
//     if (number > 400)
//         break;

//     {
//         console.log(number);

//     }
// }


var numbers = [100, 200, 300, 400, 500, 600, 700, 800, 900]
for (i = 0; i < numbers.length; i++) {
    var number = numbers[i]
    if (number > 500) {
        continue;
    }
    console.log(number);
}