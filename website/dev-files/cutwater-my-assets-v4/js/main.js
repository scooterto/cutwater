// Theme colors
        const colors = {
            text: '#5a6577',
            grid: 'rgba(26, 43, 95, 0.1)',
            line: '#5BA4E6',
            fill: 'rgba(91, 164, 230, 0.1)'
        };

        // Growth Chart
        const ctx = document.getElementById('growthChart').getContext('2d');

        // Generate data points
        const labels = [];
        const data = [];
        const startDate = new Date('2024-08-01');
        let value = 1.0;

        for (let i = 0; i < 17; i++) {
            const date = new Date(startDate);
            date.setMonth(date.getMonth() + i);
            labels.push(date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' }));

            // Simulate growth with some volatility
            if (i < 4) {
                value += Math.random() * 0.02 - 0.005;
            } else {
                value += Math.random() * 0.04 + 0.01;
            }
            data.push(value);
        }

        const gradient = ctx.createLinearGradient(0, 0, 0, 280);
        gradient.addColorStop(0, colors.fill);
        gradient.addColorStop(1, 'rgba(91, 164, 230, 0)');

        new Chart(ctx, {
            type: 'line',
            data: {
                labels: labels,
                datasets: [{
                    data: data,
                    borderColor: colors.line,
                    backgroundColor: gradient,
                    fill: true,
                    tension: 0.4,
                    pointRadius: 0,
                    pointHoverRadius: 6,
                    pointHoverBackgroundColor: colors.line,
                    borderWidth: 2
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false
                    },
                    tooltip: {
                        mode: 'index',
                        intersect: false,
                        backgroundColor: '#1a2b5f',
                        titleColor: '#f8f9fa',
                        bodyColor: '#a8b5c9',
                        borderColor: '#2c4a8c',
                        borderWidth: 1,
                        padding: 12,
                        displayColors: false,
                        callbacks: {
                            label: function(context) {
                                return '$' + (context.raw * 50000).toFixed(2);
                            }
                        }
                    }
                },
                scales: {
                    x: {
                        grid: {
                            display: false
                        },
                        ticks: {
                            color: colors.text,
                            font: {
                                size: 11
                            },
                            maxTicksLimit: 6
                        }
                    },
                    y: {
                        grid: {
                            color: colors.grid
                        },
                        ticks: {
                            color: colors.text,
                            font: {
                                size: 11
                            }
                        }
                    }
                },
                interaction: {
                    mode: 'nearest',
                    axis: 'x',
                    intersect: false
                }
            }
        });

        // Time filter buttons
        document.querySelectorAll('.time-filter').forEach(btn => {
            btn.addEventListener('click', function() {
                document.querySelectorAll('.time-filter').forEach(b => b.classList.remove('active'));
                this.classList.add('active');
            });
        });

        // Balance tabs
        document.querySelectorAll('.balance-tab').forEach(tab => {
            tab.addEventListener('click', function() {
                document.querySelectorAll('.balance-tab').forEach(t => t.classList.remove('active'));
                this.classList.add('active');
            });
        });

        // Action tabs
        function setActionTab(tab) {
            const tabs = document.querySelectorAll('.action-tab');
            const btn = document.querySelector('.action-btn');

            tabs.forEach(t => t.classList.remove('active'));
            if (tab === 'mint') {
                tabs[0].classList.add('active');
                btn.textContent = 'Mint USDi';
            } else {
                tabs[1].classList.add('active');
                btn.textContent = 'Redeem USDi';
            }
        }

        // Max button
        function setMax() {
            document.getElementById('amountInput').value = '0.000111';
        }