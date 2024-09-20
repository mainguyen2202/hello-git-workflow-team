document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector('.form');
    const confirmButton = form.querySelector('.button');

    confirmButton.addEventListener('click', handleSubmit);

    function handleSubmit() {
        const inputs = form.querySelectorAll('.input-no-label1 .label');

        let isValid = true;
        const formData = {};

        inputs.forEach(input => {
            const value = input.textContent || input.value;
            const label = input.closest('.input').querySelector('.name').textContent;

            // Xác thực dữ liệu
            if (!value || value.trim() === '') {
                alert(`Please fill in your ${label}`);
                isValid = false;
                return; // Dừng vòng lặp nếu có trường không hợp lệ
            }

            formData[label] = value; // Lưu giá trị vào formData
        });

        // Nếu tất cả các trường hợp lệ, in ra dữ liệu
        if (isValid) {
            console.log('Form Data:', formData);
            // Có thể thêm mã để gửi formData đến server hoặc xử lý khác
        }
    }
});