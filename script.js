let recognition = new webkitSpeechRecognition();
recognition.onresult = function (e) {
    let text = e.results[0][0].transcript;
    let output = document.getElementById('output');
    output.innerText = text;

    read(text);
}
function read(text) {
    let speech = new SpeechSynthesisUtterance;
    speech.text = text;
    if (text == 'hello Google how are you') {
        speech.text = "I'm Fine and you";
    }
    else if (text == 'what is your name') {
        speech.text = "My name is Junior lizu BUBT";
    }
    else if (text == 'who are you') {
        speech.text = "I'm Assistant of Sazzad Forazi";
    }
    else if (text == 'are you alright') {
        speech.text = "Yes I'm Alright";
    }
    else if (text == "what's your father's name") {
        speech.text = "My Father Name is Lizu BUBT";
    }
    else if (text == "ok bye") {
        speech.text = "ok sir , Assalamualikum";
    }
    else {
        speech.text = "Please try again";
    }
    document.getElementById('show').innerText = speech.text
    window.speechSynthesis.speak(speech)
}