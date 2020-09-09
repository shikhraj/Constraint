class Chain{    
    constructor(bodyA, bodyB){
        var options ={
            bodyA: bodyA,
            bodyB: bodyB,
            stiffness: 0.2,
            length: 30
        }
        this.chain = Constraint.create(options)
        World.add(world, this.chain)

    }
    display(){
        line(this.chain.bodyA.position.x, this.chain.bodyA.position.y, this.chain.bodyB.position.x, this.chain.bodyB.position.y)
    }
}