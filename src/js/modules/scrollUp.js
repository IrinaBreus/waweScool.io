const scrollUp = () => {
    const up = document.querySelector('.up');

    up.addEventListener('click', function(e) {
        e.preventDefault();
        
        window.scrollTo({
            left: 0,
            top: 0,
            behavior: "smooth"
        });
    })

    window.addEventListener('scroll', () => {
        if (document.documentElement.scrollTop > 1000) {
            up.style.cssText = `opacity: 1;
                                cursor: pointer;`
        } else {
            up.style.cssText = `opacity: 0;
                                cursor: none;`
        }
    })
}

export default scrollUp;