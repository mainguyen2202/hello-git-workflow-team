// phân trang
let coursesData = [];
const itemsPerPage = 9;
let currentPage = 1;

// Fetch the courses data from JSON file
async function fetchCoursesData() {
    const response = await fetch('json/coursesData.json');
    coursesData = await response.json();
    renderCards();
}

function renderCards() {
    const container = document.getElementById('list-card-courses');
    container.innerHTML = '';

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentItems = coursesData.slice(startIndex, endIndex);

    currentItems.forEach(item => {
        const cardHTML = `
            <div class="card-courses">
                <div class="card">
                    ${item.isImage ? `<div class="image"><img class="group-icon" alt="" src="images/courses/listCardCourses/${item.imgSrc}"></div>` : ''}
                    <div class="info">
                        <div class="title">
                            <div class="frontend">${item.title}</div>
                            <b class="reactjs">${item.tech}</b>
                        </div>
                        <div class="user-parent">
                            <div class="user">
                                <img class="avatar-icon" alt="" src="avatar.png">
                                <div class="frontend">${item.user}</div>
                            </div>
                            <b class="b">${item.price}</b>
                        </div>
                    </div>
                    <div class="tag-basic">
                        <div class="base"></div>
                        <div class="frontend">${item.status}</div>
                        <div class="base"></div>
                    </div>
                </div>
            </div>
        `;
        container.innerHTML += cardHTML;
    });

    document.getElementById('total-items').innerText = `Total ${coursesData.length} items`;
    renderPagination();
}

function renderPagination() {
    const paginationContainer = document.getElementById('pagination-controls');
    paginationContainer.innerHTML = '';

    const totalPages = Math.ceil(coursesData.length / itemsPerPage);

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

// Fetch data and render cards on initial load
fetchCoursesData();
