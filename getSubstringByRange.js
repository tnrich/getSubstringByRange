module.exports = function getSubstringByRange(string, rangeToCopy) {
	if (rangeToCopy.start > rangeToCopy.end) {
		return string.slice(0, rangeToCopy.end + 1) + string.slice(rangeToCopy.start, string.length)
	} else {
		return string.slice(rangeToCopy.start, rangeToCopy.end + 1)
	}
}

				