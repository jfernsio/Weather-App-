

let inputVal = document.getElementById('text');
const button = document.getElementById('btn');
const p = document.getElementById('para');
const widjet = document.getElementById('img');

const getWeather =  async () => {
    let val = inputVal.value;
console.log(val);
    const url = `http://api.weatherapi.com/v1/current.json?key=c118ef9f653240ef942182915240105&q=${val}`;
    let response =  await fetch(url);
    console.log(response);
    let data = await response.json();
    console.log(data);
    console.log(data.current.temp_c);
    p.textContent = 'Temp' + " " +data.current.temp_c;
    let loact = data.current;
console.log(data.location);
document.getElementById('city').textContent = data.current.condition.text;
img.src = data.current.condition.icon;


    // for(let value in loact) {
    //     console.log(loact[value]);
    //     p.textContent = loact[value];
    // }
}

button.addEventListener('click',getWeather)


// let uni = {

//     Obj1: {
//         prop1: "prop1Obj1",
//         prop2: "prop2Obj1",  
//     },  
//         Obj2: {
//           prop1: "hey you",
//           prop2: "prop2Obj2"
//         }


// };


// for (let v in uni) {
//     console.log(uni[v].prop1);
// }