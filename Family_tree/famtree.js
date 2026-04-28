function toggleChildren(element) {
    const children = element.parentElement.nextElementSibling;
    if (children) {
        children.classList.toggle('active');
    }
}


