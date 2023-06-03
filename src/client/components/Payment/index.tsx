import Header from '../Header';
import PaymentContainer from './PaymentContainer/PymentContainer';
import PaymentSection from './PaymentItems/PaymentSection';
import ViewPayemt from './PaymentItems/ViewPayemt';

const Payment = () => {

	return (
		<PaymentContainer>
			<div className='p-4'>
				<Header
					title='My Booking'
					backArrow={true}
				/>
			</div>
			<ViewPayemt />
			<PaymentSection />
		</PaymentContainer>
	);
};

export default Payment;
