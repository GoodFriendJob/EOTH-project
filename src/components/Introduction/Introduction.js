import s from './Introduction.module.css';

const Introduction = () => {
	return (
		<div className="w-full h-full z-[1] flex justify-center relative">
			<div className="absolute bottom-0 top-10 z-0 items-center h-full justify-center w-full hidden lg:flex">
				{/* <div className="w-full h-0 relative pb-[56.25%]">
					<iframe
						src="https://streamable.com/e/2jp8l9"
						frameBorder="0"
						width="100%"
						height="100%"
						allowFullScreen
						className="w-full h-full absolute"
						title="adf"
					></iframe>
				</div> */}
				<video
					autoPlay
					muted
					loop
					className="w-full h-full"
					style={{ objectFit: 'unset' }}
				>
					<source src="http://135.181.125.114/intro.mp4" type="video/mp4" />
					Your browser does not support the video tag.
				</video>
			</div>
			<div className={s.root}>
				<div className="w-[35%]">
					<img
						src="https://1505511664-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2Fj5Y4UUWAjTekRlSF59vc%2Fuploads%2FXmJyqZXUP5mcpPxGsyfI%2FEOTH_LOGO_LARGE_WHITE-removebg-preview.png?alt=media&token=d37c5695-59a3-4769-bbc5-df21c70eb17f)"
						alt=""
					/>
				</div>
				<div className="px-4 py-16">
					<div
						className="mx-0 mt-0 mb-[2.4rem] py-0 px-2 min-w-[44px] relative text-center"
						style={{ wordBreak: 'break-word' }}
					>
						{/* <p className={s.title}>Play the Alpha</p>
						<p className={s.content}>
							Support our development by purchasing any pack (33% off retail
							price) of Earth From Another Sun, and get immediate access to the
							newest build of the game plus every bi-weekly update, forever!
						</p> */}
					</div>
					<div className="flex flex-wrap justify-center m-0">
						<div className={s.watchTrailer}>
							<a href="/">
								<div>JOIN PRESALE</div>
							</a>
						</div>
						<div className={s.becomeBacker}>
							<a href="https://youtu.be/jX7qFLH8-c4">
								<div>WATCH INTRO</div>
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
