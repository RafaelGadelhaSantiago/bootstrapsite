function sendForm() {
    const data = new FormData(document.getElementsByClassName('row g-3')[0]);
    const formJSON = Object.fromEntries(data.entries());
}
