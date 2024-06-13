
 
 let arr = [2,4,5,6,1]

 function bubbleSort(arr){
    
    for(let i = 0; i < arr.length; i++){
        for(let j = 1; j < arr.length-1-i; j++){
            if(arr[j] < arr[j+1]){
               let temp = arr[j]
               arr[j] = arr[j+1]
               arr[j+1] = temp
            }
        }
    }
    return arr
 }

 console.log(bubbleSort(arr))
 