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

