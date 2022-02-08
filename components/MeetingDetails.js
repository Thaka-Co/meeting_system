import React from 'react';
import {Input, Text} from '@chakra-ui/react'
function MeetingDetails(props) {
    return (
        <div>
            <Text fontFamily={"cursive"} fontSize={"3rem"} p={5}>Meeting title</Text>
            <Text fontFamily={"cursive"} fontSize={"1rem"} p={5}>location</Text>
            <Text p={5}>first floor</Text>
            <Text fontFamily={"cursive"} fontSize={"1rem"} p={5}>Time</Text>
            <Input p={5} width={300} type={'datetime-local'} disabled></Input>
            <Text fontFamily={"cursive"} fontSize={"3rem"} p={5}>attendance</Text>
            <Text fontFamily={"cursive"} fontSize={"3rem"} p={5}>meeting items</Text>
        </div>
    );
}

export default MeetingDetails;