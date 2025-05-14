//Work selector and work changer according to the selected category

const workNames = document.querySelectorAll('.pg3 .wrapperPageThree .topseg .works  li');
const progsInterfaceGraphic = document.getElementById('progsInterfaceGraphic');
const progsInterfacePhotography = document.getElementById('progsInterfacePhotography');
const progsInterfaceVideography = document.getElementById('progsInterfaceVideography');


workNames.forEach((workName)=> {
        workName.addEventListener('click', ()=>{
            if (workName.id === 'graphicsWork'){
                progsInterfaceGraphic.style.display = 'flex';
                progsInterfacePhotography.style.display = 'none';
                progsInterfaceVideography.style.display = 'none';
                
            }
            else if (workName.id === 'photographyWork') {
                progsInterfacePhotography.style.display = 'flex';
                progsInterfaceVideography.style.display = 'none';
                progsInterfaceGraphic.style.display = 'none';
            }
            else if (workName.id == 'videditWork'){
                progsInterfaceVideography.style.display = 'flex';
                progsInterfacePhotography.style.display = 'none';
                progsInterfaceGraphic.style.display = 'none';
            }
        });
});

//sidebar

const menubtn = document.getElementById('menubtn');
const sideBar = document.getElementById('sideBar');
const closebtn = document.getElementById('closebtn');
const body = document.getElementById('fullBody');

menubtn.addEventListener('click', ()=> {

    sideBar.style.transform = 'translateX(10px)';
    
        
    
});

closebtn.addEventListener('click', ()=> {

    
    sideBar.style.transform = 'translateX(500px)';
    
});


 