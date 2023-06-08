import s from './Features.module.css';

const Features = () => {
	return (
		<div
			className="relative w-full overflow-hidden pt-[40px]"
			style={{
				background:
					'radial-gradient(ellipse at bottom, #1B2735 0%, #090A0F 100%)',
			}}
		>
			<div id="particles-js"></div>
			<div className={s.root}>
				<div className="max-w-[980px] my-0 mx-auto pt-[1em] px-[1em]">
					<div className="flex flex-col z-[2] relative mt-[40px]">
						<div
							className="mt-0 mb-[2.4rem] mx-0 py-0 px-[0.5em] text-center uppercase min-w-[44px] relative"
							style={{ wordBreak: 'break-word' }}
						>
							<p className={s.title}>About Echo Of The Horizon</p>
						</div>
						<div className="h-[580px] mx-0 mt-0 mb-[1em]">
							<img
								src="assets/images/about.jpg"
								alt=""
								className="w-[1000px] h-[580px]"
							/>
							{/* <div className="flex items-center justify-center h-full w-full relative">
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
							</div> */}
						</div>
						<div className={s.content}>
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
						<div
							className="mt-0 mb-[2.4rem] mx-0 py-0 px-[0.5em] text-center uppercase min-w-[44px] relative"
							style={{ wordBreak: 'break-word' }}
						>
							<p className={s.title}>Features</p>
						</div>
						<div className="h-[580px] mx-0 mt-0 mb-[1em]">
							<div className="flex items-center justify-center h-full w-full relative">
								<img
									src="assets/images/features.jpg"
									alt=""
									className="w-[1000px] h-[580px]"
								/>
							</div>
						</div>
						<div className={s.content}>
							<p>
								<br />
							</p>
							<p>
								But EOTH is not just a game; it's an experience. Powered by the
								cutting-edge Unreal Engine 5, EOTH boasts hyper-realistic
								visuals that will transport you to a realm where reality and
								fantasy merge. Lose yourself in awe-inspiring landscapes,
								meticulously crafted environments, and lifelike characters that
								will leave you spellbound.
							</p>

							<p>
								<br />
							</p>
							<p>
								What sets EOTH apart is its innovative multichain rewards
								system. As you progress through the game, you'll earn valuable
								in-game rewards that can be seamlessly transferred across
								different blockchain networks. Embrace the potential of
								decentralized technology and witness the true power of
								blockchain integration in gaming.
							</p>
							<p>
								<br />
							</p>
						</div>
						<div
							className="mt-0 mb-[2.4rem] mx-0 py-0 px-[0.5em] text-center uppercase min-w-[44px] relative"
							style={{ wordBreak: 'break-word' }}
						>
							<p className={s.title}>Single player & Multiplayer</p>
						</div>
						<div className="h-[580px] mx-0 mt-0 mb-[1em]">
							<div className="flex items-center justify-center h-full w-full relative">
								<img
									src="assets/images/multiplayer.jpg"
									alt=""
									className="w-[1000px] h-[580px]"
								/>
							</div>
						</div>
						<div className={s.content}>
							<p>
								<br />
							</p>
							<p>
								Whether you're a lone adventurer seeking thrilling quests, a
								collector eager to possess rare treasures, or a competitor
								yearning for exhilarating PvP battles, EOTH has something for
								everyone. Create your own destiny, shape the fate of Serenia,
								and become a legend in this dynamic and ever-evolving world.
							</p>
							<p>
								<br />
							</p>
							<p>
								Prepare to embark on a journey that will test your skills,
								challenge your wits, and ignite your imagination. Welcome to
								Echo Of The Horizon, where your epic adventure awaits.
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

export default Features;
