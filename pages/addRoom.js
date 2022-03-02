// @flow 
import { Input,Button,Checkbox, CheckboxGroup } from '@chakra-ui/react';
import * as React from 'react';

export default function addRoom  (props)  {
    const selecttools=(e)=>{
        console.log(e);
    }
    return (
        <div>
            <form method='post' action='/api/rooms/addRoom'>
                <Input name='location' type={'text'} placeholder='location'/>
                <Input name='size' type={'text'} placeholder='size'/>
                <Input name='tools' type={'text'} placeholder='tool'/>
                <CheckboxGroup onChange={selecttools} >
                <Checkbox name={'board'} value={'board'}>
                    board
                  </Checkbox>
                  <Checkbox name={'projector'} value={'projector'}>
                    projector
                  </Checkbox>
                </CheckboxGroup>
                
                <Button variant="primary" type="submit" >Sign up</Button>
            </form>
        </div>
    );
};