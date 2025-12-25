// Disable datalabels globally, enable only for portfolio chart
Chart.defaults.plugins.datalabels = { display: false };

// Theme colors
const colors = {
    text: '#5a6577',
    grid: 'rgba(26, 43, 95, 0.1)',
    legend: '#1a2b5f'
};

// Portfolio Doughnut Chart - Brand-aligned colors
const portfolioCtx = document.getElementById('portfolioChart').getContext('2d');
new Chart(portfolioCtx, {
    type: 'doughnut',
    data: {
        labels: ['BTC', 'ETH', 'SOL', 'AVAX', 'DOGE', 'UNI'],
        datasets: [{
            data: [35, 25, 15, 10, 8, 7],
            backgroundColor: [
                '#1a2b5f',  // Primary Navy
                '#2c4a8c',  // Secondary Blue
                '#5BA4E6',  // Accent Blue
                '#2d8a5f',  // Success Green
                '#7a9bc7',  // Light Blue
                '#0f1a3d'   // Dark Navy
            ],
            borderWidth: 0,
            cutout: '70%'
        }]
    },
    plugins: [ChartDataLabels],
    options: {
        responsive: true,
        maintainAspectRatio: true,
        plugins: {
            legend: {
                position: 'right',
                labels: {
                    color: colors.legend,
                    padding: 12,
                    font: {
                        family: "'Source Serif 4', serif",
                        size: 12
                    }
                }
            },
            datalabels: {
                display: true,
                color: '#FFFFFF',
                font: {
                    family: "'Source Serif 4', serif",
                    weight: 'bold',
                    size: 12
                },
                formatter: (value) => value + '%',
                anchor: 'center',
                align: 'center'
            }
        }
    }
});

// Growth Chart
const growthCtx = document.getElementById('growthChart').getContext('2d');
const growthLabels = ['Aug 2024', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan 2025', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const growthData = [1.0, 1.02, 1.05, 1.03, 1.08, 1.12, 1.15, 1.18, 1.22, 1.25, 1.28, 1.32, 1.35, 1.38, 1.40, 1.42, 1.44];

new Chart(growthCtx, {
    type: 'line',
    data: {
        labels: growthLabels,
        datasets: [{
            label: 'Growth of $1',
            data: growthData,
            borderColor: '#5BA4E6',
            backgroundColor: 'rgba(91, 164, 230, 0.1)',
            fill: true,
            tension: 0.4,
            pointRadius: 0,
            pointHoverRadius: 6,
            pointHoverBackgroundColor: '#5BA4E6'
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: false } },
        scales: {
            x: {
                grid: { color: colors.grid },
                ticks: { color: colors.text, font: { size: 10 } }
            },
            y: {
                grid: { color: colors.grid },
                ticks: { color: colors.text, font: { size: 10 } }
            }
        }
    }
});

// Assets History Chart
const assetsCtx = document.getElementById('assetsChart').getContext('2d');
const assetLabels = Array.from({length: 30}, (_, i) => i + 1);
const totalAssets = [5.2, 5.4, 5.6, 5.5, 5.8, 6.0, 6.2, 6.1, 6.4, 6.6, 6.5, 6.8, 7.0, 6.9, 7.1, 7.2, 7.0, 7.3, 7.4, 7.2, 7.5, 7.6, 7.4, 7.7, 7.8, 7.6, 7.9, 8.0, 7.8, 7.4];
const netExposure = [0.1, 0.12, 0.08, 0.15, 0.1, 0.05, 0.08, 0.12, 0.06, 0.1, 0.15, 0.08, 0.05, 0.1, 0.12, 0.08, 0.15, 0.1, 0.05, 0.08, 0.12, 0.06, 0.1, 0.15, 0.08, 0.05, 0.1, 0.12, 0.08, 0.57];

new Chart(assetsCtx, {
    type: 'bar',
    data: {
        labels: assetLabels,
        datasets: [
            { label: 'Total Assets Value', data: totalAssets, backgroundColor: '#5BA4E6', borderRadius: 4 },
            { label: 'Net Exposure Value', data: netExposure, backgroundColor: '#1a2b5f', borderRadius: 4 }
        ]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: false } },
        scales: {
            x: { stacked: true, grid: { display: false }, ticks: { color: colors.text, font: { size: 10 } } },
            y: { stacked: true, grid: { color: colors.grid }, ticks: { color: colors.text, font: { size: 10 }, callback: (value) => value + 'M' } }
        }
    }
});

// APY History Chart
const apyCtx = document.getElementById('apyChart').getContext('2d');
const apyLabels = Array.from({length: 30}, (_, i) => i + 1);
const expectedAPY = [12, 14, 13, 15, 16, 14, 13, 15, 17, 16, 15, 14, 16, 18, 17, 15, 14, 16, 15, 17, 18, 16, 15, 14, 16, 17, 15, 14, 16, 15];
const apy90 = [10, 11, 10, 12, 13, 12, 11, 12, 14, 13, 12, 11, 13, 14, 13, 12, 11, 13, 12, 14, 15, 13, 12, 11, 13, 14, 12, 11, 13, 12];
const apy30 = [8, 6, 9, 7, 10, 8, 5, 9, 11, 7, 6, 8, 10, 12, 9, 7, 5, 8, 6, 10, 12, 8, 6, 4, 8, 10, 6, 5, 9, 7];

new Chart(apyCtx, {
    type: 'line',
    data: {
        labels: apyLabels,
        datasets: [
            { label: 'Expected APY', data: expectedAPY, borderColor: '#5BA4E6', backgroundColor: 'rgba(91, 164, 230, 0.2)', fill: true, tension: 0.4, pointRadius: 0 },
            { label: '90-Day APY', data: apy90, borderColor: '#2D8A5F', backgroundColor: 'transparent', fill: false, tension: 0.4, pointRadius: 0 },
            { label: '30-Day APY', data: apy30, borderColor: '#1a2b5f', backgroundColor: 'transparent', fill: false, tension: 0.4, pointRadius: 0 }
        ]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: false } },
        scales: {
            x: { grid: { color: colors.grid }, ticks: { color: colors.text, font: { size: 10 } } },
            y: { grid: { color: colors.grid }, ticks: { color: colors.text, font: { size: 10 }, callback: (value) => value + '%' } }
        }
    }
});

// Chart filter buttons
document.querySelectorAll('.chart-filter-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        this.parentElement.querySelectorAll('.chart-filter-btn').forEach(b => b.classList.remove('active'));
        this.classList.add('active');
    });
});
