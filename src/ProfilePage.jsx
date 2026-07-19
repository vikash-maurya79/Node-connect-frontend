import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useContext } from 'react'
import { useEffect } from 'react';
import { Spinner } from './components/ui/spinner';
import { UserContext } from '../context/userContext';
import { AuthContext } from '../context/authContext';
import { SendRequestPage } from './SendRequestPage';

const ProfilePage = () => {
    let { loading, users, getUsers } = useContext(UserContext);
    let { user } = useContext(AuthContext);
    useEffect(() => {
        if (!user) return;
        getUsers();
    }, [user])
    return (
        <div className='profile-container p-5'>

            {loading ? <Spinner /> :
                <>
                    {users.result.map((el, id) => (
                        <div className='profile-card-user'>
                            <Card sx={{ maxWidth: 345 }}>
                                <CardContent>
                                    <div style={{ backgroundColor: '', height: 140, width: '100%' }} className='profile-card bg-olive-50'>
                                        <div style={{ backgroundColor: 'white', height: '80%', width: '35%', borderRadius: '50%', backgroundImage: "url('vikash.png')" }} className='profile-circle'></div>
                                    </div>
                                    <Typography gutterBottom variant="h7" component="div">
                                        {el.username}
                                    </Typography>
                                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                        Lizards are a widespread group of squamate reptiles, with over 6,000
                                        species, ranging across all continents except Antarctica
                                    </Typography>
                                </CardContent>
                                <CardActions className='mb-2'>
                                    <SendRequestPage id={el._id} />
                                    <Button size="small">View more..</Button>
                                </CardActions>
                            </Card>
                        </div>
                    ))}
                </>
            }
        </div>
    )
}

export default ProfilePage
