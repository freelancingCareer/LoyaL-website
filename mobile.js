// nav bar active

let ul = document.querySelector('ul');
let li = document.querySelectorAll('li');

li.forEach(el => {
	el.addEventListener('click', function(){
		ul.querySelector('.active').classList.remove('active');
		el.classList.add('active');
	});
});

// scroll up and down system

const head = document.querySelector('header');
let preScroll = window.pageYOffset;

window.addEventListener('scroll', () => {
	let currentScroll = window.pageYOffset;
	
	if (preScroll < currentScroll) {
		head.classList.add('hide');
	}
	
	else {
		head.classList.remove('hide');
	}
	
	preScroll = currentScroll;
});


// hambergur manue using from nasim vaiya

const manuclick = document.querySelector('.manuIcon');

manuclick.addEventListener('click', function () {
	
	
	const nev = document.querySelector('.nav-area');
	nev.classList.toggle('show-nav-area');
	this.querySelector('i').classList.toggle('fa-times');
	
})

// smooth scrolling

const scroll = new SmoothScroll(' a[href*="#"]', {
	speed: 1000
});








