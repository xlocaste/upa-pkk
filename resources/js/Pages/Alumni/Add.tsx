import Navbar from '@/Components/Navbar';
import { useForm, usePage } from '@inertiajs/react';

interface Mahasiswa {
  id: number;
  nim: string;
  nama: string;
}

interface PageProps {
  mahasiswa: Mahasiswa[];
}

export default function Add({ mahasiswa }: PageProps) {
  const { data, setData, post, processing } = useForm({
    mahasiswa_id: '',
    tempat_magang: '',
    judul_magang: '',
    judul_tugas_akhir: '',
    tugas_akhir: '',
    tahun_lulus: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    post(route('alumni.store'));
  };

  return (
    <>
      <Navbar>
        <div className="py-12 bg-gray-100 min-h-screen">
          <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg p-6">
              <h1 className="text-2xl font-bold mb-4">Tambah Alumni</h1>
              <form onSubmit={handleSubmit} className="space-y-3">
                <label className="block font-medium">Pilih Mahasiswa (berdasarkan NIM)</label>
                <select
                  value={data.mahasiswa_id}
                  onChange={(e) => setData('mahasiswa_id', e.target.value)}
                  className="w-full border rounded p-2"
                  required
                >
                  <option value="">-- Pilih Mahasiswa --</option>
                  {mahasiswa.map((mhs) => (
                    <option key={mhs.id} value={mhs.id}>
                      {mhs.nim} - {mhs.nama}
                    </option>
                  ))}
                </select>

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
                    type="number"
                    placeholder="Tahun Lulus"
                    value={data.tahun_lulus}
                    onChange={(e) => setData('tahun_lulus', e.target.value)}
                    className="w-full border rounded p-2"
                    required
                    min="1900"
                    max={new Date().getFullYear()}
                />
                <textarea
                  placeholder="Deskripsi Tugas Akhir"
                  value={data.tugas_akhir}
                  onChange={(e) => setData('tugas_akhir', e.target.value)}
                  className="w-full border rounded p-2"
                  rows={4}
                  required
                />
                <button
                  type="submit"
                  className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                  disabled={processing}
                >
                  {processing ? 'Menyimpan...' : 'Simpan'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </Navbar>
    </>
  );
}
