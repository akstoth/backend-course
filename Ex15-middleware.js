export function getMiddlewareAcronym(description) {
	let param = 0
	const acronyms = [
		"APPLICATION MIDDLEWARE",
		"ROUTER MIDDLEWARE",
		"ERROR HANDLING MIDDLEWARE",
		"BUILT-IN MIDDLEWARE",
		"THIRD-PARTY MIDDLEWARE"
	]
	const _acronyms = [
		"AM",
		"RM",
		"EHM",
		"BM",
		"TM"
	]
	for (let i = 0; i < acronyms.length;i++){
		if(description.toUpperCase() === acronyms[i]) {
			return _acronyms[i];
			param++
		}
	}
	if(!param){
		return "Unknown Description"
	}
}