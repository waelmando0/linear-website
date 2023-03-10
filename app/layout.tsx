import Footer from './footer';
import './globals.css';
import Header from './header';

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='en'>
			<head />
			<body>
				<div className='flex flex-col min-h-screen overflow-hidden'>
					<Header />
					<main className='flex-grow pt-navigation-height bg-page-gradient'>
						{children}
					</main>
					<Footer />
				</div>
			</body>
		</html>
	);
}
