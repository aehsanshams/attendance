import React, { useState } from "react";

function Protected({Component}) {
    const [loading, setLoading] = useState(true);

    if(loading) {
        return (
            <div>Loading...</div>
        );
    }

    return <Component />
}

export default Protected;