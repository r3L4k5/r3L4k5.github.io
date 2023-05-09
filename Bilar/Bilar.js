class Bil{
    constructor(brand, color, bid){
        this.brand = brand;
        this.color = color;
        this.bid = bid;
    }
} 

let billista = [];

 

/**getDataFromLocalStorage() Hämtar data localstorage */ 
async function getDataFromLocalStorage(){
    try {
          
        billista = await JSON.parse(localStorage.getItem("bilarlistan") );

 

        //Om billistan  är tom Null från localStorage
        if (billista == null)
            billista = []
        
        lista_bilar_div.innerHTML = "";
        
        //if (billista != null)
        billista.forEach(createHtmlBilLista);
    }
    catch (e){
        
        console.log(`Fel: ${e}`)
    }
}


const addButton = document.getElementById("addButton");
const brand = document.getElementById("brand");
const color = document.getElementById("color");
const lista_bilar_div = document.getElementById("listaBilarDiv");

addButton.addEventListener("click", addButtonClick);

function addButtonClick(){
    
    const now = Date.now();
    const id = now.toString();
    let brandname = brand.value;
    console.log(`ID = ${id}`);

    if(brandname != ""){
        let car = new Bil(brand.value, color.value, id);
        billista.push(car);

        localStorage.setItem("bilarlistan", JSON.stringify(billista));
        brand.value = "";
        color.value = "";

        billista.forEach(createHtmlBilLista);
    }
    else{
        alert("Måste fylla i fabrikat");
    }

    brand.focus();
}   

let deleteBil = (a) => {
    const my_billista = billista.filter(a, i )
}


const createHtmlBilLista = (bil) => {
    const bildiv = document.createElement("div");
    bildiv.className = "bil_div_element";
    const bilH2 = document.createElement("h2");
    const Pcolor = document.createElement("p");
    const bilDelButt = document.createElement("button");
    //innehåll
    bilH2.innerText = `${bil.brand}`;
    Pcolor.innerText = `Färg: ${bil.color}`;
    bilDelButt.innerText = "Delete";
    bilDelButt.id = bil.bid;

    bildiv.append(bilH2, Pcolor, bilDelButt);
    lista_bilar_div.appendChild(bildiv);
}
