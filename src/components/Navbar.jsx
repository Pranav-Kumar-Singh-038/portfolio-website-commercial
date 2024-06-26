import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

export function Navbar() {
    return (
        <div className="sticky z-30 top-0 bg-white flex justify-around pb-4 pt-4 items-center">
            <div className="flex gap-2 text-2xl font-medium">
                <div>Siddhant</div>
                <div className="text-blue-800">Seth</div>
            </div>
            <div className="hidden md:block md:flex gap-8 items-center">
                <a href="#"><div className="text-red-800 hover:text-red-600">Home</div></a>
                <a href="#about"><div className="hover:text-slate-500">About</div></a>
                <Popup trigger={
                    <a href="#">
                        <div className="hover:text-slate-500">Media</div>
                    </a>}
                    position="bottom left" on="hover" closeOnDocumentClick mouseLeaveDelay={300} mouseEnterDelay={300} contentStyle={{ padding: '0px', border: 'none', width: '100px' }} arrow={false}>
                    <div className=" flex-col justify-center ">
                        <div className="flex justify-left hover:bg-gray-500 hover:text-white px-4 py-2 transition-colors duration-300"> <a href='#gallery'>Gallery</a></div>
                        <div className="flex justify-left  hover:bg-gray-500 hover:text-white px-2 py-2 transition-colors duration-300"> <a href='#testimonials'>Testimonials</a></div>
                        <div className="flex justify-left  hover:bg-gray-500 hover:text-white px-4 py-2 transition-colors duration-300"> <a href='#buttonbar'>Coverage</a></div>
                    </div>
                </Popup>
                <a href="#services"> <div className="hover:text-slate-500">Consultancy</div></a>
                <a href="#form"><div className="hover:text-slate-500">Contact</div></a>
                <a href="#form"><div className="hover:text-slate-500"> Login</div></a>
                <a href='#form'>
                    <button className="bg-blue-800 text-white p-2 rounded hover:animate-wiggle">
                        <div>Book Us</div>
                    </button>
                </a>
            </div>
            <div className='flex gap-3 items-center md:hidden'>
                <a href='#form'>
                    <button className="bg-blue-800 text-white p-2 rounded hover:animate-wiggle">
                        <div>Book Us</div>
                    </button>
                </a>
                <div>
                    <Popup
                        trigger={
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                        }
                        position="bottom right" on="click" closeOnDocumentClick mouseLeaveDelay={300} mouseEnterDelay={300} contentStyle={{ padding: '0px', border: 'none', width: '100px' }} arrow={false}>
                        <div className="flex-col justify-center ">
                            <a href='#'><div className="flex justify-center hover:bg-gray-500 hover:text-white px-4 py-2 transition-colors duration-300"> Home</div></a>
                            <a href='#about'><div className="flex justify-center hover:bg-gray-500 hover:text-white px-4 py-2 transition-colors duration-300"> About</div></a>
                            <a href='#gallery'><div className="flex justify-center hover:bg-gray-500 hover:text-white px-4 py-2 transition-colors duration-300"> Media</div></a>
                            <a href='#services'><div className="flex justify-center hover:bg-gray-500 hover:text-white px-2 py-2 transition-colors duration-300"> Consultancy</div></a>
                            <a href='#buttonbar'><div className="flex justify-center hover:bg-gray-500 hover:text-white px-4 py-2 transition-colors duration-300"> Coverage</div></a>
                            <a href='#form'><div className="flex justify-center hover:bg-gray-500 hover:text-white px-4 py-2 transition-colors duration-300"> Contact</div></a>
                            <a href='#form'><div className="flex justify-center hover:bg-gray-500 hover:text-white px-4 py-2 transition-colors duration-300"> Login</div></a>
                        </div>
                    </Popup>
                </div>
            </div>

        </div>
    )
}


