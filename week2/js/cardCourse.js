const coursesData = [
    {
        type: 'frontend',
        title: 'FRONTEND',
        tech: 'ReactJS',
        user: 'Jane Cooper',
        price: '4.500.000đ',
        status: 'Offline',
        imgSrc: 'Group.svg',
        isImage: true
    },
    {
        type: 'backend',
        title: 'BACKEND',
        tech: 'NodeJS',
        user: 'Jane Cooper',
        price: '4.500.000đ',
        status: 'Offline',
        imgSrc: 'image.svg',
        isImage: false
    },
    {
        type: 'backend',
        title: 'BACKEND',
        tech: 'PHP',
        user: 'Jane Cooper',
        price: '4.500.000đ',
        status: 'Offline',
        imgSrc: 'image.png',
        isImage: false
    },
    {
        type: 'mobile',
        title: 'MOBILE',
        tech: 'Flutter',
        user: 'Jane Cooper',
        price: '4.500.000đ',
        status: 'Offline',
        imgSrc: 'image.png',
        isImage: false
    },
    {
        type: 'qc',
        title: 'QC',
        tech: 'QC',
        user: 'Jane Cooper',
        price: '4.500.000đ',
        status: 'Offline',
        imgSrc: 'OBJECTS.svg',
        isImage: true
    },
    {
        type: 'game',
        title: 'GAME',
        tech: 'Unity',
        user: 'Jane Cooper',
        price: '4.500.000đ',
        status: 'Offline',
        imgSrc: 'image.svg',
        isImage: false
    },
    {
        type: 'blockchain',
        title: 'Blockchain',
        tech: 'Blockchain',
        user: 'Jane Cooper',
        price: '4.500.000đ',
        status: 'Offline',
        imgSrc: 'image.svg',
        isImage: false
    },
    {
        type: 'iot',
        title: 'IOT',
        tech: 'IOT',
        user: 'Jane Cooper',
        price: '4.500.000đ',
        status: 'Offline',
        imgSrc: 'cloud_computing.svg',
        isImage: true
    }
];

function createCard({ type, title, tech, user, price, status, imgSrc, isImage }) {
    return `
        <div class="card-courses">
            <div class="${type === 'frontend' ? 'card' : 'card1'}">
                ${isImage ? `<div class="image"><img class="group-icon" alt="" src="${imgSrc}"></div>` : ''}
                <div class="info">
                    <div class="title">
                        <div class="frontend">${title}</div>
                        <b class="reactjs">${tech}</b>
                    </div>
                    <div class="user-parent">
                        <div class="user">
                            <img class="avatar-icon" alt="" src="avatar.png">
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

const container = document.getElementById('list-card-courses');
coursesData.forEach(data => {
    container.innerHTML += createCard(data);
});