import s from './Edition.module.css';
import { Carousel, Typography, Button } from '@material-tailwind/react';

const Edition = () => {
	return (
		<div className="relative w-full">
			<div className={s.root}>
				<Carousel className="rounded-xl">
					<div className="relative h-full w-full">
						<img
							src="assets/images/edition_1.png"
							alt=""
							className="h-full w-full object-cover absolute"
						/>
						<div className="bg-black/75 ml-[15%] pt-[3em] w-[40%]">
							<div className="min-w-[44px] mx-0 mt-0 mb-[2.4em] relative p-0">
								<h1 className={s.title}>
									<span className="text-[#00ffff]">Founder's Pack</span>
								</h1>
							</div>
							<div className={s.content}>
								<p>
									<br />
								</p>
								<p>
									<span>
										The founder's pack will provide you with what you need to
										start your adventure in the world of EFAS!
									</span>
								</p>
								<p>
									<span>&#xFEFF;&#xFEFF;</span>
								</p>
							</div>
						</div>
					</div>
					<div className="relative h-full w-full">
						<img
							src="assets/images/edition_1.png"
							alt=""
							className="h-full w-full object-cover absolute"
						/>
						<div className="bg-black/75 ml-[15%] pt-[3em] w-[40%]">
							<div className="min-w-[44px] mx-0 mt-0 mb-[2.4em] relative p-0">
								<h1 className={s.title}>
									<span className="text-[#00ffff]">Loverbird's Pack</span>
								</h1>
							</div>
							<div className={s.content}>
								<p>
									<br />
								</p>
								<p>
									<span>
										The founder's pack will provide you with what you need to
										start your adventure in the world of EFAS!
									</span>
								</p>
								<p>
									<span>&#xFEFF;&#xFEFF;</span>
								</p>
							</div>
						</div>
					</div>
					<div className="relative h-full w-full">
						<img
							src="assets/images/edition_1.png"
							alt=""
							className="h-full w-full object-cover absolute"
						/>
						<div className="bg-black/75 ml-[15%] pt-[3em] w-[40%]">
							<div className="min-w-[44px] mx-0 mt-0 mb-[2.4em] relative p-0">
								<h1 className={s.title}>
									<span className="text-[#00ffff]">Paramour's Pack</span>
								</h1>
							</div>
							<div className={s.content}>
								<p>
									<br />
								</p>
								<p>
									<span>
										The founder's pack will provide you with what you need to
										start your adventure in the world of EFAS!
									</span>
								</p>
								<p>
									<span>&#xFEFF;&#xFEFF;</span>
								</p>
							</div>
						</div>
					</div>
					<div className="relative h-full w-full">
						<img
							src="assets/images/edition_1.png"
							alt=""
							className="h-full w-full object-cover absolute"
						/>
						<div className="bg-black/75 ml-[15%] pt-[3em] w-[40%]">
							<div className="min-w-[44px] mx-0 mt-0 mb-[2.4em] relative p-0">
								<h1 className={s.title}>
									<span className="text-[#00ffff]">Emperor's Pack</span>
								</h1>
							</div>
							<div className={s.content}>
								<p>
									<br />
								</p>
								<p>
									<span>
										The founder's pack will provide you with what you need to
										start your adventure in the world of EFAS!
									</span>
								</p>
								<p>
									<span>&#xFEFF;&#xFEFF;</span>
								</p>
							</div>
						</div>
					</div>
				</Carousel>
			</div>
		</div>
	);
};

export default Edition;
