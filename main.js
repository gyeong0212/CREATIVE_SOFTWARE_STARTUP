document.addEventListener('DOMContentLoaded', () => {
    // --- DOM Elements --- //
    const themeToggle = document.getElementById('theme-toggle');
    const runDemoBtn = document.getElementById('run-demo');
    const aiLog = document.getElementById('ai-log');
    const sidebarNav = document.getElementById('sidebar-nav');
    const pageTitle = document.getElementById('page-title');
    const generatePitchBtn = document.getElementById('generate-pitch');
    const pitchOutput = document.getElementById('pitch-output');

    // --- Theme Toggle --- //
    const applyTheme = (theme) => {
        document.body.classList.toggle('dark-mode', theme === 'dark');
    };

    const currentTheme = localStorage.getItem('theme') || 'light';
    applyTheme(currentTheme);

    themeToggle.addEventListener('click', () => {
        const newTheme = document.body.classList.contains('dark-mode') ? 'light' : 'dark';
        applyTheme(newTheme);
        localStorage.setItem('theme', newTheme);
    });

    // --- Page Navigation --- //
    sidebarNav.addEventListener('click', (e) => {
        e.preventDefault();
        const link = e.target.closest('li');
        if (!link) return;

        const pageId = link.dataset.page;
        if (!pageId) return;

        // Update active link
        sidebarNav.querySelector('.active').classList.remove('active');
        link.classList.add('active');

        // Show/hide pages
        document.querySelectorAll('.page-section').forEach(page => {
            page.classList.add('hidden');
        });
        document.getElementById(pageId).classList.remove('hidden');

        // Update page title
        pageTitle.textContent = link.querySelector('a').textContent;
    });

    // --- Dashboard Demo Mode --- //
    if (runDemoBtn) {
        const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));
        const demoSteps = [
            { agent: 'Pitch Agent', action: '아이디어를 맞춤형 피치덱으로 변환 중...', duration: 1500 },
            { agent: 'Outreach Agent', action: '최적의 투자자 리스트를 생성하고, 개인화된 메시지를 작성 중...', duration: 2000 },
            { agent: 'Meeting Agent', action: '예상 질문 리스트와 미팅 요약본을 준비 중...', duration: 1500 },
            { agent: 'Deal Agent', action: '계약서의 핵심 조항을 분석하고 협상 전략을 생성 중...', duration: 2500 },
        ];

        runDemoBtn.addEventListener('click', async () => {
            runDemoBtn.disabled = true;
            runDemoBtn.textContent = '데모 실행 중...';
            aiLog.innerHTML = '<p>[System] 데모 시나리오를 시작합니다.</p>';

            for (const step of demoSteps) {
                await sleep(500);
                const logEntry = document.createElement('p');
                logEntry.innerHTML = `<strong>[${step.agent}]</strong> ${step.action}`;
                aiLog.appendChild(logEntry);
                aiLog.scrollTop = aiLog.scrollHeight;
                await sleep(step.duration);
            }

            await sleep(500);
            const finalLog = document.createElement('p');
            finalLog.innerHTML = '<strong>[System]</strong> 모든 에이전트 작업이 완료되었습니다.';
            aiLog.appendChild(finalLog);
            aiLog.scrollTop = aiLog.scrollHeight;
            
            runDemoBtn.disabled = false;
            runDemoBtn.textContent = 'Demo Mode 다시 실행';
        });
    }

    // --- Pitch Agent --- //
    if (generatePitchBtn) {
        generatePitchBtn.addEventListener('click', () => {
            generatePitchBtn.disabled = true;
            generatePitchBtn.textContent = '피치 생성 중...';
            pitchOutput.innerHTML = '';

            setTimeout(() => {
                const mockPitch = {
                    problem: "많은 1인 창업가들은 투자 유치 과정에서 정보 부족, 시간 부족, 협상력의 한계를 느끼며, 이는 성장 기회를 놓치는 주요 원인이 됩니다.",
                    solution: "NexusFounder OS는 AI 에이전트를 통해 투자자 발굴부터 딜 클로징까지 전 과정을 자동화하고, 데이터 기반의 전략을 제공하여 1인 창업가도 팀처럼 투자 유치를 진행할 수 있도록 돕는 올인원 플랫폼입니다.",
                    market: "전 세계 스타트업 시장은 연간 3조 달러 규모이며, 이 중 1인 창업가 및 초기 스타트업이 차지하는 비중은 약 30%로, 우리의 타겟 시장은 9천억 달러에 달합니다.",
                    businessModel: "기본 기능을 제공하는 Freemium 모델과, 월 $49의 Pro 플랜(모든 에이전트 활성화), 월 $199의 Scale 플랜(전담 컨설팅 포함)을 통해 수익을 창출합니다.",
                    ask: "시드 라운드에서 $500,000의 투자를 유치하고자 합니다. 이 자금은 제품 개발 가속화, AI 모델 고도화, 그리고 초기 시장 진출을 위한 마케팅에 사용될 계획입니다."
                };

                pitchOutput.innerHTML = `
                    <h4>Problem</h4>
                    <p>${mockPitch.problem}</p>
                    <h4>Solution</h4>
                    <p>${mockPitch.solution}</p>
                    <h4>Market</h4>
                    <p>${mockPitch.market}</p>
                    <h4>Business Model</h4>
                    <p>${mockPitch.businessModel}</p>
                    <h4>The Ask</h4>
                    <p>${mockPitch.ask}</p>
                `;

                generatePitchBtn.disabled = false;
                generatePitchBtn.textContent = '피치 생성';
            }, 2000);
        });
    }
});
