import { createContext } from "react";
import { useState } from "react";
import toast from "react-hot-toast";
import { useContext } from "react";
import { AuthContext } from "./authContext";
import axios from "axios";
export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    let [loading, setLoading] = useState(true);
    let [users, setUsers] = useState();
    let { user } = useContext(AuthContext);
    let baseUrl = import.meta.env.VITE_BASE_URL;

    async function getUsers() {
        setLoading(true);
        try {
            let res;
            if (user.userType == 'Interviewer') {
                res = await axios.get(`${baseUrl}/getUser/interviewee`, {
                    withCredentials: true
                })
                console.log(res.data);
            }
            else {
                res = await axios.get(`${baseUrl}/getUser/interviewer`, {
                    withCredentials: true
                })
                console.log(res.data);
            }
            setUsers(res.data);
        } catch (error) {
            toast.error('Something went wrong');
        } finally {
            setLoading(false);
        }
    }
    return (
        <UserContext.Provider value={{ loading, users, getUsers }}>{children}</UserContext.Provider>
    )
}