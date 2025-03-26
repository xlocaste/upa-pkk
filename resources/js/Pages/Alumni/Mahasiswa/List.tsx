import Navbar from '@/Components/Navbar';
import { Head, usePage, Link } from '@inertiajs/react';

interface Mahasiswa {
  id: number;
  nama: string;
  nim: string;
  semester: number;
  ipk: number;
}

interface Props {
    Mahasiswa: Mahasiswa[];
    auth: {
        user: {
            id: number;
            name: string;
            email: string;
        } | null;
    };
}

interface Props {
  Mahasiswa: Mahasiswa[];
}

export default function List({ Mahasiswa, auth }: Props) {
  const { url } = usePage();

  return (
    <>
    <Navbar>

      <Head title="Daftar Mahasiswa" />
        <div className="py-12 bg-gray-100 min-h-screen">
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg p-6">
                    <h1 className="text-2xl font-bold mb-4 text-gray-800">Daftar Mahasiswa</h1>
                    <table className="w-full border-collapse border border-gray-300">
                        <thead>
                            <tr className="bg-gray-200">
                            <th className="border border-gray-300 p-2">Nama</th>
                            <th className="border border-gray-300 p-2">NIM</th>
                            <th className="border border-gray-300 p-2">Semester</th>
                            <th className="border border-gray-300 p-2">IPK</th>
                            {auth.user && (
                            <th className="border border-gray-300 p-2">Action</th>
                            )}
                            </tr>
                        </thead>
                        <tbody>
                            {Mahasiswa.map((mahasiswa) => (
                            <tr key={mahasiswa.id} className="hover:bg-gray-100">
                                <td className="border border-gray-300 p-2">{mahasiswa.nama}</td>
                                <td className="border border-gray-300 p-2">{mahasiswa.nim}</td>
                                <td className="border border-gray-300 p-2">{mahasiswa.semester}</td>
                                <td className="border border-gray-300 p-2">{mahasiswa.ipk}</td>
                                {auth.user && (
                                <td className="border border-gray-300 p-2">
                                     <Link
                                        href={route('mahasiswa.edit', mahasiswa.id)}
                                        className="px-4 py-2 text-sm text-gray-700 hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                                    >
                                        Edit Mahasiswa
                                    </Link>
                                </td>
                                )}
                            </tr>
                            ))}
                        </tbody>
                    </table>

                    {auth.user && (
                    <div className="mt-6">
                        <Link
                            href={route('mahasiswa.create')}
                            className="px-4 py-2 text-sm text-gray-700 hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                        >
                            Tambah Mahasiswa
                        </Link>
                    </div>
                    )}
                </div>
            </div>
        </div>
    </Navbar>
    </>
  );
}
