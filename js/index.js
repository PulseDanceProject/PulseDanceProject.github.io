document.addEventListener('DOMContentLoaded', main);

function main(){

	const vid = document.querySelector("#video");
	const img = document.querySelector("#beforeheaderImg");

	//console.log(vid, img);

	vid.addEventListener('canplaythrough', ()=>{
		img.classList.add('hidden');
		vid.classList.remove('hidden');
		
		vid.play();

		vid.addEventListener("ended", switchScreens);
	});

	
}



function switchScreens(){

	const vid = document.querySelector("#video");
	const img = document.querySelector("#afterheaderImg");

	console.log("video ended");
	vid.classList.add("hidden");
	img.classList.remove("hidden");
}