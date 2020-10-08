function Sunset(...buildings) {
    console.log(buildings);
    let results = ['See'];

    for (let i = 1; i < buildings.length; i++) {
        for (let j = 0; j < i; j++) {
            if (buildings[i] <= buildings[j]) {
                results.push("Blind");
                break;
            } else {
                results.push("See");
                break;
            }
        }
    }

    document.getElementById("result").innerText = results;
}

function Demolish() {
    console.log("Rubbles...")
    document.getElementById('b1').value = '';
    document.getElementById('b2').value = '';
    document.getElementById('b3').value = '';
    document.getElementById('b4').value = '';
    document.getElementById('b5').value = '';
    document.getElementById("result").innerText = '';
    document.getElementById('b1').focus();
}