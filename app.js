const getRandomAlphabetLower = () => {
    return String.fromCharCode(Math.floor(Math.random()*26) + 97);
}

const getRandomAlphabetUpper = () => {
    return String.fromCharCode(Math.floor(Math.random()*26) + 65);
}

const getRandomNumber = () => {
    return String.fromCharCode(Math.floor(Math.random()*10) + 48);
}

const getRandomCharacter = () => {
    const Character = "%&/()=?_*+-#";
    return Character[Math.floor(Math.random()*Character.length)];
}

const randomFunction = {getRandomAlphabetLower,getRandomAlphabetUpper,getRandomNumber,getRandomCharacter};

const randomPasswordGenerate = (passwordLength) => {
    let result = "";
    for(let a=0;a<passwordLength;a++){
        
        result += Object.values(randomFunction)[Math.floor(Math.random() * 4)]();
    }
    
    return result;
    
}

const passLength = document.getElementById('passLength');
const spanResult = document.getElementById('result');
const generateButton = document.getElementById('generate');
const clipBoardButton = document.getElementById('clipboard');

generateButton.addEventListener('click',() => {
    let passwordLength = passLength.value;
    if(!passwordLength || passwordLength <= 0){
        alert("Please, enter password length.")
    }
    const result = randomPasswordGenerate(passwordLength);
    spanResult.innerText = result;
});

clipBoardButton.addEventListener('click', () => {
    const password = spanResult.innerText;
    if(!password){
        return;
    }
    const textArea = document.createElement('textarea');
    textArea.value = password;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    textArea.remove();
    alert("Coppied");

})

