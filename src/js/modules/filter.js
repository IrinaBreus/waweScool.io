const filter = () => {
    const btns = document.querySelectorAll('.galery__filter-list'),
          items = document.querySelectorAll('.galery__filter-item');

    btns.forEach((btn, i) => {
        btn.addEventListener('click', () => {
            clearContent();
            btn.classList.add('galery__filter-list_active');
            if (i == 0) {
                items.forEach(item => item.style.display = 'block');
            }
            items.forEach(item => {
                if (item.dataset.order == i) {
                    item.style.display = 'block';
                }
            })
        })
    })
    
    function clearContent() {
        items.forEach(item => item.style.display = 'none');
        btns.forEach(item => item.classList.remove('galery__filter-list_active'));
    }
}

export default filter;