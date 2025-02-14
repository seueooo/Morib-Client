import { ButtonHTMLAttributes, ReactNode } from 'react';

interface DateBtnProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	isSelected: boolean;
	children: ReactNode;
}

const DateBtn = ({ isSelected, children, ...props }: DateBtnProps) => {
	const commonBtnStyle = 'flex h-[7.6rem] w-[15.2rem] items-center justify-center text-white ';
	const textStyle = isSelected ? 'head-bold-24' : 'subhead-reg-22';
	const borderStyle = isSelected ? 'border-b-[0.3rem] border-mint-01' : 'border-b-[0.2rem] border-gray-02';

	const groupHoverBorderStyle = isSelected ? '' : 'group-hover:border-b-[0.3rem] group-hover:border-gray-03';

	return (
		<div className="group">
			<button type="button" className={`${commonBtnStyle} ${textStyle}`} {...props}>
				{children}
			</button>
			<hr className={`${borderStyle} ${groupHoverBorderStyle}`} />
		</div>
	);
};

export default DateBtn;
