import { Table } from "react-bootstrap"
import { TableData } from "../MockData/TableData"

export const ParisTable = () =>{
    return(
        <div className="paris-table">
                <table class="table table-striped table-bordered">
                    <thead className="thead-dark"> 
                        <tr>
                            <th scope="col">No</th>
                            <th scope="col">Barcode</th>
                            <th scope="col">Nama Barang</th>
                            <th scope="col">Merk</th>
                            <th scope="col">Input date</th>
                            <th scope="col">Update date</th>
                            <th scope="col" className="text-center">Action</th>
                        
                        </tr>
                    </thead>
                    <tbody>

                        {TableData().map((key,index) => (
                            <tr>
                                <th scope="row" className="align-middle">{index}</th>
                                    <td className="align-middle">1234{index+1}</td>
                                    <td className="align-middle">Barang A</td>
                                    <td className="align-middle">Miko</td>
                                    <td className="align-middle">2024-20-03</td>
                                    <td className="align-middle">2024-20-04</td>
                                    <td className="text-center">
                                        <button className="paris-btn btn btn-primary btn-sm">Edit</button>&nbsp;
                                        <button className="paris-btn btn btn-danger btn-sm">Delete</button>&nbsp;
                                        <button className="paris-btn btn btn-warning btn-sm">Publish</button>
                                    </td>
                            </tr>
                        )) }                        
                    </tbody>
                    </table>
        </div>
    )
}