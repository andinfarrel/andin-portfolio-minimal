import Image from 'next/image';
import {SiGithub, SiInstagram, SiMedium, SiLinkedin} from 'react-icons/si';
import {CgClose} from 'react-icons/cg';
import {GiHamburgerMenu} from 'react-icons/gi';
import { useState } from 'react';
import {useRouter} from 'next/router';
import Link from 'next/link'
import clsx from 'clsx';
import Router from 'next/dist/next-server/server/router';

const NavBar = () => {
    const router = useRouter();
    const navBtnStyle = 'font-body focus:outline-none py-4 px-6 border-button hover:text-green-500'
    const [currentPage, setCurrentPage] = useState('me');
    const [openMenu, setOpenMenu] = useState(false)
 
    return (
        <div className={clsx("container px-4 md:px-20 py-0 flex sticky top-0 bg-none")}>
            {/* logo */}
            <div className="flex-initial p-8 md:p-8">
                <img 
                alt={'logo'}
                className='md:hidden'
                style={{ maxWidth: '40px' }}
                src="logo.png"/>
                <img 
                alt={'logo'}
                className='hidden md:block'
                style={{ maxWidth: '60px' }}
                src="logo.png"/>
            </div>
            <div className="flex-auto"></div>
            {/* buttons */}
            <div className="flex-initial h-full hidden md:block my-auto">
                <div className={clsx("grid grid-flow-col auto-cols-max gap-10")}>
                    <div className={clsx({'border-black border-b-2':router.pathname=='/'},navBtnStyle)}>
                        <Link href="/">
                            Me
                        </Link>
                    </div>
                    <div className={clsx({'border-black border-b-2':router.pathname=='/life'},navBtnStyle)}>
                        <Link href="/life">
                            Life
                        </Link>
                    </div>
                    <a href="https://github.com/andinfarrel/" target="_blank" className={navBtnStyle}>
                        <SiGithub />
                    </a>
                    <a href="https://instagram.com/andinfarrel" target="_blank" className={navBtnStyle}>
                        <SiInstagram />
                    </a>
                    <a href="https://medium.com/@andinfarrel" target="_blank" className={navBtnStyle}>
                        <SiMedium />
                    </a>
                    <a href="https://www.linkedin.com/in/andinfarrel/" target="_blank" className={navBtnStyle}>
                        <SiLinkedin />
                    </a>
                </div>
            </div>
            <div className={clsx("flex-initial p-8 flex  md:hidden")}>
                <button onClick={() => setOpenMenu(true)} className={navBtnStyle}>
                    <GiHamburgerMenu />
                </button>
                <NavBarMobile openHandler={setOpenMenu} open={openMenu} path={router.pathname} />
            </div>
        </div>
    )
}

type NavMobileProps = {
    openHandler: any,
    open: boolean,
    path: any
}

const NavBarMobile = ({open, openHandler, path} : NavMobileProps) => {
    // const [openMenu, setOpenMenu] = useState(open);
    const navBtnStyle = 'font-body focus:outline-none py-4 px-6 border-button'
    const navItemStyle = "flex-1 flex flex-row place-items-center space-x-4 text-white";
    
    return (
        <div className={clsx("w-screen place-items-center grid auto-rows-fr bg-gray-800 bg-opacity-95 top-0 left-0 absolute text-white transition-max-height duration-500 ease-in-out", {"h-screen max-h-screen visible":open}, {"max-h-0 hidden":!open})}>
            
            <div className="flex-1 flex flex-row place-items-center text-white bg-gray-800">
                <button onClick={() => openHandler(false)} className={navBtnStyle}>
                    <CgClose />
                </button>
            </div>
            <div className={navItemStyle}>
                <div className={clsx({'border-white border-b-2':path=='/'},navBtnStyle)}>
                    <Link href="/">
                        Me
                    </Link>
                </div>
            </div>

            <div className={navItemStyle}>
                <div className={clsx({'border-white border-b-2':path=='/life'},navBtnStyle)}>
                    <Link href="/life">
                        Life
                    </Link>
                </div>
            </div>

            <a href="https://github.com/andinfarrel/" target="_blank" className={navBtnStyle}>
                <div className={navItemStyle}>
                    <SiGithub /> 
                    <p>GitHub</p>  
                </div>
            </a>

            <a href="https://instagram.com/andinfarrel" target="_blank" className={navBtnStyle}>
                <div className={navItemStyle}>
                    <SiInstagram /> 
                    <p>Instagram</p>
                </div>
            </a>

            <a href="https://medium.com/@andinfarrel" target="_blank" className={navBtnStyle}>
                <div className={navItemStyle}>
                    <SiMedium /> 
                    <p>Medium</p>
                </div>
            </a>

            <a href="https://www.linkedin.com/in/andinfarrel/" target="_blank" className={navBtnStyle}>
                <div className={navItemStyle}>
                    <SiLinkedin /> 
                    <p>LinkedIn</p>
                </div>
            </a>


        </div>
    )
}

export default NavBar;