
// remove vowels 

function removeVowels(arr){
    let vowels = "aeiou"
    let res = ""
    for(let i = 0; i < arr.length; i++){
        if(!vowels.includes(arr[i])){
            res += arr[i]
        }
    }
    return res
}
let arr = "hello"
console.log(removeVowels(arr));

// using filter  and convert string to array
 let vowels = "aeiou"
 let str = "hello"
 let r = str.split('').filter((val)=> !vowels.includes(val) )
 console.log(r);

