document.querySelector('.encrypt-button').addEventListener('click', function() {
    let inputText = document.querySelector('.input-text').value.toLowerCase();
    let encryptedText = inputText
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');

    document.querySelector('.output-text p').textContent = encryptedText;
    document.querySelector('.output-text').classList.remove('output-placeholder');
});

document.querySelector('.decrypt-button').addEventListener('click', function() {
    let inputText = document.querySelector('.input-text').value.toLowerCase();
    let decryptedText = inputText
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');

    document.querySelector('.output-text p').textContent = decryptedText;
    document.querySelector('.output-text').classList.remove('output-placeholder');
});

document.querySelector('.copy-button').addEventListener('click', function() {
    let outputText = document.querySelector('.output-text p').textContent;
    navigator.clipboard.writeText(outputText).then(() => {
        alert('Texto copiado al portapapeles');
    });
});


