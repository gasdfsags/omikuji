document.getElementById('omikuji-button').addEventListener('click', () => {
    const results = ['大吉', '中吉', '小吉', '吉', '末吉', '凶', '大凶'];
    const randomResult = results[Math.floor(Math.random() * results.length)];
    document.getElementById('result').textContent = `結果: ${randomResult}`;
});
