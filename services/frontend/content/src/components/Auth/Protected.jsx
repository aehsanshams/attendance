import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import api from "axios";
import Layout from "../Layout";

function Protected({ Component }) {
    const [loading, setLoading] = useState(true);
    const [errorMessage, setErrorMessage] = useState("");
    const navigate = useNavigate();

    const getUser = async () => {
        try {
            const url = "http://localhost/profile.php?token=" + localStorage.getItem("token");
            const response = await api.get(url);
            const data = response.data;
            if (!data.loggedIn) {
                navigate("/login");
            } else {
                setLoading(false);
            }
        } catch (error) {
            console.error(error);
            setErrorMessage("An error occurred while verifying the user.");
            navigate("/login"); // Redirect to login if there's an error
        }
    };

    useEffect(() => {
        getUser();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (errorMessage) {
        return <div>Error: {errorMessage}</div>;
    }

    return (
        <Layout>
            <Component />
        </Layout>
    );
}

export default Protected;
