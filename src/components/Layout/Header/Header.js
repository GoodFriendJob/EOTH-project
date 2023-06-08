import s from './Header.module.css';

const Header = () => {
	return (
		<div className={s.root}>
			<div className={s.itemsWrapper}>
				<div className={s.item}>
					<a
						href="https://eoth.gitbook.io/eoth/
"
						className="text-center"
					>
						Docs
					</a>
				</div>
				{/* <div className={s.item}>
					<a
						href="https://eoth.gitbook.io/eoth/about-us"
						className="text-center"
					>
						Team
					</a>
				</div> */}

				<div className={s.becomeBacker}>
					<a
						href="https://eoth.gitbook.io/eoth/about-us"
						className="mx-[16px] my-[8px] leading-[1.2rem] "
					>
						<div
							className="overflow-hidden"
							style={{
								WebkitLineClamp: 2,
								WebkitBoxOrient: 'vertical',
								display: '-webkit-box',
							}}
						>
							Team
						</div>
					</a>
				</div>
			</div>

			<div className="flex items-center gap-2">{/* <SvgGridMenu /> */}</div>
		</div>
	);
};

export default Header;
