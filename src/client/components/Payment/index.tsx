import Header from '../Header';
import PaymentContainer from './PaymentContainer/PymentContainer';
import PaymentSection from './PaymentItems/PaymentSection';
import ViewPayemt from './PaymentItems/ViewPayemt';

const Payment = () => {

	return (
		<PaymentContainer>
			<Header
				title='My Booking'
				backArrow={true}
			/>
			<ViewPayemt />
			<PaymentSection />
		</PaymentContainer>
	);
};

export default Payment;
