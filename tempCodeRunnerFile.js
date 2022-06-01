 var my_stu_count = function(value) {
     var sum = 0
     value.forEach(
         function(x) {
             sum = sum + x
         }
     )
     var avg = sum / value.length
     return avg;
 }

 var abc = my_stu_count([10, 20, 30, 40]);
 console.log(abc)