Math.qfZeros = (a,b,c,y=0) => {
	const delta = b**2 - 4*a*(c-y);
	if (delta < 0) return null;
	
	if (delta === 0) {
	 return [
		 -b/(2*a)
		];
	}
	
	return [
	 (-b-Math.sqrt(delta))/(2*a),
	 (-b+Math.sqrt(delta))/(2*a)
	];
};
