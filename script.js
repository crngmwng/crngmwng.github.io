function openForm() {
    document.getElementById("popupForm").style.display = "block";
    history.pushState('', '', 'myurl.html');
}
function closeForm() {
    document.getElementById("popupForm").style.display = "none";
}