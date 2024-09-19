let coursesData = [];
const itemsPerPage = 9;
let currentPage = 1;

// Hàm để tải dữ liệu khóa học từ JSON
async function fetchCoursesData() {
    const response = await fetch('json/coursesData.json'); // Đường dẫn đến file JSON
    coursesData = await response.json();
    renderCards(); // Hiển thị các thẻ khóa học ban đầu
}

// Hàm tạo card
function createCard({ type, title, tech, user, price, status, imgSrc, isImage }) {
    const fullImgSrc = `images/courses/listCardCourses/${imgSrc}`; 
    return `
        <div class="card-courses">
            <div class="${type === 'frontend' ? 'card' : 'card1'}">
                ${isImage ? `<div class="image"><img class="group-icon" alt="" src="${fullImgSrc}"></div>` : ''}
                <div class="info">
                    <div class="title">
                        <div class="frontend">${title}</div>
                        <b class="reactjs">${tech}</b>
                    </div>
                    <div class="user-parent">
                        <div class="user">
                            <img class="avatar-icon" alt="" src="images/home/ss2CourseComingSoon/avatar.png">
                            <div class="frontend">${user}</div>
                        </div>
                        <b class="b">${price}</b>
                    </div>
                </div>
                <div class="tag-basic">
                    <div class="base"></div>
                    <div class="frontend">${status}</div>
                    <div class="base"></div>
                </div>
            </div>
        </div>
    `;
}

// Hàm để hiển thị các card dựa trên loại
function renderCards(filterType = 'all') {
    const container = document.getElementById('list-card-courses');
    container.innerHTML = '';

    const filteredCourses = filterType === 'all' ? coursesData : coursesData.filter(course => course.type.toLowerCase() === filterType);

    // page
    
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentItems = filteredCourses.slice(startIndex, endIndex);

    currentItems.forEach(item => {
        container.innerHTML += createCard(item);
    });

    document.getElementById('total-items').innerText = `Total ${filteredCourses.length} items`;
    renderPagination(filteredCourses.length);
}

// Hàm để render phân trang
function renderPagination(totalItems) {
    const paginationContainer = document.getElementById('pagination-controls');
    paginationContainer.innerHTML = '';

    const totalPages = Math.ceil(totalItems / itemsPerPage);

    // Previous Button
    const prevButton = document.createElement('img');
    prevButton.src = 'images/home/ss2CourseComingSoon/arrow-left-2.png';
    prevButton.alt = 'Previous';
    prevButton.className = 'pagination-itemitem-icon';
    prevButton.style.cursor = 'pointer';
    prevButton.onclick = () => {
        if (currentPage > 1) {
            currentPage--;
            renderCards();
        }
    };
    paginationContainer.appendChild(prevButton);

    // Page Numbers
    for (let i = 1; i <= totalPages; i++) {
        const pageItem = document.createElement('div');
        pageItem.className = 'pagination-itemitem';
        pageItem.innerText = i;
        pageItem.onclick = () => {
            currentPage = i;
            renderCards();
        };
        if (i === currentPage) {
            pageItem.style.fontWeight = 'bold'; // Highlight current page
        }
        paginationContainer.appendChild(pageItem);
    }

    // Next Button
    const nextButton = document.createElement('img');
    nextButton.src = 'images/home/ss2CourseComingSoon/arrow-right-2.png';
    nextButton.alt = 'Next';
    nextButton.className = 'pagination-itemitem-icon';
    nextButton.style.cursor = 'pointer';
    nextButton.onclick = () => {
        if (currentPage < totalPages) {
            currentPage++;
            renderCards();
        }
    };
    paginationContainer.appendChild(nextButton);
}

// Xử lý sự kiện cho các tab
function setupTabs() {
    document.querySelectorAll('.tabs-fillitem, .tabs-fillitem1').forEach(tab => {
        tab.addEventListener('click', () => {
            document.querySelectorAll('.tabs-fillitem, .tabs-fillitem1').forEach(item => item.classList.remove('active'));
            tab.classList.add('active');
            const type = tab.getAttribute('data-type');
            currentPage = 1; // Reset current page khi chuyển tab
            renderCards(type); // Gọi hàm renderCards với loại đã chọn
        });
    });
}

// Gọi hàm để tải dữ liệu và thiết lập các tab
fetchCoursesData().then(setupTabs);