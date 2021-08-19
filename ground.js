class Ground{
    constuctor(x,y,w,h){
        {
            var options={
                isStatis:true
            };
        }
        this.body=Bodies.rectangle(x,y,w,h,options)
        this.w=w;
        this.h=h;
        World.add(world,this.body);

    }
    display(){
        let pos= this.body.position;
        push();
        rectMode(CENTER);
        noStroke();
        fill(140,120,140);
        rect(pos.x, pos.y, this.w, this.h)
        pop();
    }
}