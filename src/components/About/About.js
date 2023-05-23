import s from './About.module.css';

const About = () => {
	return (
		<div className="relative w-full">
			<div className={s.root}>
				<div className="absolute bottom-0 top-0 z-0 flex items-center h-full justify-center w-full">
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
				</div>
				<div className="max-w-[1180px] my-0 mx-auto py-[4em] px-[1em]">
					<div className="flex items-center justify-center mx-0 mt-0 mb-[2.5em] relative text-center">
						<div className="my-0 mx-[0.3em] py-0 px-[0.2em] text-center uppercase min-w-[44px] relative">
							<p className={s.title}>What's this about?</p>
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
								We've been hard at work over the past three and a half years on
								Earth From Another Sun. This game is all about building up a
								massive army to conquer the Galaxy, waging epic sci-fi battles,
								and exploring the universe along with your&nbsp;friends!
							</p>
							<p>
								<br />
							</p>
							<p>
								We need your help to make Earth From Another Sun as great as it
								can be. As of February 2023, the game features are 80% complete,
								and we have enough funding from outside investors to finish and
								polish all of the key features we want put into&nbsp;it.
							</p>
							<p>
								<br />
							</p>
							<p>
								But with your help, we can create more content, polish the game
								even further, and build a much better game for you to enjoy for
								years on end (that's our goal). So please consider helping us
								out by becoming a backer. Every little gesture counts, and we
								are grateful for your&nbsp;support.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
