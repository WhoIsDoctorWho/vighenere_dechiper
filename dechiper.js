//const alphabetLength = 33;
const alphabet = ['а', 'б', 'в', 'г', 'ґ', 'д', 'е', 'є', 'ж', 'з', 'и', 'і', 'ї', 'й', 'к', 
    'л', 'м', 'н', 'о', 'п', 'р', 'с', 'т', 'у', 'ф', 'х', 'ц', 'ч', 'ш', 'щ', 'ь', 'ю', 'я']; 

function isLetter(c) {
    return c.toLowerCase() != c.toUpperCase();
}

function increment(rotations, index) {
    if(++index >= rotations.length) 
        return 0;
    return index; 
}

function shift(char, ROT) {
    const index = alphabet.indexOf(char);
    if(index - ROT < 0) {
        const steps = ROT - index;
        return alphabet[alphabet.length - steps];
    } else {
        return alphabet[index - ROT];
    }
}

function keyAsRots(key) {
    const rotations = [];
    for(let i = 0; i < key.length; i++) { //
        const ROT = alphabet.indexOf(key.charAt(i));
        rotations.push(ROT);
    }
    return rotations;
}

function dechiper() {
    const prev = document.getElementById('dechiper').value.toLowerCase();
    const key = document.getElementById('key').value.toLowerCase();
    if (!prev || !key)
        return;
    let result = "";    
    const rotations = keyAsRots(key);
    let rotationIndex = 0;            
    for(let i = 0; i < prev.length; i++) { // цикл по всему зашифрованному тексту                       
        const char = prev.charAt(i);
        if(isLetter(char)) {
            const ROT = rotations[rotationIndex];
            result += shift(char, ROT);
            rotationIndex = increment(rotations, rotationIndex);            
        } else { // number, symbol
            result += char;
        }
    }

    document.getElementById('result').value = result; 
}