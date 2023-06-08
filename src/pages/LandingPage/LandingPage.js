import s from './LandingPage.module.css';
import NewInfo from 'components/NewInfo';
import Introduction from 'components/Introduction';
// import About from 'components/About';
// import Edition from 'components/Edition';
import Features from 'components/Features/Features';
// import Newsletter from 'components/Newsletter/Newsletter';
import News from 'components/News';

function LandingPage() {
	return (
		<div className={s.root}>
			<div
				className={s.backgroundImage}
				style={{
					backgroundImage: 'url(assets/images/introBackground.png)',
				}}
			></div>
			<div className={s.backgroundColor}></div>
			<NewInfo />
			<Introduction />
			{/* <About /> */}
			{/* <Edition /> */}
			<Features />
			{/* <Newsletter /> */}
			<News />
		</div>
	);
}

export default LandingPage;
