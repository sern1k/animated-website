const balloon = document.getElementById('air-balloon');
const cloudOne = document.getElementById('cloud-one');
const cloudTwo = document.getElementById('cloud-two');
const cloudThree = document.getElementById('cloud-three');
const cloudFour = document.getElementById('cloud-four');
const cloudFive = document.getElementById('cloud-five');
const js = document.getElementById('js');
const balloonYFromBottom = 10

balloon.style.bottom = balloonYFromBottom + '%'

function move() {
	const incrementer = window.scrollY;
	balloon.style.bottom = balloonYFromBottom + incrementer * 0.1 + '%';

	cloudOne.style.bottom = 40 + incrementer * 0.14 + '%';
	cloudOne.style.marginLeft = 70 + incrementer * 0.12 + '%';

	cloudTwo.style.bottom = 80 + incrementer * 0.07 + '%';
	cloudTwo.style.marginLeft = 60 + incrementer * 0.05 + '%';

	cloudThree.style.bottom = 60 + incrementer * 0.12 + '%';
	cloudThree.style.marginRight = 40 + incrementer * 0.14 + '%';

	cloudFour.style.bottom = 70 + incrementer * 0.15 + '%';
	cloudFour.style.marginRight = 80 + incrementer * 0.13 + '%';

	cloudFive.style.bottom = 60 + incrementer * 0.15 + '%';
	cloudFive.style.marginLeft = 30 + incrementer * 0.09 + '%';

	js.style.marginRight = 55 + incrementer * 0.5 + '%';
}

window.addEventListener('scroll', move)