'use strict'

module.exports = {
	
  findMissing: function(fArray, sArray)	{
  	var myDict = {};
  	var len1 = fArray.length;
  	var len2 = sArray.length;
  	if (len1 === len2){
  		return 0;
  	}
  	for ( n in fArray){
		var num = fArray[n];
		if (num in myDict){
			myDict[num] += 1;
		}
		else myDict[num] = 1;
  	}
    for (var n in sArray){
		num = sArray[n];
  		if ((myDict[num] ===0) || (myDict[num] === undefined)){
			return num;	
		}
		else 
			myDict[num] -= 1;
	}

  }

}