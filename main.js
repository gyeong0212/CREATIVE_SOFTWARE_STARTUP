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
    const generateMeetingPrepBtn = document.getElementById('generate-meeting-prep');
    const meetingOutput = document.getElementById('meeting-output');

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

    // --- Meeting Agent --- //
    if (generateMeetingPrepBtn) {
        generateMeetingPrepBtn.addEventListener('click', () => {
            generateMeetingPrepBtn.disabled = true;
            generateMeetingPrepBtn.textContent = 'AI 분석 중...';
            meetingOutput.innerHTML = '';

            setTimeout(() => {
                // Read input values
                const investorName = document.getElementById('investor-name-input').value || '투자자';
                const meetingDate = document.getElementById('meeting-date-input').value;
                const meetingPurpose = document.getElementById('meeting-purpose-input').value || '투자 유치';
                const keyMessage = document.getElementById('key-message-input').value || '우리의 핵심 경쟁력';
                const concerns = document.getElementById('concerns-input').value || '시장 경쟁';

                // Generate mock data
                const mockData = {
                    brief: `오는 ${meetingDate || '예정된 날짜'}에 ${investorName}와(과)의 미팅은 '${meetingPurpose}'을(를) 목표로 합니다. 우리 팀의 '${keyMessage}'을(를) 효과적으로 전달하는 것이 중요합니다.`,
                    interestPoints: [
                        `${investorName}는 최근 [관련 산업 분야]에 높은 관심을 보였습니다.`,
                        `포트폴리오사 중 [유사/경쟁 서비스]와의 차별점을 분명히 해야 합니다.`,
                        `최근 인터뷰에서 [특정 기술/시장 트렌드]에 대한 긍정적 전망을 밝혔습니다.`
                    ],
                    questions: [
                        `현재 저희가 파악한 [핵심 지표]의 성장률이 다소 낮아 보이는데, 이에 대한 계획이 있나요?`,
                        `말씀하신 '${keyMessage}' 외에, 경쟁사 대비 확실한 기술적 해자는 무엇인가요?`,
                        `주요 팀원들의 이탈 가능성은 없나요? 특히 핵심 개발자의 동기부여가 중요해 보입니다.`,
                        `언급하신 '${concerns}' 문제에 대해 구체적으로 어떻게 대응할 계획이신가요?`,
                        `5년 뒤 우리 회사는 어떤 모습일 것이라고 예상하시나요? 가장 큰 비전을 보여주세요.`
                    ],
                    strategy: `각 질문에 대해 자신감 있게 답변하되, 항상 '${keyMessage}' 메시지와 연결하여 일관된 인상을 주어야 합니다. 특히, '${concerns}'에 대한 우려를 기회로 전환하는 논리를 준비해야 합니다. (예: '그 부분이 바로 저희가 해결하려는 핵심 문제입니다.')`,
                    checklist: [
                        '회사 소개서 (최신 버전)',
                        '제품/서비스 데모 시나리오',
                        '핵심 지표(KPI) 요약 자료',
                        `미팅 참여자(상대방) 프로필 및 과거 투자 이력 재확인`,
                        '노트북 및 충전기, 인터넷 연결 확인'
                    ],
                    followUpEmail: `Subject: [당사명] OOO, ${meetingDate} 미팅 후속 이메일 드립니다.\n\n안녕하세요, ${investorName}님.\n\n오늘 귀한 시간을 내어 미팅에 참여해주셔서 진심으로 감사합니다. 저희가 '${keyMessage}'을(를) 통해 해결하고자 하는 문제와 비전에 공감해주셔서 더욱 뜻깊은 시간이었습니다.\n\n말씀 나눈 내용 중 추가로 궁금하신 점이나 필요하신 자료가 있다면 언제든지 편하게 말씀해주세요.\n\n긍정적인 검토를 기대하며, 곧 좋은 소식으로 다시 연락드릴 수 있기를 바랍니다.\n\n감사합니다.\nOOO 드림`
                };

                // Render output
                meetingOutput.innerHTML = `
                    <div class="card"><h4>미팅 브리프</h4><p>${mockData.brief}</p></div>
                    <div class="card"><h4>${investorName}의 예상 관심 포인트</h4><ul>${mockData.interestPoints.map(p => `<li>${p}</li>`).join('')}</ul></div>
                    <div class="card"><h4>예상 질문 5가지</h4><ul>${mockData.questions.map(q => `<li>${q}</li>`).join('')}</ul></div>
                    <div class="card"><h4>답변 전략</h4><p>${mockData.strategy}</p></div>
                    <div class="card"><h4>미팅 체크리스트</h4><ul>${mockData.checklist.map(i => `<li><input type="checkbox" id="${i.replace(/\s+/g, '-')}"> <label for="${i.replace(/\s+/g, '-')}">${i}</label></li>`).join('')}</ul></div>
                    <div class="card"><h4>후속 이메일 초안</h4><div class="email-draft-box">${mockData.followUpEmail}</div></div>
                `;

                generateMeetingPrepBtn.disabled = false;
                generateMeetingPrepBtn.textContent = '미팅 준비 생성';
            }, 1800);
        });
    }
    // --- Deal Agent --- //
    const generateDealAnalysisBtn = document.getElementById('generate-deal-analysis');
    const dealOutput = document.getElementById('deal-output');

    if (generateDealAnalysisBtn) {
        // Helper: 문자열에서 숫자 추출 (예: "$1M" -> 1000000, "10억" -> 1000000000, "5,000,000" -> 5000000)
        const parseAmount = (str) => {
            if (!str) return null;
            const cleaned = str.replace(/,/g, '').toLowerCase();
            const num = parseFloat(cleaned.replace(/[^0-9.]/g, ''));
            if (isNaN(num) || num <= 0) return null;
            // 단위 추정
            if (cleaned.includes('m') || cleaned.includes('백만')) return num * 1_000_000;
            if (cleaned.includes('b') || cleaned.includes('billion')) return num * 1_000_000_000;
            if (cleaned.includes('억')) return num * 100_000_000;
            if (cleaned.includes('k') || cleaned.includes('천')) return num * 1_000;
            return num;
        };

        // Helper: 지분 희석률 계산
        const calculateDilution = (amountStr, valuationStr) => {
            const amount = parseAmount(amountStr);
            const valuation = parseAmount(valuationStr);
            if (!amount || !valuation) return null;
            const dilution = (amount / (valuation + amount)) * 100;
            return dilution.toFixed(2);
        };

        // 단계별 mock 데이터
        const stageProfiles = {
            'Term Sheet 검토': {
                tone: 'Term Sheet 단계는 향후 모든 계약의 토대가 되므로, 핵심 조항을 명확히 협상해야 합니다.',
                toxicAlerts: [
                    { title: 'Full Ratchet 희석방지', detail: '다음 라운드에서 낮은 가격으로 발행 시 창업자 지분이 과도하게 희석될 수 있습니다. Weighted Average 방식으로 협상하세요.' },
                    { title: '참여형 청산우선권 (Participating Preferred)', detail: '엑싯 시 투자자가 투자금 회수 후에도 잔여 분배에 참여하게 되어 창업자 몫이 크게 줄어듭니다. Non-participating 1x로 협상이 일반적입니다.' }
                ],
                strategy: [
                    'Term Sheet은 법적 구속력이 약한 조항이 많지만, 한번 합의하면 SPA에서 뒤집기 어렵습니다. 처음부터 핵심 조항을 챙기세요.',
                    '경쟁 투자자(다른 VC)의 관심을 동시에 진행해 협상 레버리지를 확보하세요.',
                    '변호사 검토를 받기 전에는 절대 서명하지 마세요.'
                ]
            },
            'SAFE 협상': {
                tone: 'SAFE는 단순해 보이지만 valuation cap과 discount, MFN 조항이 향후 라운드에 큰 영향을 미칩니다.',
                toxicAlerts: [
                    { title: '낮은 Valuation Cap', detail: 'cap이 낮으면 다음 라운드에서 SAFE 보유자가 과도한 지분을 가져갑니다. 현실적인 회사 가치를 반영하세요.' },
                    { title: 'MFN(Most Favored Nation) 조항 누락', detail: '이후 더 좋은 조건으로 SAFE를 발행하면 자동으로 같은 조건을 적용받는 보호 장치가 없습니다.' }
                ],
                strategy: [
                    'Post-money SAFE인지 Pre-money SAFE인지 명확히 확인하세요. Post-money가 투자자에게 더 유리합니다.',
                    'Discount rate(보통 15~20%)와 valuation cap을 모두 두는 경우, 낮은 쪽이 적용되므로 양쪽 다 협상해야 합니다.',
                    'Pro-rata 권리는 향후 시리즈 A에서 투자자의 추가 투자를 보장하므로, 신중히 결정하세요.'
                ]
            },
            '주식매매계약(SPA)': {
                tone: 'SPA는 법적 구속력이 강한 최종 계약입니다. 모든 진술/보장/면책 조항을 정밀하게 검토해야 합니다.',
                toxicAlerts: [
                    { title: '과도한 진술 및 보장(Reps & Warranties)', detail: '창업자 개인이 보증해야 하는 항목 범위가 넓고, 위반 시 무제한 책임을 지게 될 수 있습니다.' },
                    { title: '광범위한 면책(Indemnification) 조항', detail: '면책 한도(cap)와 기간(survival period)을 명확히 설정하지 않으면 장기간 책임을 떠안게 됩니다.' }
                ],
                strategy: [
                    '진술/보장 위반 시 책임 한도(cap)를 투자금의 25~50% 수준으로 협상하세요.',
                    'Survival period(보장 기간)는 일반적으로 12~24개월이 표준입니다.',
                    'Knowledge qualifier("aware of")를 추가해 창업자가 인지하지 못한 사항에 대한 책임을 제한하세요.'
                ]
            },
            '클로징 직전': {
                tone: '클로징 직전은 마지막 협상 기회입니다. 작은 조항 하나가 5년 후 큰 차이를 만듭니다.',
                toxicAlerts: [
                    { title: 'Drag-along 임계치 과도하게 낮음', detail: '소수 투자자가 매각을 강제할 수 있게 되어 창업자가 원치 않는 엑싯을 강요받을 수 있습니다. 50%+ 또는 과반 의결권으로 협상하세요.' },
                    { title: '창업자 베스팅 재설정', detail: '이미 일부 베스팅된 지분을 다시 4년 베스팅으로 재설정하는 조항은 창업자에게 매우 불리합니다.' }
                ],
                strategy: [
                    '모든 closing condition(선행 조건)을 다시 검토하고, 충족 가능한지 확인하세요.',
                    '서명 직전 추가되는 조항(side letter 포함)을 절대 가볍게 보지 마세요.',
                    '클로징 후 자금 송금 일정과 주식 발행 절차를 명확히 합의하세요.'
                ]
            }
        };

        generateDealAnalysisBtn.addEventListener('click', () => {
            generateDealAnalysisBtn.disabled = true;
            generateDealAnalysisBtn.textContent = '딜 분석 중...';
            dealOutput.innerHTML = '';

            setTimeout(() => {
                // 입력값 읽기 (fallback 포함)
                const investorRaw = document.getElementById('deal-investor-name-input').value.trim();
                const investor = investorRaw || '투자자/VC';
                const stage = document.getElementById('deal-stage-select').value || 'Term Sheet 검토';
                const amountRaw = document.getElementById('deal-amount-input').value.trim();
                const valuationRaw = document.getElementById('deal-valuation-input').value.trim();
                const keyTermsRaw = document.getElementById('deal-key-terms-input').value.trim();
                const toxicClausesRaw = document.getElementById('deal-toxic-clauses-input').value.trim();

                const amountDisplay = amountRaw || '제안 금액 미입력';
                const valuationDisplay = valuationRaw || '밸류에이션 미입력';
                const keyTerms = keyTermsRaw || '주요 협상 조건이 명시되지 않았습니다.';
                const toxicClauses = toxicClausesRaw || '';

                // 지분 희석률 계산
                const dilution = calculateDilution(amountRaw, valuationRaw);
                const dilutionDisplay = dilution
                    ? `${dilution}%`
                    : '계산 불가';
                const dilutionNote = dilution
                    ? `투자금 ${amountDisplay} ÷ (Pre-money ${valuationDisplay} + 투자금)`
                    : '금액과 밸류에이션을 숫자 형식으로 입력하면 자동 계산됩니다.';

                // 단계별 프로파일 가져오기
                const profile = stageProfiles[stage] || stageProfiles['Term Sheet 검토'];

                // 독소 조항 리스트 구성 (사용자 입력 + 단계별 추가 항목)
                const userToxicHtml = toxicClausesRaw
                    ? `<li><strong>창업자가 우려한 조항</strong>${toxicClausesRaw}</li>`
                    : '';
                const profileToxicHtml = profile.toxicAlerts
                    .map(t => `<li><strong>${t.title}</strong>${t.detail}</li>`)
                    .join('');

                // 협상 전략 리스트 (사용자 핵심 조건 우선 반영)
                const userStrategyHtml = keyTermsRaw
                    ? `<li>창업자가 강조한 핵심 조건: "${keyTermsRaw}" — 이 조건을 1순위로 협상 테이블에 올리고, 다른 조항에서 양보 여지를 만드세요.</li>`
                    : '';
                const profileStrategyHtml = profile.strategy
                    .map(s => `<li>${s}</li>`)
                    .join('');

                // 시나리오 데이터
                const scenarios = [
                    {
                        cls: 'aggressive',
                        title: '공격적 (Push for Better Terms)',
                        tag: '공격적',
                        summary: `${investor}의 제안을 적극 반박하고 더 유리한 조건을 끌어냅니다. 다른 VC와 경쟁시키는 카드를 활용하세요.`,
                        bullets: [
                            '밸류에이션 20~30% 상향 요구',
                            'Non-participating 1x 청산우선권 고수',
                            '이사회 시트 창업자 과반 유지',
                            '독소 조항 전면 거부'
                        ]
                    },
                    {
                        cls: 'balanced',
                        title: '균형 (Win-Win Compromise)',
                        tag: '균형',
                        summary: `${investor}와 장기 파트너십을 고려해 합리적 선에서 합의합니다. 핵심 조건은 지키되 부수 조항은 양보합니다.`,
                        bullets: [
});
