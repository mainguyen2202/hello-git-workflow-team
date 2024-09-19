const cardData = [
    { className: 'card4', title: 'GAME', unity: 'Unity', price: '4.500.000đ', category: 'Offline' },
    { className: 'card5', title: 'BACKEND', unity: 'NodeJS', price: '4.500.000đ', category: 'Offline' },
    { className: 'card6', title: 'FRONTEND', unity: 'ReactJS', price: '4.500.000đ', category: 'Offline' },
    { className: 'card7', title: 'MOBILE', unity: 'Frontend Master', price: '4.500.000đ', category: 'Offline' }
];

function createCard({ className, title, unity, price, category }) {
    return `
        <div class="${className}">
                    <div class="image">
                        <img class="group-icon" alt="" src="images/home/ss3AllCourses/Vector (2).png">
                        <div class="group-parent">
                            <img class="group-icon1" alt="" src="images/home/ss3AllCourses/Group.png">
                            <img class="vector-icon" alt="" src="images/home/ss3AllCourses/Vector.png">
                        </div>
                    </div>
                    <div class="tag-basic">
                        <div class="base"></div>
                        <div class="text">${category}</div>
                        <div class="base"></div>
                    </div>
                    <div class="info">
                        <div class="title6">
                            <div class="text">${title}</div>
                            <b class="unity">${unity}</b>
                        </div>
                        <div class="user-parent">
                            <div class="user1">
                                <img class="avatar-icon1" alt="" src="images/home/ss2CourseComingSoon/avatar.png">
                                <div class="text">Jane Cooper</div>
                            </div>
                            <b class="b">${price}</b>
                        </div>
                    </div>
                </div>
            `;
        }
    
        const container = document.getElementById('card-container');
        cardData.forEach(data => {
            container.innerHTML += createCard(data);
        });