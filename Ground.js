class Ground{

    constructor(){

        var options={
            isStatic:true,
            friction:0.4
        }
      this.body = Bodies.rectangle(600,650,1200,50,options);
      World.add(world, this.body);
    }
    display(){

      rectMode(CENTER);
      fill("brown");
      rect(500,625,1200,20);
    
    }

}