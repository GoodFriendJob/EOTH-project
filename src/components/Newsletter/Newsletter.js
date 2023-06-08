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
					<div className="flex flex-col z-[2] relative">
						<div className="mx-0 mt-0 mb-[2.4em] py-0 px-[0.5em] text-center min-w-[44px] relative uppercase">
							<p className={s.title}>Single player & Multiplayer</p>
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
					<div className="m-0 flex flex-wrap justify-center">
						<div className="flex flex-col my-[1em] mx-[0.4em] max-w-full z-[2] justify-center w-full">
							<form className="flex flex-col items-center">
								<div className={s.content}>
									<p>
										Whether you're a lone adventurer seeking thrilling quests, a
										collector eager to possess rare treasures, or a competitor
										yearning for exhilarating PvP battles, EOTH has something
										for everyone. Create your own destiny, shape the fate of
										Serenia, and become a legend in this dynamic and
										ever-evolving world.
									</p>
									<p>
										<br />
									</p>
									<p>
										Prepare to embark on a journey that will test your skills,
										challenge your wits, and ignite your imagination. Welcome to
										Echo Of The Horizon, where your epic adventure awaits.
									</p>
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
