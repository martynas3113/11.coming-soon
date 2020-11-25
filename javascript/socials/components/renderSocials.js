import{ inputValidation } from "./inputValidation.js"

function renderSocials (data) {
if (!inputValidation(data)) {
    return false;
}
    
    

    //logic
    const socialsDOM = document.querySelector('footer > .row');
    let html = '';

    for (let i = 0 ; i < data.length; i++) {
        const item = data[i];
        if(typeof item !=='object') {
            continue;
        }

        if(typeof item.link !== 'string' || item.link=== '') {
            
            continue;
        }

        if(typeof item.icon !== 'string' || item.icon=== '') {
            continue;
        }

         html += `<a href=${item.link} target="_blank" class="fa fa-${item.icon} aria-hidden="true"></a>`;

    }
    

    //post logic validation
    if (html==''){
        console.error(`ERROR can't generate icon or href`);
        return false;
    }


    //return
    socialsDOM.innerHTML = html;
    return true;
}


export {renderSocials};
