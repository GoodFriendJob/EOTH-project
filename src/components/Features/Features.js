import s from './Features.module.css';

const Features = () => {
	return (
		<div
			className="relative w-full overflow-hidden"
			style={{
				background:
					'radial-gradient(ellipse at bottom, #1B2735 0%, #090A0F 100%)',
			}}
		>
			<div id="particles-js"></div>
			<div className={s.root}>
				<div className="max-w-[1180px] my-0 mx-auto pt-[1em] px-[1em]">
					<div className="flex flex-col z-[2] relative">
						<div
							className="mt-0 mb-[2.4rem] mx-0 py-0 px-[0.5em] text-center uppercase min-w-[44px] relative"
							style={{ wordBreak: 'break-word' }}
						>
							<p className={s.title}>Features</p>
						</div>
						<div className="h-[480px] mx-0 mt-0 mb-[1em]">
							<div className="flex items-center justify-center h-full w-full relative">
								<div
									className="bg-transparent left-0 top-0 w-full z-[1] absolute"
									style={{ height: 'inherit' }}
								></div>
								<div
									style={{
										backgroundSize: 'contain',
										backgroundImage: 'url(assets/images/features.jpg)',
										backgroundPosition: '50%',
										backgroundRepeat: 'no-repeat',
										height: 'inherit',
										width: '100%',
									}}
								></div>
							</div>
						</div>
						<div className={s.content}>
							<p>
								<br />
							</p>
							<p>
								Earth From Another Sun is a science fiction action-oriented
								strategy role-playing game featuring an ever-expanding galaxy
								with unique locations to explore packed with carefully designed
								NPCs and quests as well as player-created&nbsp;content.
							</p>

							<p>
								<br />
							</p>
							<p>
								Conquer the galaxy fighting alongside the armies you command in
								exhilarating, meticulously crafted first-person
								shooter&nbsp;combat.
							</p>
							<p>
								<br />
							</p>
							<p>
								Hundreds of unique weapons, weapon mods, abilities, and enemies
								that provide a fresh combat experience, a lot of replayability,
								and lots of different builds to fight along your&nbsp;teammates.
							</p>
							<p>
								<br />
							</p>
							<p>
								The game is currently in alpha, updated every 2 weeks, and will
								never feature pay to win&nbsp;content.
							</p>
							<p>
								<br />
							</p>
							<p>
								<br />
							</p>
							<p>
								<br />
							</p>
						</div>
						<div
							className="mt-0 mb-[2.4rem] mx-0 py-0 px-[0.5em] text-center uppercase min-w-[44px] relative"
							style={{ wordBreak: 'break-word' }}
						>
							<p className={s.title}>AN OPEN WORLD OF GALACTIC PROPORTIONS</p>
						</div>
						<div className="h-[480px] mx-0 mt-0 mb-[1em]">
							<div className="flex items-center justify-center h-full w-full relative">
								<div
									className="bg-transparent left-0 top-0 w-full z-[1] absolute"
									style={{ height: 'inherit' }}
								></div>
								<div
									style={{
										backgroundSize: 'contain',
										backgroundImage: 'url(assets/images/openworld.png)',
										backgroundPosition: '50%',
										backgroundRepeat: 'no-repeat',
										height: 'inherit',
										width: '100%',
									}}
								></div>
							</div>
						</div>
						<div className={s.content}>
							<p>
								<br />
							</p>
							<p>
								You will encounter many people, creatures, love interests,
								treasures, calamities, and other events that will test your
								strength and resolve. Make allies, pledge service to another
								faction, or create your own independent nation. Who knows, you
								might even get married and have genetically altered children
								along the&nbsp;way!
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
