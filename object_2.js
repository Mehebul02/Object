const student = {
    Name :"Mehebul Alif",
    id : 532509,
    address : "Kazihata, Bheramara, Kushtia",
    isSingle :true,
    friends : ["Alif","Somrat","Razwan","Naem Sarkar"],
    moves:[{name:"tui boro man", year:2026}],
    act :function(){
        console.log("my Name is alif islam")

    },
    car :{
        brand :"tesla",
        price: 700000,
        model : "MP767",
        release :2005,
    }

}
console.log(student.act)
student.act()


function add(num1,num2){
    console.log(num1,num2)
    console.log(arguments[2])
}
add(33,55,66,77)