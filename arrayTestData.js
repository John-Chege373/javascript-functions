function test(arr_mix) {
    var total = 0;
    for(var i=0;i<=arr_mix.length;i++){
      if (typeof arr_mix[i] === "number")
        total=total+arr_mix[i];
    }
  return total; 
  }
  
  arr_mix = [2, "11", 3, "a2", false, 5, 7, 1]
  console.log("Original array: "+arr_mix)
  console.log("Sum all numbers of the said array: "+test(arr_mix));
  arr_mix = [2, 3, 0, 5, 7, 8, true, false]
  console.log("Original array: "+arr_mix)
  console.log("Sum all numbers of the said array: "+test(arr_mix));
  