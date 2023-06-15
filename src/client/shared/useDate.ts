export const useDate = (timeValue: string) => {
	const date = new Date(timeValue);
	const formattedDate = date.toLocaleDateString('en-US', {
		month: 'numeric',
		day: 'numeric',
		year: 'numeric',
	});

	return { formattedDate };
};

