class Question{
    constructor(){
        this.title = createElement('h2');
        this.question=createElement('h3');
        this.option1=createElement('h3');
        this.option2=createElement('h3');
        this.input1 = createInput("Enter your Name here");
        this.input2 = createInput("Enter your answer here");
        this.button = createButton('Submit');
    }
    display(){
        this.title.html("MYQUIZ GAME");
        this.title.position(350,0);

        this.question.html("Question:-what starys with letter 'E',but has only one letter?")
        this.question.position(150,80);

        this.option1.html("1:EveryOne");
        this.option1.position(150,100);

        this.option2.html("2:Enevelope");
        this.option2.position(150,120);

        this.input1.position(150,230)

        this.input2.position(290,230);

        this.button.position(200,270);


        this.button.mousePressed(()=>{
            this.input1.hide();
            this.button.hide();
            this.input2.hide();
            contestant.name = this.input1.value();
            contestant.answer = this.input2.value();
            contestantCount+=1;
            contestant.index = contestantCount;
            contestant.update();
            contestant.updateCount(contestantCount);
            
          });

    }
}