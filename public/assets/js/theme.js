const htmlTheme = document.documentElement
const btn = document.querySelector('#btnTheme')

if(localStorage.getItem('theme') === 'dark' || localStorage.getItem('theme') === null) {
    btn.innerHTML = '<i class="bi bi-moon-stars"></i>'
    
} else if (localStorage.getItem('theme') === 'light') {
    btn.innerHTML = '<i class="bi bi-sun"></i>'
    
}

btn.addEventListener("click", () => {
    const temaAtual = htmlTheme.getAttribute("data-bs-theme")

    if (temaAtual === 'dark') {
        htmlTheme.setAttribute('data-bs-theme', 'light')
        localStorage.setItem('theme', 'ligth')
        btn.innerHTML = '<i class="bi bi-sun"></i>'
    } else {
        htmlTheme.setAttribute('data-bs-theme', 'dark')
        localStorage.setItem('theme', 'dark')
        btn.innerHTML = '<i class="bi bi-moon-stars"></i>'
    }
})