// // const numbers=[22,44,555,77,88,77]
// //  for(let i = 0; i<numbers.length;i++){
// //      const number= numbers[i]
// //      console.log(number)

// //  }
// // for (const number of numbers){
// //     console.log(number)
// // }
// const products = [
//     {id:1,name:"Huawei phone night camere",price:20000},
//     {id:2,name:"Samsung phone is the best",price:18000},
//     {id:3,name:"Vivo phone coming soon",price:16500},
//     {id:4,name:"Walton Phone is sold out",price:13000},
//     {id:5,name:"Kamsung",price:20000},
// ]
// // for(let i =0; i<products.length;i++){
// //     const product =products[i];
// //     console.log(products)
// // }

// function matchedProducts(products,search){
//     const matched =[];
//     for(const product of products){
//         if(product.name.includes(search)){
//             matched.push(product)
//         }
        
//     }
//     return matched
// }
// const result =matchedProducts(products ,"phone")
// console.log(result);


// function checkName(name1){
    
// if (name1.includes("a, y, i , e , o , u, w")){
//     return "bad NAme"

// }
// else{
//     return "goood"
// }

// }
// const name1 ="salman"
// const information =checkName(name1,)
// console.log(information)

function matchedProducts(products,search){
    let match =[];
    for (const product of products){
        if(product.name.toLowerCase().includes(search.toLowerCase())){
            match.push(product)
        }
    }
    return match
}




const products = [
    {id:1,name:"Huawei phone night camere",price:20000},
    {id:2,name:"Samsung phone is the best",price:18000},
    {id:3,name:"Vivo phone coming soon",price:16500},
    {id:4,name:"Walton Phone is sold out",price:13000},
    {id:5,name:"Kamsung Phone",price:20000},
]
const result=matchedProducts(products,"is")
console.log(result)