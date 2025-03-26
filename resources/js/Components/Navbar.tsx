import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from "@inertiajs/react";
import { ReactNode } from "react";

interface NavbarProps {
    children: ReactNode;
}

export default function Navbar({ children }: NavbarProps) {
    return (
        <>
            <nav className="bg-gray-100">
                <div className="bg-white border-b border-gray-100 shadow-sm">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex justify-between h-16 items-center">
                            <div className="flex">
                                <ApplicationLogo className="block h-9 w-auto fill-current text-gray-800" />
                            </div>
                            <div className="flex space-x-4">
                                <Link
                                    href={route('mahasiswa.index')}
                                    className="px-4 py-2 text-sm text-gray-700 hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                                >
                                    Mahasiswa
                                </Link>
                                <Link
                                    href={route('mahasiswa.index')}
                                    className="px-4 py-2 text-sm text-gray-700 hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                                >
                                    Alumni
                                </Link>
                                <Link
                                    href={route('login')}
                                    className="px-4 py-2 text-sm text-gray-700 hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                                >
                                    Lowongan Kerja
                                </Link>
                                <Link
                                    href={route('login')}
                                    className="px-4 py-2 text-sm text-gray-700 hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                                >
                                    Inkubasi
                                </Link>
                                <Link
                                    href={route('login')}
                                    className="px-4 py-2 text-sm text-gray-700 hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                                >
                                    Pra Inkubasi
                                </Link>
                                <Link
                                    href={route('login')}
                                    className="px-4 py-2 text-sm text-gray-700 hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                                >
                                    Log in
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            <main>{children}</main>
        </>
    );
}
