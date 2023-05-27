type Props = {
    children: React.ReactNode;
};

const NavbarConatiner = ({ children }: Props) => (
    <div className="p-4 bg-orange-50 fixed bottom-0 left-0 right-0">
        {children}
    </div>
);

export default NavbarConatiner;