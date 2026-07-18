const countries = [
    { name: "Afghanistan", code: "93", flag: "🇦🇫" },
    { name: "Albania", code: "355", flag: "🇦🇱" },
    { name: "Algeria", code: "213", flag: "🇩🇿" },
    { name: "Andorra", code: "376", flag: "🇦🇩" },
    { name: "Argentina", code: "54", flag: "🇦🇷" },
    { name: "Australia", code: "61", flag: "🇦🇺" },
    { name: "Austria", code: "43", flag: "🇦🇹" },
    { name: "Belgium", code: "32", flag: "🇧🇪" },
    { name: "Brazil", code: "55", flag: "🇧🇷" },
    { name: "Canada", code: "1", flag: "🇨🇦" },
    { name: "China", code: "86", flag: "🇨🇳" },
    { name: "Egypt", code: "20", flag: "🇪🇬" },
    { name: "France", code: "33", flag: "🇫🇷" },
    { name: "Germany", code: "49", flag: "🇩🇪" },
    { name: "India", code: "91", flag: "🇮🇳" },
    { name: "Italy", code: "39", flag: "🇮🇹" },
    { name: "Japan", code: "81", flag: "🇯🇵" },
    { name: "Mexico", code: "52", flag: "🇲🇽" },
    { name: "Netherlands", code: "31", flag: "🇳🇱" },
    { name: "Poland", code: "48", flag: "🇵🇱" },
    { name: "Portugal", code: "351", flag: "🇵🇹" },
    { name: "Spain", code: "34", flag: "🇪🇸" },
    { name: "Sweden", code: "46", flag: "🇸🇪" },
    { name: "Switzerland", code: "41", flag: "🇨🇭" },
    { name: "Turkey", code: "90", flag: "🇹🇷" },
    { name: "Ukraine", code: "380", flag: "🇺🇦" },
    { name: "United Arab Emirates", code: "971", flag: "🇦🇪" },
    { name: "United Kingdom", code: "44", flag: "🇬🇧" },
    { name: "United States", code: "1", flag: "🇺🇸" },
];

const countrySelect = document.getElementById("countrySelect");
const countryDropdown = document.getElementById("countryDropdown");
const countryList = document.getElementById("countryList");
const countrySearch = document.getElementById("countrySearch");
const selectedFlag = document.getElementById("selectedFlag");

function renderList(filter = "") {
    countryList.innerHTML = "";
    const filtered = countries.filter(c =>
        c.name.toLowerCase().includes(filter.toLowerCase())
    );

    filtered.forEach(c => {
        const item = document.createElement("div");
        item.className = "country-item flex";
        item.innerHTML = `
            <span class="flag">${c.flag}</span>
            <span class="name">${c.name}</span>
            <span class="dial-code">+${c.code}</span>
        `;
        item.addEventListener("click", () => {
            selectedFlag.textContent = c.flag;
            countryDropdown.classList.remove("open");
            countrySearch.value = "";
            renderList();
        });
        countryList.appendChild(item);
    });
}

countrySelect.addEventListener("click", (e) => {
    e.stopPropagation();
    countryDropdown.classList.toggle("open");
    if (countryDropdown.classList.contains("open")) {
        countrySearch.focus();
    }
});

countrySearch.addEventListener("input", () => {
    renderList(countrySearch.value);
});

document.addEventListener("click", (e) => {
    if (!countryDropdown.contains(e.target) && !countrySelect.contains(e.target)) {
        countryDropdown.classList.remove("open");
    }
});

renderList();