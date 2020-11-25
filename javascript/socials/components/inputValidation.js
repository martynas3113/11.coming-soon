function inputValidation (data) {
    //validation
    if(Array.isArray(data)=== false) {
        console.error ('ERROR: to genereta socail icons need array data')
        return false;
    }
    if(data.length ===0) {
        console.log(`ERROR: to generate socials icons you need not empty array`);
        return false;
        
    }
    return true;
}
export { inputValidation }