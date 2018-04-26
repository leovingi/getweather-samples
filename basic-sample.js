const request = require('request');

/*
	Get weather data for Paris on the 29th of October, 2017
*/
let options = {
	url: 'https://api.getweather.io/weather?q=48.817,2.333&date=2017-10-29',
	method: 'GET',
	json: true,
	timeout: 30000,
	headers: {
        'X-Api-Key': 'YOUR_API_KEY_GOES_HERE'
	}
};

request(options, (error, response, body) => {
	if(!error && response.statusCode === 200){
		console.log(body);
	}else{
		console.log(body);
	}
});

/*
Some more query examples:
	Weather data for London, GB, 2017-10-29
		https://api.getweather.io/weather?city=London&country=GB&date=2017-10-29

	Weather data with station data excluded
		https://api.getweather.io/weather?city=London&country=GB&date=2017-10-29&station=false

Example API response:
{ weather: 
   { stn: '071490',
     wban: '99999',
     date: '20171029',
     temp: 53.2,
     tempc: 24,
     dewp: 48.1,
     dewpc: 24,
     slp: 9999.9,
     slpc: 0,
     stp: 9999.9,
     stpc: 0,
     visib: 6.5,
     visibc: 18,
     wdsp: 8.9,
     wdspc: 24,
     mxspd: 12,
     gust: 21,
     max: 59.2,
     maxf: ' ',
     min: 45.9,
     minf: '*',
     prcp: 0.02,
     prcpf: 'E',
     sndp: 999.9,
     frshtt: '010000' },
  station: 
   { USAF: '71490',
     WBAN: '99999',
     STATION_NAME: 'ORLY',
     CTRY: 'FR',
     ST: '',
     CALL: 'LFPO',
     LAT: '48.725',
     LON: '2.359',
     ELEV: '88.7' } }

*/