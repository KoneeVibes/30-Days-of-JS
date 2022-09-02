window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.interimResults = true;
recognition.lang = 'en-US';

let p = document.createElement('p');
const words = document.querySelector('.words');
words.appendChild(p);

recognition.addEventListener('result', e => {
    const transcript = Array.from(e.results)
    .map(result => result[0])
    .map(result => result.transcript)
    .join('');
    // console.log(transcript)

    p.textContent = transcript;
    if (e.results[0].isFinal){

    // I have a question here - when you update a variable, doesn't it get rid of the older value and stores the newer one? if not, where is the older variable stored.
        p = document.createElement('p');
        words.appendChild(p);
    }

    if (transcript.includes('get the weather')){
        console.log('weather is great')
    }
})

recognition.addEventListener('end', recognition.start)

recognition.start()