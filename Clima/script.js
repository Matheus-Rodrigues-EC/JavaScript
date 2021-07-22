document.querySelector('.busca').addEventListener('submit', async (event) => {
    event.preventDefault(); // função que preveni eventos de forma padrão
    let input = document.querySelector('#searchInput').value; // capta o texto digitado na caixa de texto da pagina
    //console.log(input);

    if(input !== ''){
        showWarning('Carregando... ');

        let url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(input)}&appid=78fdc5dcb46af2ea29ed4106c38a2607&units=metric&lang=pt_br`
        
        let results = await fetch(url); //chama a url e espera a resposta para salvar em results
        let json = await results.json(); // chama a função e espera converter em json
        //console.log(json);
        if(json.cod === 200){
            showInfo({
                name: json.name,
                country: json.sys.country,
                tempo: json.main.temp,
                tempIcon: json.weather[0].icon,
                windSpeed: json.wind.speed,
                windAngle: json.wind.deg,
            })
        }else{
            showWarning('Cidade não encontrada.')
        }
    }
});

function showInfo(json){
    showWarning('');
    document.querySelector('.resultado').style.display = 'block';

    document.querySelector('.titulo').innerHTML = `${json.name}, ${json.country}`;
    document.querySelector('.tempInfo').innerHTML = `${json.tempo} <sup>ºC</sup>`;
    document.querySelector('.ventoInfo').innerHTML = `${json.windSpeed} <span>km/h</span>`;
    document.querySelector('.temp img').setAttribute('src', `http://openweathermap.org/img/wn/${json.tempIcon}@2x.png`)
    document.querySelector('.ventoPonto').style.transform = `rotate(${json.windAngle - 90}deg)`
};

function showWarning(msg){
    document.querySelector('.aviso').innerHTML = msg; //função para exibir uma mensagem na tela
};