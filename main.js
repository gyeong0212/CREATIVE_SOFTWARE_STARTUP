document.addEventListener('DOMContentLoaded', () => {
    // --- DOM Elements --- //
    const themeToggle = document.getElementById('theme-toggle');
    const runDemoBtn = document.getElementById('run-demo');
    const aiLog = document.getElementById('ai-log');
    const sidebarNav = document.getElementById('sidebar-nav');
    const pageTitle = document.getElementById('page-title');
    const generatePitchBtn = document.getElementById('generate-pitch');
    const pitchOutput = document.getElementById('pitch-output');
    const matchInvestorsBtn = document.getElementById('match-investors');
    const outreachOutput = document.getElementById('outreach-output');

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
        pageTitle.textContent = link.querySelector('a').textContent.trim();
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
                    <div class="pitch-section"><h4>Problem</h4><p>${mockPitch.problem}</p></div>
                    <div class="pitch-section"><h4>Solution</h4><p>${mockPitch.solution}</p></div>
                    <div class="pitch-section"><h4>Market</h4><p>${mockPitch.market}</p></div>
                    <div class="pitch-section"><h4>Business Model</h4><p>${mockPitch.businessModel}</p></div>
                    <div class="pitch-section"><h4>The Ask</h4><p>${mockPitch.ask}</p></div>
                `;

                generatePitchBtn.disabled = false;
                generatePitchBtn.textContent = '피치 생성';
            }, 1500);
        });
    }

    // --- Outreach Agent --- //
    if (matchInvestorsBtn) {
        matchInvestorsBtn.addEventListener('click', () => {
            matchInvestorsBtn.disabled = true;
            matchInvestorsBtn.textContent = '매칭 중...';
            outreachOutput.innerHTML = '';

            setTimeout(() => {
                const mockInvestors = [
                    {
                        name: 'Sequoia Capital',
                        fit: '92%',
                        thesis: '전설적인 아이디어를 가진 대담한 창업가를 지원합니다. AI, SaaS, Fintech 등 기술 중심의 파괴적 혁신을 선호합니다.',
                        reason: '입력하신 AI/ML 섹터와 Seed 단계에 대한 높은 관심도 및 포트폴리오 시너지를 기반으로 추천되었습니다.',
                        message: '"Subject: AI 기반 반려동물 영양제의 미래\n\n안녕하세요, Sequoia 팀,\n\n귀사의 AI 분야에 대한 깊이 있는 투자 철학에 감명받아 연락드립니다. 저희는..."'
                    },
                    {
                        name: 'a16z Seed',
                        fit: '87%',
                        thesis: '기술로 미래를 만드는 창업가, 특히 미국 시장을 목표로 하는 Web3, AI, 바이오 분야의 초기 팀에 투자합니다.',
                        reason: '북미 시장을 타겟으로 하는 AI 스타트업으로서 a16z의 강력한 네트워크와 성장 지원 프로그램이 큰 도움이 될 것입니다.',
                        message: '"Subject: a16z가 찾고 있는 기술 기반 스타트업\n\n안녕하세요 a16z Seed 팀,\n\nAndreessen Horowitz가 기술의 미래를 어떻게 만들어 가는지 항상 주목하고 있습니다. 저희는..."'
                    },
                    {
                        name: 'Kakao Ventures',
                        fit: '78%',
                        thesis: '세상의 불편함을 해결하는 똑똑한 팀에게 투자합니다. 특히 초기 단계의 모바일, 게임, 블록체인, AI 스타트업을 선호합니다.',
                        reason: '아시아 시장, 특히 한국 시장에서의 성공 가능성이 높고, 카카오 공동체와의 협력 가능성이 열려있습니다.',
                        message: '"Subject: 카카오와 함께 세상을 바꿀 AI 스타트업\n\n안녕하세요 카카오벤처스 심사역님,\n\n귀사의 투자 포트폴리오와 스타트업 성장 지원에 깊은 인상을 받았습니다. 저희는..."'
                    },
                    {
                        name: 'BonAngels',
                        fit: '74%',
                        thesis: '"될 때까지 함께한다"는 철학으로, 열정 넘치는 창업팀의 첫 번째 동반자가 되고자 합니다. 분야에 관계없이 초기 단계 팀에 집중합니다.',
                        reason: 'Pre-seed/Seed 단계에 집중 투자하며, 창업팀과의 긴밀한 파트너십을 중시하는 만큼 초기 팀에게 훌륭한 파트너가 될 수 있습니다.',
                        message: '"Subject: 열정으로 뭉친 초기 창업팀입니다.\n\n안녕하세요 본엔젤스 파트너님,\n\n"될 때까지 함께한다"는 귀사의 투자 철학이 저희 팀의 비전과 정확히 일치하여 연락드립니다. 저희는..."'
                    }
                ];

                mockInvestors.forEach(investor => {
                    const investorCard = `
                        <div class="investor-card">
                            <div class="investor-card-header">
                                <h4>${investor.name}</h4>
                                <span class="fit-score">적합도 ${investor.fit}</span>
                            </div>
                            <div class="investor-card-body">
                                <h5>투자 Thesis</h5>
                                <p>${investor.thesis}</p>
                                <h5>추천 이유</h5>
                                <p>${investor.reason}</p>
                                <h5>개인화 아웃리치 메시지 초안</h5>
                                <blockquote>${investor.message}</blockquote>
                            </div>
                        </div>
                    `;
                    outreachOutput.innerHTML += investorCard;
                });

                matchInvestorsBtn.disabled = false;
                matchInvestorsBtn.textContent = '투자자 매칭';
            }, 2000);
        });
    }
});
