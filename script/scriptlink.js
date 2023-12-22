const nameInput = document.getElementById('nameInput');
const urlInput = document.getElementById('urlInput');
const addLinkButton = document.getElementById('addLInkButton');
const linkList = document.getElementById('linkList');

const localLinks = JSON.parse(localStorage.getItem('links')) || [];

function showLinks() {
    linkList.innerHTML = '';
    localLinks.forEach(link => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <a href="${link.url}" target="_blank">${link.name}</a>
            <button class="deleteLinkButton">x</button>
        `;

        listItem.querySelector('.deleteLinkButton').addEventListener('click', () => {
            const index = localLinks.indexOf(link);
            deleteLink(index);
        });

        linkList.appendChild(listItem);
    });
}

function deleteLink(index) {
    localLinks.splice(index, 1);
    localStorage.setItem('links', JSON.stringify(localLinks));
    showLinks();
}

addLinkButton.addEventListener('click', () => {
    const name = nameInput.value.trim();
    const url = urlInput.value.trim();

    if (name && url) {
        const newLink = { name, url };
        localLinks.push(newLink);
        localStorage.setItem('links', JSON.stringify(localLinks));
        nameInput.value = '';
        urlInput.value = '';
        showLinks();
    }
});

showLinks();
