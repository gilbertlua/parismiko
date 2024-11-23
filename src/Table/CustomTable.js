import { useEffect, useState } from "react"
import { DeleteItem, GetItems } from "../Query/DataQuery"
import { DataGrid,GridRowsProp } from '@mui/x-data-grid';
import { Box,Button } from "@mui/material";
import EditModal from "./EditModal";



const IdrFormat = (number) =>{
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
    }).format(number);
}
export default function CustomTable(){    
    const [rows, setRows] = useState([])
    const [selectedRows, setSelectedRows] = useState(null)
    const [showModal, setShowModal] = useState(false)

    const columns = [
        { 
            field: 'no', 
            headerName: '#', 
            headerClassName:'table-header',
            width: 30 },
        {
            field: 'name',
            headerName: 'Nama Barang',
            width: 150,
            editable: true,
        },
        {
            field: 'merk',
            headerName: 'Merk',
            width: 150,
            editable: true,
        },
        {
            field: 'price',
            headerName: 'Harga',
            width: 150,
            editable: true,
        },    
        {
            field: 'barcode',
            headerName: 'Barcode',
            type:'text',
            width: 140,
        },
        {
            field: 'stock',
            headerName: 'Stok',
            type:'text',
            width: 100,
        },
        {
            field: 'created_date',
            headerName: 'Tanggal Pembuatan',
            type: 'string',
            width: 150,
            editable: true,
        },
        {
            field: 'action',
            headerName: 'Action',
            width: 200,
            renderCell: (params) => (
                <>
                    <Button variant="contained" color="primary"
                        onClick={() => handleEdit(params.row)} disableElevation size="small"
                    >
                    Edit
                    </Button>
    
                    <Button sx={{marginLeft:'4px'}} variant="contained" color="error"
                        onClick={() => handleDelete(params.row)} disableElevation size="small"
                    >
                    Delete
                    </Button>
                </>
            ),
        },
      ];
      
    const handleEdit = (row) => {
        setSelectedRows(row)
        setShowModal(true)
    }
    const handleDelete = async (row) => {
        await DeleteItem(row.id)
        window.location.reload();
    }


    useEffect(() => {
        async function fetchItem() {
            try {
                const data = await GetItems();
                const setData = data.map((item, index) => ({
                    id: item.id,
                    no: index + 1,
                    name: item.name,
                    price: IdrFormat(item.price),
                    merk:item.merk,
                    barcode: item.barcode,
                    stock:item.stock || '0',
                    created_date: item.created_date || '-',
                    action: 'action'
                }));
                setRows(setData);
            } catch (error) {
                console.error('Failed to fetch the rows', error);
            }
        }

        fetchItem();
    }, []); 

    
    return(
        
        <>
            
            {showModal ? <EditModal row={selectedRows} setShowModal={setShowModal}/>: ''}

            <Box sx={{ height: '100vh', width: 'calc(100vw-80px)', padding:'10px 10px',backgroundColor:'white' }}>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    initialState={{
                    pagination: {
                        paginationModel: {
                        pageSize: 10,
                        },
                    },
                    }}
                    pageSizeOptions={[10]}
                    checkboxSelection
                    disableRowSelectionOnClick
                />
            </Box>
        </>
    )
}