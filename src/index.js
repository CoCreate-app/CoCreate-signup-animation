/*globals CustomEvent*/
import action from '@cocreate/action';
import './css/common.css';
import './css/hamburger.css';
import './css/meatballs.css';
import './css/sushi.css';
import './css/kebab.css';
import './css/pizza.css';



let hamburgerEl, meatballEl, sushiEl, kebabEl, pizzaEl;

// function init(){
// }

function startAnimation() {
    let animation = document.querySelector(".animation-wrapper");

    animation.innerHTML = animationHtml;
    
    hamburgerEl = document.querySelector("#hamburger");
    meatballEl = document.querySelector("#meatballs");
    sushiEl = document.querySelector("#sushi");
    kebabEl = document.querySelector("#kebab");
    pizzaEl = document.querySelector("#pizza");

    setHamburger();
    hamburgerEl.classList.add('hamburger');
    hamburgerEl.classList.remove('animationHide');
	document.dispatchEvent(new CustomEvent('animate', {
		detail: {}
	}));
}

function setHamburger() {
    setTimeout(function() { 
        setMeatballs();
        hamburgerEl.classList.add('animationHide');
        meatballEl.classList.add('meatballs');
        meatballEl.classList.remove('animationHide');
    }, 3000);
}
function setMeatballs() {
    setTimeout(function() { 
        setSushi() ;
        meatballEl.classList.add('animationHide');
        sushiEl.classList.add('sushi');
        sushiEl.classList.remove('animationHide');
    }, 3000);
}
function setSushi() {
    setTimeout(function() { 
        setKebab();
        sushiEl.classList.add('animationHide');
        kebabEl.classList.add('kebab');
        kebabEl.classList.remove('animationHide');
    }, 3000);
} 
function setKebab() {
    setTimeout(function() { 
        setPizza();
        kebabEl.classList.add('animationHide');
        pizzaEl.classList.add('pizza');
        pizzaEl.classList.remove('animationHide');
    }, 3000);
}

function setPizza() {
    setTimeout(function() { 
        setHamburger();
        pizzaEl.classList.add('animationHide');
        // hamburgerEl.classList.add('sushi')
        hamburgerEl.classList.remove('animationHide');
    }, 3000);
}

const animationHtml = `
    <div id="hamburger" class="wrapper animationHide">
        <div class="icon">
            <span class="traffic"></span>
            <span class="traffic"></span>
            <span class="traffic"></span>
            <span class="title"></span>
        </div>
        <div class="icon">
            <span class="heading"></span>
            <span class="txtline"></span>
            <span class="txtline"></span>
            <span class="txtline"></span>
            <span class="image"></span>
        </div>
        <div class="icon">
            <span class="action"></span>
            <span class="action"></span>
            <span class="action"></span>
        </div>
    </div>

    <div id="sushi" class="wrapper animationHide">
        <div class="icon"></div>
        <div class="icon"></div>
        <div class="icon">
            <span class="traffic"></span>
            <span class="traffic"></span>
            <span class="traffic"></span>

            <span class="tab"></span>
            <span class="tab"></span>
            <span class="tab"></span>

            <span class="action"></span>
        </div>
        <div class="icon"></div>
        <div class="icon">
            <span class="heading"></span>
            <span class="txtline"></span>
            <span class="txtline"></span>
            <span class="txtline"></span>
        </div>
        <div class="icon"></div>
        <div class="icon">
            <span class="image"></span>
            <span class="image"></span>
        </div>
        <div class="icon"></div>
        <div class="icon"></div>
    </div>

    <div id="meatballs" class="wrapper animationHide">
        <div class="icon">
            <span class="txtline"></span>
            <span class="txtline"></span>
        </div>
        <div class="icon">
            <span class="traffic"></span>
            <span class="traffic"></span>
            <span class="traffic"></span>

            <span class="title"></span>

            <span class="image"></span>
            <span class="image"></span>
            <span class="image"></span>

            <span class="image"></span>
            <span class="image"></span>
            <span class="image"></span>
        </div>
        <div class="icon">
            <span class="item"></span>
            <span class="item"></span>
        </div>
    </div>

    <div id="kebab" class="wrapper animationHide">
        <div class="icon">
            <span class="traffic"></span>
            <span class="traffic"></span>
            <span class="traffic"></span>
            <span class="image"></span>
            <span class="image"></span>
            <span class="image"></span>
        </div>
        <div class="icon">
            <span class="title"></span>
            <span class="item"></span>
            <span class="item"></span>
            <span class="item"></span>
            <span class="item"></span>
            <span class="item"></span>
            <span class="item"></span>
        </div>
        <div class="icon">
            <span class="detail"></span>
            <span class="txtline"></span>
            <span class="txtline"></span>
            <span class="txtline"></span>
            <span class="txtline"></span>
        </div>
    </div>
    
    <div id="pizza" class="wrapper animationHide">
        <div class="icon">
            <span class="hor"></span>
            <span class="ver"></span>
        </div>
        <div class="icon">
            <span class="traffic"></span>
            <span class="traffic"></span>
            <span class="traffic"></span>
            <span class="title"></span>
            <span class="heading"></span>
            <span class="txtline"></span>
            <span class="txtline"></span>
            <span class="txtline"></span>
            <span class="image"></span>
        </div>
        <div class="icon">
            <span class="tab"></span>
            <span class="tab"></span>
            <span class="tab"></span>
        </div>
    </div>
`;

action.init({
	action: "animate",
	endEvent: "animate",
	callback: (btn, data) => {
		startAnimation();
	}
});

// init();
export default {startAnimation};