function countAndDisplay() {
    const inputText = document.getElementById('inputText').value;
    const vowelCount = countVowels(inputText);
    document.getElementById('vowelCount').textContent = vowelCount;
}

function countVowels(inputString) {
    const lowercasedString = inputString.toLowerCase();
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let vowelCount = 0;

    for (let i = 0; i < lowercasedString.length; i++) {
        if (vowels.includes(lowercasedString[i])) {
            vowelCount++;
        }
    }

    return vowelCount;
}
