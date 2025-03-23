import Navbar from "@/Components/Navbar"
import { Head } from "@inertiajs/react"

const Welcome = () => {
    return (
        <>
        <div>
            <Head title="Politeknik Negeri Sambas"/>
            <Navbar>
                <div className="py-12 bg-gray-100">
                    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                        <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                            <p className="p-6 text-gray-900">testing</p>
                        </div>
                    </div>
                </div>
            </Navbar>
        </div>
        </>
    )
}
export default Welcome
