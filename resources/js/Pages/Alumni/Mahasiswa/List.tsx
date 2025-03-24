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
}

export default function List({ Mahasiswa }: Props) {
  const { url } = usePage();

  return (
    <>
      <Head title="Daftar Mahasiswa" />
      <div className="container mx-auto p-6">
        <h1 className="text-2xl font-bold mb-4">Daftar Mahasiswa</h1>
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 p-2">Nama</th>
              <th className="border border-gray-300 p-2">NIM</th>
              <th className="border border-gray-300 p-2">Semester</th>
              <th className="border border-gray-300 p-2">IPK</th>
            </tr>
          </thead>
          <tbody>
            {Mahasiswa.map((item) => (
              <tr key={item.id} className="hover:bg-gray-100">
                <td className="border border-gray-300 p-2">{item.nama}</td>
                <td className="border border-gray-300 p-2">{item.nim}</td>
                <td className="border border-gray-300 p-2">{item.semester}</td>
                <td className="border border-gray-300 p-2">{item.ipk}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="mt-6">
        <Link
            href={route('mahasiswa.create')}
            className="px-4 py-2 text-sm text-gray-700 hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
        >
            Tambah Mahasiswa
        </Link>

        </div>
      </div>
    </>
  );
}
