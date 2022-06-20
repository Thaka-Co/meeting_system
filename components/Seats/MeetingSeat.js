import SeatPiker from "./seatPicker";
export default function MeetingSeat() {
  console.log("props");
  const rows = [
    {
      id: 1,
      position: 1,
      number: 1,
      name: "sultan",
      isSelected: true,
      tooltip: "Reserved by you",
    },
    { id: 2, position: 2, number: 2, name: "Ibrahim", tooltip: "Cost: 15$" },
    {
      id: 3,
      position: 3,
      number: "3",
      name: "mohammad",
      isReserved: true,
      orientation: "east",
      tooltip: "Reserved by Rogger",
    },
    {
      id: 4,
      position: 4,
      number: "3",
      name: "Safiah",
      isReserved: true,
      orientation: "east",
      tooltip: "Reserved by Rogger",
    },
    {
      id: 5,
      position: 5,
      number: "3",
      name: "Mariam",
      isReserved: true,
      orientation: "east",
      tooltip: "Reserved by Rogger",
    },
    {
      id: 6,
      position: 6,
      number: "3",
      name: "Najla",
      isReserved: true,
      orientation: "east",
      tooltip: "Reserved by Rogger",
    },
    // null,
  ];
  return (
    <div>
      <h1>Seat Picker</h1>
      <div style={{ marginTop: "100px" }}>
        <SeatPiker
          rows={rows}
          maxReservableSeats={6}
          number
          visible
          selectedByDefault
          tooltipProps={{ multiline: true }}
        />
      </div>
    </div>
  );
}
