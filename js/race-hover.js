function changeItem() {
    let left = document.getElementById('image');
    left.style.width = '80vw';
    left.style.height = '80px';
    let content = document.getElementById('content');
    content.style.display = 'none';
}

function rechangeItem() {
    let left = document.getElementById('image');
    left.style.width = '250px';
    left.style.height = '250px';
    let content = document.getElementById('content');
    content.style.display = 'block';
}