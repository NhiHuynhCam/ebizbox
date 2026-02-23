import React, { useEffect, useState } from 'react'
import Loader from './Loader';

const AppReady = ({
    children
}) => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return <Loader />;
    return (
        <>{children}</>
    )
}

export default AppReady