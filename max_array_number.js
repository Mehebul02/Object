const phones = [
    {model:"Y20",name:"Huawei",price:13999,camera:"24mp",color:"Yellow"},
    {model:"v60",name:"vivo",price:23540,camera:"48mp",color:"Black"},
    {model:"R60",name:"Samsung",price:23000,camera:"16mp",color:"Green"},
    {model:"y20",name:"Xiome",price:32340,camera:"64mp",color:"Red,Green"},
    {model:"y20",name:"Walton ",price:13999,camera:"24mp",color:"Yellow"},
    {model:"y20",name:"Walton ",price:13999,camera:"24mp",color:"Yellow"},
    {model:"y20",name:"Walton",price:13999,camera:"24mp",color:"Yellow"},
]
// function getMaxPhones(phones,search){
//     let matched =[];
//     for (const phone of phones){
//         if(phone.name.includes(search)){
//             matched.push(phone)
//         }
//     }
//     return matched
  
// }
// const result =getMaxPhones(phones,"Walton","price");
// console.log(result);

function maxPricePhone(phones){
    let max =phones[0]
    for(const phone of phones){
        if(phone.price > max.price){
            max = phone
        }
    }
    return max

}
const result =maxPricePhone(phones);
console.log(result);