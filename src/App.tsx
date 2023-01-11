import './App.css';
import React, { useRef } from 'react';
import { Parallax, ParallaxLayer, IParallax } from '@react-spring/parallax';

// Little helpers ...
const url = (name: string, wrap = false) => `${wrap ? 'url(' : ''}https://awv3node-homepage.surge.sh/build/assets/${name}.svg${wrap ? ')' : ''}`;

function App() {
	const parallax = useRef<IParallax>(null!);

	return (
		<div style={{ width: '100%', height: '100%', background: '#253237' }}>
			<Parallax className='scrollbar-hide' ref={parallax} pages={3}>
				<ParallaxLayer offset={1} speed={1} style={{ backgroundColor: '#805E73' }} />
				<ParallaxLayer offset={2} speed={1} style={{ backgroundColor: '#87BCDE' }} />

				<ParallaxLayer
					offset={0}
					speed={0}
					factor={3}
					style={{
						backgroundImage: url('stars', true),
						backgroundSize: 'cover',
					}}
				/>

				<ParallaxLayer offset={1} speed={0.8} style={{ opacity: 0.1 }}>
					<img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '55%' }} />
					<img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '15%' }} />
				</ParallaxLayer>

				<ParallaxLayer offset={1.75} speed={0.5} style={{ opacity: 0.1 }}>
					<img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '70%' }} />
					<img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '40%' }} />
				</ParallaxLayer>

				<ParallaxLayer offset={1} speed={0.2} style={{ opacity: 0.2 }}>
					<img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '10%' }} />
					<img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '75%' }} />
				</ParallaxLayer>

				<ParallaxLayer offset={1.6} speed={-0.1} style={{ opacity: 0.4 }}>
					<img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '60%' }} />
					<img src={url('cloud')} style={{ display: 'block', width: '25%', marginLeft: '30%' }} />
					<img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '80%' }} />
				</ParallaxLayer>

				<ParallaxLayer offset={2.6} speed={0.4} style={{ opacity: 0.6 }}>
					<img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '5%' }} />
					<img src={url('cloud')} style={{ display: 'block', width: '15%', marginLeft: '75%' }} />
				</ParallaxLayer>

				<ParallaxLayer
					offset={2.5}
					speed={-0.4}
					style={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						pointerEvents: 'none',
					}}>
					<img src={url('earth')} style={{ width: '60%' }} />
				</ParallaxLayer>

				<ParallaxLayer
					offset={2}
					speed={-0.3}
					style={{
						backgroundSize: '1%',
						backgroundPosition: 'center',
						backgroundImage: url('cloud', true),
					}}
				/>

				<ParallaxLayer offset={0} speed={0.1} onClick={() => parallax.current.scrollTo(1)} className='flex flex-col items-center justify-center gap-6'>
					<h1 className='text-5xl'>Deepa Infinity</h1>
					<p>deep in everything for your growth</p>
				</ParallaxLayer>

				<ParallaxLayer offset={1} speed={0.1} onClick={() => parallax.current.scrollTo(2)} className='flex flex-col items-center justify-center gap-6'>
					<h1 className='text-5xl'>Layanan Kami</h1>
					<div className='flex flex-col md:flex-row justify-between gap-10'>
						<p className='border p-8 rounded-md shadow-xl text-xl'>Deepa HomeWork</p>
						<p className='border p-8 rounded-md shadow-xl text-xl'>Deepa Learning</p>
						<p className='border p-8 rounded-md shadow-xl text-xl'>Deepa Web Apps</p>
					</div>
				</ParallaxLayer>

				<ParallaxLayer offset={2} speed={-0} className='flex flex-col items-center justify-center gap-6 ' onClick={() => parallax.current.scrollTo(0)}>
					<h1 className='text-5xl text-gray-700'>Kontak Kami</h1>
					<div className='flex flex-col md:flex-row justify-between gap-10'>
						<p className='border p-8 rounded-md shadow-xl text-xl bg-gray-700'>Whatsapp</p>
						<p className='border p-8 rounded-md shadow-xl text-xl bg-gray-700'>Instagram</p>
						<p className='border p-8 rounded-md shadow-xl text-xl bg-gray-700'>Twitter</p>
					</div>
				</ParallaxLayer>
			</Parallax>
		</div>
	);
}

export default App;
