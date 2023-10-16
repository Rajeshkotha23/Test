// script.js

const supportPopup = document.getElementById('support-popup');
const openSupportIcon = document.getElementById('support-icon');
const closeSupportPopupButton = document.getElementById('close-support-popup');
const ticketForm = document.getElementById('ticket-form');
const submitTicketButton = document.getElementById('submit-ticket-button');
const ticketTypeSelect = document.getElementById('ticket-type');
const descriptionTextarea = document.getElementById('description');

openSupportIcon.addEventListener('click', () => {
    supportPopup.style.display = 'block';
});

closeSupportPopupButton.addEventListener('click', () => {
    supportPopup.style.display = 'none';
});

ticketForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Get the selected ticket type and description
    const selectedTicketType = ticketTypeSelect.value;
    const description = descriptionTextarea.value;

    // Prepare the ticket data for submission (you can send it to the admin panel here)
    const ticketData = {
        type: selectedTicketType,
        description: description,
    };

    // Log the ticket data (in a real scenario, send it to the admin panel)
    console.log('Submitted Ticket Data:', ticketData);

    // Reset the form
    ticketForm.reset();

    // Close the support popup
    supportPopup.style.display = 'none';
});

