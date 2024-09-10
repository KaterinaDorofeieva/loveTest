const yesButton = document.getElementById('yesButton');
const noButton = document.getElementById('noButton');
const resultDiv = document.getElementById('result');
const body = document.body;
const background = document.querySelector('.background');

let isContentShown = false;

yesButton.addEventListener('click', () => {
    if (!isContentShown) {
        // Якщо контент ще не показаний, то показуємо його
        resultDiv.innerHTML = `
            <p>Я також, люблю тебе</p>
            <img style="display: block;  margin: 0 auto;" src="https://media1.tenor.com/m/5BYK-WS0__gAAAAd/cool-fun.gif" alt="cat" alt="Love image">
        `;
        isContentShown = true; // Позначаємо, що контент показаний
    } else {
        // Якщо контент вже показаний, то очищаємо його
        resultDiv.innerHTML = '';
        isContentShown = false; // Позначаємо, що контент прихований
    }
});

noButton.addEventListener('click', () => {
    
    resultDiv.textContent = "Хмммм.... цікаво, гра завершена. Будь ласка, зміни свою думку";
    body.style.backgroundColor = 'black';
    resultDiv.style.color = 'white';
    resultDiv.style.textAlign = 'center';
    resultDiv.style.fontSize = '65px';
    background.style.opacity = '0';

    setTimeout(() => {
        body.style.backgroundColor = ''; // Повертаємо початковий колір фону
        resultDiv.textContent = ''; // Очищаємо вміст resultDiv
        background.style.opacity = '1'; // Повертаємо прозорість фону
    }, 5000); // 5000 мілісекунд = 5 секунд
});

function playAudio() {
    var audio = document.getElementById("myAudio");
    audio.play();
  }
