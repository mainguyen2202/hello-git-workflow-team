const faqData = [
    {
        question: "What is Appscyclone?",
        answer: "Appscyclone is a team dedicated to providing exceptional learning experiences.",
    },
    {
        question: "How can I join Appscyclone?",
        answer: "You can join by signing up on our website and following the registration process.",
    },
    {
        question: "What services do you offer?",
        answer: "We offer a range of services including mentoring, training, and project guidance.",
    },
    {
        question: "Where is Appscyclone located?",
        answer: "Our team operates remotely, but we are based in multiple locations worldwide.",
    },
    {
        question: "Can I contact support?",
        answer: "Yes, you can contact our support team through the contact form on our website.",
    },
];

function createFAQItem(faq) {
    return `
        <div class="dropdown">
            <div class="title2" onclick="toggleFAQ(this)">
                <b class="add-commonly-asked">${faq.question}</b>
                <div class="icon">
                    <img class="arrow-up-icon" alt="" src="images/home/ss7FAQAppscycloneIsATeam/arrow-down.png">
                </div>
            </div>
            <div class="description" style="display: none;">
                <div class="lorem-ipsum-dolor">${faq.answer}</div>
            </div>
        </div>
    `;
}

function renderFAQs(faqs) {
    const listContainer = document.querySelector('.list-question');
    listContainer.innerHTML = ''; // Xóa nội dung cũ

    faqs.forEach(faq => {
        listContainer.innerHTML += createFAQItem(faq);
    });
}

function toggleFAQ(element) {
    const description = element.nextElementSibling;
    const icon = element.querySelector('.icon img');

    // Thay đổi trạng thái hiển thị
    if (description.style.display === 'none') {
        description.style.display = 'block';
        icon.src = "images/home/ss7FAQAppscycloneIsATeam/arrow-up.png"; // Đổi icon
    } else {
        description.style.display = 'none';
        icon.src = "images/home/ss7FAQAppscycloneIsATeam/arrow-down.png"; // Đổi icon
    }
}

// Bắt đầu hiển thị các câu hỏi thường gặp
renderFAQs(faqData);