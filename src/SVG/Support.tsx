type Props = {
	width: string;
	height: string;
	color: string;
};

export const Support = ({ width, height, color }: Props) => {
	return (
		<svg
			width={width}
			height={height}
			color={color}
			viewBox='0 0 25 24'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'>
			<g clip-path='url(#clip0_227_3452)'>
				<g filter='url(#filter0_d_227_3452)'>
					<path
						d='M21.5002 12.22C21.5002 6.73 17.2402 3 12.5002 3C7.81024 3 3.50024 6.65 3.50024 12.28C2.90024 12.62 2.50024 13.26 2.50024 14V16C2.50024 17.1 3.40024 18 4.50024 18H5.50024V11.9C5.50024 8.03 8.63024 4.9 12.5002 4.9C16.3702 4.9 19.5002 8.03 19.5002 11.9V19H11.5002V21H19.5002C20.6002 21 21.5002 20.1 21.5002 19V17.78C22.0902 17.47 22.5002 16.86 22.5002 16.14V13.84C22.5002 13.14 22.0902 12.53 21.5002 12.22Z'
						fill='#191919'
					/>
				</g>
				<path
					d='M9.50024 14C10.0525 14 10.5002 13.5523 10.5002 13C10.5002 12.4477 10.0525 12 9.50024 12C8.94796 12 8.50024 12.4477 8.50024 13C8.50024 13.5523 8.94796 14 9.50024 14Z'
					fill='#191919'
				/>
				<path
					d='M15.5002 14C16.0525 14 16.5002 13.5523 16.5002 13C16.5002 12.4477 16.0525 12 15.5002 12C14.948 12 14.5002 12.4477 14.5002 13C14.5002 13.5523 14.948 14 15.5002 14Z'
					fill='#191919'
				/>
				<path
					d='M18.5002 11.03C18.2618 9.62414 17.5336 8.34797 16.4447 7.42738C15.3557 6.5068 13.9762 6.00117 12.5502 6C9.52021 6 6.26021 8.51 6.52021 12.45C7.75335 11.9454 8.84246 11.1435 9.69044 10.1158C10.5384 9.08808 11.1189 7.86652 11.3802 6.56C12.6902 9.19 15.3802 11 18.5002 11.03Z'
					fill='#191919'
				/>
			</g>
			<defs>
				<filter
					id='filter0_d_227_3452'
					x='-1.49976'
					y='3'
					width='28'
					height='26'
					filterUnits='userSpaceOnUse'
					color-interpolation-filters='sRGB'>
					<feFlood
						flood-opacity='0'
						result='BackgroundImageFix'
					/>
					<feColorMatrix
						in='SourceAlpha'
						type='matrix'
						values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
						result='hardAlpha'
					/>
					<feOffset dy='4' />
					<feGaussianBlur stdDeviation='2' />
					<feComposite
						in2='hardAlpha'
						operator='out'
					/>
					<feColorMatrix
						type='matrix'
						values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0'
					/>
					<feBlend
						mode='normal'
						in2='BackgroundImageFix'
						result='effect1_dropShadow_227_3452'
					/>
					<feBlend
						mode='normal'
						in='SourceGraphic'
						in2='effect1_dropShadow_227_3452'
						result='shape'
					/>
				</filter>
				<clipPath id='clip0_227_3452'>
					<rect
						width='24'
						height='24'
						fill='white'
						transform='translate(0.500244)'
					/>
				</clipPath>
			</defs>
		</svg>
	);
};
