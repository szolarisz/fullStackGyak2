document.getElementById('hallista').onclick = fishList2HTML;

async function fishList2HTML(){
    const response = await fetch("halak");
    const halak = await response.json();

    let fishTable='<table id="myfishTable"><tr><th>Hal fajtája</th><th>Kifogás időpontja</th><th>Tömege(gramm)</th></tr>';
    for( const egyHal of halak){
        fishTable += `<tr><td>${egyHal.fajta}</td><td>${egyHal.datum}</td><td>${egyHal.tomeg}</td></tr>`;
    }
    fishTable += '</table>';

    document.getElementById('fogasok').innerHTML = fishTable;
}