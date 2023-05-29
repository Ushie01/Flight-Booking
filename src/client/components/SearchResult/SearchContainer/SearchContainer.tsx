type Props = {
    children: React.ReactNode;
}

const SearchContainer = ({ children }: Props) => {
    return (
        <div className="p-4 w-full">
            {children}
        </div>
    )
}

export default SearchContainer;