// Code your solution in this file!
function distanceFromHqInBlocks(block) {
    let distance = 0;
    if (block > 42) {
        distance = block - 42;
        return distance
    } else {
        distance = 42 - block;
        return distance;
    }
  } 

function distanceFromHqInFeet(block) {
    let distance_feet = distanceFromHqInBlocks(block) * 264
    return distance_feet;
}

function distanceTravelledInFeet(start, destination) {
    let blocks = start > destination ? start - destination : destination - start; 
    let travel_feet = blocks * 264;
    return travel_feet;
  }


function calculatesFarePrice(start, destination) {
    const travelled = distanceTravelledInFeet(start, destination) 
    
    let fair_price = travelled <= 400 
                    ? 0 
                    : travelled > 400 && travelled <= 2000 
                    ? (travelled - 400 ) * 0.02 
                    : travelled > 2000 && travelled <= 2500 
                    ? 25 
                    :'cannot travel that far'; 

    return fair_price;    
}

// console.log("distance from Hq in block: " + distanceFromHqInBlocks(76) )
// console.log("distance from Hq in feets: " + distanceFromHqInFeet(76) )
// console.log("distance travelled from start and destination in feets: " + distanceTravelledInFeet(42, 43) )
// console.log(calculatesFarePrice(42, 43));