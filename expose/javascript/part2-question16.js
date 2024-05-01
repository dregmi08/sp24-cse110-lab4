for(const property in statistics) {
	if(typeof(statistics[property]) == "number" && statistics[property] % 2 == 1){
		console.log(`${statistics[property]}`);
	}
	if(property.charAt(0).toLowerCase() == 'r') {
		console.log(property);
	}
}
