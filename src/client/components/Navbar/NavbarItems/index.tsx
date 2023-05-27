import { useRouter } from "next/router";
import Link from "next/link";
import { NAVBAR_DATA } from "@/src/client/constant/data";



const NavbarItems = () => {
    const router = useRouter();
    const pathname = router.pathname;

    return (
        <div className='flex flex-row text-gray-500 space-x-2 h-20 w-full p-5 items-center justify-between bg-orange-50 fixed left-0 right-0 bottom-0 border-t-2'>
            {NAVBAR_DATA.map((value, index) => (
                <Link href={value.route} key={index}>
                    <button className='flex flex-col items-center justify-center'>
                        {pathname === value.route ?
                            <value.Image height={44} width={44} color="white" />
                            :
                            <value.Image height={44} width={44} className="text-white opacity-75" />
                        }
                        <p className={`${pathname === value.route ? 'text-white' : 'text-white opacity-75'} font-bold text-xs`}>
                            {value.text}
                        </p>
                    </button>
                </Link>
            ))}
        </div>
    );
}

export default NavbarItems;
