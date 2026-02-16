/**
 * Cutwater My Assets V5
 * Main JavaScript functionality
 */

// Balance tabs functionality
document.querySelectorAll('.balance-tab').forEach(tab => {
    tab.addEventListener('click', function() {
        document.querySelectorAll('.balance-tab').forEach(t => t.classList.remove('active'));
        this.classList.add('active');
    });
});

// Action tabs (Mint/Redeem)
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

// Max button - sets input to available balance
function setMax() {
    const availableBalance = document.querySelector('.available-balance span').textContent;
    document.getElementById('amountInput').value = availableBalance;
}

// Format numbers with commas
function formatNumber(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// Mobile menu toggle (if implementing mobile nav)
function toggleMobileMenu() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.toggle('mobile-open');
}
