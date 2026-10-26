document.addEventListener("DOMContentLoaded", () => {
    const hamburgerBtn = document.getElementById("hamburger-btn");
    const navMenu = document.getElementById("nav-menu");

    hamburgerBtn.addEventListener("click", () => {
        navMenu.classList.toggle("active");
    });

    const themeToggleBtn = document.getElementById("theme-toggle-btn");
    const htmlElement = document.documentElement;
    const themeIcon = themeToggleBtn.querySelector("i");

    const savedTheme = localStorage.getItem("theme") || "light";
    htmlElement.setAttribute("theme", savedTheme);
    updateThemeIcon(savedTheme);

    themeToggleBtn.addEventListener("click", () => {
        const currentTheme = htmlElement.getAttribute("theme");
        const newTheme = currentTheme === "light" ? "dark mode" : "light";
        
        htmlElement.setAttribute("theme", newTheme);
        localStorage.setItem("theme", newTheme);
        updateThemeIcon(newTheme);

        renderCharts();
    });

    function updateThemeIcon(theme) {
        if (theme === "dark mode") {
            themeIcon.className = "fa-solid fa-sun";
        } else {
            themeIcon.className = "fa-solid fa-moon";
        }
    }

    const monthlySalesData = [
        { month: "Jan", revenue: 1250, units: 3400 },
        { month: "Feb", revenue: 1180, units: 3150 },
        { month: "Mar", revenue: 1420, units: 3900 },
        { month: "Apr", revenue: 1610, units: 4300 },
        { month: "May", revenue: 1550, units: 4050 },
        { month: "Jun", revenue: 1780, units: 4700 }
    ];

    const branchDataQ2 = [
        { branch: "Colombo", revenue: 2450 },
        { branch: "Kandy", revenue: 1320 },
        { branch: "Galle", revenue: 1170 }
    ];

    function updateKPIs() {
        const totalRevenue = monthlySalesData.reduce((acc, curr) => acc + curr.revenue, 0);
        document.getElementById("kpi-total-revenue").innerText = `LKR ${(totalRevenue * 1000).toLocaleString()}`;

        const totalUnits = monthlySalesData.reduce((acc, curr) => acc + curr.units, 0);
        document.getElementById("kpi-total-units").innerText = totalUnits.toLocaleString();

        const bestMonthObj = monthlySalesData.reduce((prev, current) => (prev.revenue > current.revenue) ? prev : current);
        document.getElementById("kpi-best-month").innerText = `${bestMonthObj.month}`;

        const bestBranchObj = branchDataQ2.reduce((prev, current) => (prev.revenue > current.revenue) ? prev : current);
        document.getElementById("kpi-best-branch").innerText = `${bestBranchObj.branch}`;
    }

    let lineChartInstance = null;
    let barChartInstance = null;

    function renderCharts() {
        const isDark = htmlElement.getAttribute("theme") === "dark mode";
        const textColor = isDark ? "#e0e0e0" : "#333333";
        const gridColor = isDark ? "#333333" : "#e0e0e0";

        if (lineChartInstance) lineChartInstance.destroy();
        if (barChartInstance) barChartInstance.destroy();

        const ctxLine = document.getElementById('lineChart').getContext('2d');
        lineChartInstance = new Chart(ctxLine, {
            type: 'line',
            data: {
                labels: monthlySalesData.map(d => d.month),
                datasets: [{
                    label: 'Monthly Revenue (LKR 000)',
                    data: monthlySalesData.map(d => d.revenue),
                    borderColor: isDark ? '#81c784' : '#2e7d32',
                    backgroundColor: isDark ? 'rgba(129, 199, 132, 0.1)' : 'rgba(46, 125, 50, 0.1)',
                    fill: true,
                    tension: 0.3
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { display: false } 
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: { color: textColor },
                        grid: { color: gridColor },
                        title: { display: true, text: "Revenue (LKR '000)", color: textColor }
                    },
                    x: {
                        ticks: { color: textColor },
                        grid: { color: gridColor },
                        title: { display: true, text: "Month", color: textColor }
                    }
                }
            }
        });

        const ctxBar = document.getElementById('barChart').getContext('2d');
        barChartInstance = new Chart(ctxBar, {
            type: 'bar',
            data: {
                labels: branchDataQ2.map(d => d.branch),
                datasets: [{
                    label: 'Q2 Revenue (LKR 000)',
                    data: branchDataQ2.map(d => d.revenue),
                    backgroundColor: isDark ? ['#64b5f6', '#81c784', '#ffb74d'] : ['#1976d2', '#4caf50', '#ff9800']
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { display: false } 
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: { color: textColor },
                        grid: { color: gridColor },
                        title: { display: true, text: "Revenue (LKR '000)", color: textColor }
                    },
                    x: {
                        ticks: { color: textColor },
                        grid: { color: gridColor },
                        title: { display: true, text: "Branch", color: textColor }
                    }
                }
            }
        });
    }

    updateKPIs();
    renderCharts();
});