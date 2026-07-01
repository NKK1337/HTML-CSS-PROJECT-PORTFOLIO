const tabButtons = document.querySelectorAll(".tab");
const indicator = document.getElementById("indicator");

const sections = document.querySelectorAll(".card-wrapper, .card-wrapper2");

function moveIndicator(el) {
    indicator.style.left = el.offsetLeft + "px";
    indicator.style.width = el.offsetWidth + "px";
}

function filterCards(category) {
    sections.forEach(section => {
        if (category === "all") {
            section.style.display = "flex";
        } else {
            if (section.dataset.category === category) {
                section.style.display = "flex";
            } else {
                section.style.display = "none";
            }
        }
    });
}

tabButtons.forEach(tab => {
    tab.addEventListener("click", () => {

        document.querySelector(".tab.active").classList.remove("active");
        tab.classList.add("active");

        moveIndicator(tab);

        const text = tab.textContent.trim();

        if (text === "All Services") filterCards("all");
        if (text === "Personal Growth") filterCards("personal");
        if (text === "Career Ambitions") filterCards("career");
    });
});

window.addEventListener("load", () => {
    moveIndicator(document.querySelector(".tab.active"));
});

const dropdownWrapper = document.getElementById('dropdownWrapper');
const dropdownToggle = document.getElementById('dropdownToggle');
const dropdownLabel = document.getElementById('dropdownLabel');
const dropdownItems = document.querySelectorAll('.dropdown-item');

dropdownToggle.addEventListener('click', () => {
    dropdownWrapper.classList.toggle('open');
});

dropdownItems.forEach(item => {
    item.addEventListener('click', () => {
        dropdownItems.forEach(i => i.classList.remove('active'));
        item.classList.add('active');
        dropdownLabel.textContent = item.textContent;
        dropdownWrapper.classList.remove('open');

        filterCards(item.dataset.filter);
    });
});

document.addEventListener('click', (e) => {
    if (!dropdownWrapper.contains(e.target)) {
        dropdownWrapper.classList.remove('open');
    }
});

function filterCards(filter) {
    document.querySelectorAll('[data-category]').forEach(wrapper => {
        wrapper.style.display =
            (filter === 'all' || wrapper.dataset.category === filter) ? 'flex' : 'none';
    });
}