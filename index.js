function sum(fromN, toN) {

  if (fromN === toN) {
  	return toN;
  }
  return fromN + sum(fromN + 1, toN)
}

console.log(sum (3,7));