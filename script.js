document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.card').addEventListener('click', function() {
        this.classList.toggle('open');
        const pyro = document.querySelector('.pyro');
        pyro.classList.add('active');
        
        // Удаляем класс 'active' через 2 секунды, чтобы эффект фейерверка повторялся при повторном нажатии
        setTimeout(() => {
            pyro.classList.remove('active');
        }, 2000);
    });
});
