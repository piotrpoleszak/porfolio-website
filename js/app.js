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