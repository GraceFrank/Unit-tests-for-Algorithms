function Interval(arr) {
    // Add your code here

    
        let evenDifferences = [];
        let oddDifferences = [];
        let differences = [];
        let subtraction;
      
        arr.sort();
        console.log("sorted arr", arr)
        for (let i = 0; i < arr.length; i += 2){
          subtraction = arr[i+1] - arr[i];
          subtraction % 2 ? oddDifferences.push(subtraction) : evenDifferences.push(subtraction);
        }
      
        differences.push(evenDifferences, oddDifferences);
        return differences;
      
      
      
}

module.exports = Interval;