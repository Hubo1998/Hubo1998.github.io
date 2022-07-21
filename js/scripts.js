var slideList = [{
    img: "/images_content/slider1.png",
    text: "DUNLAVIN CHURCH RESTORATION",
    text2: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis vitae perferendis veniam iusto dolor saepe optio officia quidem consequatur animi, vel possimus quis, eos aliquid? Iusto tempore doloremque distinctio dicta!'
},
{
    img: "/images_content/slider2.png",
    text: "ASPHALT PLANTING",
    text2: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum consequatur recusandae suscipit et expedita culpa est aut exercitationem, tempore eligendi aperiam earum maiores minus quae odio, eveniet quibusdam enim! Officia?'
},
{
    img: "/images_content/slider3.png",
    text: "GENERAL RENOVATION",
    text2: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione labore veniam magni ullam reprehenderit sapiente cumque autem, repellat eveniet quaerat possimus voluptates quod consequuntur dolore nihil placeat. Nostrum, ipsam!'
}];



var searchbar = document.querySelector('.searchbar');
var searchicon = document.querySelector('.searchicon');
var closeicon = document.querySelector('#closeicon');
var closeicon2 = document.querySelector('#closeicon2');
var searchinput = document.querySelector('.searchinput');
var arrowright = document.querySelector('#arrowright');
var arrowleft = document.querySelector('#arrowleft');
var imagebox1 = document.querySelector('#sliderimage1');
var imagebox2 = document.querySelector('#sliderimage2');
var slidertitle = document.querySelector('.slidertitle');
var slidertext = document.querySelector('.slidertext');
var container = document.querySelector('.container');
var barsicon = document.querySelector('.barsicon');
var aboutbutton = document.querySelector('#about');
var aboutdropdown = document.querySelector('#aboutdropdown');
var solutionsbutton = document.querySelector('#solutions');
var solutionsdropdown = document.querySelector('#solutiondropdown');
var navbarmenu = document.querySelector('.navbarmenu');



var j = 0;
var i = 0;
var active = 0;
var check = false;
searchinput.value = '';

var time = 5000;
var run = setInterval(function () { active++; changeSlide() }, time);

//Funkcja searchbar
searchicon.onclick = function () {
    i++;
    var mediaquery = window.matchMedia("(max-width: 767px)");
    if (i == 1) {
        closeicon.onclick = function () {
            if (mediaquery.matches) {
                searchicon.style.transform = 'translateY(0) translateX(0)';
            } else {
                searchicon.style.transform = 'translateY(0)';
            }
            closeicon.style.opacity = 0;
            closeicon.style.zIndex = -1;
            searchbar.style.height = 0;
            searchicon.style.cursor = 'pointer'
            searchinput.style.opacity = '0';
            searchinput.style.zIndex = '-1';

            i = 0;
        }
        if (mediaquery.matches) {
            searchicon.style.transform = 'translateY(5.5vh) translateX(45px)';
            searchbar.style.height = '5vh';
        } else {
            searchicon.style.transform = 'translateY(6vmin)';
            searchbar.style.height = '6vmin';
        }
        closeicon.style.opacity = 1;
        closeicon.style.zIndex = 2;
        searchicon.style.cursor = 'default';
        searchinput.style.opacity = '1';
        searchinput.style.zIndex = '2';

    }
}

//Funkcja menu pobocznego 
barsicon.onclick = function () {
    j++;
    if (j == 1) {
        closeicon2.onclick = function () {
            setTimeout(hideNavbarmenu,1000);
            container.style.transform = 'translateX(0)';
            closeicon2.style.opacity = 0;
            closeicon2.style.zIndex = -1;
            barsicon.style.opacity = 1;
            j = 0;
        }
        navbarmenu.style.width='80vw';
        navbarmenu.style.right=0;
        container.style.transform = 'translateX(-80vw)';
        barsicon.style.opacity = 0;
        closeicon2.style.opacity = 1;
        closeicon2.style.zIndex = 2;
    }
}

function hideNavbarmenu(){
    navbarmenu.style.width=0;
    navbarmenu.style.right='unset';
}


//Funkcja zmieniająca slajdy
function changeSlide() {
    if (active === slideList.length) {
        active = 0;
    } else if (active < 0) {
        active = slideList.length - 1;
    }
    if (check === true) {
        console.log(120)
        check = false;
        imagebox1.style.opacity = 0;
        imagebox2.src = slideList[active].img;
        slidertitle.textContent = slideList[active].text;
        slidertext.textContent = slideList[active].text2;
        imagebox2.style.opacity = 1;
    } else {
        console.log(100)
        check = true;
        imagebox2.style.opacity = 0;
        imagebox1.src = slideList[active].img;
        slidertitle.textContent = slideList[active].text;
        slidertext.textContent = slideList[active].text2;
        imagebox1.style.opacity = 1;
    }
}


//Funkcje obsługujące zmianę slajdów strzałkami
arrowright.onclick = function () {
    clearInterval(run);
    active++;
    changeSlide();
    run = setInterval(function () { changeSlide() }, time);
}
arrowleft.onclick = function () {
    clearInterval(run);
    active--;
    changeSlide();
    run = setInterval(function () { changeSlide() }, time);
}

//Funkcje do obsługi menu mobilnego
solutionsbutton.onclick = function () {
    var mediaquery = window.matchMedia("(max-width: 767px)");
    if (mediaquery.matches) {
        if (solutionsbutton.classList.contains('dropdownactive')) {
            solutionsbutton.classList.remove('dropdownactive');
            solutionsdropdown.style.display = 'none';
        } else {
            solutionsbutton.classList.add('dropdownactive');
            solutionsdropdown.style.display = 'block';
        }
    }
}

aboutbutton.onclick = function () {
    var mediaquery = window.matchMedia("(max-width: 767px)");
    if (mediaquery.matches) {
        if(aboutbutton.classList.contains('dropdownactive')){
            aboutbutton.classList.remove('dropdownactive');
            aboutdropdown.style.display = 'none';
        }else{
            aboutbutton.classList.add('dropdownactive');
            aboutdropdown.style.display = 'block';
        }
    }
}




