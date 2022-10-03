noTrustees = 4
logos = [["childrenyoungpeople", 5],
         ["education", 11],
         ["health", 11],
         ["socialequity", 10],
         ["overseas", 8]]

function addScrollingImages(noImages) {
    images = []
    while (images.length < noImages && images.length < 45) {
        folder = Math.floor(Math.random() * 5)
        image = Math.floor(Math.random() * logos[folder][1])
        imageURL = `${logos[folder][0]}/logo${image}.png`
        if (images.indexOf(imageURL) < 0) {
            images.push(imageURL)
            document.getElementById('scroll-inner-div').innerHTML += `<img class="scroll-img" src="images/logo_wheel/${imageURL}">`
        }
    }
    document.getElementById('scroll-inner-div').style.animation = `img-scroll ${noImages*3}s linear infinite`
}

function addCharityImages() {
    for (let i = 0; i < logos.length; i++) {
        folder = logos[i][0]
        if (document.getElementById(folder+'-charities')) {
            for (let j = 0; j < logos[i][1]; j++) {
                imageURL = `${folder}/logo${j}.png`
                document.getElementById(folder+'-charities').innerHTML += `<img src="images/logo_wheel/${imageURL}">`
            }
        }
    }
}

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
    if (document.getElementById('scroll-inner-div')) {
        addScrollingImages(20)
    }
    addCharityImages()
}