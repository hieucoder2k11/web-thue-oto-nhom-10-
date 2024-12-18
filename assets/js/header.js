function handleEvent() {
    const header = document.querySelector('#header header')
    const headerHeight = header.offsetHeight

    window.onscroll = function() {
        header.style.top = -window.scrollY + 'px'
        if( window.scrollY >= headerHeight*6) {
            header.classList.add('fade-in')
            header.style.top = 0
            header.style.backgroundColor = '#fff'
            header.style.height = headerHeight*1.5 + 'px'
            header.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)'
            document.querySelectorAll("#header header .navbar__item > .navbar__link").forEach(link => {
                link.style.color = '#000'
            })
        }
        else {
            header.classList.remove('fade-in')
            header.style.backgroundColor = 'transparent'
            header.style.height = headerHeight + 'px'     
            header.style.boxShadow = ''
            document.querySelectorAll("#header header .navbar__item > .navbar__link").forEach(link => {
                link.style.color = 'var(--white-text-color)'
            })
        }
    }
  

            
    const openNavbar = document.querySelector('.bars .open-navbar')
    const closeNavbar = document.querySelector('.close-navbar')
    const overlay = document.getElementById('overlay')
    openNavbar.onclick = (e)=> {
        document.querySelector('.header__navbar').classList.add('fade-in')
        closeNavbar.style.display = 'block'
        e.target.style.display = 'none'
        overlay.style.display = 'block'
    }
    closeNavbar.onclick = (e)=> {
        document.querySelector('.header__navbar').classList.remove('fade-in')
        e.target.style.display = 'none'
        overlay.style.display = 'none'
        openNavbar.style.display = 'block'
    }

    window.onclick = (e)=> {
        if(e.target.id == 'overlay') {
            document.querySelector('.header__navbar').classList.remove('fade-in')
            openNavbar.style.display = 'block'
            closeNavbar.style.display = 'none'
            overlay.style.display = 'none'
        }
    }


    document.querySelector('.navbar__item.drop-down--container').onclick = function() {
        document.querySelector('.drop-down--content').classList.toggle('show-link')
    }   
}

setTimeout(handleEvent, 500)