document.querySelector('.contact-form form').addEventListener('submit', function(event) {
    event.preventDefault(); // Ngăn chặn gửi form mặc định
    alert('Cảm ơn bạn đã gửi tin nhắn!');
    // Bạn có thể thêm mã để gửi dữ liệu đến máy chủ
});

