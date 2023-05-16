class Pengar{
    constructor(antal, pengarsort){
        this.antal = antal;
        this.pengarsort = pengarsort;
    }
        
    
}
 const input_pris = document.getElementById("pris");
 const input_inbet = document.getElementById("inbet");
 const svardiv = document.getElementById("svar_div");

 const kalkylerknapp = document.getElementById("kalk_knapp")
 kalkylerknapp.addEventListener("click", kalkyleraClick, false)
 
function kalkyleraClick(){
   //console.log("Click")

   let t_pris = parseInt(input_pris.value);
   let t_inbet = parseInt(input_inbet.value);

   if (t_pris > t_inbet){
    alert("För lite pengar! Betala hela priset eller dra iväg, dinfattiglapp")
   }
   else{
    getExchangeArray(t_inbet, t_pris);

    const exchange_array = getExchangeArray(t_inbet, t_pris);

    svardiv.innerHTML= `<b>inbet= ${t_inbet}, pris= ${t_pris} kr </b>
    <br> <h3> Växel tillbaka: </h3>
    Femhundringar: ${exchange_array[0].antal} st
    <br> Hundringar: ${exchange_array[1].antal} st
    <br> Femtingar: ${exchange_array[2].antal} st
    <br> Tjugingar: ${exchange_array[3].antal} st
    <br> Tior: ${exchange_array[4].antal} st
    <br> Femmor: ${exchange_array[5].antal} st
    <br> En kronor: ${exchange_array[6].antal} st

    `;
    
   }

   getExchangeArray(t_inbet, t_pris);
}
 
let exChange = (belopp, sedel) => {Math.floor(belopp / sedel)}

function getExchangeArray(inbetalning, priset){
    let antal_mynt = 0;
    let pengar_tillbaka = 0;

    let sedlar_mynt_array = []
    
    //500----------------------------------------------
    pengar_tillbaka = inbetalning - priset;
    antal_mynt = exChange(pengar_tillbaka, 500)
    pengar_tillbaka = pengar_tillbaka % 500;

    let t_pengar = new Pengar(0, 500)

    if(antal_mynt > 0){
        t_pengar.antal = antal_mynt 
    }

    sedlar_mynt_array.push(t_pengar)
    
    //100---------------------------------------------
    antal_mynt = exChange(pengar_tillbaka, 100)
    pengar_tillbaka = pengar_tillbaka % 50;
    
    t_pengar = new Pengar(0, 100)

    if(antal_mynt > 0){
        t_pengar.antal = antal_mynt 
    }

    sedlar_mynt_array.push(t_pengar)

    //50---------------------------------------------
    antal_mynt = exChange(pengar_tillbaka, 50)
    pengar_tillbaka = pengar_tillbaka % 50;
    
    t_pengar = new Pengar(0, 50)

    if(antal_mynt > 0){
        t_pengar.antal = antal_mynt 
    }

    sedlar_mynt_array.push(t_pengar)

    //20---------------------------------------------
    antal_mynt = exChange(pengar_tillbaka, 20)
    pengar_tillbaka = pengar_tillbaka % 20;
    
    t_pengar = new Pengar(0, 20)

    if(antal_mynt > 0){
        t_pengar.antal = antal_mynt 
    }

    sedlar_mynt_array.push(t_pengar)

    //10---------------------------------------------
    antal_mynt = exChange(pengar_tillbaka, 10)
    pengar_tillbaka = pengar_tillbaka % 10;
    
    t_pengar = new Pengar(0, 10)

    if(antal_mynt > 0){
        t_pengar.antal = antal_mynt 
    }

    sedlar_mynt_array.push(t_pengar)
    
    //5---------------------------------------------
    antal_mynt = exChange(pengar_tillbaka, 5)
    pengar_tillbaka = pengar_tillbaka % 5;
    
    t_pengar = new Pengar(0, 5)

    if(antal_mynt > 0){
        t_pengar.antal = antal_mynt 
    }

    sedlar_mynt_array.push(t_pengar)
    
    //1---------------------------------------------
    antal_mynt = exChange(pengar_tillbaka, 1)
    pengar_tillbaka = pengar_tillbaka % 1;
 
    t_pengar = new Pengar(0, 1)

    if(antal_mynt > 0){
        t_pengar.antal = antal_mynt 
    }

     sedlar_mynt_array.push(t_pengar)

     return sedlar_mynt_array;
}

