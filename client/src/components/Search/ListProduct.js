import React, { useState } from 'react';
import Product from './Product';

function ListProduct(props) {
    const { HotSaleProducts } = props;
    const itemsPerPage = 10;
    const [currentPage, setCurrentPage] = useState(1);

    // Tính toán số trang
    const totalPages = Math.ceil(HotSaleProducts.length / itemsPerPage);

    // Lấy sản phẩm cho trang hiện tại
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = HotSaleProducts.slice(indexOfFirstItem, indexOfLastItem);

    // Hàm chuyển trang
    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    return (
        <div className="hotsale-listproduct">
            {currentItems.map((product, index) => (
                <Product product={product} key={index} />
            ))}
            <div className="pagination1">
                {Array.from({ length: totalPages }, (_, index) => (
                    <button
                        key={index + 1}
                        onClick={() => handlePageChange(index + 1)}
                        className={currentPage === index + 1 ? 'active' : ''}
                    >
                        {index + 1}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default ListProduct;