window.addEventListener('scroll',()=> {
    const backToTopButton = document.getElementById('backToTop');
    if (window.scrollY > 200) {
        backToTopButton.style.display = 'block'; //show the button //
    } else {
        backToTopButton.style.display = 'none' ; // button hidden // 
    }
}
)

    document.getElementById('backToTop').addEventListener('click',()=> {
    window.scrollTo({top:0, behavior:'smooth'});
    })
