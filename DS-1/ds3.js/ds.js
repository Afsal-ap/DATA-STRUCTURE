class Graph{
    constructor(){
        this.list = {}
    }
    addVertex(vertex){
        if(!this.list[vertex]){
            this.list[vertex] = new Set()
        }  
        this.list[vertex] = vertex
    }
    addEdge(vertex1,vertex2){
           if(!this.list[vertex1]){
            this.addVertex(vertex1)
           }
           this.list[vertex1].add(vertex2)
    } 
     toCheck(){
        if(this.addEdge){
            return true
        }
     }
}
 let gr = new Graph()

  gr.addVertex(2)
  gr.addVertex(3)
  gr.addEdge(2,3)