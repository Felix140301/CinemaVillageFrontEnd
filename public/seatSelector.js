const seatMatrix = document.getElementById("seatMatrix");
const selectedSeatsList = [];
const seats = [];
let seatIndex = 1;

function Seat(id) {
    this.id = id;
    this.available = true; // Corrected the syntax here
}

for (let i = 0; i < 40; i++) {

        const seatId = seatIndex;
        const seat = new Seat(seatId); // Corrected the instantiation here
        seats.push(seat);
        const seatDiv = document.createElement("div");
        const seatIdP=document.createElement("p");
        seatDiv.classList.add("seat");
        seatDiv.classList.add("w-7");
        seatDiv.classList.add("m-4");
        seatDiv.classList.add("border-2");
        seatDiv.classList.add("px-4");
        seatDiv.classList.add("flex");
        seatDiv.classList.add("justify-center")
        seatDiv.id = seatId;
        seatIdP.textContent = seatId;
        seatMatrix.appendChild(seatDiv);
        seatDiv.appendChild(seatIdP);
        
        seatIndex++;
        seatDiv.addEventListener("click", function() { // Changed the event listener function to inline
            selectSeat(seat); // Passed the seat object to selectSeat function
        });
    
}

function selectSeat(seat) {
    if (seat.available) {
        seat.available = false;
        selectedSeatsList.push(seat.id);
        console.log(selectedSeatsList);
        console.log(seat.id,seat.available)
        
        document.getElementById(seat.id).classList.add("selected");
    } else {
        seat.available = true;
        const index = selectedSeatsList.indexOf(seat.id);
        if (index !== -1) {
            selectedSeatsList.splice(index, 1);
        }
        console.log(selectedSeatsList);
        // Update seat appearance or perform any other actions if needed
        document.getElementById(seat.id).classList.remove("selected");
    }
}
