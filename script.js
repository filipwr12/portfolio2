var dane = [
    { jezyk: "html", ilosc: 95 },
    { jezyk: "css", ilosc: 90 },
    { jezyk: "js", ilosc: 60 },
    { jezyk: "python", ilosc: 50},
    { jezyk: "php", ilosc: 70 },
    { jezyk: "c++", ilosc: 60}
];

let chart = document.getElementById("chart-wrapper");


dane.forEach(item => {
    let bar = document.createElement("div");
    bar.style.width = item.ilosc + "%";
    bar.style.backgroundColor = 'rgba(169, 250, 169, 0.796)';
    bar.innerText = item.ilosc + "%"
    chart.appendChild(bar);

});

document.getElementById("formularz").addEventListener("submit",function(e){
    e.preventDefault();

    let valid = true;

    const name = document.getElementById("name").value;
    const surname = document.getElementById("surname").value;
    const mail = document.getElementById("email").value;

    document.getElementById("bladimie").innerText = " ";
    document.getElementById("bladnazwisko").innerText = " ";
    document.getElementById("bladmail").innerText = " ";

    if(name.length < 2){
        document.getElementById("bladimie").innerText = "Błąd! Wpisz poprawnie imie";
        valid = false;
    }

    if(!mail.includes("@")){
        document.getElementById("bladmail").innerText = "Błąd! Podaj poprawny adres email";
        valid = false;
    }
    
    if(valid){
        alert("Formularz został poprawnie przesłany!");
    }
});

