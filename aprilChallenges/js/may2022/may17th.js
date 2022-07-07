console.log('May 17th')


// //random practice: 

// async function fetchProducts() {
//     try {
//         //after this line, our funciton will wait for the fetch() call to be settled. 
//         //the fetch() call will eith er
//     }
// }

// async function fetchProducts() {
//     try {
//         const response = await fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');
//         if (!response.ok) {
//             throw new Error(`HTTP error: ${response.status}`);
//         }
//         const json = await response.json();
//         return json;
//     }
//     catch (error) {
//         console.error(`Could not get products: ${error}`);
//     }
// }

// const json = fetchProducts();
// console.log(json[0].name);   // json is a Promise object, so this will not work



// async function fetchProducts() {
//     try {
//         const response = await fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');
//         if (!response.ok) {
//             throw new Error(`HTTP error: ${response.status}`);
//         }
//         const json = await response.json();
//         return json;
//     }
//     catch (error) {
//         console.error(`Could not get products: ${error}`);
//     }
// }

// const jsonPromise = fetchProducts();
// jsonPromise.then((json) => console.log(json[0].name));


// 7kyu: Filtered List

function filter_list(l) {
   
    const m = l.filter(num => {
        return typeof num === 'number'
    })
    return m
}



console.log(filter_list([1,2,'a','b']))
console.log(filter_list([1,'a','b',0,15]))
