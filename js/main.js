//===================== ACCORDION SKILLS =====================\\
const skillsContent = document.getElementsByClassName('skills__content'),
      skillsHeader = document.querySelectorAll('.skills__header')

function toggleSkills()
{
    let itemClass = this.parentNode.className

    if(itemClass === 'skills__content skills__close')
    {
        this.parentNode.className = 'skills__content skills__open'
    }
    else
    {
        this.parentNode.className = 'skills__content skills__close'
    }
}

skillsHeader.forEach((el) => 
{
    el.addEventListener('click', toggleSkills)
})


//===================== HIGHLIGHT =====================\\
const sections = document.querySelectorAll('section[id]')

function scrollActive()
{
    const scrollY = window.pageYOffset

    sections.forEach(current =>
        {
            const sectionHeight = current.offsetHeight
            const sectionTop = current.offsetTop - 50;
            sectionId = current.getAttribute('id')

            if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight)
            {
                document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
            }else
            {
                document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
            }
        })
}
window.addEventListener('scroll', scrollActive)

//===================== CLOSE MOBILE MENU WITH CLICKING ON MENU ITEM =====================\\
$('.navbar-nav>li>a').on('click', function()
{
  $('.navbar-collapse').collapse('hide');
});


//==================== QUALIFICATION TABS =====================\\
const tabs = document.querySelectorAll('[data-target]'),
      tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab =>
{
    tab.addEventListener('click', () =>
    {
        const target = document.querySelector(tab.dataset.target)

        tabContents.forEach(tabContent => 
            {
                tabContent.classList.remove('qualification__active')
            })
            target.classList.add('qualification__active')

        tabs.forEach(tab => 
            {
                tab.classList.remove('qualification__active')
            })
        tab.classList.add('qualification__active')
    })
})


//==================== SHOW SCROLL UP ====================\\
function scrollUp()
{
    const scrollUp = document.getElementById('scroll-up');
    if(this.scrollY >= 560) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)