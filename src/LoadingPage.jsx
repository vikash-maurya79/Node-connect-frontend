import React from 'react'

import { Spinner } from './components/ui/spinner'
const LoadingPage = () => {
    return (
        <div className="flex items-center justify-center gap-4 h-screen w-screen ">
            <Spinner />
        </div>
    )
}
export default LoadingPage;
