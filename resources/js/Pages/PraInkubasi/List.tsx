import Navbar from '@/Components/Navbar'
import { Head, usePage, Link, router } from '@inertiajs/react'

interface praInkubasi {
  id: number
  nama_usaha: string
  prodi: string
  kelas: string
  semester: number
  brand_produk: string
  link: string
}

interface Props {
  praInkubasi: praInkubasi[]
  auth: {
    user: {
      id: number
      name: string
      email: string
    } | null
  }
}

const handleDelete = (id: number) => {
  if (confirm('Yakin ingin menghapus data pra inkubasi ini?')) {
    router.delete(route('pra-inkubasi.destroy', { praInkubasi: id }))
  }
}

export default function List({ praInkubasi, auth }: Props) {
  const { url } = usePage()

  return (
    <>
      <Navbar>
        <Head title="Daftar Pra Inkubasi" />
        <div className="py-12 bg-gray-100 min-h-screen">
          <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg p-6">
              <h1 className="text-2xl font-bold mb-4 text-gray-800">Daftar Pra Inkubasi</h1>

              <table className="w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-gray-200">
                    <th className="border border-gray-300 p-2">Nama Usaha</th>
                    <th className="border border-gray-300 p-2">Prodi</th>
                    <th className="border border-gray-300 p-2">Kelas</th>
                    <th className="border border-gray-300 p-2">Semester</th>
                    <th className="border border-gray-300 p-2">Brand Produk</th>
                    <th className="border border-gray-300 p-2">Link</th>
                    {auth.user && <th className="border border-gray-300 p-2">Action</th>}
                  </tr>
                </thead>
                <tbody>
                  {praInkubasi.map((item) => (
                    <tr key={item.id} className="hover:bg-gray-100">
                      <td className="border border-gray-300 p-2">{item.nama_usaha}</td>
                      <td className="border border-gray-300 p-2">{item.prodi}</td>
                      <td className="border border-gray-300 p-2">{item.kelas}</td>
                      <td className="border border-gray-300 p-2">{item.semester}</td>
                      <td className="border border-gray-300 p-2">{item.brand_produk}</td>
                      <td className="border border-gray-300 p-2">
                        <a
                          href={item.link}
                          className="text-blue-600 hover:underline"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Lihat
                        </a>
                      </td>
                      {auth.user && (
                        <td className="border border-gray-300 p-2 space-x-2">
                          <Link
                            href={route('pra-inkubasi.edit', { praInkubasi: item.id })}
                            className="px-4 py-2 text-sm text-blue-600 hover:underline"
                          >
                            Edit
                          </Link>
                          <button
                            onClick={() => handleDelete(item.id)}
                            className="px-4 py-2 text-sm text-red-600 hover:underline"
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
                    href={route('pra-inkubasi.create')}
                    className="px-4 py-2 text-sm text-gray-700 hover:underline"
                  >
                    Tambah Pra Inkubasi
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
