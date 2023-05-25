import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { TravelAirplaneUp } from '@heathmont/moon-icons-tw';


const LandingPage = () => {
    const [loading, setLoading] = useState(false);
    const router = useRouter();
    const loadingCheck = loading ? 'scale-x-150 opacity-80' : 'scale-75';
    useEffect(() => {
        setTimeout(() => {
            setLoading(true)
        }, 2000);

        if (loading) {
            router.push('/home');
        }
    }, [loading, router]);

    
    return (
        <div className="flex flex-col items-center justify-center bg-orange-50 w-screen h-screen">
            <TravelAirplaneUp height={150} width={150} color='white' className={loadingCheck} />
            <h1 className="text-5xl text-white font-bold">Book Flight</h1>
        </div>
    )
}

export default LandingPage;