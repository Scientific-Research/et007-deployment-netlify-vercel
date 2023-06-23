import employmentImage from '../assets/employment.jpg';
export const PageDashboard = () => {
	return (
		<div className="pageDashboard">
			<p>This is the Dashboard page.</p>
			<img src={employmentImage} alt="employment Sign " />
			<img src="images/Jobs.jpeg" alt="Jobs photo" />
		</div>
	);
};
