import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link, usePage } from "@inertiajs/react";
import { ReactNode } from "react";

interface NavbarProps {
    children: ReactNode;
}

interface User {
    id: number;
    name: string;
    email: string;
}

export default function Navbar({ children }: NavbarProps) {
    const { auth } = usePage().props as unknown as { auth: { user: User | null } };

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
                                    className="px-4 py-2 text-sm text-gray-700 hover:underline"
                                >
                                    Mahasiswa
                                </Link>
                                <Link
                                    href={route('alumni.index')}
                                    className="px-4 py-2 text-sm text-gray-700 hover:underline"
                                >
                                    Alumni
                                </Link>
                                <Link
                                    href={route('login')}
                                    className="px-4 py-2 text-sm text-gray-700 hover:underline"
                                >
                                    Lowongan Kerja
                                </Link>
                                <Link
                                    href={route('login')}
                                    className="px-4 py-2 text-sm text-gray-700 hover:underline"
                                >
                                    Inkubasi
                                </Link>
                                <Link
                                    href={route('login')}
                                    className="px-4 py-2 text-sm text-gray-700 hover:underline"
                                >
                                    Pra Inkubasi
                                </Link>

                                {auth.user ? (
                                    <Link
                                        method="post"
                                        href={route('logout')}
                                        as="button"
                                        className="px-4 py-2 text-sm text-gray-700 hover:underline"
                                    >
                                        Log out
                                    </Link>
                                ) : (
                                    <Link
                                        href={route('login')}
                                        className="px-4 py-2 text-sm text-gray-700 hover:underline"
                                    >
                                        Log in
                                    </Link>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            <main>{children}</main>
        </>
    );
}
