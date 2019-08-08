function switchDefault() {
    document.getElementsByTagName('body')[0].style.backgroundColor = '#FFFACD';
    document.getElementsByTagName('body')[0].style.color = '#000040';
}

function switchRed() {
    document.getElementsByTagName('body')[0].style.backgroundColor = '#FFA07A';
    document.getElementsByTagName('body')[0].style.color = '#F0F8FF';
}

function switchGreen() {
    document.getElementsByTagName('body')[0].style.backgroundColor = '#98FB98';
    document.getElementsByTagName('body')[0].style.color = '#000040';
}

function switchBlue() {
    document.getElementsByTagName('body')[0].style.backgroundColor = '#87CEFA';
    document.getElementsByTagName('body')[0].style.color = '#F0F8FF';
}

document.getElementById('defaultButton').onclick = switchDefault;
document.getElementById('redButton').onclick = switchRed;
document.getElementById('greenButton').onclick = switchGreen;
document.getElementById('blueButton').onclick = switchBlue;