function flipconstellation() {
    var x = parseInt(Math.random() * 12 + 1);
        switch(x)
        {
            case 1 : stellasrc = "image/aquarius_big.jpg";break
            case 2 : stellasrc = "image/pisces_big.jpg";break
            case 3 : stellasrc = "image/aries_big.jpg";break
            case 4 : stellasrc = "image/taurus_big.jpg";break
            case 5 : stellasrc = "image/gemini_big.jpg";break
            case 6 : stellasrc = "image/cancer_big.jpg";break
            case 7 : stellasrc = "image/leo_big.jpg";break
            case 8 : stellasrc = "image/virgo_big.jpg";break
            case 9 : stellasrc = "image/libra_big.jpg";break
            case 10 : stellasrc = "image/scorpio_big.jpg";break
            case 11 : stellasrc = "image/sagittarius_big.jpg";break
            case 12 : stellasrc = "image/capricorn_big.jpg";break
            default : alert("입력오류")
        }
    document.constellationform.face.value='...별자리를 선택 중입니다...';
    window.setTimeout("changestella();", 3000);
}
function changestella() {
    document['constellation'].src = stellasrc;
    document.constellationform.face.value='선택된 별자리입니다.';  
}
function first() {
    document['constellation'].src = stellasrc;
    document['constellation'].src = "image/constellation.jpg";
    document.constellationform.face.value='초기화 되었습니다.';
}

function myFunction() {
    var element = document.getElementById("myDIV");
    element.classList.toggle("mystyle");
}