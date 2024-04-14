document.addEventListener('DOMContentLoaded', function () {
    // Script for handling registration form display
    var registrationLink = document.getElementById('registration-link');
    var homePage = document.getElementById('home');
    var registrationForm = document.getElementById('registration-form');

    registrationLink.addEventListener('click', function (event) {
        event.preventDefault();
        homePage.style.display = 'none';
        registrationForm.style.display = 'block';
    });

    // Script for handling hotel booking form
    const bookingForm = document.getElementById('hotel-booking-form');
    const bookingResultsSection = document.getElementById('booking-results');
    const checkAvailabilityButton = document.getElementById('check-availability');

    checkAvailabilityButton.addEventListener('click', function(event) {
        event.preventDefault();

        const checkInDate = document.getElementsByName('checkin')[0].value;
        const checkOutDate = document.getElementsByName('check-out-date')[0].value;
        const guests = document.getElementsByName('guests')[0].value;

        // Simulated backend call to check room availability
        const availableRooms = checkRoomAvailability(checkInDate, checkOutDate, guests);

        // Display available rooms
        displayAvailableRooms(availableRooms);
    });

    function checkRoomAvailability(checkInDate, checkOutDate, guests) {
        // Simulated database of available rooms
        const availableRooms = [
            { id: 1, type: 'Single', price: 100 },
            { id: 2, type: 'Double', price: 150 },
            { id: 3, type: 'Suite', price: 250 }
            // Add more rooms as needed
        ];

        // Simulated logic to filter available rooms based on check-in/out dates and number of guests
        // For simplicity, all rooms are considered available
        return availableRooms;
    }

    function displayAvailableRooms(availableRooms) {
        const roomsList = document.getElementById('rooms-list');
        roomsList.innerHTML = '';

        availableRooms.forEach(room => {
            const roomElement = document.createElement('div');
            roomElement.classList.add('room');
            roomElement.innerHTML = `
                <h3>${room.type} Room</h3>
                <p>Price: $${room.price} per night</p>
                <button onclick="bookRoom(${room.id})">Book Now</button>
            `;
            roomsList.appendChild(roomElement);
        });

        bookingResultsSection.classList.remove('hidden');
    }
    
    window.bookRoom = function(roomId) {
        // Simulated function to book a room
        const bookedRoom = roomId; // You can handle booking logic here
        alert(`Room ${roomId} booked successfully!`);
    };


        // Script for handling navigation to the contact section
        var contactLink = document.getElementById('contact-link');

    });
