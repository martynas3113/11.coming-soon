function isValidProgressBarsList(list) {
    if(!Array.isArray(list)){

        console.error('ERROR: turi buti array tipo duomenys')
        return false
    }
    if(list.length===0){
        console.error('ERROR sarasas neturi buti tuscias')
        return false;
    }

}

export{isValidProgressBarsList}