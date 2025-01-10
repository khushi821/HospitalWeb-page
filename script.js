document.addEventListener('DOMContentLoaded', () => {
    const bookingForm = document.getElementById('bookingForm');
    const confirmation = document.getElementById('confirmation');
 
    bookingForm?.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const service = document.getElementById('service').value;
        confirmation.innerHTML = `<p>Thank you, ${name}. Your appointment for ${service} has been booked.</p>`;
        bookingForm.reset();
    });
});
