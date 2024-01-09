(() => {
    const btnWhats = document.querySelector('#introduction .btn-chat'),
        photo = document.querySelector('#introduction .photo');

    document.addEventListener('DOMContentLoaded', e => {
        btnWhats.addEventListener('mouseover', e => {
            photo.src = './assets/img/photo_hover.webp';
        });
        
        btnWhats.addEventListener('mouseleave', e => {
            photo.src = './assets/img/photo_normal.webp';
        });
    });
})();