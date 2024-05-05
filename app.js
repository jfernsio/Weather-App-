

let inputVal = document.getElementById('text');
const button = document.getElementById('btn');
const p = document.getElementById('para');
const widjet = document.getElementById('img');
const cityTxt = document.getElementById('city');
const forec = document.getElementById('desc');
const region = document.getElementById('temp');

const Kal = document.getElementById('tom');
const kalIcon = document.getElementById('img2');
const kalTemp = document.getElementById('tomTemp');

const dayAfter = document.getElementById('dayAftr');
const dayAfterIcon = document.getElementById('img3');
const dayAfterTemp = document.getElementById('dayAftrTemp')

const parso = document.getElementById('parso');
const parsoImg = document.getElementById('img4');




const getWeather = async () => {

    let val = inputVal.value;
    const url = `https://api.weatherapi.com/v1/forecast.json?key=c118ef9f653240ef942182915240105&q=${val}&days=3`;

    try {
        let response = await fetch(url);
        console.log(response);
        let data = await response.json();
        console.log(data);
    
        if (response.status !== 200) {
            console.log("Error: ", data.error.message);
            alert('Not a valid location');
    
            // Hide elements
            document.getElementById('secondry').classList.add('hidden');
            document.getElementById('me').classList.add('hidden');
        } else {
            console.log('Success');
            //showps elements
            document.getElementById('secondry').classList.remove('hidden');
            document.getElementById('me').classList.remove('hidden');
        }

        let check = data.location.name;
        cityTxt.textContent = check;
        // console.log(check);
        region.textContent = data.current.temp_c + '°C';
        widjet.src = data.current.condition.icon;
        forec.textContent = data.current.condition.text;


        const date1 = data.forecast.forecastday[0].date;
        const date1String = date1.toString();

        const dinalDate1 = (date1String.slice(5, 10));
        Kal.textContent = dinalDate1;

        const date2 = data.forecast.forecastday[1].date;
        const date2String = date2.toString();

        const dinalDate2 = (date2String.slice(5, 10));
        dayAfter.textContent = dinalDate2;

        const date3 = data.forecast.forecastday[2].date;
        const date3String = date3.toString();

        const dinalDate3 = (date3String.slice(5, 10));
        parso.textContent = dinalDate3;


        const KalImg = data.forecast.forecastday[0].day.condition.icon;
        kalIcon.src = KalImg;

        kalTemp.textContent = data.forecast.forecastday[0].day.avgtemp_c + '°C';
        // console.log(KalImg);


        dayAfterIcon.src = data.forecast.forecastday[1].day.condition.icon;
        dayAfterTemp.textContent = data.forecast.forecastday[1].day.avgtemp_c + '°C';

        const Parso_Img = data.forecast.forecastday[2].day.condition.icon;
        parsoImg.src = Parso_Img;

        const parsoTempp = data.forecast.forecastday[2].day.avgtemp_c + '°C';
        document.getElementById('parsoTemp').textContent = parsoTempp;

        
        console.log(data.current.temp_c);
        console.log(data.location);
        console.log(data.current.condition.location);

    }
    catch (er) {
        console.log(er);
    }

}

button.addEventListener('click', getWeather);

