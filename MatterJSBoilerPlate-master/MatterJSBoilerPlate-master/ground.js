class Ground {
    constructor(x, y, width, height){
    var options = {
    isStatic : true
        }
        this.body = Bodies.rectangle(this.x, this.y,this. width, this.height , options)
        World.add(world, this.body)
        this.width = width
        this.height= height
    }
    
    display(){
    var groundpos = this.body.position
    rect(groundpos.x, groundpos.y, this.width, this.height)
    
    }
    
    }