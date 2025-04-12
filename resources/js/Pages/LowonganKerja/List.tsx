import Navbar from '@/Components/Navbar';
import { Head, Link, router, usePage } from '@inertiajs/react';

interface LowonganKerja {
  id: number;
  judul_lowongan_kerja: string;
  deskripsi: string;
  kontak: string;
  image: string;
}

interface Props {
  lowongan: LowonganKerja[];
  auth: {
    user: {
      id: number;
      name: string;
      email: string;
    } | null;
  };
}

const handleDelete = (id: number) => {
  if (confirm('Yakin ingin menghapus lowongan kerja ini?')) {
    router.delete(route('lowongan-kerja.index', { lowongan: id }), {
      preserveScroll: true,
      onSuccess: () => {
        console.log('Lowongan kerja berhasil dihapus');
      },
    });
  }
};

export default function LowonganKerjaList({ lowongan, auth }: Props) {
  const { url } = usePage();

  return (
    <>
      <Navbar>
        <Head title="Lowongan Kerja" />

        <div className="py-12 bg-gray-100 min-h-screen">
          <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg p-6">
              <h1 className="text-2xl font-bold mb-4 text-gray-800">Daftar Lowongan Kerja</h1>

              <table className="w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-gray-200">
                    <th className="border border-gray-300 p-2">Judul</th>
                    <th className="border border-gray-300 p-2">Deskripsi</th>
                    <th className="border border-gray-300 p-2">Kontak</th>
                    <th className="border border-gray-300 p-2">Gambar</th>
                    {auth.user && <th className="border border-gray-300 p-2">Action</th>}
                  </tr>
                </thead>
                <tbody>
                  {lowongan?.map((item) => (
                    <tr key={item.id} className="hover:bg-gray-100">
                      <td className="border border-gray-300 p-2">{item.judul_lowongan_kerja}</td>
                      <td className="border border-gray-300 p-2">{item.deskripsi}</td>
                      <td className="border border-gray-300 p-2">{item.kontak}</td>
                      <td className="border border-gray-300 p-2">
                        <img
                          src={`/storage/${item.image}`}
                          alt={item.judul_lowongan_kerja}
                          className="w-20 h-20 object-cover rounded"
                        />
                      </td>
                      {auth.user && (
                        <td className="border border-gray-300 p-2">
                          <Link
                            href={route('lowongan-kerja.index', item.id)}
                            className="mr-2 text-blue-600 hover:underline"
                          >
                            Edit
                          </Link>
                          <button
                            onClick={() => handleDelete(item.id)}
                            className="text-red-600 hover:underline"
                          >
                            Hapus
                          </button>
                        </td>
                      )}
                    </tr>
                  ))}
                </tbody>
              </table>

              {auth.user && (
                <div className="mt-6">
                  <Link
                    href={route('lowongan-kerja.index')}
                    className="px-4 py-2 text-sm text-gray-700 hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                  >
                    Tambah Lowongan
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
