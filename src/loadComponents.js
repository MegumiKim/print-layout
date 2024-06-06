// No need to modify this file.
document.addEventListener("DOMContentLoaded", function () {

    const components = ['byline', 'headline', 'intro', 'image', 'quote', 'text-column']

    components.forEach(component => fetch(`components/${component}/${component}.html`)
        .then(response => response.text())
        .then(html => {
            document.getElementById(component).innerHTML = html

        }))
});
