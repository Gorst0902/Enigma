
// Baterry

var letter = '';

function enigma(letter) {
    // Keyswitch
    letter = getKeySwitch(letter);

    // Plugboard
    if (letter !== undefined) {
        letter = Plugboard(letter);
        console.log('Final letter after Plugboard: ', letter);
    }

    RotorMapping(letter);
    console.log('Final letter after Rotor: ', letter);
}


