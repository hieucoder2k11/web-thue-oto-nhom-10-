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
            header.style.backgroundColor = ''
            header.style.height = headerHeight + 'px'     
            header.style.boxShadow = ''
        }
    }


    const openNavbar = document.querySelector('.bars .open-navbar')
    const closeNavbar = document.querySelector('.close-navbar')
    const overlay = document.getElementById('overlay')
    openNavbar.onclick = (e)=> {
        document.querySelector('.header__navbar').style.transform = 'translateX(0)'
        e.target.style.display = 'none'
        closeNavbar.style.display = 'block'
        overlay.style.display = 'block'
        overlay.classList.add('fade-in')
        e.target.classList.add('fade-in')
    }
    closeNavbar.onclick = (e)=> {
        document.querySelector('.header__navbar').style.transform = 'translateX(100%)'
        e.target.style.display = 'none'
        openNavbar.style.display = 'block'
        overlay.style.display = 'none'
    }

    window.onclick = (e)=> {
        if(e.target.id == 'overlay') {
            document.querySelector('.header__navbar').style.transform = 'translateX(100%)'
             openNavbar.style.display = 'block'
             overlay.style.display = 'none'
        }
    }
}
