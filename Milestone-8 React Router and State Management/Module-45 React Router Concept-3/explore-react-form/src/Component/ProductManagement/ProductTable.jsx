const ProductTable = ({ products }) => {
    return (
        <div className="mb-10">
            <h3 className="m-10 text-center">Products: {products.length}</h3>
            <table className="table-auto border-collapse border border-gray-400">
                <thead className="table-auto">
                    <tr>
                        <th className="border border-gray-30 p-4">No.</th>
                        <th className="border border-gray-30 p-4">Product</th>
                        <th className="border border-gray-30 p-4">Price</th>
                        <th className="border border-gray-30 p-4">Quantity</th>
                        <th className="border border-gray-30 p-4">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map((product, index) =>
                            <tr key={index}>
                                <td className="border border-gray-30 p-4">{index + 1}</td>
                                <td className="border border-gray-30 p-4">{product.name}</td>
                                <td className="border border-gray-30 p-4">{product.price}</td>
                                <td className="border border-gray-30 p-4">{product.quantity}</td>
                                <td className="border border-gray-30 p-4"><button>Delete</button></td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
};

export default ProductTable;