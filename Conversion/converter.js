function convertMe() {
    const cups = document.getElementById('cupsInput').value;
    if (cups) {
        const milliliters = (cups * 236.588).toFixed(2); 
        document.getElementById('millilitersOutput').value = milliliters + ' milliliters';
    }
}
document.getElementById('convertButton').addEventListener('click', convertMe);