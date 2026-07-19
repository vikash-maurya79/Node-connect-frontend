import { useContext } from "react"
import { AuthContext } from "../context/authContext"
import { useNavigate } from 'react-router-dom'
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';
import LoadingPage from "../src/LoadingPage";
export const ProtectedRoute = ({ children }) => {
    let navigate = useNavigate();
    let { loading, user } = useContext(AuthContext);
    if (loading) {
        return <LoadingPage />
    }
    if (!user) {
        return navigate("/auth");
    }
    return children;
}