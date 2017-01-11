Array.prototype.toTwenty = function() {
   for(i=1; i<=20; i++){
      this.push(i);
   }
   return this;
};

Array.prototype.toForty = function() {
   
   for(i=2; i<=40; i+=2){
      this.push(i);
    }
   return this;
};

Array.prototype.toOneThousand = function() {
   
   for(i=10; i<=1000; i+=10){
      this.push(i);
    }
   return this;
};

Array.prototype.search = function(num) {
    this.count = 0;
    this.index = -1;
    var minN = 0;
    var maxN = this.length - 1;
    var newIndex;
    var value;
   while (minN <= maxN) {

      newIndex = Math.floor((minN + maxN) / 2);        
      value = this[newIndex];

      if (this[minN]  === num) {
          this.index = minN;
           break;
      }
      else if (this[maxN]  === num){
          this.index = maxN;
           break;
      }

      else if (value < num) {
         minN = newIndex + 1;
         this.count++;

        }
      else if (value > num) {
         maxN = newIndex - 1;
         this.count++;
        }
      else {
         this.index = newIndex;
         break;
        }
      
   }    
   return this;

};