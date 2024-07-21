

function set_bg_color() {
    var redSelector = document.getElementById('redRange');
    var greenSelector = document.getElementById('greenRange');
    var blueSelector = document.getElementById('blueRange');

    var red = redSelector.value;
    var green = greenSelector.value;
    var blue = blueSelector.value;

    document.body.style.background = `rgb(${red}, ${green}, ${blue})`;

    document.getElementById('redValue').textContent = red;
    document.getElementById('greenValue').textContent = green;
    document.getElementById('blueValue').textContent = blue;

    redSelector.style.setProperty('--thumb-color', `rgb(${red}, 0, 0)`);
    greenSelector.style.setProperty('--thumb-color', `rgb(0, ${green}, 0)`);
    blueSelector.style.setProperty('--thumb-color', `rgb(0, 0, ${blue})`);

    let hexValue = '#';
    hexValue += parseInt(red).toString(16).toUpperCase().padStart(2, "0");
    hexValue += parseInt(green).toString(16).toUpperCase().padStart(2, "0");
    hexValue += parseInt(blue).toString(16).toUpperCase().padStart(2, "0");

    hexShow = document.getElementById('hexValue');
    hexShow.textContent = hexValue;

}


function copyHex() {
    // Get the text field
    var copyText = document.getElementById("hexValue");
  
    //copyText.setSelectionRange(0, 99999); // For mobile devices
  
    // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.textContent);
  
    // Alert the copied text
    alert("Copied the text: " + copyText.textContent);
}

set_bg_color()