import s from './Footer.module.css';

const Footer = () => {
	return (
		<div className={s.root}>
			<div className="relative" style={{ minHeight: 'inherit' }}>
				<div className="absolute bottom-0 top-0 z-0 flex items-center justify-center w-full h-full">
					<div
						className="left-0 top-0 absolute z-[1] w-full"
						style={{
							backgroundColor: 'rgba(13, 21, 28, 1)',
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
											backgroundImage: 'url(assets/images/logoW.png)',
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
										{/* <li className="mx-[12px] mt-0 mb-[12px]">
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
										</li> */}
										<li className="mx-[12px] mt-0 mb-[12px]">
											<a
												href="https://youtube.com/@EOTH_OpenWorld"
												className={s.socialLink}
											>
												<svg
													width="50"
													height="50"
													viewBox="-143 145 512 512"
													fill="none"
													xmlns="http://www.w3.org/2000/svg"
													style={{ borderRadius: 'inherit' }}
												>
													<g>
														<polygon
															points="78.9,450.3 162.7,401.1 78.9,351.9 	"
															fill="currentColor"
														/>
														<path
															fillRule="evenodd"
															clipRule="evenodd"
															d="M113,145c-141.4,0-256,114.6-256,256s114.6,256,256,256s256-114.6,256-256S254.4,145,113,145z M241,446.8L241,446.8
														c0,44.1-44.1,44.1-44.1,44.1H29.1c-44.1,0-44.1-44.1-44.1-44.1v-91.5c0-44.1,44.1-44.1,44.1-44.1h167.8c44.1,0,44.1,44.1,44.1,44.1
														V446.8z"
															fill="currentColor"
														></path>
													</g>
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
													viewBox="-143 145 512 512"
													fill="none"
													xmlns="http://www.w3.org/2000/svg"
													style={{ borderRadius: 'inherit' }}
												>
													<path
														fillRule="evenodd"
														clipRule="evenodd"
														d="M113,145c-141.4,0-256,114.6-256,256s114.6,256,256,256s256-114.6,256-256S254.4,145,113,145z M215.2,361.2
														c0.1,2.2,0.1,4.5,0.1,6.8c0,69.5-52.9,149.7-149.7,149.7c-29.7,0-57.4-8.7-80.6-23.6c4.1,0.5,8.3,0.7,12.6,0.7
														c24.6,0,47.3-8.4,65.3-22.5c-23-0.4-42.5-15.6-49.1-36.5c3.2,0.6,6.5,0.9,9.9,0.9c4.8,0,9.5-0.6,13.9-1.9
														C13.5,430-4.6,408.7-4.6,383.2v-0.6c7.1,3.9,15.2,6.3,23.8,6.6c-14.1-9.4-23.4-25.6-23.4-43.8c0-9.6,2.6-18.7,7.1-26.5
														c26,31.9,64.7,52.8,108.4,55c-0.9-3.8-1.4-7.8-1.4-12c0-29,23.6-52.6,52.6-52.6c15.1,0,28.8,6.4,38.4,16.6
														c12-2.4,23.2-6.7,33.4-12.8c-3.9,12.3-12.3,22.6-23.1,29.1c10.6-1.3,20.8-4.1,30.2-8.3C234.4,344.5,225.5,353.7,215.2,361.2z"
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
													viewBox="-143 145 512 512"
													fill="#000000"
													xmlns="http://www.w3.org/2000/svg"
													style={{ borderRadius: 'inherit' }}
												>
													<path
														fillRule="evenodd"
														clipRule="evenodd"
														d="M113,145c-141.4,0-256,114.6-256,256s114.6,256,256,256s256-114.6,256-256S254.4,145,113,145z M41.4,508.1H-8.5V348.4h49.9
														V508.1z M15.1,328.4h-0.4c-18.1,0-29.8-12.2-29.8-27.7c0-15.8,12.1-27.7,30.5-27.7c18.4,0,29.7,11.9,30.1,27.7
														C45.6,316.1,33.9,328.4,15.1,328.4z M241,508.1h-56.6v-82.6c0-21.6-8.8-36.4-28.3-36.4c-14.9,0-23.2,10-27,19.6
														c-1.4,3.4-1.2,8.2-1.2,13.1v86.3H71.8c0,0,0.7-146.4,0-159.7h56.1v25.1c3.3-11,21.2-26.6,49.8-26.6c35.5,0,63.3,23,63.3,72.4V508.1z
														"
														fill="currentColor"
													></path>
												</svg>
											</a>
										</li>
										<li className="mx-[12px] mt-0 mb-[12px]">
											<a
												href="https://discord.gg/KQZ8nGTW"
												className={s.socialLink}
											>
												<svg
													width="50"
													height="50"
													viewBox="0 0 1024 1024"
													fill="none"
													xmlns="http://www.w3.org/2000/svg"
													style={{ borderRadius: 'inherit' }}
												>
													<circle
														cx="512"
														cy="512"
														r="512"
														style={{ fill: 'currentColor' }}
													/>
													<path
														fillRule="evenodd"
														clipRule="evenodd"
														d="M689.43 349a422.21 422.21 0 0 0-104.22-32.32 1.58 1.58 0 0 0-1.68.79 294.11 294.11 0 0 0-13 26.66 389.78 389.78 0 0 0-117.05 0 269.75 269.75 0 0 0-13.18-26.66 1.64 1.64 0 0 0-1.68-.79A421 421 0 0 0 334.44 349a1.49 1.49 0 0 0-.69.59c-66.37 99.17-84.55 195.9-75.63 291.41a1.76 1.76 0 0 0 .67 1.2 424.58 424.58 0 0 0 127.85 64.63 1.66 1.66 0 0 0 1.8-.59 303.45 303.45 0 0 0 26.15-42.54 1.62 1.62 0 0 0-.89-2.25 279.6 279.6 0 0 1-39.94-19 1.64 1.64 0 0 1-.16-2.72c2.68-2 5.37-4.1 7.93-6.22a1.58 1.58 0 0 1 1.65-.22c83.79 38.26 174.51 38.26 257.31 0a1.58 1.58 0 0 1 1.68.2c2.56 2.11 5.25 4.23 8 6.24a1.64 1.64 0 0 1-.14 2.72 262.37 262.37 0 0 1-40 19 1.63 1.63 0 0 0-.87 2.28 340.72 340.72 0 0 0 26.13 42.52 1.62 1.62 0 0 0 1.8.61 423.17 423.17 0 0 0 128-64.63 1.64 1.64 0 0 0 .67-1.18c10.68-110.44-17.88-206.38-75.7-291.42a1.3 1.3 0 0 0-.63-.63zM427.09 582.85c-25.23 0-46-23.16-46-51.6s20.38-51.6 46-51.6c25.83 0 46.42 23.36 46 51.6.02 28.44-20.37 51.6-46 51.6zm170.13 0c-25.23 0-46-23.16-46-51.6s20.38-51.6 46-51.6c25.83 0 46.42 23.36 46 51.6.01 28.44-20.17 51.6-46 51.6z"
														fill="#000"
													></path>
												</svg>
											</a>
										</li>
										<li className="mx-[12px] mt-0 mb-[12px]">
											<a
												href="https://eoth.medium.com/"
												className={s.socialLink}
											>
												<svg
													width="50"
													height="50"
													viewBox="0 0 1024 1024"
													fill="none"
													xmlns="http://www.w3.org/2000/svg"
													style={{ borderRadius: 'inherit' }}
												>
													<path
														fillRule="evenodd"
														clipRule="evenodd"
														d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm256 253.7l-40.8 39.1c-3.6 2.7-5.3 7.1-4.6 11.4v287.7c-.7 4.4 1 8.8 4.6 11.4l40 39.1v8.7H566.4v-8.3l41.3-40.1c4.1-4.1 4.1-5.3 4.1-11.4V422.5l-115 291.6h-15.5L347.5 422.5V618c-1.2 8.2 1.7 16.5 7.5 22.4l53.8 65.1v8.7H256v-8.7l53.8-65.1a26.1 26.1 0 0 0 7-22.4V392c.7-6.3-1.7-12.4-6.5-16.7l-47.8-57.6V309H411l114.6 251.5 100.9-251.3H768v8.5z"
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
