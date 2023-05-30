import HeaderContainer from '../Header/HeaderContainer/HeaderContainer';
import HeaderItems from '../Header/HeaderItems/HeaderItems';
import PaymentContainer from './PaymentContainer/PymentContainer';
import PaymentSection from './PaymentItems/PaymentSection';
import ViewPayemt from './PaymentItems/ViewPayemt';

const Payment = () => {
	return (
		<PaymentContainer>
			<div className='p-4'>
				<HeaderContainer>
					<HeaderItems
						image={true}
						title='Payement'
					/>
				</HeaderContainer>
			</div>
			<ViewPayemt />
			<PaymentSection />
		</PaymentContainer>
	);
};

export default Payment;
