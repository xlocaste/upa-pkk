import Navbar from '@/Components/Navbar';
import { useForm } from '@inertiajs/react';

export default function Form() {
  const { data, setData, post, processing } = useForm({
    nama: '',
    nim: '',
    semester: '',
    ipk: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    post(route('mahasiswa.store'));
  };

  return (
    <>
    <Navbar>
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
                                required />
                            <input
                                type="text"
                                placeholder="NIM"
                                value={data.nim}
                                onChange={(e) => setData('nim', e.target.value)}
                                className="w-full border rounded p-2"
                                required />
                            <input
                                type="number"
                                placeholder="Semester"
                                value={data.semester}
                                onChange={(e) => setData('semester', e.target.value)}
                                className="w-full border rounded p-2"
                                required />
                            <input
                                type="number"
                                placeholder="IPK"
                                step="0.01"
                                value={data.ipk}
                                onChange={(e) => setData('ipk', e.target.value)}
                                className="w-full border rounded p-2"
                                required />
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
