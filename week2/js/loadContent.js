// function loadContent(url, elementId) {
//     fetch(url)
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error(`Không thể tải nội dung từ ${url}.`);
//             }
//             return response.text();
//         })
//         .then(data => {
//             document.getElementById(elementId).innerHTML = data;
//         })
//         .catch(error => {
//             console.error('Có lỗi xảy ra:', error);
//         });
// }

// // Gọi hàm để tải nội dung
// loadContent('html/headerFooter/topNavnew.html', 'topNav');
// loadContent('html/headerFooter/footer.html', 'footer');
// loadContent('html/headerFooter/ss1.html', 'ss1');

// loadContent('html/home/ss2.html', 'ss2');
// loadContent('html/home/ss3.html', 'ss3');
// loadContent('html/home/ss4.html', 'ss4');
// loadContent('html/home/ss5.html', 'ss5');
// loadContent('html/home/ss6.html', 'ss6');
// loadContent('html/home/ss7.html', 'ss7');
// loadContent('html/home/ss8.html', 'ss8');

function loadContent(url, elementId) {
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Không thể tải nội dung từ ${url}. Mã lỗi: ${response.status}`);
            }
            return response.text();
        })
        .then(data => {
            document.getElementById(elementId).innerHTML = data;
        })
        .catch(error => {
            console.error('Có lỗi xảy ra:', error);
            const errorMessage = document.createElement('div');
            errorMessage.textContent = `Lỗi: ${error.message}`;
            errorMessage.style.color = 'red';
            document.getElementById(elementId).innerHTML = ''; // Xóa nội dung cũ
            document.getElementById(elementId).appendChild(errorMessage); // Hiển thị lỗi
        });
}

// Danh sách các file cần tải
const contentToLoad = [
    { url: 'html/headerFooter/topNavnew.html', elementId: 'topNav' },
    { url: 'html/headerFooter/footer.html', elementId: 'footer' },
    { url: 'html/headerFooter/ss1.html', elementId: 'ss1' },
    { url: 'html/home/ss2.html', elementId: 'ss2' },
    { url: 'html/home/ss3.html', elementId: 'ss3' },
    { url: 'html/home/ss4.html', elementId: 'ss4' },
    { url: 'html/home/ss5.html', elementId: 'ss5' },
    { url: 'html/home/ss6.html', elementId: 'ss6' },
    { url: 'html/home/ss7.html', elementId: 'ss7' },
    { url: 'html/home/ss8.html', elementId: 'ss8' }
];

// Lặp qua danh sách và gọi loadContent
contentToLoad.forEach(content => {
    console.log(`Đang tải: ${content.url}`);
    loadContent(content.url, content.elementId);
});