const today = new Date
console.log(today)

// 5kyu : Extract the domain name from a URL

//PREP:
//P:
//given an URL as a string, parse out just the domain name. Special characters, numbers, and symbols can all be in the string. The string can contain different extensions.
//R:
//return the domain name as a string. just the domina name, no extensions.
//E:
// * url = "http://github.com/carbonfive/raygun" -> domain name = "github"
// * url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
// * url = "https://www.cnet.com"                -> domain name = cnet"
//P:    
// first I am going to set up a if statement to check what type of url is being given. I can assume, www, http, and https from the examples given. I am then going to split the string into an array allowing me to search and filter through the array looging for the second forward slash to start my domain and from the end. finding the .com or other extension.
// I will then extract the domain and return it. 

function domainName(url) {
url = url.replace('http://', '')
url = url.replace('https://', '')
url = url.replace('www', '')


return url.split('.')[0]
}









console.log(domainName("google.co"))
// console.log(domainName("google.co"))
// console.log(domainName("https://www.github.co/carbonfive/gun"))
// console.log(domainName("https://www.github.com/gun"))