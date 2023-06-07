type Prop = {
    children: React.ReactNode;
};

const AuthLayout = ({ children }: Prop) => {
    return (
			<div className='p-6'>
				<div className='space-y-16'>{children}</div>
			</div>
		);
};

export default AuthLayout;
