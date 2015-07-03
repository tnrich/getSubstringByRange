#getSubstringByRange

A simple function to get a (sometimes circular) chunk of a string. Takes in 0-based start and end params.  

#Useage:
```
npm install get-substring-by-range
var getSubstringByRange = require('get-substring-by-range')
getSubstringByRange("0123456789",{start: 4, end: 5}) //grab the 4th and 5th chars of the string
//"45"
getSubstringByRange("0123456789",{start: 7, end: 2}) //grab from the 7th char and wrap around the end to the 2nd char
//"012789"
```

#How it works:
```
function getSubstringByRange (string, rangeToCopy) {
	if (rangeToCopy.start > rangeToCopy.end) {
		return string.slice(0, rangeToCopy.end + 1) + string.slice(rangeToCopy.start, string.length)
	} else {
		return string.slice(rangeToCopy.start,rangeToCopy.end+1)
	}
}
```