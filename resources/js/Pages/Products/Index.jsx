import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Link } from '@inertiajs/react';

export default function Index({ products }) {
    return (
        <AuthenticatedLayout>
            <div className="max-w-7xl mx-auto px-4 py-8">
                {/* เปลี่ยนสีข้อความตรงนี้ให้เป็นสีดำ */}
                <h1 className="text-4xl font-bold text-white bg-black text-center mb-9 py-2">
                    กระเป๋าแบรนด์ LYN
                </h1>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
                    {products.map((product) => (
                        <div
                            key={product.id}
                            className="bg-white border border-gray-200 rounded-lg shadow hover:shadow-lg transition-shadow duration-300"
                        >
                            <Link href={`/products/${product.id}`} className="block">
                                {/* ปรับขนาดรูปภาพตรงนี้ */}
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-60 object-cover rounded-t-lg"
                                />
                                <div className="p-4">
                                    <h2 className="text-lg font-semibold text-gray-500 mb-2 hover:text-black">
                                        {product.name}
                                    </h2>
                                    <p className="text-green-600 font-bold text-lg">
                                        {product.price} ฿
                                    </p>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
