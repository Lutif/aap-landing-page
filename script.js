
document.querySelectorAll('.feature-tab').forEach(item => {
    item.addEventListener('click', event => {
        let active = document.querySelectorAll('.active').forEach(item => {
            item.classList.remove('active');
        });
        if (active) { active.classList.remove('active'); }
        let activeClass = event.target.classList[0];
        document.querySelectorAll('.'+activeClass)[1].classList.add('active');
        console.log(document.querySelectorAll('.'+activeClass));
        console.log(event.target.classList[0])
        event.target.classList.add('active');
    })
})

