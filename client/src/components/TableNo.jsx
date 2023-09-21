import React from 'react';
import Form from 'react-bootstrap/Form';


const TableNo = () => {

    return (
        <div>
                        <p>Nece neferlik masa isteyirsiniz?</p>
            <Form.Select aria-label="Default select example" required>
   
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
                <option value="5">Five</option>
                <option value="10">Ten</option>
                <option value="More">More</option>
            </Form.Select>

        </div>
    )
}

export default TableNo
