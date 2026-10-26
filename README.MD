## Student Information

* **Student Name:** R.A.D.A.Rajapaksha[MGT/2025/297]
* **Index Number:** [MGT/8714]
* **Module:** ITM 12022 - Business Applications
* **Live Website Link:** [https://didulakash.github.io/Lanka-Fresh-Mart/#]


## Project Overview

This project is a front-end responsive dashboard prototype built for **Lanka Fresh Mart** to view retail sales performance across branches in Colombo, Kandy, and Galle. The dashboard displays KPI summary cards and two interactive charts.



## Layout Implementation

### 1. Where CSS Grid is Used
CSS Grid is used to construct the primary layout of the dashboard:
* **Main Dashboard Container (`.dashboard-container`):** Uses `display: grid` to structure the page content.
* **KPI Cards Layout (`.kpi-section`):** Uses `display: grid` with `grid-template-columns: repeat(4, 1fr)` to place 4 summary cards in a single row on desktop views.
* **Charts Layout (`.charts-section`):** Uses `display: grid` with `grid-template-columns: repeat(2, 1fr)` to position the line chart and column chart side-by-side.
* **Media Query Breakpoints:**
  * **Tablet (max-width: 1024px):** Changes `.kpi-section` to `grid-template-columns: repeat(2, 1fr)`.
  * **Mobile (max-width: 768px):** Changes both `.kpi-section` and `.charts-section` to `grid-template-columns: 1fr` (stacked layout).

### 2. Where CSS Flexbox is Used
CSS Flexbox is used for 1D component alignment and internal layouts:
* **Navigation Bar (`.navbar`):** Uses `display: flex`, `justify-content: space-between`, and `align-items: center` to space the brand logo, nav links, and user area.
* **Navigation Links (`.nav-links`):** Uses `display: flex` with `gap: 1.5rem` to space links horizontally.
* **Mobile Dropdown Menu (`.nav-links.active`):** Uses `flex-direction: column` to stack menu links vertically on mobile screens.
* **KPI Card Content (`.kpi-card`):** Uses `display: flex` and `align-items: center` to align icons alongside text details.
* **User Profile & Action Buttons (`.nav-right-actions`):** Uses `display: flex` to keep the dark mode button and user profile horizontally aligned.

---

## Key Features & Calculations

1. **Dynamic KPI Calculation:** All KPI values (Total Revenue, Total Units Sold, Best Month, Best Branch) are computed dynamically using JavaScript array methods (`reduce()`) from dataset arrays in `script.js`.
2. **Responsive Interactive Charts:** Built using **Chart.js** CDN. Features a line chart for monthly revenue and a column chart for Q2 branch revenue.
3. **Responsive Hamburger Navigation:** Pure JavaScript event listeners (`addEventListener`) and `classList.toggle('active')` toggle the mobile menu.
4. **Theme Switcher (Optional Extension):** A dark/light mode toggle implemented using CSS custom properties (`:root` variables) and dynamic attribute setting on the HTML tag.

---

## Known Issues

* **None:** The web application displays no JavaScript console errors and functions correctly across current versions of Chrome and Firefox on desktop, tablet, and mobile viewports.

---

## References & Learning Sources

* **W3Schools:**
  * [W3Schools - CSS Grid Layout](https://www.w3schools.com/css/css_grid.asp)
  * [W3Schools - CSS Flexbox Layout](https://www.w3schools.com/css/css3_flexbox.asp)
  * [W3Schools - CSS Media Queries](https://www.w3schools.com/css/css3_mediaqueries.asp)
  * [W3Schools - JavaScript Array Methods (`reduce`)](https://www.w3schools.com/jsref/jsref_reduce.asp)
  * [W3Schools - HTML DOM `classList` Property](https://www.w3schools.com/jsref/prop_element_classlist.asp)
* **MDN Web Docs:**
  * [MDN - Responsive Design & Media Queries](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design)
* **Chart.js Documentation:**
  * [Chart.js Official Docs](https://www.chartjs.org/docs/latest/)
