import s from './Newsletter.module.css';

const Newsletter = () => {
	return (
		<div className="relative w-full">
			<div className={s.root}>
				<div className="absolute bottom-0 top-0 z-0 flex items-center h-full justify-center w-full">
					<div
						className="left-0 top-0 absolute z-[1] w-full"
						style={{ backgroundColor: 'rgba(0, 0, 0, 0)', height: 'inherit' }}
					></div>
					<div
						className="w-full"
						style={{
							backgroundSize: 'cover',
							backgroundImage: 'url(assets/images/newsletter.gif)',
							backgroundPosition: '50%',
							backgroundRepeat: 'no-repeat',
							height: 'inherit',
						}}
					></div>
				</div>
				<div className="max-w-[820px] my-0 mx-auto py-[4em] px-[1em]">
					<div className="mx-0 mt-0 mb-[2.4em] py-0 px-[0.5em] text-center min-w-[44px] relative">
						<p className={s.title}>Newsletter</p>
					</div>
					<div className="m-0 flex flex-wrap justify-center">
						<div className="flex flex-col my-[1em] mx-[0.4em] max-w-full z-[2] justify-center w-full">
							<form className="flex flex-col items-center">
								<div className={s.content}>
									<p>
										Don’t feel like backing just yet? No worries, please
										consider giving us your email, we’ll send you updates
										content, lore material, Q&amp;A that might answer your
										questions, and some offers that you wouldn’t want
										to&nbsp;miss!
									</p>
									<p>
										&nbsp;Having you as a subscriber would already be an
										incredible proof of support, so thank you in&nbsp;advance!
									</p>
								</div>
								<div className="inline-flex h-[48px] justify-center relative w-full max-w-[300px] sm:w-[500px] sm:max-w-full">
									<input
										name="email"
										placeholder="Enter your email"
										className="rounded-[21px] text-[1em] font-medium h-full leading-[1.6em] outline-none py-0 px-[50px] text-center w-full"
										style={{
											background: 'hsla(30.19999999999999, 100%, 47.6%, 0.15)',
											border: '1px solid hsl(30.19999999999999, 100%, 47.6%)',
											color: 'currrentcolor',
										}}
									/>
									<button className={s.sendButton}>
										<div className="flex text-[#fffffd] items-center justify-center">
											<svg
												width="24"
												height="24"
												viewBox="0 0 24 24"
												fill="none"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path
													fillRule="evenodd"
													clipRule="evenodd"
													d="M12.1366 5.3637C11.7851 5.71517 11.7851 6.28502 12.1366 6.63649L16.5002 11.0001H4.77295C4.22066 11.0001 3.77295 11.4478 3.77295 12.0001C3.77295 12.5524 4.22066 13.0001 4.77295 13.0001H16.5002L12.1366 17.3637C11.7851 17.7152 11.7851 18.285 12.1366 18.6365C12.488 18.988 13.0579 18.988 13.4093 18.6365L19.4093 12.6365C19.7608 12.285 19.7608 11.7152 19.4093 11.3637L13.4093 5.3637C13.0579 5.01223 12.488 5.01223 12.1366 5.3637Z"
													fill="currentColor"
												></path>
											</svg>
										</div>
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Newsletter;
