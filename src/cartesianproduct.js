var cp = function(sets) {
	var result = [];

	function cartesianProduct (sets) {
		var lengthA = sets[0].length;
		var lengthB = sets[1].length;

		for(var i=0; i<lengthA; i++){
			for(var j=0; j<lengthB; j++) {
				result.push([sets[0][i], sets[1][j]])
			}
		}
	}

	if(!Array.isArray(sets) || sets.length !== 2) {
		console.log("plz check your input sets", Array.isArray(sets), sets.length !== 2)
	} else {
		cartesianProduct(sets);
	}

	return result
}

console.log(cp([[1,2,3], [3,2,1]]))