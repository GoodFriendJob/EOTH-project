import s from './LandingPage.module.css';
import NewInfo from 'components/NewInfo';
import Introduction from 'components/Introduction';
import About from 'components/About';
import Edition from 'components/Edition';

function LandingPage() {
	return (
		<div className={s.root}>
			<div
				className={s.backgroundImage}
				style={{
					backgroundImage: 'url(assets/images/background.jpg)',
				}}
			></div>
			<div className={s.backgroundColor}></div>
			<NewInfo />
			<Introduction />
			<About />
			<Edition />
		</div>
	);
}

export default LandingPage;
