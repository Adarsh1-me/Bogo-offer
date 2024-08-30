
document.querySelectorAll('input[name="offer"]').forEach((input) => {
    input.addEventListener('change', function() {
        document.querySelectorAll('.options').forEach(option => option.style.display = 'none');
        document.querySelectorAll('.offer-card').forEach(card => card.style.backgroundColor = '#fff'); // Reset background color
        
        const selectedOption = document.querySelector(`#options-${this.value}`);
        if (selectedOption) {
            selectedOption.style.display = 'flex';
            selectedOption.closest('.offer-card').style.backgroundColor = '#ffe6ea'; // Highlight selected card
        }
    });
});

document.querySelectorAll('.offer-card').forEach(card => {
    card.addEventListener('click', function () {
        document.querySelectorAll('.offer-card').forEach(c => c.classList.remove('selected'));
        this.classList.add('selected');
        this.querySelector('input[type="radio"]').checked = true;
    });
});
