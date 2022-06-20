import classes from "./meetingSeats.module.css";
export default function SeatPiker({
  rows,
  maxReservableSeats,
  number,
  visible,
  selectedByDefault,
  tooltipProps,
}) {
  const members = rows.sort((a, b) => {
    return a.position - b.position;
  });

  console.log(members);
  console.log(number, "num", rows);
  const swap = [];
  const selected = (id) => {
    if (swap.length == 1) {
      swap = [...swap, id];
      const temp = members[id];
      console.log(temp);
      swap.length = 0;
      console.log(swap, "swap2");
    } else {
      swap.push(id);
      console.log(swap, "swap1");
    }
  };
  console.log(swap, "swap");
  return (
    <div className={classes.container}>
      {members.map((seats, index) => {
        // return seats.map((seat, index) => {
        //index % 2 == 0 ? classes.block : classes.card
        return (
          <div
            className={
              index === 0 || index === members.length - 1
                ? classes.se
                : classes.c
            }
          >
            <div
              className={classes.inside}
              key={index}
              onClick={() => {
                selected(index);
              }}
            >
              <p>{seats.position}</p>
              <p>{seats.name}</p>
            </div>
          </div>
        );

        // });
      })}
      {/* <p>{number}</p> */}
    </div>
  );
}
