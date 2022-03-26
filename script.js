const newYear = "11 Aug 2022";

const elMonths = document.getElementById('months')
const elDays = document.getElementById('days');
const elHours = document.getElementById('hours');
const elMins = document.getElementById('min');
const elSecs = document.getElementById('sec');

//console.log(newYear);
//const newYearDate = new Date(newYear);
//console.log(newYearDate);

function countdown(){
	const newYearDate = new Date(newYear);
	const currentDate = new Date();
	const totalSecs = (newYearDate - currentDate)/1000;
	const csecs = Math.floor(totalSecs)%60;
	const cmins = Math.floor(totalSecs/60)%60;
	const chours = Math.floor(totalSecs/3600)%24;
	const cdays = Math.floor(totalSecs/3600/24);
	//const cmonths = Math.floor(totalSecs/3600/24/30);

	console.log(cdays, chours, cmins, csecs);

	elDays.innerHTML = cdays;
	elHours.innerHTML = chours;
	elMins.innerHTML = cmins;
	elSecs.innerHTML = csecs;
	//elMonths.innerHTML = cmonths;
} 

countdown();

setInterval(countdown,1000);