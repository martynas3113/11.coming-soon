function isValidText (text) {
    const maxTextLength = 1000;
    if (typeof text !== 'string') {
        return 'vardas turi buti teksto tipo';
    }
    if (text === '') {
        return 'vardas negali buti tuscias';
    }
    if (text.length > maxtextLength) {
        return `vardas negali virsyti ${maxtextLength} simboliu (virsyta ${text.length - maxTextLength} simboliu)`;
    }
    return true;
}

export { isValidText }