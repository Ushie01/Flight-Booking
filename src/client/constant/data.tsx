import {
	GenericHome,
	FilesClipboardText,
	TravelMeal,
	MailEnvelope,
	GenericUser,
} from '@heathmont/moon-icons-tw';

export const NAVBAR_DATA = [
	{
		Image: GenericHome,
		text: 'Home',
		route: '/home',
	},
	{
		Image: FilesClipboardText,
		text: 'Booking',
		route: '/booking',
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
