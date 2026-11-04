var hrac = "X";

function klik(pole){
    if(pole.innerHTML == ""){
        pole.innerHTML = hrac;

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
}