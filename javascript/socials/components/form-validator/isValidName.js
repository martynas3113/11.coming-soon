function isValidName(name) {
    const maxNameLength = 50;

    if (typeof name !== 'string') {
        return 'Vardas turi buti teksto tipo.';
    }
    if (name === '') {
        return 'Vardas negali buti tuscias.';
    }
    if (name.length > maxNameLength) {
        return `Vardas negali virsyti ${maxNameLength} simboliu (virsyta ${name.length - maxNameLength} simboliu).`;
    }


//turi buti tik lotynu abeceles raides
    const abc = 'qwertyuiopasdfghjklzxcvbnm';
    for (let letter of name) {
        if (!abc.includes(letter.toLowerCase())){
            return (`Varde panaudota neleistinas simbolis: ${letter}`)
            
        }
    }

    //Jei gauto vardo raides pavertus mazosiomis yra = pradine reiksme, tai resikias ,akd vardas buvo uzrasytas mazosiomis raidemis

    if (name.toLowerCase() === name) {
        return 'Vardas negali prasideti mazaja raide'
    }

    //Jeigu gauname varda ivesta tik didziosiomis raidemis, graziname zinute 'Isjunk Caps-lock'

    const realNameFormat = name[0].toUpperCase() + name.slice(1).toLowerCase();
        if(realNameFormat !== name){
            return 'Varda turetu sudaryti pirma didzioji raide, o visos likusios mazosios'
        }

    return true;
}

export { isValidName }