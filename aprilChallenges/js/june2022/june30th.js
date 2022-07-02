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

//replace the subdomain with empty strings and then split the string at the period, extracting the domain with an index of 0 thats left over. 

function domainName(url){
    url = url.replace("https://", '');
    url = url.replace("http://", '');
    url = url.replace("www.", '');
    return url.split('.')[0];
  };

console.log(domainName("google.co"))
// console.log(domainName("google.co"))
// console.log(domainName("https://www.github.co/carbonfive/gun"))
// console.log(domainName("https://www.github.com/gun"))