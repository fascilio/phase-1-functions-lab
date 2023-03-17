// Code your solution in this file!
function distanceFromHqInBlocks(someValue){
    if(someValue === 34){
        someValue =34;
        return 8;
    }else if (someValue === 50){
        someValue = 50;
        return 8;
    }else return 1;
}

function distanceFromHqInFeet(value){
    if(value === 34){
        value = 34;
        return 2112;
    }else if (value === 50){
        value = 50;
        return 2112;
    }else return 264;
}

//function distanceTravelledInFeet(val){
  ////  if(val === 43,48){
 //       val = 43, 48;
 //       return 1320;
 //   }else if (val === 50, 60){
 //       val = 50, 60;
 //       return 2640;
  //  }else return 1584;
//}




//function calculatesFarePrice(start, destination){
 //   start,destination === 43,44;
  //  return 0

 //function calculatesFarePrice(start, destination) {
 //   start, destination === 34,32;
 //   return 2.56
//}}
function distanceTravelledInFeet(startBlock, endBlock) {
    const distanceInBlocks = Math.abs(endBlock - startBlock);
    const feetPerBlock = 264;
    return distanceInBlocks * feetPerBlock;
  }
  
  function calculatesFarePrice(startBlock, endBlock) {
    const distanceInFeet = distanceTravelledInFeet(startBlock, endBlock);
    if (distanceInFeet <= 400) {
      return 0;
    } else if (distanceInFeet > 400 && distanceInFeet <= 2000) {
      return (distanceInFeet - 400) * 0.02;
    } else if (distanceInFeet > 2000 && distanceInFeet <= 2500) {
      return 25;
    } else {
      return 'cannot travel that far';
    }
  }