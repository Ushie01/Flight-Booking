type Props = {
    width: string;
    height: string;
    color: string;
}

export const ChairSvg = ({width, height, color}: Props) => {
    return (
        <svg
            width={width}
            height={height}
            color={color}
            viewBox="0 0 17 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M13.1666 6V4.00001C13.1666 3.64638 13.0262 3.30724 12.7761 3.0572C12.5261 2.80715 12.1869 2.66667 11.8333 2.66667H5.16665C4.81302 2.66667 4.47389 2.80715 4.22384 3.0572C3.97379 3.30724 3.83331 3.64638 3.83331 4.00001V6" stroke="#555555" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M2.5 7.33333V10.6667C2.5 11.0203 2.64048 11.3594 2.89052 11.6095C3.14057 11.8595 3.47971 12 3.83333 12H13.1667C13.5203 12 13.8594 11.8595 14.1095 11.6095C14.3595 11.3594 14.5 11.0203 14.5 10.6667V7.33333C14.5 6.97971 14.3595 6.64057 14.1095 6.39052C13.8594 6.14048 13.5203 6 13.1667 6C12.813 6 12.4739 6.14048 12.2239 6.39052C11.9738 6.64057 11.8333 6.97971 11.8333 7.33333V8.66667H5.16667V7.33333C5.16667 6.97971 5.02619 6.64057 4.77614 6.39052C4.52609 6.14048 4.18696 6 3.83333 6C3.47971 6 3.14057 6.14048 2.89052 6.39052C2.64048 6.64057 2.5 6.97971 2.5 7.33333V7.33333Z" stroke="#555555" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M3.83331 12V13.3333" stroke="#555555" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M13.1667 12V13.3333" stroke="#555555" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    )
}

