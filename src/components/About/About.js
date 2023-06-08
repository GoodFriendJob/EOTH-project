import s from './About.module.css';

const About = () => {
	return (
		<div
			className="relative w-full overflow-hidden"
			style={{
				background:
					'radial-gradient(ellipse at bottom, #1B2735 0%, #090A0F 100%)',
			}}
		>
			<div className={s.root}>
				{/* <div className="absolute bottom-0 top-0 z-0 flex items-center h-full justify-center w-full">
					<div
						className="left-0 top-0 absolute z-[1] w-full"
						style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)', height: 'inherit' }}
					></div>
					<div
						className="w-full"
						style={{
							backgroundSize: 'cover',
							backgroundImage: 'url(assets/images/about.jpg)',
							backgroundPosition: '50%',
							backgroundRepeat: 'no-repeat',
							height: 'inherit',
						}}
					></div>
				</div> */}
				<div className="max-w-[1180px] my-0 mx-auto py-[4em] px-[1em]">
					<div className="flex flex-col z-[2] relative">
						<div className="flex items-center justify-center mx-0 mt-0 mb-[2.5em] relative text-center">
							<div className="my-0 mx-[0.3em] py-0 px-[0.2em] text-center uppercase min-w-[44px] relative">
								<p className={s.title}>About Echo Of The Horizon</p>
							</div>
						</div>
						<div className="h-[580px] mx-0 mt-0 mb-[1em]">
							<div className="flex items-center justify-center h-full w-full relative">
								<div
									className="bg-transparent left-0 top-0 w-full z-[1] absolute"
									style={{ height: 'inherit' }}
								></div>
								<div
									style={{
										backgroundSize: 'contain',
										backgroundImage: 'url(assets/images/about.jpg)',
										backgroundPosition: '50%',
										backgroundRepeat: 'no-repeat',
										height: 'inherit',
										width: '100%',
									}}
								></div>
							</div>
						</div>
					</div>
					<div className="flex flex-col">
						<div className={s.content}>
							<p>
								<br />
							</p>
							<p>
								<br />
							</p>
							<p>
								EOTH is an epic open-world RPG set in a vast and breathtaking
								universe. Immerse yourself in a world where adventure knows no
								bounds, and the mysteries of an untamed planet beckon you to
								explore its every corner.
							</p>
							<p>
								<br />
							</p>
							<p>
								In EOTH, you'll embark on a journey of discovery, unraveling the
								secrets of a forgotten civilization and unearthing the truth
								that lies beneath the surface. Engage in thrilling quests, forge
								alliances with intriguing characters, and engage in epic battles
								against formidable foes.
							</p>
							<p>
								<br />
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
