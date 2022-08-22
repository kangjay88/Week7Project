const api_key = '41f860c61bf3e8a02a4b87328f7d43c5'

form = document.querySelector('#weather_form')

form.addEventListener('submit', (e) => { // e = event
    e.preventDefault();
    const name = document.querySelector('#city_name').value
    console.log(`${name}`)
}); 


const getWeather = async () => {
    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${document.querySelector('#city_name').value}&appid=${api_key}&units=imperial`, {
        method:"GET",
    }); //I want to retrieve this API this way
    const data = await res.json();
    console.log(data)
    const weather = [data]
    weather.map(addToPage)
};

const addToPage = (data) => {
    const p = document.createElement('p')
    p.innerHTML = `
    
    <div class="card; p-3 mb-2 bg-transparent text-dark" style="#">
        <button type="button" id="clear" type="click" class="btn-close" aria-label="Close"></button>
        <img src="#" class="card-img-top" alt="...">
        <div class="card-body; text-center">
            <h5 class="card-title">${ data['name'] }</h5>
            <p class="card-text; font-weight-bold">
            <p>Temperature: ${data['main']['temp'] }</p>
                <p>High: ${data['main']['temp_max']}</p>
                <p>Low: ${data['main']['temp_min']}</p>
                <p>Feels Like: ${data['main']['feels_like']}</p>
            </p>    
        </div>
    </div>
    
    `
    document.querySelector('div.container div.row div.col section').insertAdjacentElement('beforeend', p)
    const clearBtn = document.getElementById('clear')
    clearBtn.addEventListener('click', clearWeather)
};

const clearBtn = document.getElementById('clear')
const clearWeather = async () => {
    console.log('cleared')
    document.querySelector('section').innerHTML=''
};


