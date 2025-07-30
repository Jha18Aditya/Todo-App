let inp = document.querySelector("input");
let btn = document.getElementById("addBtn");
let ul = document.querySelector("ul");


let btnfunc = () => {
    if (inp.value.trim() === "") return;
    let li = document.createElement("li");
    
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.classList.add("task-check");

    let label = document.createElement("label");
    label.textContent = inp.value;

    let bookmarkBtn = document.createElement("button");
    bookmarkBtn.innerHTML = '<i class="fas fa-star"></i>';
    bookmarkBtn.classList.add("bookmark");
    bookmarkBtn.title = "Bookmark task";
    bookmarkBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        bookmarkBtn.classList.toggle("active");
        bookmarkBtn.querySelector('i').classList.toggle('fas');
        bookmarkBtn.querySelector('i').classList.toggle('far');
    });

    let dele = document.createElement("button");
    dele.innerHTML = '<i class="fas fa-trash-alt"></i>';
    dele.classList.add("delete");
    dele.title = "Delete task";

    checkbox.addEventListener("change", () => {
        label.style.textDecoration = checkbox.checked ? "line-through" : "none";
    });

    li.appendChild(checkbox);
    li.appendChild(label);
    li.appendChild(bookmarkBtn);
    li.appendChild(dele);
    ul.appendChild(li);
    inp.value = "";
};


let inpfunc = (event) => {
    if (event.code == "Enter") {
        btnfunc();
    }
};

inp.addEventListener("keydown", inpfunc);
btn.addEventListener("click", btnfunc);

ul.addEventListener("click", (event) => {
    const deleteButton = event.target.closest('.delete');
    if (deleteButton) {
        let delitem = deleteButton.closest('li');
        delitem.remove();
    }
});

// Theme toggle functionality
const themeToggle = document.getElementById('themeToggle');
const themeIcon = themeToggle.querySelector('i');

const toggleTheme = () => {
    const html = document.documentElement;
    const isDark = html.getAttribute('data-theme') === 'dark';
    html.setAttribute('data-theme', isDark ? 'light' : 'dark');
    themeIcon.className = isDark ? 'fas fa-sun' : 'fas fa-moon';
    localStorage.setItem('theme', isDark ? 'light' : 'dark');
};

// Initialize theme from localStorage
const savedTheme = localStorage.getItem('theme') || 'dark';
document.documentElement.setAttribute('data-theme', savedTheme);
themeIcon.className = savedTheme === 'dark' ? 'fas fa-moon' : 'fas fa-sun';
themeToggle.addEventListener('click', toggleTheme);








