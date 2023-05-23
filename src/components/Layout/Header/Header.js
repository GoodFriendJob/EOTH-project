import s from './Header.module.css';

const Header = () => {
	return (
		<div className={s.root}>
			<div className={s.itemsWrapper}>
				<div className={s.item}>
					<a href="/media" className="text-center">
						Media
					</a>
				</div>
				<div className={s.item}>
					<a href="/vision" className="text-center">
						Our Vision
					</a>
				</div>
				<div className={s.item}>
					<a href="/support" className="text-center">
						Support
					</a>
				</div>
				<div className={s.becomeBacker}>
					<a href="/" className="mx-[16px] my-[4px] leading-[1.2rem] ">
						<div
							className="overflow-hidden"
							style={{
								WebkitLineClamp: 2,
								WebkitBoxOrient: 'vertical',
								display: '-webkit-box',
							}}
						>
							Become a backer now
						</div>
					</a>
				</div>
			</div>

			<div className="flex items-center gap-2">{/* <SvgGridMenu /> */}</div>
		</div>
	);
};

export default Header;
