import { AlanLogo } from '@/public/logos/AlanLogo';
import { ArcLogo } from '@/public/logos/ArcLogo';
import { CashAppLogo } from '@/public/logos/CashAppLogo';
import { DescriptLogo } from '@/public/logos/DescriptLogo';
import { LoomLogo } from '@/public/logos/LoomLogo';
import { MercuryLogo } from '@/public/logos/MercuryLogo';
import { OpenSeaLogo } from '@/public/logos/OpenSeaLogo';
import { PlitchLogo } from '@/public/logos/PlitchLogo';
import { RampLogo } from '@/public/logos/RampLogo';
import { RaycastLogo } from '@/public/logos/RaycastLogo';
import { RetoolLogo } from '@/public/logos/RetoolLogo';
import { VercelLogo } from '@/public/logos/VercelLogo';

export const Client = () => {
	return (
		<>
			<div className='text-center mb-8'>
				<p className='text-lg md:text-xl '>
					<span className='text-gray primary-text'>
						Power the world is best product teams.
					</span>
					<br />
					<span className='font-medium'>
						From next-gen startups to established enterprises.
					</span>
				</p>
			</div>
			<div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-y-6 gap-x-8 '>
				<RampLogo />
				<LoomLogo />
				<VercelLogo />
				<DescriptLogo />
				<CashAppLogo />
				<RaycastLogo />
				<MercuryLogo />
				<RetoolLogo />
				<AlanLogo />
				<ArcLogo />
				<OpenSeaLogo />
				<PlitchLogo />
			</div>
		</>
	);
};
