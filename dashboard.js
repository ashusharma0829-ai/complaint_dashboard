// 1. Time ke hisaab se greeting
const hour = new Date().getHours();
let greeting = "Good Evening";

if (hour < 12) {
    greeting = "Good Morning";
} else if (hour < 17) {
    greeting = "Good Afternoon";
}

document.getElementById("greeting").textContent = greeting;

// 2. Student ka naam (abhi dummy, baad me backend/session se aayega)
const name = "Student";
document.getElementById("student-name").textContent = name;
document.getElementById("userName").textContent = name;
document.getElementById("avatar").textContent = name.charAt(0).toUpperCase();

// 3. Mobile par ☰ button se sidebar kholo / band karo
const menuBtn = document.getElementById("menuBtn");
const sidebar = document.getElementById("sidebar");

menuBtn.addEventListener("click", function () {
    sidebar.classList.toggle("open");
});
