import React, { useState } from "react";

function Protected({component}) {
    const [loading, setLoading] = useState(true);

    if(loading) {
        return (
            <div>Loading...</div>
        );
    }

    return <component />
}