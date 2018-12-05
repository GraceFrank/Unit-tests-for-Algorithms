function interval(arr) {
    // Add your code here

    let evenDifferences = [];
    let oddDifferences = [];
    let differences = [];
    let subtraction;
  
    arr.sort(function(a, b){return a - b});
   
  
    for (let i = 0; i < arr.length -1; i += 2){
      subtraction = arr[i+1] - arr[i];
  
      if (subtraction!=0){
        subtraction % 2 ? oddDifferences.push(subtraction) : evenDifferences.push(subtraction);
      }//end of if statement
    }//end of for loop
  
    differences.push(evenDifferences, oddDifferences);
    return differences;
}

module.exports = interval;