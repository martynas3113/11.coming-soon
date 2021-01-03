function isValidName (name) {
    const maxNameLength = 50;
    if (typeof name !== 'string') {
        return 'vardas turi buti teksto tipo';
    }
    if (name === '') {
        return 'vardas negali buti tuscias';
    }
    if (name.length > maxNameLength) {
        return `vardas negali virsyti ${maxNameLength} simboliu (virsyta ${name.length - maxNameLength} simboliu)`;
    }

    //turi buti tik abeceles raides
    const abc = 'qwertyuiopasdfghjklzxcvbnm';
    for (let letter of name) {
        console.log(letter);
        if (!abc.includes(letter.toLowerCase())) {
            return `varde panaudota neleistina raide (${letter})`;
        }
    }
    // pirma raide didzioji, kitos mazosios
    if (name.toLowerCase() === name) {
        return 'vardas negali buti nien tik is mazuju raidziu';

    }

    //jei gauname, jog ivesta vien didziosiom, tai gauna zinute - isjunk capslock

    const realNameFormat = name[0].toUpperCase() + name.slice(1).toLowerCase();
    if (realNameFormat !== name) {
        return 'varda turi sudaryti pirma didzioji raide ir likusios mazosios';

    }

    return true;
}

export { isValidName }