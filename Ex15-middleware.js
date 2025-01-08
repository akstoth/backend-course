
// Primeira solução
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
	for (let i = 0; i < acronyms.length; i++) {
		if (description.toUpperCase() === acronyms[i]) {
			param++
			return _acronyms[i];
		}
	}
	if (!param) {
		return "Unknown Description"
	}
}

// Segunda solução: usar for in ou for of?
export function getMiddlewareAcronym(description) {
	const acronyms = [
		"APPLICATION MIDDLEWARE",
		"ROUTER MIDDLEWARE",
		"ERROR HANDLING MIDDLEWARE",
		"BUILT-IN MIDDLEWARE",
		"THIRD-PARTY MIDDLEWARE"
	]
}