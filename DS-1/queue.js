class Node{
    constructor(data){
            this.data = data
            this.next  = null           
    }
}
class listQueue{
    constructor(){
        this.head = null
        this.tail = null 
        this.size = 0
    }
    enqueue(val){
        let node = new Node(val)
        if(this.head === null){
            this.head = node
            this.tail = node
        }else{ 
           this.tail.next = node
           this.tail = node
        }
        this.size++
    }
    dequeue(){
        this.head = this.head.next
        this.size--
    }
    getSize(){
        return this.size
    }
    print(){
        let curr = this.head
        while(curr){
            console.log(curr.data);
            curr = curr.next
        }
    }
    peek(){
        return this.head.data
    }
}
 let qList = new listQueue()
 qList.enqueue(10)
 qList.enqueue(20)
 qList.enqueue(30)
 qList.print()
 qList.dequeue()
 qList.print()
console.log(qList.peek());

// q using array 

 class queue{
    constructor(){
        this.items = []
    }
    enq(val){
        this.items.push(val)
    }
    dq(){
        this.items.shift()
    }
    peek(){
        return this.items[this.items[0]]
    }
    isEmpty(){
        return this.items.length === 0
    }
   size(){
    return this.items.length 
   }
   print(){
    console.log(this.items)
   }
 }

 let qArray = new queue()

 qArray.enq(10)
 qArray.enq(20)
 qArray.enq(30)
 qArray.print()
 qArray.dq()
 qArray.print()