class Node{
    constructor(data){
        this.data = data
        this.next = null 
    }
}
class listStack{
  constructor(){
    this.top = null
    this.size = 0;
  }
  push(data){
    const nodeData = new Node(data)
    if(this.top === null ){
        this.top = nodeData
    }else{
        nodeData.next = this.top
        this.top = nodeData
    }
    this.size++
  }
  pop(){
    this.top = this.top.next
  }
  peek(){
    return this.top.data
  }
  print(){
    let curr = this.top
    while(curr){
        console.log(curr.data)
        curr = curr.next
    }
  }
}

let stack = new listStack()
stack.push(10)
stack.push(20)
stack.push(30)
stack.print()
console.log(stack.peek())

                                                  // stack using array //                                        

class stackArray{
    constructor(){
        this.items = []
    }
    push(val){
        this.items.push(val)
    }
    pop(){
        return this.items.pop()
    }
    peek(){
        return this.items[this.items.length-1]
    }
    print(){
        for(let i = 0; i <this.items.length; i++){
            console.log(this.items[i])
        }
    }
} 

let stackArr = new stackArray()
stackArr.push(10)
stackArr.push(20)
stackArr.push(30)
stackArr.print()
stackArr.pop()
stackArr.print()
// console.log(stackArr.peek());
