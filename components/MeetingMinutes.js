// @flow
import * as React from "react";
import { Checkbox, Table, Td, Thead, Th, Tr, Input } from "@chakra-ui/react";
import { Router, useRouter } from "next/router";
import en from "../locales/en";
import ar from "../locales/ar";
import { useState, useEffect } from "react";
import SeatPiker from "./Seats/seatPicker";
import { server } from "../config/index.js";
export const MeetingMinutes = (props) => {
  const [speakers, setSpeakers] = useState("");
  const [writer, setWriter] = useState("");
  const [time, setTime] = useState("");
  const [attendence, setAttendence] = useState("");
  const router = useRouter();
  const { locale } = router;
  let t = locale == "en" ? en : ar;
  const id = props.id;
  console.log(id);
  console.log(attendence);
  const selectSpeaker = (e) => {
    console.log(e.target.value);
    // اذا سوا تشك تنضاف للأراي واذا انشال التشك يحذف من الاراي
    e.target.checked
      ? setSpeakers([
          ...speakers,
          { speaker: e.target.value, time: time, isChecked: true },
        ])
      : speakers.splice(speakers.indexOf(e.target.value), 1); //splice
    // console.log(speakers);
  };
  console.log(speakers);
  //console.log(speakers[0].speaker);
  const selectWriter = (e) => {
    console.log(e.target.value);
    e.target.checked
      ? setWriter([...writer, e.target.value])
      : writer.splice(writer.indexOf(e.target.value), 1); //splice
  };
  console.log(writer);
  useEffect(() => {
    getMeetingDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getMeetingDetails = async () => {
    fetch(`${server}/api/meetings/${id}`).then(async (res) => {
      const data = await res.json();
      console.log(data.memebers[0].name);
      setAttendence(data.memebers);
    });
  };
  return (
    <div>
       <SeatPiker  id={props.id}/>
      <Table>
        <Thead>
          <tr>
            <Th>{t.attendance}</Th>
            <Th>{t.speakers}</Th>
            <Th>{t.writter}</Th>
          </tr>
        </Thead>
        <tbody>
          {attendence &&
            attendence.map((item, index) => {
              return (
                <Tr key={index}>
                  <Td>
                    <Checkbox value={item._id}>{item.name}</Checkbox>
                  </Td>
                  <Td>
                    <Checkbox
                      onChange={selectSpeaker}
                      value={item._id}
                    ></Checkbox>
                    {/* {speakers &&
                      speakers.map((ele, index) => {
                        if (ele.speaker == item._id)
                          return (
                            // speakers[item.id-1].speaker ? (
                            <Input
                              key={index}
                              type={"text"}
                              ml={2}
                              width={100}
                              height={30}
                              placeholder="time"
                              name="time"
                              onChange={(e) => {
                                setTime(e.target.value);
                                console.log(speakers);
                                speakers[index].time = e.target.value;
                              }}
                            />
                            // ) : (
                            //   ""
                            // )
                          );
                      })} */}
                  </Td>
                  <Td>
                    <Checkbox
                      onChange={selectWriter}
                      value={item._id}
                    ></Checkbox>
                  </Td>
                </Tr>
              );
            })}
        </tbody>
      </Table>
    </div>
  );
};
