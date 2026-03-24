function distanceFromOrigin(coordiante: [number, number, number]): number {
  const distance: number = Math.sqrt(
    coordiante[0] ** 2 + coordiante[1] ** 2 + coordiante[2] ** 2
  );
  return distance;
}

const coord1: [number, number, number] = [0, 5, 12];

let result = distanceFromOrigin(coord1);
console.log(result);
