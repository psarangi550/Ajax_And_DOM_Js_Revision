 var my_red_count = function(value) {
     var sum = 0;
     value.forEach(function(x) {
             sum += 1;
         })
         // console.log(my_red_count);
         //  console.log(sum)
     return sum
 }

 var a = my_red_count([10, 20, 30, 40])

 console.log(a)
 //
 //
 // var my_stu_count_red = function(value) {
 //     var sum = value.reduce(
 //         function(x, y) {
 //             return x + y
 //         }, 0)
 //     var avg = (sum / value.length);
 //     return avg
 //
 // }
 //
 // var abc = my_stu_count_red([10, 20, 30, 40]);
 // console.log(abc)
 //
 //
 // var my_stu_count = function(value) {
 //     var sum = 0
 //     value.forEach(
 //         function(x) {
 //             sum = sum + x
 //         }
 //     )
 //     var avg = sum / value.length
 //     return avg;
 // }
 //
 // var abc = my_stu_count([10, 20, 30, 40]);
 // console.log(abc)