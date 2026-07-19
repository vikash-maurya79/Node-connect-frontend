import { createContext, useEffect, useState } from "react";
import axios from 'axios'
import toast from "react-hot-toast";
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    let [loading, setLoading] = useState(true);
    let [user, setUser] = useState(null);
    let [generated, setGenerated] = useState(false);
    let [timer, setTimer] = useState();
    let [loggedIn, setLoggedIn] = useState(false);
    let baseUrl = import.meta.env.VITE_BASE_URL;
    const login = async (email, password) => {
        try {
            setLoading(true);
            let res = await axios.post(`${baseUrl}/user/login`, {
                email,
                password
            },
                {
                    withCredentials: true
                })
            toast.success("Login successfully");
            setLoggedIn(true);
            return true;
        } catch (error) {
            toast.error(error.response.data.message);
            return false;
        } finally {
            setLoading(false);
        }
    }
    const signup = async (email, username, password, userType) => {

        try {

            setLoading(true);
            let res = await axios.post(`${baseUrl}/user/register`, {
                email,
                username,
                password,
                userType,
            })
            console.log(email, username, password, userType);
            toast.success('Account created successfully ');
            return true;
        } catch (error) {
            toast.error(error.response.data.message);
            return false;
        }
        finally {
            setLoading(false);
        }

    }
    async function generateOtp(email) {
        setLoading(true);
        try {
            let res = await axios.post(`${baseUrl}/auth/generate-otp`,
                {
                    email
                },
                {
                    withCredentials: true
                }
            )
            toast.success('Verification code sent to your email');
            setGenerated(true);
            setTimer(60);
            return true;
        } catch (error) {
            toast.error(error.response.data.message);
            return false;
        } finally {
            setLoading(false);
        }
    }
    async function verifyOtp(email, otp) {
        try {
            setLoading(true);
            let res = await axios.post(`${baseUrl}/auth/verify-otp`, {
                email,
                otp
            },
                {
                    withCredentials: true
                })
            toast.success('Otp verified successfully');
            window.location.reload();
            return true;
        } catch (error) {
            toast.error(error.response.data.message);
            return false;
        } finally {
            setLoading(false);
        }
    }
    async function checkAuth() {
        try {
            setLoading(true);
            let res = await axios.get(`${baseUrl}/user/isLoggedin`, { withCredentials: true })
            if (res.status == 200) {
                console.log("Data after check auth", res)
                setUser(res.data.data);
            }
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false);
        }
    }
    useEffect(() => {
        checkAuth();

    }, [loggedIn])
    useEffect(() => {
    }, [user])
    return (
        <AuthContext.Provider value={{ login, loading, user, signup, generateOtp, generated, setGenerated, timer, setTimer, verifyOtp }}>{children}</AuthContext.Provider>
    )
}
