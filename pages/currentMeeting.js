// @flow 
import * as React from 'react';
import  CurrentMeeting  from '../components/CurrentMeeting';
import MainNavBar from '../components/navBar/navbar';
function currentMeeting (props) {
    return (
        <div>
            <MainNavBar><CurrentMeeting/></MainNavBar>
            
        </div>
    );
};
export default currentMeeting;