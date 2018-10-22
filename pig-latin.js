// Pig Latin takes the first consonant (or consonant cluster) of an English
// word, moves it to the end of the word and suffixes an "ay". If a word begins
// with a vowel you just add "way" to the end.
function translatePigLatin(str) {
    let word = str.split("");
    let matchAgainst = /[^aeiouy]{0,20}/i;
    let consonants = str.match(matchAgainst);
    if (consonants[0] == "") {
        str += "way";

        return str;
    }
    str = str.replace(consonants[0], "");
    str += consonants[0] + "ay";

    return str;
}

translatePigLatin("Cccccccconsonant");
