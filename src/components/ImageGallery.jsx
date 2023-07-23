import accountLogo from '../images/account.svg'
import eyecamLogo from '../images/eyecam-co.svg'
import faceitLogo from '../images/faceit.svg'
import insureLogo from '../images/insure.svg'
import loopStudioLogo from '../images/loop-studios.svg'
import manageLogo from '../images/manage.svg'
import myhomeLogo from '../images/myhome.svg'
import photosnapLogo from '../images/photosnap.svg'
import shortyLogo from '../images/shortly.svg'
import airfilterLogo from '../images/the-air-filter-company.svg'

export default function ImageGallery({company}) {
    switch(company) {
        case 'Photosnap':
            return <img src={ photosnapLogo } alt="PhotoSnap" className='company-logo' />
        case 'Manage':
            return <img src={ manageLogo } alt='Manage' className='company-logo' />
        case 'Account':
            return <img src={ accountLogo } alt='Account' className='company-logo' />
        case 'MyHome':
            return <img src={ myhomeLogo } alt='MyHome' className='company-logo' />
        case 'Loop Studios':
            return <img src={ loopStudioLogo } alt='Loop Studios' className='company-logo' />
        case 'FaceIt':
            return <img src={ faceitLogo } alt='FaceIt' className='company-logo' />
        case 'Shortly':
            return <img src={ shortyLogo } alt='Shortly' className='company-logo' />
        case 'Insure':
            return <img src={ insureLogo } alt='Insure' className='company-logo' />
        case 'Eyecam Co.':
            return <img src={ eyecamLogo } alt='Eyecam Co.' className='company-logo' />
        case 'The Air Filter Company':
            return <img src={ airfilterLogo } alt='The Air Filter Company' className='company-logo' />
        default:
            return <p>Error</p>
    }
}