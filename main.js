document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const runDemoBtn = document.getElementById('run-demo');
    const aiLog = document.getElementById('ai-log');

    // --- Theme Toggle --- //
    const applyTheme = (theme) => {
        if (theme === 'dark') {
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
        }
    };

    const currentTheme = localStorage.getItem('theme');
    if (currentTheme) {
        applyTheme(currentTheme);
    }

    themeToggle.addEventListener('click', () => {
        let newTheme = 'light';
        if (!document.body.classList.contains('dark-mode')) {
            newTheme = 'dark';
        }
        applyTheme(newTheme);
        localStorage.setItem('theme', newTheme);
    });

    // --- Demo Mode Simulation --- //
    const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

    const demoSteps = [
        { agent: 'Pitch Agent', action: '아이디어를 맞춤형 피치덱으로 변환 중...', duration: 2000 },
        { agent: 'Outreach Agent', action: '최적의 투자자 리스트를 생성하고, 개인화된 메시지를 작성 중...', duration: 2500 },
        { agent: 'Meeting Agent', action: '예상 질문 리스트와 미팅 요약본을 준비 중...', duration: 2000 },
        { agent: 'Deal Agent', action: '계약서의 핵심 조항을 분석하고 협상 전략을 생성 중...', duration: 3000 },
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
        finalLog.innerHTML = '<strong>[System]</strong> 모든 에이전트 작업이 완료되었습니다. 딜 클로징 준비가 끝났습니다.';
        aiLog.appendChild(finalLog);
        aiLog.scrollTop = aiLog.scrollHeight;
        
        runDemoBtn.disabled = false;
        runDemoBtn.textContent = 'Demo Mode 다시 실행';
    });
});
