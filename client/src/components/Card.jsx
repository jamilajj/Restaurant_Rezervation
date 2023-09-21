
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ReactPaginate from 'react-paginate'

function Products(props) {
    let items = props.Products;
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();
    const baseUrl = 'https://fakestoreapi.com/products'
    const itemsPerPage = 6


    const [itemOffset, setItemOffset] = useState(0);

    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    const currentItems = products.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(products.length / itemsPerPage);


    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % products.length;
        console.log(
            `User requested page number ${event.selected}, which is offset ${newOffset}`
        );
        setItemOffset(newOffset);
    };


    async function getAllProducts() {
        await axios.get(baseUrl).then((response) => {
            setProducts(response.data);
        });
    }
    useEffect(() => {
        getAllProducts();
    }, []);

    return (
        <div className="items-center"> 
            <div  className="flex flex-wrap container  ">

                {currentItems?.map((items) => (

                    <Card onClick={() => navigate(`/products/${items?.id}`)} style={{ width: '18rem' }} className="rounded-md relative cursor-pointer  mb-10 mx-5 " >
                        <Card.Img variant="top" src={items.image} className="h-48 max-h-full md:max-h-screen hover:opacity-75" />
                        <Card.Body>
                            <Card.Title>{items.title}</Card.Title>
                            <Card.Text>
                                {items.price}
                            </Card.Text>
                            <Button variant="primary">Go Booking</Button>
                        </Card.Body>
                    </Card>

                ))}
            </div>
            <div className="flex place-items-end">
            <ReactPaginate
                className="paginate flex gap-2   "
                breakLabel="..."
                nextLabel=">"
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                previousLabel="<"
                renderOnZeroPageCount={null}
            />
            </div>
            
        </div>



    )
}
export default Products;



