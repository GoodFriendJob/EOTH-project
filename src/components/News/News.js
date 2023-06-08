import s from './News.module.css';
import Edition from 'components/Edition/Edition';

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
						<div className="mx-0 mt-0 mb-[2.4rem] py-0 px-[0.5em] text-center min-w-[44px] relative">
							<p className={s.title}>In the works</p>
							<p className={s.mainContent}>
								At Echo Of The Horizon (EOTH), we're committed to bringing you
								an unparalleled gaming experience. Take a sneak peek into our
								creative process and see what's currently in the works:
							</p>
						</div>
					</div>
					<div>
						<div className="flex items-center justify-center flex-col">
							<div className="mx-0 mt-0 mb-[2.4rem] py-0 px-[0.5em] text-center min-w-[44px] relative">
								<p className={s.subTitle}>Environments</p>
								<p className={s.content}>
									Immerse yourself in stunning landscapes and breathtaking
									vistas. Our team of talented artists is meticulously crafting
									vibrant and realistic environments that will transport you to
									a world like no other. Check out our in-game footage to catch
									a glimpse of the awe-inspiring locales awaiting your
									exploration.
								</p>
							</div>
						</div>
						<Edition />
					</div>

					<div className="mt-20">
						<div className="flex items-center justify-center flex-col">
							<div className="mx-0 mt-0 mb-[2.4rem] py-0 px-[0.5em] text-center min-w-[44px] relative">
								<p className={s.subTitle}>Concept Designs</p>
								<p className={s.content}>
									Witness the birth of our captivating characters and creatures.
									These designs will provide a glimpse into the diverse and rich
									tapestry of Serenia. Please note that these concepts will be
									further refined by our concept artist.
								</p>
							</div>
						</div>
						<div
							className="grid gap-x-[18px] gap-y-[18px] my-0 mx-auto max-w-[1000px] w-full"
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
								</div>
							</div>
							<div className="h-full min-w-0" style={{ gridColumn: 'span 3' }}>
								<div className={s.newsCard}>
									<div className={s.newsCardImage_2}>
										<img
											className="rounded-t-[8px] rounded-r-[8px] h-full object-cover w-full"
											src="assets/images/news_4.jpg"
											alt=""
										/>
									</div>
								</div>
							</div>
							<div className="h-full min-w-0" style={{ gridColumn: 'span 3' }}>
								<div className={s.newsCard}>
									<div className={s.newsCardImage_2}>
										<img
											className="rounded-t-[8px] rounded-r-[8px] h-full object-cover w-full"
											src="assets/images/news_5.jpg"
											alt=""
										/>
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
								</div>
							</div>
							<div className="h-full min-w-0" style={{ gridColumn: 'span 2' }}>
								<div className={s.newsCard}>
									<div className={s.newsCardImage_3}>
										<img
											className="rounded-t-[8px] rounded-r-[8px] h-full object-cover w-full"
											src="assets/images/news_7.jpg"
											alt=""
										/>
									</div>
								</div>
							</div>
							<div className="h-full min-w-0" style={{ gridColumn: 'span 2' }}>
								<div className={s.newsCard}>
									<div className={s.newsCardImage_3}>
										<img
											className="rounded-t-[8px] rounded-r-[8px] h-full object-cover w-full"
											src="assets/images/news_8.jpg"
											alt=""
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
					{/* <div className="flex justify-center pt-[36px]">
						<button className={s.showMoreButton}>
							<div>Show more</div>
						</button>
					</div> */}
				</div>
			</div>
		</div>
	);
};

export default News;
