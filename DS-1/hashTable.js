class Table{
    constructor(){
        this.table = {}
    }
    hash(key){
        let hashed = 0
        let realKey = key.toString()
        for(let i = 0; i < realKey.length; i++){
           hashed += realKey.charCodeAt(i)
        }
        return hashed
    }
    set(key , value){
        const index = this.hash(key)
        if(!this.table[index]){
            this.table[index] = []
        }
        this.table[index].push({key,value})
    }
    get(key){
        const index = this.hash(key)
        let  bucket = this.table[index]
        if(bucket){
            for(let items of bucket){
                if(items.key === key){
                    return items.value
                }
            }
        }
    }
    remove(key){
        const index = this.hash(key)
        let bucket = this.table[index]
        if(bucket){
         const bucketIndex  = bucket.findIndex(item => item.key === key)
         if(bucketIndex !== -1){
            bucket.splice(bucketIndex,1)
         }
        }
    }
}

let hash = new Table()
hash.set('name', 'Afsal')
hash.set('age', 23)
hash.remove('age')
console.log(hash.get('name'));

