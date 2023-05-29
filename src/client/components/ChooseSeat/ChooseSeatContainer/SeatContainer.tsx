type Props = {
    children: React.ReactNode;
}

const SeatContainer = ({children}: Props) => {
    return (
        <div className="">
            {children}
        </div>
    )
}

export default SeatContainer;