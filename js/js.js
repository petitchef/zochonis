noTrustees = 4
scrollDuration = 3

function showTrusteeInfo(trusteeID) {
    cardOpen = false;
    delay = 0
    for (let i = 1; i <= 4; i++) {
        id = 'trustee'+i
        if (document.getElementById(id).classList.contains('show')) {delay = 350}
        $('#'+id).collapse('hide');
    }
    setTimeout(() => {  
        for (let i = 1; i <= 4; i++) {
            id = 'trustee'+i
            if (id == trusteeID && !document.getElementById(trusteeID).classList.contains('show')) {
                $('#'+trusteeID).collapse('show');
            }
        }
    }, delay);
}

window.onresize = function() {
    if (document.getElementById("nav-div")) {
        if($(window).width() > 700) {
            $('#nav-div').removeClass('collapse');
        }else{
            $('#nav-div').addClass('collapse');
            $('#nav-div').removeClass('show');
        }
    }
}

window.onload = function() {
    if (document.getElementById("nav-div")) {
        if($(window).width() > 700) {
            $('#nav-div').removeClass('collapse');
        }else{
            $('#nav-div').addClass('collapse');
            $('#nav-div').removeClass('show');
        }
    }
    
    scrollingDivs = document.getElementsByClassName('scroll-inner-div')
    for (let i = 0; i < scrollingDivs.length; i++) {
        images = scrollingDivs[i].children
        if (images.length >= 4) {
            for (let j = 0; j < 4; j++) {
                clone = images[j].cloneNode(true)
                if (j >= 2) { clone.classList.add('hide-scroll') }
                scrollingDivs[i].appendChild(clone)
            }
            scrollingDivs[i].style.animation = `img-scroll ${images.length * scrollDuration}s linear -${images.length * scrollDuration}s infinite`
        }
    }
    
}