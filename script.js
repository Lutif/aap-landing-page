
document.querySelectorAll('.feature-tab').forEach(item => { //loop over each feature tab
        item.addEventListener('click', event => { // add event listener
        let active = document.querySelectorAll('.active').forEach(item => { //find already active elements
            item.classList.remove('active');                                //de-active them    
        });
        event.target.classList.add('active'); //add active div to tab
        let tabname = event.target.classList[0]; //find which tab is slected
        document.querySelectorAll('.'+tabname)[1].classList.add('active'); // find details div for that tab
        console.log(document.querySelectorAll('.'+activeClass)); //add active calss to details dive as well
        console.log(event.target.classList[0])
        
    })
})

document.querySelectorAll('.question').forEach(question => {
    question.addEventListener('click', (event) => {
        event.target.classList.toggle('aactive');
        let active = document.querySelectorAll('answer').forEach( ans => {
            ans.classList.remove('aactive')
        }
        );
    console.log(question.children[0].classList);
    
        question.children[0].classList.toggle('aactive')
    })
})