import { TimeCalendarDate, TimeClock } from '@heathmont/moon-icons-tw';

type Props = {
	label: string;
	bgText: string;
	value: string;
	icon: JSX.Element;
};

type Prop = {
	bgText: string;
	value: string;
}  
	
export const DateTimeLabel = ({ label, bgText, value, icon }: Props) => {
	return (
		<div className='flex flex-col  items-start justify-center w-full h-16 p-3 space-y-2 rounded-xl border'>
			<p className={`pl-2 pr-2 -mt-8 ${bgText}`}>{label}</p>
			<div className='flex flex-row items-start justify-start w-full pl-2  space-x-3'>
				{icon}
				<p className='font-bold'>{value}</p>
			</div>
		</div>
	);
};


export const TimeLabel = ({bgText, value} : Prop) => {
	return (
		<DateTimeLabel
			icon={
				<TimeClock
					height={27}
					width={27}
				/>
			}
			label='Time'
			bgText={bgText}
			value={value}
		/>
	);
}

export const DateLabel = ({ bgText, value }: Prop) => {
	return (
		<DateTimeLabel
			icon={
				<TimeCalendarDate
					height={27}
					width={27}
				/>
			}
			label='Date'
			bgText={bgText}
			value={value}
		/>
	);
};