function getKeySwitch(id) {
    console.log('Key pressed: ', id);
    return id;
}
function getLetterByNumber(number) {
    if (number < 1 || number > 26) {
        return 'Invalid input. Please enter a number between 1 and 26.';
    }
    // Convert the number (1 to 26) to the corresponding letter (A to Z)
    return String.fromCharCode(64 + number); // 'A' is at char code 65, so add 64
}