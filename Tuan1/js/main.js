window.addEventListener('scroll', function() {
    if (window.scrollY > 100) {
        // document.querySelector('header').style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
          document.querySelector('header').style.backgroundColor = 'rgba(1, 1, 1, 1)';
    } else {
        document.querySelector('header').style.backgroundColor = 'transparent';
    }
});

document.querySelector('footer p').addEventListener('click', function() {
    alert('Bản quyền được bảo vệ!');
});