document.addEventListener("DOMContentLoaded", function () {
    var volume = document.getElementById("volume");
    var menubut = document.getElementById("menubut");
    var menubox = document.getElementById("menubox");
    var home = document.getElementById("home");
    var sobre = document.getElementById("sobre");
    var antecedentes = document.getElementById("antecedentes");
    var bolchevique = document.getElementById("bolchevique");
    var codigofonte = document.getElementById("codigofonte");
    var joguinho = document.getElementById("joguinho");
    var trocartema = document.getElementById("trocartema");
    var antecedentestitulo = document.getElementById("antecedentestitulo")
    var bolcheviquetitulo = document.getElementById("bolcheviquetitulo")
    var sobretextos = document.getElementById("sobretextos")
    var musicanyan = new Audio("nyan_music.mp3")
    var circulo1 = document.getElementById("circulo1")
    var circulo2 = document.getElementById("circulo2")
    var circle1 = document.getElementById("circle11")
    var circle2 = document.getElementById("circle22")
    var musiquinhas = document.getElementById("musiquinhas")
    var puxarmusica = document.getElementById("puxarmusica")
    var musicbox = document.getElementById("musicbox")
    var animareverse2 = false
    var animareverse = false;

    home.addEventListener("click", function () {
        window.location.href = "../index.html"
    })
    menubut.addEventListener("click", function () {
        menubut.style.animationName = "None";
        menubox.style.animation = "None";
        if (animareverse == false) {
            menubut.style.animationName = "menuanim";
            menubox.style.animation = "menuboxanim 1s"
            menubox.style.left = "0%"
            animareverse = true;
        } else {
            menubut.style.animationName = "menuanim2"
            menubox.style.animation = "menuboxanim2 1s"
            menubox.style.left = "-24%"
            animareverse = false;
        }


    })
    sobre.addEventListener("click", function () {
        sobretextos.scrollIntoView({ behavior: 'smooth' });

    })
    antecedentes.addEventListener("click", function () {
        antecedentestitulo.scrollIntoView({ behavior: 'smooth' });

    })
    bolchevique.addEventListener("click", function () {
        bolcheviquetitulo.scrollIntoView({ behavior: 'smooth' });

    })
    codigofonte.addEventListener("click", function () {
        window.open("codigo-fonte.txt")
    })
    joguinho.addEventListener("click", function () {
        alert("äinda em desenvolvimento")
    })

    trocartema.addEventListener("click", function () {
        document.body.style.backgroundImage = "url(https://gizmodo.uol.com.br/wp-content/blogs.dir/8/files/2021/02/nyan-cat-1.gif)";
        musicanyan.volume = 0.05
        musicanyan.loop = true
        musicanyan.play()
        circulo1.style.backgroundColor = "pink"
        console.log("ola")
        circulo2.style.backgroundColor = "pink"
        circle1.style.filter = "brightness(1)"
        circle2.style.filter = "brightness(1)"
    })

    puxarmusica.addEventListener("click", function () {
        puxarmusica.addEventListener("animationend", function removeAnimation() {
            puxarmusica.style.animation = "none";
            musicbox.style.animation = "none";
            musiquinhas.style.animation = "none";
            puxarmusica.removeEventListener("animationend", removeAnimation);
            musiquinhas.removeEventListener("animationend", removeAnimation);
            musicbox.removeEventListener("animationend", removeAnimation);
        }, { once: true });
        if (animareverse2) {
            puxarmusica.style.animation = "girarmusica 1s ease-in-out reverse"
            musiquinhas.style.animation = "puxarbox 1s ease-in-out reverse"
            musicbox.style.animation = "puxarbox 1s ease-in-out reverse"
            musiquinhas.style.top = "-100%"
            musicbox.style.top = "-100%"
            puxarmusica.style.top = "2%"
            console.log("passou aq 1")
        } else {
            puxarmusica.style.animation = "girarmusica 1s ease-in-out"
            musiquinhas.style.animation = "puxarbox 1s ease-in-out"
            musicbox.style.animation = "puxarbox 1s ease-in-out"
            musiquinhas.style.top = "1%"
            musicbox.style.top = "1%"
            puxarmusica.style.top = "32%"
            console.log("passou aq 2")
        }
        animareverse2 = !animareverse2;
    })
});
// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var queryString = window.location.search;

queryString = queryString.substring(1);

var pares = queryString.split("&");

var parametros = {};

for (var i = 0; i < pares.length; i++) {
    var par = pares[i].split("=");
    var chave = decodeURIComponent(par[0]);
    var valor = decodeURIComponent(par[1] || "");
    parametros[chave] = valor;
}
var playlist = parametros.playlist;
var secret = parametros.secret;
if (secret != "secret") {
    console.log("eae kkk")
} else {
    alert("parabens trouxa flag{" + atob("KzYyODUyMDI4MjIyNzk=") + "}")
}
console.log(playlist + secret)
var player;
function onYouTubeIframeAPIReady() {
    if (playlist != "playlistsecreta") {
        playlist = "PLvblFFcP5psvmdNRsRrYj99shbO91klwp"
    } else {
        playlist = "PLvblFFcP5pssHGdv8OlOxXelAQOuLSg6k"
    }
    player = new YT.Player('player', {
        height: '140',
        width: '140',
        disablekb: 0,
        playerVars: {
            listType: 'playlist',
            list: playlist,
            loop: 1
        },
        events: {
            'onStateChange': onPlayerStateChange,
            'onReady': onPlayerReady
        }
    });
}
// 5. The API calls this function when the player's state changes.
//    The function indicates that when playing a video (state=1),
//    the player should play for six seconds and then stop.
var done = false;
var volume = document.getElementById("volume")
function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.PLAYING && !done) {
        return
    }
}
function getYouTubeVideoId(url) {
    // Extrai o ID do vídeo da URL
    var videoId = url.split('v=')[1];

    // Se houver parâmetros na URL, remove-os
    var ampersandPosition = videoId.indexOf('&');
    if (ampersandPosition !== -1) {
        videoId = videoId.substring(0, ampersandPosition);
    }
    return videoId
}
function onPlayerStateChange(event) {
    if (event.data === YT.PlayerState.PLAYING) {
        var currentVideoUrl = event.target.getVideoUrl();
        var currentVideoId = getYouTubeVideoId(currentVideoUrl);
        tumbnail.style.backgroundImage = "url('https://img.youtube.com/vi/" + currentVideoId + "/0.jpg')"
    }
}
var volume = document.getElementById("volume");
var mudavel = false
function onPlayerReady(event) {
    mudavel = !mudavel
    player.setVolume(volume.value)
}
volume.addEventListener('input', function () {
    if (mudavel) {
        player.setVolume(volume.value)
    }
})
var tumbnail = document.getElementById("tumbnail")
var botaoplay = document.getElementById("botaoplay")
var botaoavancar = document.getElementById("botaoavancar")
var botaoretornar = document.getElementById("botaoretornar")
var volume = document.getElementById("volume")
var estadodobotao = false
botaoplay.addEventListener("click", function () {
    estadodobotao = !estadodobotao
    if (estadodobotao) {
        botaoplay.style.backgroundColor = "black"
        botaoplay.style.backgroundImage = "url('https://cdn.icon-icons.com/icons2/3641/PNG/512/pause_white_button_icon_227845.png')"
        player.playVideo();
    } else {
        botaoplay.style.backgroundColor = "white"
        botaoplay.style.backgroundImage = "url('https://cdn-icons-png.flaticon.com/512/686/686463.png')"
        player.pauseVideo()
    }
})
botaoavancar.addEventListener("click", function () {
    botaoplay.style.backgroundColor = "black"
    botaoplay.style.backgroundImage = "url('https://cdn.icon-icons.com/icons2/3641/PNG/512/pause_white_button_icon_227845.png')"
    player.nextVideo()
})
botaoretornar.addEventListener("click", function () {
    botaoplay.style.backgroundColor = "black"
    botaoplay.style.backgroundImage = "url('https://cdn.icon-icons.com/icons2/3641/PNG/512/pause_white_button_icon_227845.png')"
    player.previousVideo()
})


