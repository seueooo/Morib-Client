import ArrowCircleUpRight from '@/shared/assets/svgs/arrow_circle_up_right.svg?react';

interface ButtonGetCategoryRapidlyProps {
	onMoveCategoryModal: () => void;
}

const ButtonGetCategoryRapidly = ({ onMoveCategoryModal }: ButtonGetCategoryRapidlyProps) => {
	return (
		<button
			className="mb-[0.6rem] flex items-center gap-[0.8rem] rounded-[5px] bg-gray-bg-04 px-[1.2rem] py-[0.8rem]"
			onClick={onMoveCategoryModal}
		>
			<div className="pretendard my-[0.15rem] text-[1.4rem] font-normal leading-120 text-white">빠른 불러오기</div>
			<ArrowCircleUpRight className="h-[2rem] w-[2rem]" />
		</button>
	);
};

export default ButtonGetCategoryRapidly;
