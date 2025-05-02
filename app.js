const buttons = document.querySelectorAll('button');

buttons.forEach(function(button){
    button.addEventListener('click', function(){
        let panel = button.nextElementSibling;
        button.classList.toggle('active');
        if(panel.style.maxHeight){
            panel.style.maxHeight = null;
        }else{
            panel.style.maxHeight = panel.scrollHeight + 'px';
        }
    })
})