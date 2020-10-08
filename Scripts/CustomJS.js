function Sunset(...buildings) {
    console.log(buildings);
    let results = ['See'];

    // For each building (excluding the first one)
    for (let i = 1; i < buildings.length; i++) {
        // Check if any building before it is larger
        for (let j = 0; j < i; j++) {
            if (buildings[j] >= buildings[i]) {
                // If previous building is bigger
                results.push("Blind");
                break;
            } else {
                // If previous building is smaller
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