import AddBtnIcon from '@/shared/assets/svgs/btn_add.svg?react';

import FaviconSideBox from '@/pages/TimerPage/components/FaviconSideBox';
import SideBoxTimer from '@/pages/TimerPage/components/SideBoxTimer';
import { Favicon_DATA } from '@/shared/mocks/faviconData';

const SideBoxTemporary = () => {
	return (
		<SideBoxTimer>
			<div className="flex w-[5.4rem] flex-col items-start bg-gray-bg-02">
				<p className="detail-semibold-14 border-b-[0.1rem] border-b-gray-bg-05 py-[1.7rem] pl-[0.3rem] text-gray-04">
					모립세트
				</p>
				<div>
					<p className="detail-semibold-14 mt-[0.8rem] px-[1.2rem] py-[1.3rem] text-white">Web</p>
					<ul>
						{Favicon_DATA.map((item) => (
							<li key={item.id} className="rounded-[1.6rem] px-[1.1rem] py-[1.1rem] hover:bg-gray-bg-04">
								<FaviconSideBox {...item} />
							</li>
						))}
					</ul>
					<AddBtnIcon />
				</div>
				<p className="detail-semibold-14 border-t-[0.1rem] border-t-gray-bg-05 py-[1.3rem] pl-[1.3rem] pr-[1.4rem] text-gray-04">
					App
				</p>
				<AddBtnIcon />
			</div>
		</SideBoxTimer>
	);
};

export default SideBoxTemporary;
