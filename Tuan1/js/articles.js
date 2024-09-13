// const articles = document.querySelectorAll('.article-container article');
// articles.forEach(article => {
//     article.addEventListener('click', function() {
//         alert(`Nội dung của ${this.querySelector('h2').textContent}`);
//     });
// });
newDescription

const articles = document.querySelectorAll('.article-container article');
const modal = document.getElementById('editModal');
const closeModal = document.querySelector('.close');
const saveButton = document.getElementById('saveButton');
const newTitleInput = document.getElementById('newTitle');
const newDescriptionInput = document.getElementById('newDescription');
let currentArticle;

articles.forEach(article => {
    article.addEventListener('click', function() {
        currentArticle = this; // Lưu bài viết hiện tại
        newTitleInput.value = this.querySelector('h2').textContent; // Điền tên hiện tại vào input
        newDescriptionInput.value=this.querySelector('p').textContent;
        modal.style.display = 'block'; // Hiện modal
    });
});



// Lưu tên mới
saveButton.addEventListener('click', function() {
    const newTitle = newTitleInput.value;
    const newDescription = newDescriptionInput.value;
    if (newTitle || newDescription) {
        currentArticle.querySelector('h2').textContent = newTitle; // Cập nhật tiêu đề
        currentArticle.querySelector('p').textContent = newDescription; 
        modal.style.display = 'none'; // Đóng modal
    }
});

// Đóng modal khi nhấp vào 'x'
closeModal.addEventListener('click', function() {
    modal.style.display = 'none';
});

// Đóng modal khi nhấp ra ngoài
window.addEventListener('click', function(event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});