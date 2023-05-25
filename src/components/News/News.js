import s from './News.module.css';

const News = () => {
	return (
		<div className="relative w-full">
			<div className={s.root}>
				<div className="absolute bottom-0 top-0 z-0 flex items-center h-full justify-center w-full">
					<div
						className="left-0 top-0 absolute z-[1] w-full"
						style={{
							backgroundColor: 'rgba(0, 0, 0, 0.91)',
							height: 'inherit',
						}}
					></div>
					<div
						className="w-full"
						style={{
							backgroundSize: 'cover',
							backgroundImage: 'url(assets/images/newsbackground.png)',
							backgroundPosition: '50%',
							backgroundRepeat: 'no-repeat',
							height: 'inherit',
						}}
					></div>
				</div>
				<div className="my-0 mx-auto py-[4em] px-[1em]">
					<div className="flex items-center justify-center flex-col">
						<div className="mx-0 mt-0 mb-[2.4rem] py-0 px-[0.5em] text-center uppercase min-w-[44px] relative">
							<p className={s.title}>News</p>
						</div>
					</div>
					<div>
						<div
							className="grid gap-x-[18px] gap-y-[18px] my-0 mx-auto max-w-[1200px] w-full"
							style={{ gridTemplateColumns: 'repeat(6,1fr)' }}
						>
							<div className="h-full min-w-0" style={{ gridColumn: 'span 6' }}>
								<div className={s.newsCard}>
									<div className={s.newsCardImage}>
										<img
											className="rounded-t-[8px] rounded-r-[8px] h-full object-cover w-full"
											src="assets/images/news_1.jpg"
											alt=""
										/>
									</div>
									<div className="min-w-0 py-[0.5em] px-[10px]">
										<div className="flex text-[0.8em] justify-between leading-[1.7em] uppercase">
											<div>5/8/2023</div>
											<div>Earth From Another Sun</div>
										</div>
										<div
											className="text-[1.3em] font-medium leading-[1.3em] mb-[0.25em] max-h-full overflow-hidden p-0 text-ellipsis"
											style={{
												WebkitLineClamp: 1,
												WebkitBoxOrient: 'vertical',
												display: '-webkit-box',
												wordBreak: 'break-word',
											}}
										>
											<p className="text-[1.17em] ">Update 98: Gaussian</p>
										</div>
									</div>
								</div>
							</div>
							<div className="h-full min-w-0" style={{ gridColumn: 'span 3' }}>
								<div className={s.newsCard}>
									<div className={s.newsCardImage_2}>
										<img
											className="rounded-t-[8px] rounded-r-[8px] h-full object-cover w-full"
											src="assets/images/news_2.jpg"
											alt=""
										/>
									</div>
									<div className="min-w-0 py-[0.5em] px-[10px]">
										<div className="flex text-[0.8em] justify-between leading-[1.7em] uppercase">
											<div>4/6/2023</div>
											<div>Earth From Another Sun</div>
										</div>
										<div
											className="text-[1.3em] font-medium leading-[1.3em] mb-[0.25em] max-h-full overflow-hidden p-0 text-ellipsis"
											style={{
												WebkitLineClamp: 2,
												WebkitBoxOrient: 'vertical',
												display: '-webkit-box',
												wordBreak: 'break-word',
											}}
										>
											<p className="text-[1.17em] ">
												Update 97: To The Servers!
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="h-full min-w-0" style={{ gridColumn: 'span 3' }}>
								<div className={s.newsCard}>
									<div className={s.newsCardImage_2}>
										<img
											className="rounded-t-[8px] rounded-r-[8px] h-full object-cover w-full"
											src="assets/images/news_3.jpg"
											alt=""
										/>
									</div>
									<div className="min-w-0 py-[0.5em] px-[10px]">
										<div className="flex text-[0.8em] justify-between leading-[1.7em] uppercase">
											<div>3/2/2023</div>
											<div>Earth From Another Sun</div>
										</div>
										<div
											className="text-[1.3em] font-medium leading-[1.3em] mb-[0.25em] max-h-full overflow-hidden p-0 text-ellipsis"
											style={{
												WebkitLineClamp: 2,
												WebkitBoxOrient: 'vertical',
												display: '-webkit-box',
												wordBreak: 'break-word',
											}}
										>
											<p className="text-[1.17em] ">Update 96: Terra Nostra</p>
										</div>
									</div>
								</div>
							</div>
							<div className="h-full min-w-0" style={{ gridColumn: 'span 2' }}>
								<div className={s.newsCard}>
									<div className={s.newsCardImage_3}>
										<img
											className="rounded-t-[8px] rounded-r-[8px] h-full object-cover w-full"
											src="assets/images/news_4.jpg"
											alt=""
										/>
									</div>
									<div className="min-w-0 py-[0.5em] px-[10px]">
										<div className="flex text-[0.8em] justify-between leading-[1.7em] uppercase">
											<div>2/12/2023</div>
											<div>Earth From Another Sun</div>
										</div>
										<div
											className="text-[1.3em] font-medium leading-[1.3em] mb-[0.25em] max-h-full overflow-hidden p-0 text-ellipsis"
											style={{
												WebkitLineClamp: 2,
												WebkitBoxOrient: 'vertical',
												display: '-webkit-box',
												wordBreak: 'break-word',
											}}
										>
											<p className="text-[1.17em] ">Update 95: The Battle</p>
										</div>
									</div>
								</div>
							</div>
							<div className="h-full min-w-0" style={{ gridColumn: 'span 2' }}>
								<div className={s.newsCard}>
									<div className={s.newsCardImage_3}>
										<img
											className="rounded-t-[8px] rounded-r-[8px] h-full object-cover w-full"
											src="assets/images/news_5.jpg"
											alt=""
										/>
									</div>
									<div className="min-w-0 py-[0.5em] px-[10px]">
										<div className="flex text-[0.8em] justify-between leading-[1.7em] uppercase">
											<div>1/29/2023</div>
											<div>Earth From Another Sun</div>
										</div>
										<div
											className="text-[1.3em] font-medium leading-[1.3em] mb-[0.25em] max-h-full overflow-hidden p-0 text-ellipsis"
											style={{
												WebkitLineClamp: 2,
												WebkitBoxOrient: 'vertical',
												display: '-webkit-box',
												wordBreak: 'break-word',
											}}
										>
											<p className="text-[1.17em] ">Update 94: The Triple</p>
										</div>
									</div>
								</div>
							</div>
							<div className="h-full min-w-0" style={{ gridColumn: 'span 2' }}>
								<div className={s.newsCard}>
									<div className={s.newsCardImage_3}>
										<img
											className="rounded-t-[8px] rounded-r-[8px] h-full object-cover w-full"
											src="assets/images/news_6.jpg"
											alt=""
										/>
									</div>
									<div className="min-w-0 py-[0.5em] px-[10px]">
										<div className="flex text-[0.8em] justify-between leading-[1.7em] uppercase">
											<div>12/24/2022</div>
											<div>Earth From Another Sun</div>
										</div>
										<div
											className="text-[1.3em] font-medium leading-[1.3em] mb-[0.25em] max-h-full overflow-hidden p-0 text-ellipsis"
											style={{
												WebkitLineClamp: 2,
												WebkitBoxOrient: 'vertical',
												display: '-webkit-box',
												wordBreak: 'break-word',
											}}
										>
											<p className="text-[1.17em] ">
												Update 93: MERRY CHRISTMAS!
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="flex justify-center pt-[36px]">
						<button className={s.showMoreButton}>
							<div>Show more</div>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default News;
