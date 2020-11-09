let btn = document.querySelector('#button');
let checkBox = document.querySelector('#checkBox');

const enable = () => {
    if(checkBox.checked){
        btn.disabled = false
    }else{
        btn.disabled = true
    }
}