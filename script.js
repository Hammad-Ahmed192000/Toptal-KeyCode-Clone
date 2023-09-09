// // Method 1 for this application

// window.addEventListener('keydown', (e) => {

//     const insert = document.getElementById('insert');
    
//     insert.innerHTML = `
//     <div id="insert">
//         <div class="key">
//             <small>e.key</small><br>
//             ${e.key === ' ' ? 'Space' : e.key} 
            
//         </div>

//         <div class="key">
//             <small>e.keyCode</small> <br>
//              ${e.keyCode} 
            
//         </div>

//         <div class="key">
//             <small>e.key</small> <br>
//              ${e.code} 
            
//         </div>
//     </div>
//     `
// });


// Method 2 for this application

function showKeyCodes(e) {
    const insert = document.getElementById('insert');
    
    insert.innerHTML = '';

    const keyCodes = {
        'e.key' : e.key === ' ' ? 'Space' : e.key,
        'e.keyCode' : e.keyCode,
        'e.code' : e.code
    }

    for (let keycodes in keyCodes) {
        const div = document.createElement('div');
        div.className = 'key';
        const small = document.createElement('small');

        const keyText = document.createTextNode(keycodes);
        const valueText = document.createTextNode(keyCodes[keycodes]);

        small.appendChild(keyText);
        div.appendChild(small);
        div.appendChild(valueText);
        
        insert.appendChild(div);

    }
    
}

window.addEventListener('keydown', showKeyCodes);