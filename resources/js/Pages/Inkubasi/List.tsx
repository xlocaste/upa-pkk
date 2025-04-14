import Navbar from '@/Components/Navbar'
import { Head, usePage, Link, router } from '@inertiajs/react'

interface Inkubasi {
  id: number
  nama_tenant: string
  bidang_fokus_tenant: string
  tahun_inkubasi_tenant: number
  tahun_exit_tenant: number
}

interface Props {
  Inkubasi: Inkubasi[]
  auth: {
    user: {
      id: number
      name: string
      email: string
    } | null
  }
}

const handleDelete = (id: number) => {
  if (confirm('Yakin ingin menghapus data inkubasi ini?')) {
    router.delete(route('inkubasi.index', { inkubasi: id }))
  }
}

export default function List({ Inkubasi, auth }: Props) {
  const { url } = usePage()

  return (
    <>
      <Navbar>
        <Head title="Daftar Inkubasi" />
        <div className="py-12 bg-gray-100 min-h-screen">
          <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg p-6">
              <h1 className="text-2xl font-bold mb-4 text-gray-800">Daftar Inkubasi</h1>

              <table className="w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-gray-200">
                    <th className="border border-gray-300 p-2">Nama Tenant</th>
                    <th className="border border-gray-300 p-2">Bidang Fokus</th>
                    <th className="border border-gray-300 p-2">Tahun Inkubasi</th>
                    <th className="border border-gray-300 p-2">Tahun Exit</th>
                    {auth.user && (
                      <th className="border border-gray-300 p-2">Action</th>
                    )}
                  </tr>
                </thead>
                <tbody>
                  {Inkubasi.map((item) => (
                    <tr key={item.id} className="hover:bg-gray-100">
                      <td className="border border-gray-300 p-2">{item.nama_tenant}</td>
                      <td className="border border-gray-300 p-2">{item.bidang_fokus_tenant}</td>
                      <td className="border border-gray-300 p-2">{item.tahun_inkubasi_tenant}</td>
                      <td className="border border-gray-300 p-2">{item.tahun_exit_tenant}</td>
                      {auth.user && (
                        <td className="border border-gray-300 p-2 space-x-2">
                          <Link
                            href={route('inkubasi.index', { inkubasi: item.id })}
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
                    href={route('inkubasi.index')}
                    className="px-4 py-2 text-sm text-gray-700 hover:underline"
                  >
                    Tambah Inkubasi
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
