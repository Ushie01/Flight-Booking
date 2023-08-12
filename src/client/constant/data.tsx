import {
	GenericHome,
	FilesClipboardText,
	TravelMeal,
	MailEnvelope,
	GenericUser,
} from '@heathmont/moon-icons-tw';
import { AirplaneSvg } from '@/src/SVG/AirplaneInFlight';
import { Bank } from '@/src/SVG/Bank';
import { Bookings } from '@/src/SVG/Bookings';
import { Bus } from '@/src/SVG/Bus';
import { Hotel } from '@/src/SVG/Hotel';
import { Rate } from '@/src/SVG/Rate';
import { Support } from '@/src/SVG/Support';
import { Ticket } from '@/src/SVG/Ticket';
import { Travel } from '@/src/SVG/Travel';



export const NAVBAR_DATA = [
	{
		Image: GenericHome,
		text: 'Home',
		route: '/home',
	},
	{
		Image: FilesClipboardText,
		text: 'Booking',
		route: '/my-booking',
	},
	{
		Image: TravelMeal,
		text: 'Offer',
		route: '/offer',
	},
	{
		Image: MailEnvelope,
		text: 'Inbox',
		route: '/inbox',
	},
	{
		Image: GenericUser,
		text: 'Profile',
		route: '/profile',
	},
];

export const BUTTON_SEAT_DATA = [
	{
		text: 'Selected',
		color: 'bg-orange-50',
	},
	{
		text: 'Emergency exit',
		color: 'bg-[#7C7270]',
	},
	{
		text: 'Resvered',
		color: 'bg-[#E3E4E5]',
	},
];

export const LEFT_SEAT = [
	'1A',
	'1B',
	'2A',
	'2B',
	'3A',
	'3B',
	'4A',
	'4B',
	'5A',
	'5B',
	'6A',
	'6B',
	'1C',
	'1D',
];

export const RIGHT_SEAT = [
	'1C',
	'1D',
	'2C',
	'2D',
	'3C',
	'3D',
	'4C',
	'4D',
	'5C',
	'5D',
	'6C',
	'6D',
	'1A',
	'1B',
];


export const SEAT_POSITION = [
	{
		text: 'Flight',
		value: 'IN 230'
	},
	{
		text: 'Gate',
		value: '22'
	},
	{
		text: 'Seat',
		value: '2B'
	},
	{
		text: 'Class',
		value: 'Economy'
	}
];

export const MENU_DATA = [
	{
		icon: Bookings,
		text: 'My Bookings',
		href: 'my-booking',
	},
	{
		icon: Ticket,
		text: 'Boarding Pass',
		href: 'boarding-pass',
	},
	{
		icon: Support,
		text: 'Support',
		href: '#',
	},
	{
		icon: Rate,
		text: 'Rate Us',
		href: '#',
	},
	{
		icon: AirplaneSvg,
		text: 'Flight',
		href: '#',
	},
	{
		icon: Hotel,
		text: 'Hotel',
		href: '#',
	},
	{
		icon: Bus,
		text: 'Bus',
		href: '#',
	},
	{
		icon: Travel,
		text: 'Tour',
		href: '#',
	},
	{
		icon: Bank,
		text: 'Travel loan',
		href: '#',
	},
];