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
					<source
						src="https://eothwilliam.s3.us-east-1.amazonaws.com/website%20background%20vid.qt.mp4?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCmV1LW5vcnRoLTEiSDBGAiEA%2BM6K34jTeeJ899De%2FfaSSw2vYN%2FsrUfeGZ7Xiz%2BDnZoCIQDn8S5zC0EYZiOsr3B7%2B9gntysBRiSbenogfWVmPPc7HirkAgh7EAAaDDY1NjYwNzE0OTIxOSIM6ejG0cLED7HDetAhKsEC8UC4ELFEq3QMMFwPtAKYxXg4oIzGGFZ0T7SfEj0TQ4NR3MEOL37dnm1xc88u1gF7afEYaTviM9bZqqKOCBCFIf%2F3plooM8xg6%2B%2FTrUpknZmwMvo6MwE%2Bqdrrk13wzt2EBOaLHeG4UXRRV0quTrEec5ReFuHbMA1SEW%2BOXv6vhCZm%2BRTxOQLUNRwbbUCfemZsTbcfYyc%2F6r3RwcqsISyKE%2B22BQYVihoItdaCmEfCCaOjmDt5O%2Bb%2FDakDgR0T3cc0Vy%2BhsQwZOIvqlhCCJqyx29dP4DZh1JCpCzI%2BJSRqqEX3FSW6kPGZBrLzgt469JdN4aprnbnWMh%2BGlKPHAAXpqtLVTmCHTkBsv7JA%2BQfxUhdj%2F5fKBWt6qsM63tHfon8qqJi9JvrOsP%2BYW0dkXRNobpKZUGmxMFBYolTM27D2tZL5MJesiKQGOrICaMdD8pVGqjMcZf4vMzrONksrZ%2B3A96BJQwrzvCkw2GC%2Bd5JO9zgT4dIas6%2FocxB9gAHBzGJMLAnqYYEIEPVn%2BjEDdrgNEJIw6yXXlvX1KDnIefA52%2F7NnmrFoelVa1jPSuWleIW4Jk6uoxyxHo4jaCvr5oach%2F3q0KkiZutbMtjhDBmJJB7Yq3IEn5NvBTWjAlJo7a9rj7FmQYsuSCtAasuwJpsmr3C%2FrvLQEOY7tXotm7OMlZKfn7rxhsQLvul3FRzFI2qbRR34iGDfc%2BfY0uwtvq6hcymrLshiFej3RpNBL0xn0EVWoZl7VEi1iO%2FD1vEnUOz0To0DjSKyT8mgjl%2F%2FCHa0b%2FYcSGoxb7xQdo1Jv0f%2FxHjHJrUh%2Ba5%2BMJM3x5uPEt9vV5L751ZPNxN8AE0P&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230608T193005Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIAZRYGV7SRS76GNK5H%2F20230608%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=51555afec99d8cdc0fdeb5e258a2941106c6710356b448dfc981842f945d546b"
						type="video/mp4"
					/>
					Your browser does not support the video tag.
				</video>
			</div>
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
