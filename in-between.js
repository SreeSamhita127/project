class LevelPage{
    constructor(){
        this.level1 = createButton("level1");
        this.level2 = createButton("level2");
        this.level3 = createButton("level3");
        this.level4 = createButton("level4");
        this.level5 = createButton("level5");
        this.level6 = createButton("level6");
        this.back = createButton("Level Page");
    }
    display(){
        this.level1.position(200,300);
        this.level2.position(450,600);
        this.level3.position(700,300);
        this.level4.position(950,600);
        this.level5.position(1100,300);
        this.level6.position(1350,600);
        this.back.position(30,30)

        this.back.mousePressed(()=>{
            gameState = 10;
            this.display();
        })
        this.level1.mousePressed(()=>{
            gameState = 1;
            this.hideAll();
            level1obj.showagain();
        })
        this.level2.mousePressed(()=>{
            gameState = 2;
            this.hideAll();
        })
        this.level3.mousePressed(()=>{
            gameState = 3;
            this.hideAll();
        })
        this.level4.mousePressed(()=>{
            gameState = 4;
            this.hideAll();
        })
        this.level5.mousePressed(()=>{
            gameState = 5
            this.hideAll();
        })
        this.level6.mousePressed(()=>{
            gameState = 6
            this.hideAll();
        })
    }
    hideAll(){
        this.level1.hide();
        this.level2.hide();
        this.level3.hide();
        this.level4.hide();
        this.level5.hide();
        this.level6.hide();
    }
}