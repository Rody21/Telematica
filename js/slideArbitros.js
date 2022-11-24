(function(){
    const titleAdmins = [...document.querySelectorAll('.Admin__title')];
    console.log(titleAdmins)

    titleAdmins.forEach(Admin =>{
        Admin.addEventListener('click',()=>{
            let height = 0;
            let answer = Admin.nextElementSibling;

            if(answer.clientHeight === 0){
                height = answer.scrollHeight;
            }

            answer.style.height = `${height}px`;
        });

    });

})();