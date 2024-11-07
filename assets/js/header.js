function headerEvents() {
    let header = document.querySelector('.header')
    // console.log(header)
    const headerHeight = header.offsetHeight
    window.onscroll = function() {
        header.style.top = -window.scrollY + 'px'
        console.log(window.scrollY)
        if( window.scrollY >= headerHeight*6) {
            header.classList.add('fade-in')
            header.style.top = 0
            header.style.backgroundColor = '#fff'
            header.style.height = headerHeight*1.5 + 'px'
            header.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)'
        }
        else {
            header.classList.remove('fade-in')
            header.style.backgroundColor = 'transparent'
            header.style.height = headerHeight + 'px'     
            header.style.boxShadow = ''
        }
    }
  

            
    const openNavbar = document.querySelector('.bars .open-navbar')
    const closeNavbar = document.querySelector('.close-navbar')
    const overlay = document.getElementById('overlay')
    openNavbar.onclick = (e)=> {
        document.querySelector('.header__navbar').classList.add('fade-in')
        closeNavbar.style.display = 'block'
        overlay.style.display = 'block'
    }
    closeNavbar.onclick = (e)=> {
        document.querySelector('.header__navbar').classList.remove('fade-in')
        e.target.style.display = 'none'
        overlay.style.display = 'none'
    }

    window.onclick = (e)=> {
        if(e.target.id == 'overlay') {
            document.querySelector('.header__navbar').classList.remove('fade-in')
           
            closeNavbar.style.display = 'none'
             overlay.style.display = 'none'
        }
    }


    document.querySelector('.navbar__item.drop-down--container').onclick = function() {
        document.querySelector('.drop-down--content').classList.toggle('show-link')
    }
        
    
}
