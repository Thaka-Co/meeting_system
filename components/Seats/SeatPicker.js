import { useState } from "react";
import { useEffect } from "react";
import classes from "./meetingSeats.module.css";
import { server } from "../../config";
import en from "../../locales/en";
import ar from "../../locales/ar";
import { useRouter } from "next/router";
import { Heading } from "@chakra-ui/react";
export default function SeatPiker(props) {
  console.log(props.rows);
  const router = useRouter();
  const { locale } = router;
  let t = locale == "en" ? en : ar;
  // const [users, setUsers] = useState("");
  const [sortedUsers, setSortedUsers] = useState("");
  const [userSort, setUserSort] = useState("");
  useEffect(() => {
    getUserData();
  }, []);
  const getUserData = async () => {
    const id = props.id;
    const data = await fetch(`${server}/api/meetings/${id}`);
    const result = await data.json();
    // setUsers(result.memebers);
    console.log(result);
    sortUsers(result.memebers);
  };
  const sortUsers = (users) => {
    const members = users.sort((a, b) => {
      return a.position - b.position;
    });
    setSortedUsers(members);
    console.log(members);
  };
  // console.log(number, "num", rows);
  const swap = [];
  const selected = (id) => {
    if (swap.length == 1) {
      swap = [...swap, id];
      const temp = sortedUsers[id];
      // swap[0] = swap[1];
      // swap[1] = temp;
      // console.log(temp);
      // setSortedUsers(sortedUsers.splice(swap[0], 0, sortedUsers[swap[1]]));
      // setSortedUsers(sortedUsers.splice(swap[1], 0, sortedUsers[swap[0]]));
      // const swapped = sortedUsers.map((item, index) => {
      //   if ((index = swap[0])) {
      //     // sortedUsers.splice(swap[0],0,sortedUsers[swap[1]]);
      //     sortedUsers[index] = swap[1];
      //   }
      //   if ((index = swap[1])) {
      //     // sortedUsers.splice(swap[1],0,sortedUsers[swap[0]]);
      //     sortedUsers[index] = swap[0];
      //   }
      // });
      // console.log(swapped);
      // setSortedUsers(swapped);
      const swapped = ([sortedUsers[swap[0]], sortedUsers[swap[1]]] = [
        sortedUsers[swap[1]],
        sortedUsers[swap[0]],
      ]);
      //  setSortedUsers(swapped);
      swap.length = 0;
      console.log(swap, swapped, sortedUsers, "swap2");
      setUserSort(sortedUsers);
      setSortedUsers(sortedUsers);
    } else {
      swap.push(id);
      console.log(swap, "swap1");
    }
  };
  return (
    <div>
      <Heading m="10">{t.meetingTable}</Heading>{" "}
      {userSort.length ? (
        <>
          <div className={classes.container}>
            {sortedUsers.map((seats, index) => {
              // return seats.map((seat, index) => {
              //index % 2 == 0 ? classes.block : classes.card
              return (
                <div
                  className={
                    sortedUsers.length % 2 == 1
                      ? index === 0
                        ? classes.block
                        : classes.card
                      : index === 0 || index === sortedUsers.length - 1
                      ? classes.block
                      : classes.card
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
          </div>
        </>
      ) : (
        <>
          {" "}
          <div className={classes.container}>
            {sortedUsers.length
              ? sortedUsers.map((seats, index) => {
                  // return seats.map((seat, index) => {
                  //index % 2 == 0 ? classes.block : classes.card
                  return (
                    <div
                      // اذا عدد القروب فردي يخلي اخر اثنين متقابلين اذا زوجي يصفهم دائره
                      className={
                        sortedUsers.length % 2 == 1
                          ? index === 0
                            ? classes.block
                            : classes.card
                          : index === 0 || index === sortedUsers.length - 1
                          ? classes.block
                          : classes.card
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
                })
              : ""}
          </div>
        </>
      )}
    </div>
  );
}
