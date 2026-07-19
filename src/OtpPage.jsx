"use client"
import { RefreshCwIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { REGEXP_ONLY_DIGITS } from "input-otp"
import {
    Field,
    FieldLabel,
} from "@/components/ui/field"

import {
    InputOTP,
    InputOTPGroup,
    InputOTPSlot,
} from "@/components/ui/input-otp"
import { useState } from "react"
import { useEffect } from "react"
import { AuthContext } from "../context/authContext"
import { useContext } from "react"
import toast from "react-hot-toast"


export function OtpPage({ email, setFlag, setOtpPage }) {


    let [timercheck, setTimerCheck] = useState(false);
    let [otp, setOtp] = useState();

    let { generateOtp, loading, generated, setGenerated, timer, setTimer, verifyOtp } = useContext(AuthContext);
    useEffect(() => {
        setTimerCheck(true);
        let interval = setInterval(() => { setTimer(timer - 1) }, 1000);
        if (timer === 0) {
            setTimerCheck(false);
            clearInterval(interval);
        }
        return () => { clearInterval(interval) };
    }, [timer, timercheck])

    function genOtpHandler() {
        generateOtp(email);
    }

    function verOtpHandler() {
        if (otp === undefined) {
            toast.error('Enter otp')
            return;
        }
        verifyOtp(email, otp);
    }

    return (
        <div className="otp-container h-screen w-screen">
            <Card className="mx-auto max-w-md">
                <CardHeader>
                    <CardTitle>Verify your email</CardTitle>
                    <CardDescription>
                        {generated ? `We sent a  4 digit verification code to your email : ${email}` :
                            `We will send the verification code to your email : ${email}`}
                        <span className="font-medium"></span>.
                    </CardDescription>
                </CardHeader>
                {generated ?
                    <CardContent>
                        <Field>
                            <div className="flex items-center justify-between">
                                <FieldLabel htmlFor="otp-verification">
                                    Enter verification code
                                </FieldLabel>
                                {timercheck ? <p>{timer}</p> :
                                    <Button variant="outline" size="xs" onClick={genOtpHandler}>
                                        <RefreshCwIcon />
                                        Resend Code
                                    </Button>
                                }
                            </div>
                            <InputOTP maxLength={4} pattern={REGEXP_ONLY_DIGITS} onChange={(e) => { setOtp(e) }}>
                                <InputOTPGroup >
                                    <InputOTPSlot index={0} />
                                    <InputOTPSlot index={1} />
                                    <InputOTPSlot index={2} />
                                    <InputOTPSlot index={3} />
                                </InputOTPGroup>
                            </InputOTP>

                        </Field>
                    </CardContent>
                    : ''}
                <CardFooter>
                    <Field>
                        {generated ?
                            <Button type="submit" className="w-full" onClick={verOtpHandler}>
                                {loading ? '....' : 'Verify'}
                            </Button> :
                            <Button type="submit" className="w-full" onClick={genOtpHandler}>
                                {loading ? '....' : 'Get verification code'}
                            </Button>
                        }

                        <div className="text-sm text-muted-foreground">
                            Having trouble signing in?{" "}
                            <a
                                href="#"
                                className="underline underline-offset-4 transition-colors hover:text-primary"
                            >
                                Contact support
                            </a>
                        </div>
                    </Field>
                </CardFooter>
            </Card>
        </div>
    )
}






