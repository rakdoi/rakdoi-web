// create navbar for menu on top page with nextjs14 and tailwindcss
import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className="bg-gray-800 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-white text-lg font-bold">
                    <Link href="/">
                        {/* <a>MyWebsite</a> */}
                        MyWebsite
                    </Link>
                </div>
                <div className="space-x-4">
                    <Link href="/" className="text-gray-300 hover:text-white">
                        home
                        {/* <div className="text-gray-300 hover:text-white">Home</div> */}
                    </Link>
                    <Link href="/about" className="text-gray-300 hover:text-white">
                        {/* <div className="text-gray-300 hover:text-white">About</div> */}
                        about
                    </Link>
                    <Link href="/contact" className="text-gray-300 hover:text-white">
                        {/* <div className="text-gray-300 hover:text-white">Contact</div> */}
                        Contact
                    </Link>
                </div>
            </div>
        </nav>
    );
};

// export default NavBar;