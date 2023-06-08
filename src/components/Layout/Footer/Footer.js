import s from './Footer.module.css';

const Footer = () => {
	return (
		<div className={s.root}>
			<div className="relative" style={{ minHeight: 'inherit' }}>
				<div className="absolute bottom-0 top-0 z-0 flex items-center justify-center w-full h-full">
					<div
						className="left-0 top-0 absolute z-[1] w-full"
						style={{
							backgroundColor: 'rgba(59, 59, 59, 1)',
							height: 'inherit',
						}}
					></div>
					<div
						className="w-full"
						style={{
							backgroundSize: 'cover',
							backgroundImage: 'url((unknown))',
							backgroundPosition: '50%',
							backgroundRepeat: 'no-repeat',
							height: 'inherit',
						}}
					></div>
				</div>
				<footer className="my-0 mx-auto max-w-[1000px]">
					<div className="flex flex-col items-center justify-center pt-[24px] px-0 pb-[32px]">
						<div className="m-0 w-full">
							<div className="mb-[16px] h-[100px] max-w-[255px] w-full m-auto">
								<div className="flex items-center justify-center relative w-full h-full">
									<div
										className="left-0 top-0 absolute z-[1] w-full"
										style={{
											backgroundColor: 'transparent',
											height: 'inherit',
										}}
									></div>
									<div
										className="w-full"
										style={{
											backgroundSize: 'contain',
											backgroundImage:
												'url(assets/images/logoW.jpg)',
											backgroundPosition: '50%',
											backgroundRepeat: 'no-repeat',
											height: 'inherit',
										}}
									></div>
								</div>
							</div>
							<div className="flex w-full">
								<div className="flex flex-wrap justify-center mb-[16px] w-full items-center">
									<ul
										className="flex flex-wrap justify-center relative"
										style={{ listStyle: 'none' }}
									>
										<li className="mx-[12px] mt-0 mb-[12px]">
											<a
												href="https://t.me/+bSJsSij21V1hNTY0"
												className={s.socialLink}
											>
												<svg
													width="50"
													height="50"
													viewBox="0 0 455 455"
													fill="none"
													xmlns="http://www.w3.org/2000/svg"
													style={{ borderRadius: 'inherit' }}
												>
													<path
														fillRule="evenodd"
														clipRule="evenodd"
														d="M0,0v455h455V0H0z M384.814,100.68l-53.458,257.136
															c-1.259,6.071-8.378,8.822-13.401,5.172l-72.975-52.981c-4.43-3.217-10.471-3.046-14.712,0.412l-40.46,32.981
															c-4.695,3.84-11.771,1.7-13.569-4.083l-28.094-90.351l-72.583-27.089c-7.373-2.762-7.436-13.171-0.084-16.003L373.36,90.959
															C379.675,88.517,386.19,94.049,384.814,100.68z"
														fill="currentColor"
													></path>
													<path
														fillRule="evenodd"
														clipRule="evenodd"
														d="M313.567,147.179l-141.854,87.367c-5.437,3.355-7.996,9.921-6.242,16.068
															l15.337,53.891c1.091,3.818,6.631,3.428,7.162-0.517l3.986-29.553c0.753-5.564,3.406-10.693,7.522-14.522l117.069-108.822
															C318.739,149.061,316.115,145.614,313.567,147.179z"
														fill="currentColor"
													></path>
												</svg>
											</a>
										</li>
										<li className="mx-[12px] mt-0 mb-[12px]">
											<a
												href="https://twitter.com/EOTH_OpenWorld"
												className={s.socialLink}
											>
												<svg
													width="50"
													height="50"
													viewBox="0 0 42 42"
													fill="none"
													xmlns="http://www.w3.org/2000/svg"
													style={{ borderRadius: 'inherit' }}
												>
													<path
														fillRule="evenodd"
														clipRule="evenodd"
														d="M42 0H0V43H42V0ZM31.3205 14.4435C32.3669 14.315 33.3644 14.0274 34.2908 13.6021C33.5997 14.6745 32.7221 15.6153 31.7112 16.3695C31.7201 16.5974 31.7246 16.8299 31.7246 17.0624C31.7246 24.1285 26.5225 32.2746 17.0063 32.2746C14.0864 32.2746 11.3662 31.3889 9.07669 29.8744C9.48072 29.9234 9.89363 29.9478 10.311 29.9478C12.7337 29.9478 14.9655 29.0927 16.7355 27.6577C14.4712 27.6164 12.562 26.0698 11.9034 23.9465C12.2186 24.0092 12.5442 24.0413 12.8772 24.0413C13.3493 24.0413 13.8067 23.9786 14.2403 23.8532C11.8723 23.3636 10.089 21.202 10.089 18.6106V18.5448C10.7875 18.9426 11.5867 19.1858 12.4332 19.2118C11.045 18.2526 10.1319 16.6158 10.1319 14.7617C10.1319 13.7826 10.3865 12.8632 10.8319 12.0708C13.3849 15.3093 17.1958 17.4357 21.4951 17.6591C21.4063 17.2674 21.3619 16.8605 21.3619 16.4414C21.3619 13.4889 23.678 11.0948 26.5329 11.0948C28.0217 11.0948 29.367 11.7434 30.3082 12.7821C31.4893 12.5435 32.5948 12.0983 33.5952 11.4864C33.209 12.7347 32.3891 13.7826 31.3205 14.4435Z"
														fill="currentColor"
													></path>
												</svg>
											</a>
										</li>
										<li className="mx-[12px] mt-0 mb-[12px]">
											<a
												href="https://www.linkedin.com/company/eoth/"
												className={s.socialLink}
											>
												<svg
													width="50"
													height="50"
													viewBox="-1.5 0 19 19"
													fill="#000000"
													xmlns="http://www.w3.org/2000/svg"
													style={{ borderRadius: 'inherit' }}
												>
													<path
														fillRule="evenodd"
														clipRule="evenodd"
														d="M15.917 17.5H.083V1.666h15.834zM5.77 6.427a.96.96 0 0 0-1.032-.96.962.962 0 1 0-.025 1.92h.013a.963.963 0 0 0 1.044-.96zm-.123 1.719H3.803v5.552h1.845zm6.658 2.368c0-1.705-.91-2.5-2.125-2.5a1.832 1.832 0 0 0-1.663.917v-.786H6.67c.025.52 0 5.554 0 5.554h1.848v-3.102a1.264 1.264 0 0 1 .06-.45 1.011 1.011 0 0 1 .946-.676c.67 0 .936.51.936 1.256V13.7h1.846zm-3.8-1.564.013-.019v.019z"
														fill="currentColor"
													></path>
												</svg>
											</a>
										</li>
										<li className="mx-[12px] mt-0 mb-[12px]">
											<a href="/" className={s.socialLink}>
												<svg
													width="50"
													height="50"
													viewBox="0 0 42 42"
													fill="none"
													xmlns="http://www.w3.org/2000/svg"
													style={{ borderRadius: 'inherit' }}
												>
													<path
														fillRule="evenodd"
														clipRule="evenodd"
														d="M0 0H42V43H0V0ZM20.9992 10C17.7402 10 17.3321 10.015 16.0522 10.072C14.7768 10.1305 13.9035 10.3331 13.1413 10.6302C12.3404 10.9312 11.6148 11.4033 11.0151 12.0136C10.4043 12.6131 9.93165 13.3387 9.6302 14.1398C9.3331 14.9035 9.13054 15.7753 9.07202 17.0522C9.01501 18.3321 9 18.7417 9 22.0008C9 25.2598 9.01501 25.6679 9.07202 26.9478C9.13054 28.2247 9.3331 29.0965 9.6302 29.8602C9.93629 30.6495 10.3474 31.3187 11.0136 31.9864C11.6813 32.6526 12.349 33.0637 13.1398 33.3698C13.9035 33.6669 14.7753 33.8695 16.0522 33.928C17.3321 33.9865 17.7402 34 20.9992 34C24.2583 34 24.6679 33.985 25.9478 33.928C27.2247 33.8695 28.0965 33.6669 28.8602 33.3698C29.6611 33.0688 30.3867 32.5967 30.9864 31.9864C31.5967 31.3867 32.0688 30.6611 32.3698 29.8602C32.6669 29.0965 32.8695 28.2247 32.928 26.9478C32.9865 25.6679 33 25.2598 33 22.0008C33 18.7417 32.985 18.3321 32.928 17.0522C32.8695 15.7753 32.6669 14.9035 32.3698 14.1398C32.0688 13.3389 31.5967 12.6133 30.9864 12.0136C30.3867 11.4033 29.6611 10.9312 28.8602 10.6302C28.0965 10.3331 27.2247 10.1305 25.9478 10.072C24.6679 10.0135 24.2583 10 20.9992 10ZM20.9992 12.1622C24.2043 12.1622 24.5839 12.1742 25.8488 12.2327C27.0191 12.2852 27.6538 12.4818 28.077 12.6453C28.6366 12.8629 29.0373 13.1225 29.4574 13.5426C29.8775 13.9627 30.1371 14.3634 30.3547 14.923C30.5197 15.3462 30.7148 15.9809 30.7673 17.1512C30.8258 18.4161 30.8378 18.7957 30.8378 22.0008C30.8378 25.2043 30.8258 25.5839 30.7673 26.8488C30.7148 28.0191 30.5182 28.6538 30.3547 29.077C30.1371 29.6381 29.8775 30.0373 29.4574 30.4574C29.0373 30.8775 28.6366 31.1371 28.077 31.3547C27.6538 31.5197 27.0191 31.7148 25.8488 31.7673C24.5839 31.8258 24.2043 31.8378 20.9992 31.8378C17.7957 31.8378 17.4161 31.8258 16.1512 31.7673C14.9809 31.7148 14.3462 31.5197 13.923 31.3547C13.4016 31.1625 12.9299 30.8559 12.5426 30.4574C12.1441 30.0701 11.8375 29.5984 11.6453 29.077C11.4803 28.6538 11.2852 28.0191 11.2327 26.8488C11.1742 25.5839 11.1622 25.2043 11.1622 22.0008C11.1622 18.7957 11.1742 18.4161 11.2327 17.1512C11.2852 15.9809 11.4803 15.3462 11.6453 14.923C11.8629 14.3634 12.1225 13.9627 12.5426 13.5426C12.9627 13.1225 13.3619 12.8629 13.923 12.6453C14.3462 12.4803 14.9809 12.2852 16.1512 12.2327C17.4161 12.1742 17.7957 12.1622 20.9992 12.1622ZM19.5025 25.644C19.9756 25.8333 20.4814 25.9256 20.9903 25.9157C21.9928 25.8961 22.9476 25.4815 23.6496 24.7608C24.3517 24.0401 24.745 23.071 24.745 22.0615C24.745 21.0521 24.3517 20.0829 23.6496 19.3623C22.9476 18.6416 21.9928 18.2269 20.9903 18.2074C20.4814 18.1975 19.9756 18.2898 19.5025 18.479C19.0294 18.6683 18.5986 18.9506 18.2352 19.3095C17.8717 19.6683 17.5831 20.0966 17.386 20.5691C17.1889 21.0417 17.0874 21.549 17.0874 22.0615C17.0874 22.574 17.1889 23.0814 17.386 23.554C17.5831 24.0265 17.8717 24.4547 18.2352 24.8136C18.5986 25.1725 19.0294 25.4548 19.5025 25.644ZM18.705 16.5489C19.4313 16.256 20.2081 16.1115 20.9903 16.1238C22.5385 16.1481 24.0151 16.7844 25.1014 17.8953C26.1877 19.0062 26.7966 20.5026 26.7966 22.0615C26.7966 23.6205 26.1877 25.1169 25.1014 26.2278C24.0151 27.3387 22.5385 27.975 20.9903 27.9993C20.2081 28.0116 19.4313 27.8671 18.705 27.5742C17.9788 27.2813 17.3177 26.8459 16.7602 26.2933C16.2028 25.7407 15.76 25.082 15.4578 24.3555C15.1556 23.629 15 22.8492 15 22.0615C15 21.2739 15.1556 20.4941 15.4578 19.7676C15.76 19.0411 16.2028 18.3824 16.7602 17.8298C17.3177 17.2772 17.9788 16.8418 18.705 16.5489ZM28.0962 16.8696C28.3547 16.6093 28.5 16.2562 28.5 15.8881C28.5 15.52 28.3547 15.1669 28.0962 14.9066C27.8376 14.6462 27.4869 14.5 27.1213 14.5C26.7556 14.5 26.405 14.6462 26.1464 14.9066C25.8878 15.1669 25.7426 15.52 25.7426 15.8881C25.7426 16.2562 25.8878 16.6093 26.1464 16.8696C26.405 17.13 26.7556 17.2762 27.1213 17.2762C27.4869 17.2762 27.8376 17.13 28.0962 16.8696Z"
														fill="currentColor"
													></path>
												</svg>
											</a>
										</li>
										<li className="mx-[12px] mt-0 mb-[12px]">
											<a href="/" className={s.socialLink}>
												<svg
													width="50"
													height="50"
													viewBox="0 0 42 42"
													fill="none"
													xmlns="http://www.w3.org/2000/svg"
													style={{ borderRadius: 'inherit' }}
												>
													<path
														fillRule="evenodd"
														clipRule="evenodd"
														d="M9.025 8c0 2.485-2.02 4.5-4.513 4.5A4.506 4.506 0 0 1 0 8c0-2.486 2.02-4.5 4.512-4.5A4.506 4.506 0 0 1 9.025 8zm4.95 0c0 2.34-1.01 4.236-2.256 4.236-1.246 0-2.256-1.897-2.256-4.236 0-2.34 1.01-4.236 2.256-4.236 1.246 0 2.256 1.897 2.256 4.236zM16 8c0 2.096-.355 3.795-.794 3.795-.438 0-.793-1.7-.793-3.795 0-2.096.355-3.795.794-3.795.438 0 .793 1.699.793 3.795z"
														fill="currentColor"
													></path>
												</svg>
											</a>
										</li>
									</ul>
								</div>
								{/* <div className="flex flex-col">
									<div
										className="mb-[16px] w-full text-[1em] leading-[1.6em] mx-0 mt-0 min-w-[44px] py-0 px-[0.5em] relative text-center"
										style={{ wordBreak: 'break-word' }}
									>
										<p style={{ textAlign: 'center', wordBreak: 'break-word' }}>
											Contact us
										</p>
										<p style={{ textAlign: 'center', wordBreak: 'break-word' }}>
											&nbsp;contact@multiverseinc.com
										</p>
									</div>
									<div className="flex flex-col justify-center mb-[16px]">
										<div className="flex justify-center mb-[16px]">
											<div className="my-0 mx-[12px] flex h-[48px]">
												<a href="/" className={s.poweredXsollaLink}>
													<div>
														<svg
															xmlns="http://www.w3.org/2000/svg"
															height="48"
															width="48"
														>
															<path
																fill="currentColor"
																d="M0 .012v47.974h47.986V.012H0zM9.455 9.46h3.877v3.877H9.455V9.46zm25.2 0h3.876v3.877h-3.877V9.46zM14.3 14.307h5.816v5.814h-5.816v-5.814zm6.785 0H26.9v5.814h-5.814v-5.814zm6.783 0h5.817v5.814h-5.817v-5.814zm-13.568 6.785h5.816v5.814h-5.816v-5.814zm6.785 0H26.9v5.814h-5.814v-5.814zm6.783 0h5.817v5.814h-5.817v-5.814zm-13.568 6.785h5.814v5.814h-5.814v-5.814zm6.785 0H26.9v5.814h-5.814v-5.814zm6.783 0h5.817v5.814h-5.817v-5.814zM9.455 34.66h3.877v3.877H9.455V34.66zm25.2 0h3.876v3.877h-3.877V34.66z"
															></path>
														</svg>
													</div>
													<div className="border rounded-r-[1.05em] border-l-0 flex flex-col justify-center leading-[1em] pl-[0.8em] uppercase w-[207px]">
														<span className="text-[0.8em] leading-[1.2em] mt-[2px]">
															Powered by
														</span>
														<span className="text-[1em] leading-[1em]">
															Xsolla Site Builder
														</span>
													</div>
												</a>
											</div>
										</div>
									</div>
								</div> */}
							</div>
						</div>

						{/* <div className={s.privacySettingButton}>
							<div className="text-[1em] leading-[1.2em]">
								Do not sell my data &gt;
							</div>
						</div> */}
					</div>
				</footer>
			</div>
		</div>
	);
};

export default Footer;
