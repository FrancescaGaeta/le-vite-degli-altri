document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const cards = document.querySelectorAll('.card');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Rimuovi la classe active da tutti i bottoni e mettila su quello cliccato
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const filterValue = button.getAttribute('data-filter');

            cards.forEach(card => {
                const cardMateria = card.getAttribute('data-materia');

                if (filterValue === 'all' || filterValue === cardMateria) {
                    card.style.display = 'flex';
                    // Piccolo trick per l'effetto dissolvenza
                    setTimeout(() => { card.style.opacity = '1'; }, 10);
                } else {
                    card.style.opacity = '0';
                    card.style.display = 'none';
                }
            });
        });
    });
});
