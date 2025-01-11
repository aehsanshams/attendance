import React, { useEffect, useState } from "react";
import { redirect, useNavigate } from "react-router";
import api from 'axios';

function Protected({Component}) {
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();


    const getUser = async () => {
        try{
            //http://localhost/profile.php?param=val&token=sldkfjsdkf
            const response = await api.get('http://localhost/profile.php');
            console.log(response);
            const data = response.data;
            if (!data.loggedIn){
                return navigate('/login');
            }
            setLoading(false);
        }catch (error) {
            console.log(error);
            setErrorMessage('Registration was not successful');
        }

    };

    useEffect(() => {
        getUser();
    }, []);

    if(loading) {
        return (
            <div>Loading...</div>
        );
    }

    return <Component />
}

export default Protected;