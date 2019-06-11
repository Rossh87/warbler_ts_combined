import React, { useEffect, useState } from 'react';
import {History} from 'history';
import {match} from 'react-router-dom'

// Get UI deps
import {Dialog, DialogTitle, TextField, Button, DialogContent, DialogActions} from '@material-ui/core';

// Get function to send new message to API for creation in the backend
import {createMessage} from '../../utils/networkSvcs';

interface Props {
    history: History
};

const MessageForm: React.FC<Props> = ({history}) => {
    const [msgText, setMsgText] = useState('');

    const onSubmit = async () => {
        try {
            await createMessage('http://localhost:8001/api/messages/create', msgText);
            history.goBack();
        }

        catch(err) {
            // TODO: add error handling
        }
    }

    return(
        <Dialog onClose={() => history.goBack()} open>
            <DialogTitle>
                Enter a message!
            </DialogTitle>

            <DialogContent>
                <TextField
                    onChange={(e) => {setMsgText(e.target.value)}}
                    id="msgTextInput"
                    required
                    label="Message Text"
                ></TextField>
            </DialogContent>

            <DialogActions>
                <Button variant='contained' onClick={()=> {
                    onSubmit();
                }}>
                        Submit
                </Button>
            </DialogActions>
                
        </Dialog>
    )
}

export default MessageForm;