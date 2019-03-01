let maxProfit = function(array) {
    let maxDifArray = [];
    for(let i = 0; i < (array.length - 1); i++)  {
        for(let c = (i + 1); c < array.length; c++) {
            let difArray = [];
            difArray.push(array[c]-array[i]);
            maxDifArray.push(Math.max(difArray));
            console.log(difArray);
        }
    }
        let max = (Math.max(maxDifArray))   
            if (max <= 0)   {
                return -1;
            }   else    {
                return max;
                }
            
}


// let maxProfit = function(array) {
//     let profit = 0;
//     for(let i = 0; i < (array.length - 1); i++)  {
//         for(let j = (i + 1); c < array.length; c++) {
//         }