import { BUTTON_SEAT_DATA } from "@/src/client/constant/data";


const ButtonSign = () => {
    return (
        <div className="flex items-center justify-between p-4 space-x-2">
            {BUTTON_SEAT_DATA.map((value, index) => (
                <div key={index} className="flex items-center justify-center text-md space-x-2">
                    <div className={`h-4 w-4 rounded-full ${value.color}`}></div>
                    <p>{value.text}</p>
                </div>
            ))}
        </div>
    )
}

export default ButtonSign; 