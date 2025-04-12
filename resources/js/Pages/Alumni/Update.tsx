import Navbar from '@/Components/Navbar';
import { Head, router, useForm } from '@inertiajs/react';

interface Mahasiswa {
  id: number;
  nama: string;
  nim: string;
}

interface Alumni {
  id: number;
  mahasiswa_id: number;
  tempat_magang: string;
  judul_magang: string;
  judul_tugas_akhir: string;
  tugas_akhir: string;
  tahun_lulus: number;
}

export default function Edit({
  alumni,
  mahasiswaList,
}: {
  alumni: Alumni;
  mahasiswaList: Mahasiswa[];
}) {
  const { data, setData, put, processing } = useForm({
    mahasiswa_id: alumni.mahasiswa_id || '',
    tempat_magang: alumni.tempat_magang || '',
    judul_magang: alumni.judul_magang || '',
    judul_tugas_akhir: alumni.judul_tugas_akhir || '',
    tugas_akhir: alumni.tugas_akhir || '',
    tahun_lulus: alumni.tahun_lulus || '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    put(route('alumni.update', alumni.id), {
      onSuccess: () => router.visit(route('alumni.index')),
    });
  };

  return (
    <>
      <Navbar>
        <Head title="Edit Alumni" />
        <div className="py-12 bg-gray-100 min-h-screen">
          <div className="max-w-4xl mx-auto sm:px-6 lg:px-8">
            <div className="bg-white shadow sm:rounded-lg p-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  value={
                    mahasiswaList.find((mhs) => mhs.id === data.mahasiswa_id)?.nim +
                        ' - ' +
                    mahasiswaList.find((mhs) => mhs.id === data.mahasiswa_id)?.nama
                  }
                  className="w-full border rounded p-2 bg-gray-100 text-gray-700 cursor-not-allowed"
                  readOnly
                />
                <input
                  type="text"
                  placeholder="Tempat Magang"
                  value={data.tempat_magang}
                  onChange={(e) => setData('tempat_magang', e.target.value)}
                  className="w-full border rounded p-2"
                  required
                />
                <input
                  type="text"
                  placeholder="Judul Magang"
                  value={data.judul_magang}
                  onChange={(e) => setData('judul_magang', e.target.value)}
                  className="w-full border rounded p-2"
                  required
                />
                <input
                  type="text"
                  placeholder="Judul Tugas Akhir"
                  value={data.judul_tugas_akhir}
                  onChange={(e) => setData('judul_tugas_akhir', e.target.value)}
                  className="w-full border rounded p-2"
                  required
                />
                <input
                  type="text"
                  placeholder="Tahun Lulus"
                  value={data.tahun_lulus}
                  onChange={(e) => setData('tahun_lulus', e.target.value)}
                  className="w-full border rounded p-2"
                  required
                />
                <button
                  type="submit"
                  className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
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
