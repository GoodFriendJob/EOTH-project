import { Carousel } from '@material-tailwind/react';

const Edition = () => {
	return (
		<div className="flex justify-center items-center">
			<Carousel className="rounded-xl max-w-[960px]">
				<img
					src="assets/images/environment_1.jpg"
					alt=""
					className="h-full w-full object-cover"
				/>
				<img
					src="assets/images/environment_2.jpg"
					alt=""
					className="h-full w-full object-cover"
				/>
				<img
					src="assets/images/environment_3.jpg"
					alt=""
					className="h-full w-full object-cover"
				/>
				<img
					src="assets/images/environment_4.jpg"
					alt=""
					className="h-full w-full object-cover"
				/>
			</Carousel>
		</div>
	);
};

export default Edition;
