document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.addEventListener('click', function () {
            alert('Sản phẩm đã được thêm vào giỏ hàng!');
        });
    });
});
