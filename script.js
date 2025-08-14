
// Sample IT news data
const newsArticles = [
    {
        title: "AI Revolutionizes Healthcare: Microsoft and Google Lead the Way",
        date: "August 12, 2025",
        summary: "Major tech companies are deploying advanced AI solutions to improve diagnostics, patient care, and drug discovery, setting new standards in the healthcare industry."
    },
    {
        title: "Amazon Launches Quantum Cloud Service for Enterprises",
        date: "August 10, 2025",
        summary: "Amazon Web Services introduces quantum computing as a service, making powerful computation accessible to businesses worldwide."
    },
    {
        title: "Apple Unveils Next-Gen Security Chip for Consumer Devices",
        date: "August 8, 2025",
        summary: "Apple's new chip promises enhanced privacy and security for millions of users, raising the bar for consumer technology."
    },
    {
        title: "IBM and Google Announce Breakthroughs in Quantum Supremacy",
        date: "August 5, 2025",
        summary: "The race for quantum supremacy heats up as IBM and Google reveal new milestones in quantum computing performance."
    }
];

function renderNews() {
    const newsList = document.getElementById('news-list');
    if (!newsList) return;
    newsList.innerHTML = newsArticles.map(article => `
        <div class="news-card">
            <div class="news-title">${article.title}</div>
            <div class="news-date">${article.date}</div>
            <div class="news-summary">${article.summary}</div>
        </div>
    `).join('');
}

document.addEventListener('DOMContentLoaded', renderNews);