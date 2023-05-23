import s from './Introduction.module.css';

const Introduction = () => {
	return (
		<div className="w-full h-full mt-[100px] z-[1] flex justify-center">
			<div className={s.root}>
				<div className="w-[35%]">
					<img src="assets/images/IntroImage.png" alt="" />
				</div>
				<div className="px-4 py-16">
					<div
						className="mx-0 mt-0 mb-[2.4rem] py-0 px-2 min-w-[44px] relative text-center"
						style={{ wordBreak: 'break-word' }}
					>
						<p className={s.title}>Play the Alpha</p>
						<p className={s.content}>
							Support our development by purchasing any pack (33% off retail
							price) of Earth From Another Sun, and get immediate access to the
							newest build of the game plus every bi-weekly update, forever!
						</p>
					</div>
					<div className="flex flex-wrap justify-center m-0">
						<div className={s.watchTrailer}>
							<a href="/">
								<div>Watch The Trailer</div>
							</a>
						</div>
						<div className={s.becomeBacker}>
							<a href="/">
								<div>Become a backer now</div>
							</a>
						</div>
						<div className="flex flex-col my-[1em] mx-[0.4em] max-w-full z-[2] w-full">
							<div>
								<div className="tracking-[0.2em] uppercase mb-[0.5em] text-[0.9em] leading-[1.6em] min-w-[44px] text-center py-0 px-[0.5em]">
									<p>Available For</p>
								</div>
								<div className="flex justify-center">
									<div
										className="flex-wrap p-0 flex justify-center"
										style={{ listStyle: 'none' }}
									>
										<svg
											width="56"
											height="56"
											viewBox="0 0 56 56"
											fill="currentColor"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M0 12.3853L15.1647 14.4753V1.52112e-07H0V12.3853Z"
												transform="translate(9 28.5231)"
												fill="currentColor"
											></path>
											<path
												d="M0 14.6532H15.1647V-9.98234e-08L0 2.09002V14.6532Z"
												transform="translate(9 12.0018)"
												fill="currentColor"
											></path>
											<path
												d="M-1.71126e-07 14.6981L20.1676 17.4772V0.000233796V-3.13731e-07H-1.71126e-07V14.6981Z"
												transform="translate(25.8325 28.5228)"
												fill="currentColor"
											></path>
											<path
												d="M2.94717e-07 2.77943V17.6551H20.1674V0L2.94717e-07 2.77943Z"
												transform="translate(25.8326 9)"
											></path>
										</svg>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Introduction;
