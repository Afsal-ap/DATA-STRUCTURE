class treeNode{
    constructor(data){
        this.data = data
        this.left = null
        this.right = null
    }
}
class Tree{
    constructor(){
        this.root = null
    }
  isEmpty(){
    return this.root === null 
  }
 insert(data){
    let newNode = new treeNode(data)
      if(this.isEmpty()){
        this.root = newNode
      }else{
          this.insertNode(this.root, newNode)
      }
 }
 insertNode(root , newNode){
    if(root.data > newNode.data){
      if(root.left === null){
         root.left = newNode
      }else{
       this.insertNode(root.left , newNode)
      }
    }else{
      if(root.right === null){
        root.right = newNode
      }else{
         this.insertNode(root.right , newNode)
      }
    }
 }
 search(root , value){
  if(!root){
    return false;
  }else{
    if(root.data === value){
      return true
    }else if(value < root.data){
      return this.search(root.left , value)
    }else{
       return this.search(root.right, value)
    }
  }
 }
 preOrder(root){
  if(root){
    console.log(root.data);
  this.preOrder(root.left)
  this.preOrder(root.right)
  }
 }
 inOrder(root,value){
  if(root){ 
    this.inOrder(root.left)
    value.push(root.data);
    this.inOrder(root.right)
 }
}
postOrder(root){
  if(root){
    this.postOrder(root.left)
    this.postOrder(root.right)
    console.log(root.data);
  }
}
levelOrder(){
  let queue = []
   queue.push(this.root)
   while(queue.length){
      let curr = queue.shift()
     console.log(curr.data);
     if(curr.left){
      queue.push(curr.left)
     }
     if(curr.right){
      queue.push(curr.right)
     } 
   }
}
min(root){
  if(!root.left){
    console.log(root.data);
  }else{
    return this.min(root.left)
  }
}
max(root){
  if(!root.right){
    console.log(root.data);
  }else{
    return this.max(root.right)
  }
}
  // to check bst or not 
  validateTree(){
    let value = []
    this.inOrder(this.root,value)
    for(let i = 1; i < value.length; i++){
      if(value[i] < value[i -1]){
        return false
      }
    }
    return true
  }
}
const bst = new Tree()
// console.log(bst.isEmpty());
bst.insert(10)
bst.insert(5)
bst.insert(15)
bst.insert(4)
bst.insert(12)
bst.insert(7)
bst.insert(17)

// console.log(bst.search(bst.root,100))
// bst.preOrder(bst.root)
// bst.min(bst.root)
// bst.max(bst.root)
bst.validateTree()