import s from './Edition.module.css';
import { Carousel } from '@material-tailwind/react';

const Edition = () => {
	return (
		<div className="relative w-full">
			<Carousel className="rounded-xl">
				<div>
					<img
						src="assets/images/edition_1.png"
						alt=""
						className="h-full w-full object-cover absolute"
					/>
					<div className={s.root}>
						<div className="relative h-full w-full">
							<div className="ml-[15%] pt-[3em] w-[40%]">
								<div className="min-w-[44px] mx-0 mt-0 mb-[2.4em] relative p-0">
									<h1 className={s.title}>
										<span className="text-[#00ffff]">Founder's Pack</span>
									</h1>
								</div>
								<div className={s.content}>
									<p>
										<span>&#xFEFF;</span>
									</p>
									<p>
										<span>&#xFEFF;</span>
									</p>
									<p>
										<span>&#xFEFF;</span>
									</p>
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
									<p>
										<span>&#xFEFF;</span>
									</p>
									<p>
										<span>&#xFEFF;</span>
									</p>
								</div>
								<div className="flex flex-wrap mx-0 mt-0 mb-[4em]">
									<div className="items-start mt-[0.5em] mr-[0.8em] mb-[1em] ml-0 flex flex-col max-w-full z-[2]">
										<a className={s.buyNow} href="/">
											<div
												className="flex flex-col items-center justify-center z-[3]"
												style={{ minWidth: 'inherit', minHeight: 'inherit' }}
											>
												<span className="flex py-0 px-[1.2em] text-[1.2em] leading-4 text-center">
													<span>Buy now</span>
													<span style={{ whiteSpace: 'nowrap' }}>$29.95</span>
												</span>
											</div>
										</a>
									</div>
									<div className="items-start mt-[0.5em] mr-[0.8em] mb-[1em] ml-0 flex flex-col max-w-full z-[2]">
										<a className={s.buyNow} href="/">
											<div className={s.more}>More Details</div>
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div>
					<img
						src="assets/images/edition_1.png"
						alt=""
						className="h-full w-full object-cover absolute"
					/>
					<div className={s.root}>
						<div className="relative h-full w-full">
							<div className="ml-[15%] pt-[3em] w-[40%]">
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
										Conquer planets alongside the fierce Barbara, your faithful
										companion!
									</p>
									<p>
										Barbara is a renowned scientist that uses custom SMGs to
										wreak havoc on the battlefield.
									</p>
									<p>
										She seems ill-equipped to fight but uses replica androids
										made for combat that she controls from her quarters.
									</p>
									<p>Her replicas can even fire lasers!</p>
									<p>
										<span>&#xFEFF;</span>
									</p>
									<p>
										<span>&#xFEFF;</span>
									</p>
								</div>
								<div className="flex flex-wrap mx-0 mt-0 mb-[4em]">
									<div className="items-start mt-[0.5em] mr-[0.8em] mb-[1em] ml-0 flex flex-col max-w-full z-[2]">
										<a className={s.buyNow} href="/">
											<div
												className="flex flex-col items-center justify-center z-[3]"
												style={{ minWidth: 'inherit', minHeight: 'inherit' }}
											>
												<span className="flex py-0 px-[1.2em] text-[1.2em] leading-4 text-center">
													<span>Buy now</span>
													<span style={{ whiteSpace: 'nowrap' }}>$29.95</span>
												</span>
											</div>
										</a>
									</div>
									<div className="items-start mt-[0.5em] mr-[0.8em] mb-[1em] ml-0 flex flex-col max-w-full z-[2]">
										<a className={s.buyNow} href="/">
											<div className={s.more}>More Details</div>
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div>
					<img
						src="assets/images/edition_1.png"
						alt=""
						className="h-full w-full object-cover absolute"
					/>
					<div className={s.root}>
						<div className="relative h-full w-full">
							<div className="ml-[15%] pt-[3em] w-[40%]">
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
										Your conquest of the universe is nothing but a certainty
										with Athena on your team.
									</p>
									<p>
										Daughter of a renowned Famasian general, she was trained
										from birth and is extremely dangerous in all types of
										warfare.
									</p>
									<p>
										You will never see her without her heavy armor that she
										considers her second skin.
									</p>
									<p>Thank the deities she is on your side!</p>
									<p>
										<span>&#xFEFF;</span>
									</p>
								</div>
								<div className="flex flex-wrap mx-0 mt-0 mb-[4em]">
									<div className="items-start mt-[0.5em] mr-[0.8em] mb-[1em] ml-0 flex flex-col max-w-full z-[2]">
										<a className={s.buyNow} href="/">
											<div
												className="flex flex-col items-center justify-center z-[3]"
												style={{ minWidth: 'inherit', minHeight: 'inherit' }}
											>
												<span className="flex py-0 px-[1.2em] text-[1.2em] leading-4 text-center">
													<span>Buy now</span>
													<span style={{ whiteSpace: 'nowrap' }}>$29.95</span>
												</span>
											</div>
										</a>
									</div>
									<div className="items-start mt-[0.5em] mr-[0.8em] mb-[1em] ml-0 flex flex-col max-w-full z-[2]">
										<a className={s.buyNow} href="/">
											<div className={s.more}>More Details</div>
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div>
					<img
						src="assets/images/edition_1.png"
						alt=""
						className="h-full w-full object-cover absolute"
					/>
					<div className={s.root}>
						<div className="relative h-full w-full">
							<div className="ml-[15%] pt-[3em] w-[40%]">
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
										Honor Barbara and Athena by donning the Exosuit of the
										legendary Seraphim on the battlefield!
									</p>
									<p>
										The Seraphim were feared warriors from the Razielim order
										that mysteriously disappeared.
									</p>
									<p>
										Incredible combatant, it said that the presence of a single
										Seraphim was enough to turn the tides of battle.
									</p>
									<p>
										<span>&#xFEFF;</span>
									</p>
									<p>
										<span>&#xFEFF;</span>
									</p>
								</div>
								<div className="flex flex-wrap mx-0 mt-0 mb-[4em]">
									<div className="items-start mt-[0.5em] mr-[0.8em] mb-[1em] ml-0 flex flex-col max-w-full z-[2]">
										<a className={s.buyNow} href="/">
											<div
												className="flex flex-col items-center justify-center z-[3]"
												style={{ minWidth: 'inherit', minHeight: 'inherit' }}
											>
												<span className="flex py-0 px-[1.2em] text-[1.2em] leading-4 text-center">
													<span>Buy now</span>
													<span style={{ whiteSpace: 'nowrap' }}>$29.95</span>
												</span>
											</div>
										</a>
									</div>
									<div className="items-start mt-[0.5em] mr-[0.8em] mb-[1em] ml-0 flex flex-col max-w-full z-[2]">
										<a className={s.buyNow} href="/">
											<div className={s.more}>More Details</div>
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</Carousel>
		</div>
	);
};

export default Edition;
