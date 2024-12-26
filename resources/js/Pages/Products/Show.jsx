import { Link } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

export default function Show({ product }) {
    return (
        <AuthenticatedLayout>
            <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-lg mt-6"> {/* เพิ่ม mt-6 */}
                <div className="flex items-center space-x-6">
                    {/* รูปภาพฝั่งซ้าย */}
                    <img
                        src={product.image}
                        alt={product.name}
                        className="w-3/6 h-auto max-h-50 object-cover rounded-lg" // กำหนดให้ภาพไม่เกิน 192px
                    />

                    {/* ข้อความอยู่ด้านขวา */}
                    <div className="flex-1">
                        <h1 className="text-2xl font-semibold text-gray-800">{product.name}</h1>

                        <p className="mt-4 text-gray-600">{product.description}</p>
                        <p className="mt-4 text-lg font-medium text-gray-800">
                            Price: <span className="text-green-600">{product.price} ฿</span>
                        </p>
                        <hr className="my-6 border-gray-300" />

                        {/* ปุ่มกลับไปหน้ารวมสินค้า */}
                        <Link
                            href="/products"
                            className="inline-block px-4 py-2 text-sm font-medium text-white bg-green-600 border border-green-700 rounded hover:bg-green-500 hover:border-green-600"
                        >
                            Back to All Products
                        </Link>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
