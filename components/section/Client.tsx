import { AlanLogo } from '@/components/logos/AlanLogo';
import { ArcLogo } from '@/components/logos/ArcLogo';
import { CashAppLogo } from '@/components/logos/CashAppLogo';
import { DescriptLogo } from '@/components/logos/DescriptLogo';
import { LoomLogo } from '@/components/logos/LoomLogo';
import { MercuryLogo } from '@/components/logos/MercuryLogo';
import { OpenSeaLogo } from '@/components/logos/OpenSeaLogo';
import { PlitchLogo } from '@/components/logos/PlitchLogo';
import { RampLogo } from '@/components/logos/RampLogo';
import { RaycastLogo } from '@/components/logos/RaycastLogo';
import { RetoolLogo } from '@/components/logos/RetoolLogo';
import { VercelLogo } from '@/components/logos/VercelLogo';

export const Client = () => {
	return (
		<>
			<div className='text-center mb-8'>
				<p className='text-lg md:text-xl '>
					<span className='text-gray primary-text'>
						Powering the world’s best product teams.
					</span>
					<br className='hidden md:block' />
					<span className='font-medium'>
						{` From next-gen startups to established enterprises.`}
					</span>
				</p>
			</div>
			<div className='grid  grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-y-6 gap-x-8'>
				<RampLogo />
				<LoomLogo className='hidden md:block' />
				<VercelLogo />
				<DescriptLogo className='hidden md:block' />
				<CashAppLogo />
				<RaycastLogo />
				<MercuryLogo />
				<RetoolLogo />
				<AlanLogo className='hidden md:block' />
				<ArcLogo className='hidden md:block' />
				<OpenSeaLogo className='hidden md:block' />
				<PlitchLogo className='hidden md:block' />
			</div>
		</>
	);
};
