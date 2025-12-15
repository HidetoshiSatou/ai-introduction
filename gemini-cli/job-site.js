document.addEventListener('DOMContentLoaded', () => {
    const jobData = [
        {
            title: 'フロントエンドエンジニア (React)',
            company: '株式会社モダンウェブ',
            location: '東京都渋谷区',
            salary: '年収 600万円〜900万円',
            tags: ['React', 'TypeScript', '急募'],
            new: true,
        },
        {
            title: 'バックエンドエンジニア (Go)',
            company: 'FastAPIテクノロジーズ',
            location: '東京都港区',
            salary: '年収 700万円〜1200万円',
            tags: ['Go', 'Microservices', 'リモート可'],
            new: true,
        },
        {
            title: 'UI/UXデザイナー',
            company: 'クリエイティブデザインスタジオ',
            location: '大阪府大阪市',
            salary: '年収 500万円〜800万円',
            tags: ['Figma', 'UXリサーチ', 'BtoC'],
            new: false,
        },
        {
            title: 'プロジェクトマネージャー',
            company: '株式会社グローバルプロジェクト',
            location: '全国（フルリモート）',
            salary: '年収 800万円〜',
            tags: ['PMP', 'SaaS', 'グローバル'],
            new: false,
        },
        {
            title: 'データサイエンティスト',
            company: 'AIリサーチラボ',
            location: '東京都千代田区',
            salary: '年収 750万円〜1500万円',
            tags: ['Python', '機械学習', '論文執筆'],
            new: true,
        },
        {
            title: 'クラウドインフラエンジニア (AWS)',
            company: 'クラウドサービスプロバイダー',
            location: '福岡県福岡市',
            salary: '年収 550万円〜850万円',
            tags: ['AWS', 'Terraform', 'CI/CD'],
            new: false,
        },
    ];

    const jobListContainer = document.getElementById('job-list');

    if (jobListContainer) {
        let jobHtml = '';
        jobData.forEach(job => {
            jobHtml += `
                <div class="job-card">
                    ${job.new ? '<span class="new-badge">New</span>' : ''}
                    <div class="job-card-header">
                        <h3><a href="#">${job.title}</a></h3>
                        <button class="favorite-btn">&star;</button>
                    </div>
                    <div class="job-card-company">${job.company}</div>
                    <div class="job-card-details">
                        <span><i class="icon salary"></i>${job.salary}</span>
                        <span><i class="icon location"></i>${job.location}</span>
                    </div>
                    <div class="job-card-tags">
                        ${job.tags.map(tag => `<span>${tag}</span>`).join('')}
                    </div>
                </div>
            `;
        });
        jobListContainer.innerHTML = jobHtml;
    }
});
