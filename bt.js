//bài 1
function student(name,age,address){
    let hocsinh = {
        name: `${name}`,
        age:`${age}`,
        address:`${address}`
    }
    console.log(hocsinh);
}
student('Tiến',12,'Hà Nội')

//bài 2

var smartPhones = [
    { name: 'iphone', price: 649 },
    { name: 'Galaxy', price: 576 },
    { name:'Galaxy Note 5', price: 489 }
    ];

    const returnPrice = () => {
        let price = [];
        for(smartPhone of smartPhones){
          console.log(smartPhone.price);
          price.push(smartPhone.price)
      }  
      return price
    }
console.log(returnPrice());
//bài 3
const foo = (x,y,z) => console.log(x,y,z);
const hello = () => alert("hello")
const cal= (a,b)=>{
	let m = a+b*100
	return m
}
//bài 4
const Time = () =>{
    let date = new Date ();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
   
    if (h==0){
        h = 12;
    }
    h = h<10? `0${h}`: h
    m = m<10? `0${m}`: m
    s = s<10? `0${s}`: s
    let time = `${h} : ${m} : ${s}`
    document.getElementById("clock").innerText = time;
    setTimeout(Time,1000)
}
Time();

const NumberOneTriangle = (row) =>{
    for ( let i=1;i<=row;i++){
        for ( let j=1;j<=i;j++)
        {document.write("1")}
        document.write("<br/>")
    }
}
NumberOneTriangle(5)

const findEven = (number) =>{
    for(let i = number; i>=4&&i<=20; i++){
  if(i%2==0){console.log(i);}
  }
  }
  findEven(4)
