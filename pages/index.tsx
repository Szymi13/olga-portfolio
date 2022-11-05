import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
	return (
		<div className="flex min-h-screen flex-col items-center justify-center py-2">
			<Head>
				<title>Olga Sobieszczańska portfolio</title>
				<meta name="description" content="Portfolio Olgi Osbieszczańskiej" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main>
				<Parallax pages={3} className="flex flex-col top-0 left-0 bg-black">
					<ParallaxLayer
						offset={0}
						speed={2.5}
						className="flex w-full flex-1 flex-col items-center justify-center px-20 bg-black"
					>
						<h1 className="text-7xl font-extrabold text-white font-serif top-0`">
							Olga Sobieszczańska
						</h1>
						<p className="text-white text-2xl pt-16 w-7/12">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
							enim ad minim veniam, quis nostrud exercitation ullamco laboris
							nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
							reprehenderit in voluptate velit esse cillum dolore eu fugiat
							nulla pariatur.
						</p>
					</ParallaxLayer>
					<ParallaxLayer
						offset={1}
						speed={0.5}
						className="flex w-full flex-1 items-center justify-center px-20 text-center bg-black"
					>
						<h2 className="text-7xl font-extrabold text-white font-serif">
							prace
						</h2>
					</ParallaxLayer>
					<ParallaxLayer
						offset={2}
						speed={2.5}
						className="flex w-full flex-1 items-center justify-center px-20 text-center bg-black"
					>
						<div className=' h-5/6 w-5/6'>
							<video controls autoPlay height="100">
								<source src="prace/moja_wizytowka.mp4" type="video/mp4" />
							</video>
						</div>
					</ParallaxLayer>
				</Parallax>
			</main>
		</div>
	);
};

export default Home;
