document.addEventListener('DOMContentLoaded', () => {
    // Chart Defaults
    Chart.defaults.color = '#94a3b8';
    Chart.defaults.font.family = "'Plus Jakarta Sans', sans-serif";
    Chart.defaults.plugins.legend.display = false;

    // Contract Type Chart
    const ctxContract = document.getElementById('contractChart').getContext('2d');
    new Chart(ctxContract, {
        type: 'bar',
        data: {
            labels: ['Month-to-Month', 'One-Year', 'Two-Year'],
            datasets: [{
                label: 'Segment Churn Risk %',
                data: [32, 8, 2],
                backgroundColor: [
                    'rgba(244, 63, 94, 0.8)', // Rose
                    'rgba(59, 130, 246, 0.6)', // Blue
                    'rgba(16, 185, 129, 0.6)'  // Green
                ],
                borderRadius: 12,
                borderWidth: 0
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true,
                    grid: { color: 'rgba(255, 255, 255, 0.05)' },
                    ticks: { callback: value => value + '%' }
                },
                x: {
                    grid: { display: false }
                }
            },
            plugins: {
                tooltip: {
                    callbacks: {
                        label: (context) => `Churn Rate: ${context.raw}%`
                    }
                }
            }
        }
    });

    // Tenure Chart
    const ctxTenure = document.getElementById('tenureChart').getContext('2d');
    new Chart(ctxTenure, {
        type: 'line',
        data: {
            labels: ['< 6m', '6-12m', '12-24m', '24-48m', '48-72m'],
            datasets: [{
                label: 'Churn Probability %',
                data: [38, 31, 19, 10, 4],
                borderColor: '#3b82f6',
                backgroundColor: 'rgba(59, 130, 246, 0.1)',
                fill: true,
                tension: 0.4,
                pointBackgroundColor: '#3b82f6',
                pointRadius: 6,
                pointHoverRadius: 8
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true,
                    grid: { color: 'rgba(255, 255, 255, 0.05)' },
                    ticks: { callback: value => value + '%' }
                },
                x: {
                    grid: { display: false }
                }
            }
        }
    });

    // Payment Method Chart
    const ctxPayment = document.getElementById('paymentChart').getContext('2d');
    new Chart(ctxPayment, {
        type: 'doughnut',
        data: {
            labels: ['Electronic Check', 'Bank Transfer', 'Credit Card', 'Mailed Check'],
            datasets: [{
                data: [45, 18, 15, 22],
                backgroundColor: [
                    'rgba(244, 63, 94, 0.8)',
                    'rgba(59, 130, 246, 0.6)',
                    'rgba(16, 185, 129, 0.6)',
                    'rgba(251, 191, 36, 0.6)'
                ],
                borderWidth: 0,
                spacing: 4
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    display: true,
                    position: 'bottom',
                    labels: { color: '#94a3b8', padding: 20 }
                }
            }
        }
    });

    // Internet Service Chart
    const ctxInternet = document.getElementById('internetChart').getContext('2d');
    new Chart(ctxInternet, {
        type: 'bar',
        data: {
            labels: ['Fiber Optic', 'DSL', 'No Internet'],
            datasets: [{
                label: 'Churn Risk %',
                data: [41, 19, 7],
                backgroundColor: [
                    'rgba(244, 63, 94, 0.8)',
                    'rgba(59, 130, 246, 0.6)',
                    'rgba(16, 185, 129, 0.6)'
                ],
                borderRadius: 10
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true,
                    grid: { color: 'rgba(255, 255, 255, 0.05)' },
                    ticks: { callback: value => value + '%' }
                }
            }
        }
    });

    // Scroll Animations
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.section, .strategy-card, .impact-section, .kpi-card').forEach(el => {
        el.style.opacity = "0"; // Initial state for observer
        observer.observe(el);
    });

    // Interactive Hover Effect for Cards
    const cards = document.querySelectorAll('.strategy-card, .kpi-card');
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 20;
            const rotateY = (centerX - x) / 20;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-5px)`;
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)`;
        });
    });
});
