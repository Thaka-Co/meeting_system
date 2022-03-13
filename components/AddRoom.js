// @flow
import { Input, Button, Checkbox, CheckboxGroup } from "@chakra-ui/react";
import * as React from "react";
import { useState } from "react";
export default function AddRoom(props) {
  const [tools, setTools] = useState("");
  const selecttools = (e) => {
    console.log(e);
    setTools(e);
  };
  const addRoom = async (e) => {
    e.preventDefault();
    console.log(e.target.location.value);
    fetch("/api/rooms/addRoom", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        location: e.target.location.value,
        size: e.target.size.value,
        tools,
      }),
    }).then((res) => res.json());
  };
  return (
    <div>
      <form onSubmit={addRoom}>
        <Input name="location" type={"text"} placeholder="location" />
        <Input
          name="size"
          type={"number"}
          placeholder="size"
          pattern={"{0-9}"}
          title="Insert number please"
        />
        <Input type={"text"} placeholder="tool" />
        <CheckboxGroup name={"tools"} onChange={selecttools}>
          <Checkbox name={"board"} value={"board"}>
            board
          </Checkbox>
          <Checkbox name={"projector"} value={"projector"}>
            projector
          </Checkbox>
        </CheckboxGroup>
        <Button variant="primary" type="submit">
          Sign up
        </Button>
      </form>
    </div>
  );
}
