class Particle {
    constructor(){
        this.pos = createVector(width / 2, height / 2);
        this.rays = [];

        for (let i = 0; i < 360; i+=10) {
            this.rays[i] = new Ray            
        }
    }


}