 
 let arr = [2,3,4,4,5,55,4,1,2]

 function dupli(arr){
    let countMap = new Map()
    let res = []

    for(let num of arr){
        if(countMap.has(num)){
            countMap.set(num , countMap.get(num)+1)
        }else{
            countMap.set(num , 1)
        }
    }
    for(let [key,val] of countMap){
        if(val > 1){
            res.push(key)
        }
    }
    return res
 }
 console.log(dupli(arr));
 