import React from 'react';
import VerifyButton from "@passbase/button/react";

function IDVerify() {
    const referenceUserWithKey = (key) => {
        console.log(key)
        // Make request to your backend/db and save the key to the user's profile
    }

    return (
        <div className="App">
            <VerifyButton
                //TODO: Add this to .env file
                apiKey={"UDXHVOt1tXICOwZAmgD3UvyGI4t5oDwIxUvm2ANb4EYggG7CNNhiSFOvXTlteamu"}
                onSubmitted={(identityAccessKey) => {
                    referenceUserWithKey(identityAccessKey)
                }}
                onFinish={(identityAccessKey) => {}}
                onError={(errorCode) => {}}
                onStart={() => {}}
                prefillAttributes={{
                    email: "hans.meier@corp.de"
                }}
            />
        </div>
    );
}

export default IDVerify;