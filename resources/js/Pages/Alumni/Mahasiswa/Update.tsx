import Navbar from '@/Components/Navbar';
import { Head, router, useForm } from '@inertiajs/react';

interface Mahasiswa {
  id: number;
  nama: string;
  nim: string;
  semester: number;
  ipk: number;
}

export default function Edit({ mahasiswa }: { mahasiswa: Mahasiswa }) {
  const { data, setData, put, processing } = useForm({
    nama: mahasiswa.nama || '',
    nim: mahasiswa.nim || '',
    semester: mahasiswa.semester || '',
    ipk: mahasiswa.ipk || '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    put(route('mahasiswa.update', mahasiswa.id), {
        onSuccess: () => router.visit(route('mahasiswa.index')),
      });
  };

  return (
    <>
      <Navbar>
      <Head title="Daftar Mahasiswa" />
        <div className="py-12 bg-gray-100 min-h-screen">
          <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg p-6">
              <form onSubmit={handleSubmit} className="space-y-3">
                <input
                  type="text"
                  placeholder="Nama"
                  value={data.nama}
                  onChange={(e) => setData('nama', e.target.value)}
                  className="w-full border rounded p-2"
                  required
                />
                <input
                  type="text"
                  placeholder="NIM"
                  value={data.nim}
                  onChange={(e) => setData('nim', e.target.value)}
                  className="w-full border rounded p-2"
                  required
                />
                <input
                  type="number"
                  placeholder="Semester"
                  value={data.semester}
                  onChange={(e) => setData('semester', e.target.value)}
                  className="w-full border rounded p-2"
                  required
                />
                <input
                  type="number"
                  placeholder="IPK"
                  step="0.01"
                  value={data.ipk}
                  onChange={(e) => setData('ipk', e.target.value)}
                  className="w-full border rounded p-2"
                  required
                />
                <button
                  type="submit"
                  className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
                  disabled={processing}
                >
                  {processing ? 'Menyimpan...' : 'Update'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </Navbar>
    </>
  );
}
