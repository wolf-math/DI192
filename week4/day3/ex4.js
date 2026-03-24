function distanceFromOrigin(coordiante) {
    var distance = Math.sqrt(Math.pow(coordiante[0], 2) + Math.pow(coordiante[1], 2) + Math.pow(coordiante[2], 2));
    return distance;
}
var coord1 = [0, 5, 12];
var result = distanceFromOrigin(coord1);
console.log(result);
