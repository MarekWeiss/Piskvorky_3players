var hrac = "X";
const pozice = [
    "", "", "", "", "",
    "", "", "", "", "",
    "", "", "", "", "",
    "", "", "", "", "",
    "", "", "", "", ""
];
var konec = false;

function stejne(x,y,z, radek, sloupec){
    if(pozice[x] != "" && pozice[x] == pozice[y] && pozice[x] == pozice[z]) return true;
}

function kontrola(){
    for(var radek = 0; radek < 5; radek ++){
        for(var sloupec = 0; sloupec < 5; sloupec ++){
            var misto = radek * 5 +sloupec;

            if(sloupec <= 2 && stejne(misto, misto + 1, misto + 2) == true) return true;
            if(radek <= 2 && stejne(misto, misto + 5, misto + 10) == true) return true;
            if(sloupec <= 2 && radek <= 2 && stejne(misto, misto + 6, misto + 12) == true) return true;
            if(sloupec >= 2 && radek <= 2 && stejne(misto, misto + 4, misto + 8) == true) return true;
        }
    }
}

function klik(pole, cislo){
    if(konec == false){
        if (pozice[cislo] == ""){
            pozice[cislo] = hrac;
            pole.innerHTML = hrac;

            if (kontrola() == true){
                alert("Konec, vyhrál " + hrac);
                konec = true;
                document.getElementById("reset").style.display = "block";
                return;
            }

            if(hrac == "X"){
                hrac = "O";
            }
            else if (hrac == "O"){
                hrac = "V";
            }
            else if(hrac == "V"){
                hrac = "X";
            }
        }
        else{
            alert("Místo obsazené");
        }
    }
}

function reset(){
    for(var i = 0; i < pozice.length; i++){
        pozice[i] = "";
    }

    var td = document.getElementsByTagName("td")
    for(var i = 0; i < pozice.length; i++){
        td[i].innerHTML = "";
    }

    konec = false;
    hrac = "X";

    document.getElementById("reset").style.display = "none";
}


