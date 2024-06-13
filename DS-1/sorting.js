
let arr = [30,50,10,40,20,60]
                                        ///  MERGE SORT  ///
                                        function merge(arr){
                                            if(arr.length < 2){
                                                return arr
                                            }
                                           let middle = Math.floor(arr.length/2)
                                           let left = arr.slice(0,middle)
                                           let right = arr.slice(middle)
                                           return mergeSort(merge(left),merge(right))
                                        }
                                        function mergeSort(left,right){
                                            let sorted = []
                                            while(left.length && right.length){
                                                if(left[0]<=right[0]){
                                                    sorted.push(left.shift())
                                                }else{
                                                    sorted.push(right.shift())
                                                }
                                            }
                                            return [...sorted , ...left,...right]
                                        }
                                        console.log(merge(arr))
                                        

                                   ///   BUBBLE SORT ////
 
    function bubble(arr){
        // let res = []
     let temp
        for(let i = 0; i < arr.length; i++){
            for(let j = 0; j <arr.length-1- i; j++){
                if(arr[j] > arr[j+1]){
                temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
                
                }
            }
        }
        return arr
    }
  //  console.log(bubble(arr));

                           ///  QUICK SORT  ///

   function quickSort(arr){
    if(arr.length < 2){
        return arr
    }
    let pivot = arr[arr.length-1]
    let left = []
    let right = []
     for(let i = 0; i < arr.length-1; i++){
         if(arr[i] < pivot){
         left.push(arr[i])
         }else{
            right.push(arr[i])
         }
     }
     return [...quickSort(left), pivot , ...quickSort(right)]
   }                       

let quickArray = [-6,4,2,-4,5,8]
// console.log(quickSort(quickArray));
