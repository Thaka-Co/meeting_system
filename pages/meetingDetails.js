import React from 'react';
import MeetingDetails from '../components/MeetingDetails';
import MainNavBar from '../components/navBar/navbar';
function meetingDetails(props) {
    return (
        <div>
            <MainNavBar><MeetingDetails/>  </MainNavBar>
        </div>
    );
}

export default meetingDetails;