import Navbar from '@/Components/Navbar'
import { Head, usePage, Link, router } from '@inertiajs/react'

interface Mahasiswa {
  id: number
  nama: string
}

interface Alumni {
  id_alumni: number
  tempat_magang: string
  judul_magang: string
  judul_tugas_akhir: string
  tahun_lulus: number
  mahasiswa: Mahasiswa
}

interface Props {
  daftarAlumni: Alumni[]
  auth: {
    user: {
      id: number
      name: string
      email: string
    } | null
  }
}

const handleDelete = (id: number) => {
  if (confirm('Yakin ingin menghapus data alumni ini?')) {
    router.delete(route('alumni.index', id), {
      preserveScroll: true,
      onSuccess: () => {
        console.log('Data alumni berhasil dihapus')
      },
    })
  }
}

export default function List({ daftarAlumni, auth }: Props) {
  const { url } = usePage()

  return (
    <>
      <Navbar>
        <Head title="Daftar Alumni" />
        <div className="py-12 bg-gray-100 min-h-screen">
          <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg p-6">
              <h1 className="text-2xl font-bold mb-4 text-gray-800">Daftar Alumni</h1>

              <table className="w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-gray-200">
                    <th className="border border-gray-300 p-2">Nama Mahasiswa</th>
                    <th className="border border-gray-300 p-2">Tempat Magang</th>
                    <th className="border border-gray-300 p-2">Judul Magang</th>
                    <th className="border border-gray-300 p-2">Judul Tugas Akhir</th>
                    <th className="border border-gray-300 p-2">Tahun Lulus</th>
                    {auth.user && (
                      <th className="border border-gray-300 p-2">Action</th>
                    )}
                  </tr>
                </thead>
                <tbody>
                  {daftarAlumni.map((alumni) => (
                    <tr key={alumni.id_alumni} className="hover:bg-gray-100">
                      <td className="border border-gray-300 p-2">{alumni.mahasiswa?.nama}</td>
                      <td className="border border-gray-300 p-2">{alumni.tempat_magang}</td>
                      <td className="border border-gray-300 p-2">{alumni.judul_magang}</td>
                      <td className="border border-gray-300 p-2">{alumni.judul_tugas_akhir}</td>
                      <td className="border border-gray-300 p-2">{alumni.tahun_lulus}</td>
                      {auth.user && (
                        <td className="border border-gray-300 p-2 space-x-2">
                          <Link
                            href={route('alumni.index', alumni.id_alumni)}
                            className="px-4 py-2 text-sm text-gray-700 hover:underline"
                          >
                            Edit Alumni
                          </Link>
                          <button
                            onClick={() => handleDelete(alumni.id_alumni)}
                            className="px-4 py-2 text-sm text-red-600 hover:underline"
                          >
                            Hapus Alumni
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
                    href={route('alumni.index')}
                    className="px-4 py-2 text-sm text-gray-700 hover:underline"
                  >
                    Tambah Alumni
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </Navbar>
    </>
  )
}
