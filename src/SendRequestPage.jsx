import Button from '@mui/material/Button';
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Field, FieldGroup } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { TimePicker } from "../utils/TimePicker"
import SendIcon from '@mui/icons-material/Send';
import SendRequest from '../utils/sendRequest.jsx';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../context/authContext';


export function SendRequestPage({ id }) {
    let { user } = useContext(AuthContext);
    let [message, setMessage] = useState();
    let [date, setDate] = useState(undefined);
    let [time, setTime] = useState(undefined);
    console.log("Data on", user.email);
    let data = {
        sendBy: user.userId,
        sendTo: id,
        msg: message,
        date: date,
        time: time,
    }

    return (
        <Dialog>
            <form>
                <DialogTrigger render={<Button variant="outlined" color='success'>Send request</Button>} />
                <DialogContent className="sm:max-w-sm">
                    <DialogHeader>
                        <DialogTitle>Enter interview details </DialogTitle>
                        <DialogDescription>
                            To send interview request enter message , time and date below.
                        </DialogDescription>
                    </DialogHeader>
                    <FieldGroup>
                        <Field>
                            <Label htmlFor="name-1">Message</Label>
                            <Input id="name-1" name="name" placeholder="Enter message (optional)" onChange={(e) => { setMessage(e.target.value) }} />
                        </Field>
                        <Field>
                            <TimePicker setDate={setDate} setTime={setTime} date={date} />
                        </Field>
                    </FieldGroup>
                    <DialogFooter>
                        <DialogClose render={<Button variant="outline" style={{ color: 'red' }}>Cancel</Button>} />
                        <Button size="" color='success' variant='outlined' onClick={() => { SendRequest(data) }}>Send &nbsp;<SendIcon sx={{ fontSize: '16px' }} /></Button>
                    </DialogFooter>
                </DialogContent>
            </form>
        </Dialog>
    )
}
