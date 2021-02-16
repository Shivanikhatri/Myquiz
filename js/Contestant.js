class Contestant{
    constructor(){
        this.index = null;
        this.name = null;
        this.answer=null
    }
    getCount(){
        var contestantCountRef = database.ref('contestantCount');
        contestantCountRef.on("value",(data)=>{
            contestantCount = data.val();
        })
      }

      updateCount(count){
        database.ref('/').update({
            contestantCount: count
        });
      }

      update(){
        var contestantIndex = "Contestants/contestant" + this.index;
        database.ref(contestantIndex).set({
          name:this.name,
          answer:this.answer
        });
      }
}