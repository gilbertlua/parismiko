import { TableData } from "../MockData/TableData"
import { FindTable } from "./FindTable"
import { GetItems } from "../Query/DataQuery"

export const ParisTable = () =>{
    GetItems()
    return(
        <div className="paris-table p-3 bg-dark rounded">
            {/* find */}
            <table className="table table-striped table-bordered table-dark">
                    <FindTable/>
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

                        {TableData().map((item,index) => (
                            <tr key={index}>
                                <th scope="row" className="align-middle">{index}</th>
                                    <td className="align-middle">1234{index+1}</td>
                                    <td className="align-middle">Barang A</td>
                                    <td className="align-middle">Miko</td>
                                    <td className="align-middle">2024-20-03</td>
                                    <td className="align-middle">2024-20-04</td>
                                    <td className="text-center">
                                        <button className="paris-btn btn btn-light btn-sm">&nbsp; Edit &nbsp;</button>&nbsp;
                                        {/* <button className="paris-btn btn btn-warning btn-sm">Publish</button>&nbsp; */}
                                        <button className="paris-btn btn btn-danger btn-sm">Delete</button>
                                    </td>
                            </tr>
                        )) }                        
                    </tbody>
                    </table>
        </div>
    )
}