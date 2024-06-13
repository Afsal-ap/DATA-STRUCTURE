
//  class Node{
//      constructor(data){
//         this.head = data;
//         this.next = null;
//      }
//  }
//   class linkedList{
//      constructor(){
//         this.head = null;

//      }
//      append(data){
//         const newNode = new Node(data)
//         if(!this.head){
//             this.head = newNode
//         }else{
//             const current = this.head
//             while(current.next){
//                 current = current.next
//             }
//             current.next = newNode
//         }
//      }
//     isEmpty(){
        
//           return !this.head
//         }
//         print(){
           
//         let current = this.head
//         while(current.next){
//            console.log(current.data);
//            current = current.next
//         }
            
//         }
//     }
  

//   let check = new linkedList()
//  console.log(check.isEmpty());
//  check.append(2)
//  console.log(check.isEmpty());
//  console.log(check.print());




  // new linked list for prepend  

  class Node{  
    constructor(data){
        this.data  = data
        this.next = null 
    }
  }

   class linkedList{
     constructor(){
        this.head = null
        
     }
     prepend(data){
        const node = new Node(data)
        if(this.head === null){
            this.head = node
        }else{
            node.next = this.head
            this.head = node
        }
     }
  
     insert(val , index){
      let newNode = new Node (val)
       if( index === 0){
         newNode.next = this.head
         this.head = newNode
       }else{
         let prev = null
         let position = 0
         let curr = this.head
         while(curr !== null && position < index){
           prev = curr
           curr = curr.next
           position++
         }
         if(index === position){
          prev.next = newNode 
          newNode.next = curr
         }else{
          console.log("not found");
         }
       }
     }
     print(){
      let node = this.head     
       while (node !== null){
          console.log(node.data);
          node =  node.next
         
       }
      
   }

    removeNode(val){
       if(this.head.data === val){
        this.head = this.head.next
       }else{
        let remove 
       let pre = this.head 
       while(pre.next && pre.next.data !== val){
            pre = pre.next
       }
        if(pre.next){
          remove = pre.next 
          pre.next = remove.next
        }
         return null
      
       }
    }
   }
   const ll = new linkedList()
   ll.prepend(10)
   ll.prepend(20)
   ll.prepend(30)
   ll.prepend(40)
   ll.prepend(50)
   ll.print()
  //  ll.insert(25, 2)
  //  ll.print()
   ll.removeNode(10)
   ll.print()
