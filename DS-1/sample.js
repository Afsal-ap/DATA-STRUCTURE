 

 class Node{
    constructor(data){
        this.data = data
        this.next = null
        this.prev = null
    }
 }

 class linkedList{
    constructor(){
        this.head = null
       this.tail = null
    }

    insertData(data){
        let newNode = new Node(data)
        if(this.head === null){
            this.head = newNode 
            this.tail = newNode
            this.prev = newNode
        }else{
            newNode.next = this.head
            this.head = newNode
            newNode.next = this.tail
            newNode.next = this.prev
            
        }j
    }

     print(){
        let current = this.tail
        if(this.tail!==null){
            while(current){
                console.log(current.data)
                current = current.prev
                
            }
        }
     }
 }


  let l1 = new linkedList()
  l1.insertData(10)
  l1.insertData(20)
  l1.insertData(30)
  l1.insertData(40)
  l1.print()


