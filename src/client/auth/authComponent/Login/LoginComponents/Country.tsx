import { StaticImageData } from 'next/image';
import Image from 'next/image';
import React from 'react';


interface Country {
	name: string;
	code: string;
	image: StaticImageData // Image filename (e.g., 'US.png', 'CA.png')
}

interface CountrySelectProps {
	countries: Country[];
	onChange: (code: string) => void;
}

const CountrySelect: React.FC<CountrySelectProps> = ({
	countries,
	onChange
}) => {
	const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		const selectedCode = event.target.value;
		onChange(selectedCode);
		console.log(countries);
	};

	return (
		<select onChange={handleChange} className='w-20'>
			{countries.map((country) => (
				<option
					key={country.code}
					value={country.code}
					className='borderless-input '
					>
						<Image
							src={country.image}
							alt={country.name}
							height={25}
							width={30}
						/>
					{`(${country.code})`}
					<p>+1</p>
				</option>
			))}
		</select>
	);
};

export default CountrySelect;
