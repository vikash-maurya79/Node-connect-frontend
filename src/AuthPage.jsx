import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import FooterPage from './FooterPage';
import SigninPage from './SigninPage';
import { useState } from 'react';
import SignupPage from './SignupPage';
function AuthPage() {
    let [flag, setFlag] = useState(false);

    return (
        <>
            {flag ? <SignupPage setFlag={setFlag} />
                :
                <SigninPage setFlag={setFlag} />
            }

            <FooterPage />
        </>
    );
}
export default AuthPage;