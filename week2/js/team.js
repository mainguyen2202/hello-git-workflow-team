const teamMembers = [
    {
        name: "Jane Cooper",
        role: "CEO",
        image: "images/home/ss4AppscycloneTeam/image 394.png",
    },
    {
        name: "John Doe",
        role: "CTO",
        image: "images/home/ss4AppscycloneTeam/image.png",
    },
    {
        name: "Alice Smith",
        role: "CFO",
        image: "images/home/ss4AppscycloneTeam/image (1).png",
    },
    {
        name: "Bob Johnson",
        role: "COO",
        image: "images/home/ss4AppscycloneTeam/image (2).png",
    },
    {
        name: "Jane Cooper",
        role: "CEO",
        image: "images/home/ss4AppscycloneTeam/image 394.png",
    },
    {
        name: "John Doe",
        role: "CTO",
        image: "images/home/ss4AppscycloneTeam/image.png",
    },
    {
        name: "Alice Smith",
        role: "CFO",
        image: "images/home/ss4AppscycloneTeam/image 394.png",
    },
    {
        name: "Alice Smith",
        role: "CFO",
        image: "images/home/ss4AppscycloneTeam/image (1).png",
    }
];

function createTeamCard(member) {
    return `
        <div class="card">
            <div class="background"></div>
            <img class="image-394-icon" alt="" src="${member.image}">
            <div class="name1">
                <b class="jane-cooper1">${member.name}</b>
                <div class="ceo">${member.role}</div>
            </div>
        </div>
    `;
}

let currentIndex = 0; // Chỉ số hiện tại của thành viên đang hiển thị
const itemsPerPage = 4; // Số lượng thành viên hiển thị mỗi lần

function renderTeamMembers(members) {
    const listContainer = document.querySelector('.list');
    listContainer.innerHTML = ''; // Xóa nội dung cũ

    const currentItems = members.slice(currentIndex, currentIndex + itemsPerPage);

    currentItems.forEach(member => {
        listContainer.innerHTML += createTeamCard(member);
    });

    // Cập nhật trạng thái của nút
    updateButtonState(members.length);
}

// Cập nhật trạng thái của nút Previous và Next
function updateButtonState(totalItems) {
    const prevButton = document.getElementById('prev-button');
    const nextButton = document.getElementById('next-button');

  // Vô hiệu hóa nút khi không có thành viên tương ứng
  if (currentIndex === 0) {
    prevButton.classList.add('disabled');
} else {
    prevButton.classList.remove('disabled');
}

if (currentIndex + itemsPerPage >= totalItems) {
    nextButton.classList.add('disabled');
} else {
    nextButton.classList.remove('disabled');
}
}

// Xử lý sự kiện cho nút Previous
document.getElementById('prev-button').onclick = () => {
    if (currentIndex > 0) {
        currentIndex -= itemsPerPage;
        renderTeamMembers(teamMembers);
    }
};

// Xử lý sự kiện cho nút Next
document.getElementById('next-button').onclick = () => {
    if (currentIndex + itemsPerPage < teamMembers.length) {
        currentIndex += itemsPerPage;
        renderTeamMembers(teamMembers);
    }
};

// Bắt đầu hiển thị thành viên đầu tiên
renderTeamMembers(teamMembers);