type Props = {
    children: React.ReactNode;
};

const HeaderConatiner = ({ children }: Props) => (
    <div className="w-full">
        {children}
    </div>
);

export default HeaderConatiner;