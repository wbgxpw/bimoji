document.addEventListener('DOMContentLoaded', function() {
    fetch('bim.json')
        .then(response => response.json())
        .then(data => {
            Object.entries(data.bimoji).forEach(([bet, bem]) => {
                document.querySelectorAll('.bim, .bim-t, .bim-b, .bim-m, .bim-s').forEach(element => {
                    if ((element.tagName.toLowerCase() === 'span' || element.tagName.toLowerCase() === 'i') && element.textContent.trim() === bet) {
                        const alignmentClass = element.classList.contains('bim') ? 'middle' :
                            element.classList.contains('bim-t') ? 'top' :
                            element.classList.contains('bim-b') ? 'baseline' :
                            element.classList.contains('bim-m') ? 'bottom' :
                            element.classList.contains('bim-s') ? 'sub' : '';
                        element.innerHTML = `<img src="/em/cam/${bem}.png" alt="${bet}" style="max-width:1.2em;height:auto;vertical-align:${alignmentClass};">`;
                    }
                });
            });
        })
        .catch(error => console.error('Error loading emoticon data:', error));
});