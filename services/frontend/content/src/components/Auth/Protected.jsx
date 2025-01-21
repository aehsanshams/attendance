import React, { useEffect, useState } from "react";
import { redirect, useNavigate } from "react-router";
import api from 'axios';
import Layout from "../Layout";
function Protected({ Component }) {
    const [loading, setLoading] = useState(true);
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();


    const getUser = async () => {
        try {
            //http://localhost/profile.php?param=val&token=sldkfjsdkf
            const url = 'http://localhost/profile.php?token=' + localStorage.getItem('token');
            const response = await api.get(url);
            console.log(response);
            const data = response.data;
            if (!data.loggedIn) {
                return navigate('/login');
            }
            setLoading(false);
        } catch (error) {
            console.log(error);
            setErrorMessage('Registration was not successful');
        }

    };

    useEffect(() => {
        getUser();
    }, []);

    if (loading) {
        return (
            <div>Loading...</div>
        );
    }

    return (
        <Layout>
            <Component />
        </Layout>

    )
}

export default Protected;