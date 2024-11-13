import {object} from './db.js'
console.log(object)
start()
function start() {
    renderCars()
    handleEvent()
}

function renderCars() {
    
}


function handleEvent() {

    const items = document.querySelectorAll('.form-input .list-item > .item')
    console.log(items)
    items.forEach(item => {
        item.onclick = function() {
            document.querySelectorAll('.field-value').forEach(element => {
                element.innerHTML = item.innerText
            })
        }
    })

    document.querySelectorAll('.form-input').forEach(element => {
        element.onclick = function() {
            document.querySelectorAll('.form-input .list-item').forEach(item => {
                item.classList.toggle('hidden')
            })
        }
    })


    const bookBtn = document.querySelector('.book-btn')
    bookBtn.onclick = function() {
        alert('Đặt hàng thành công')
    }



    // Thay doi quang cao sau 6 giay
    changeAdvertises()
    function changeAdvertises(index = 0) {
        const advertises = document.querySelectorAll('.advertise img')
        advertises.forEach(element => {
            element.style.display = 'none'
        })

        
        if(index >= advertises.length) index = 0;
        advertises[index].style.display = 'block'  
        index++
        setTimeout(function() {
            changeAdvertises(index)
        }, 6000)
    }


    // Thay doi layout khi click
    document.querySelector('.layout-icon-1').onclick = function(e) {
        document.querySelector('.layout-section.active').classList.remove('active')
        e.target.classList.add('active')
        document.querySelector('.layout.active').classList.remove('active')  

        document.querySelector('.layout-1').classList.add('active')  
    }
    document.querySelector('.layout-icon-2').onclick = function(e) {
        document.querySelector('.layout-section.active').classList.remove('active')
        
        e.target.classList.add('active')
        document.querySelector('.layout.active').classList.remove('active')  

        document.querySelector('.layout-2').classList.add('active')  
    }
}



