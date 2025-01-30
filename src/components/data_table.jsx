import React, { useState } from "react";
import DataTable from "react-data-table-component";
import { mockData } from "../Data/mockdata.jsx";
import Tooltip from '@mui/material/Tooltip';
import Button from "@mui/material/Button";
import Dialog  from "@mui/material/Dialog";
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';

const styles = {
    searchContainer: {
      display: 'flex',
      justifyContent: 'flex-end',
      marginBottom: '20px',
      textAlign: 'right',
      gap: '20px',
    },
    searchInput: {
      padding: '10px',
      width: '100%',
      maxWidth: '300px',
      borderRadius: '5px',
      border: '1px solid #ccc',
      fontSize: '16px',
    },
}

export default function DataTableComponent() {
    const [data, setdata] = useState(mockData)
    const [searchQuery, setSearchQuery] = useState('')
    const [filterdata, setfilterdata] = useState(mockData)
    const [editrow, seteditrow] = useState(null)
    const [open, setOpen] = useState(false)
    const [selectedRows, setSelectedRows] = useState([])   // selected rows for bulk actions. 

    // handle Edit
    const handleEdit = (row) => {
      seteditrow({...row})         // set row to edit 
      setOpen(true)         // open dialog box
    }

    // handle Delete
    const handleDelete = (rowId) => {
      const updatedata = data.filter((row) => row.id !== rowId)
      setdata(updatedata)           // update the state with filtered data
      setfilterdata(updatedata)          // sync with filtered data
    }
    
    // handle selected rows change 
    const handleSelectedRowsChange = (selectedRowsState) => {
      setSelectedRows(selectedRowsState.selectedRows || [])
    }
    
    // Handle Bulk delete 
    const handleBulkDelete = () => {
      const updatedata = data.filter((row) => !selectedRows.includes(row))
      setdata(updatedata)
      setfilterdata(updatedata)
      setSelectedRows([])      // reset selected rows
    }

    // Handle Edit Save
    const handleEditSave = () => {
      const updatedata = data.map((row) => 
        row.id === editrow.id ? editrow : row       // update only edited row
      )
      setdata(updatedata)
      setfilterdata(updatedata)
      setOpen(false)
    }

    const handleEditChange = (field, value) => {
        seteditrow((prev) => ({...prev, [field]: value}))
    }

    // Handle Search Query Change
    const handlesearch = (event) => {
        const query = event.target.value.toLowerCase()
        setSearchQuery(query)

        // Filter data based on Query 
        const filtered = data.filter(
            (row) => row.name.toLowerCase().includes(query) 
                    || row.email.toLowerCase().includes(query) 
                    || row.phone.includes(query)
                    || row.address.toLowerCase().includes(query)
        )
        setfilterdata(filtered)
    }

    const columns = [
        {
          name: 'ID',
          selector: (row) => row.id,
          sortable: true,
          cell: (row) => (
            <Tooltip title={`User ID: ${row.id}`} arrow>
              <span>{row.id}</span>
            </Tooltip>
          ),
        },
        {
          name: 'Name',
          selector: (row) => row.name,
          sortable: true, // Enable sorting for this column
          cell: (row) => (
            <Tooltip title={`Full Name: ${row.name}`} arrow>
              <span>{row.name}</span>
            </Tooltip>
          )
        },
        {
          name: 'Email',
          selector: (row) => row.email,
          sortable: true,         // Enable sorting for this column
          cell: (row) => (
            <Tooltip title={`Email: ${row.email}`} arrow>
              <span>{row.email}</span>
            </Tooltip>
          )
        },
        {
          name: 'Role',
          selector: (row) => row.role,
          cell: (row) => (
            <Tooltip title={`Role: ${row.role}`} arrow>
              <span>{row.role}</span>
            </Tooltip>
          ),
        },
        {
          name: 'Phone',
          selector: (row) => row.phone,
          sortable: false,
          cell: (row) => (
            <Tooltip title={`Phone: ${row.phone}`} arrow>
              <span>{row.phone}</span>
            </Tooltip>
          ),
        },
        {
          name: 'Adress',
          selector: (row) => row.address,
          sortable: false,
          cell: (row) => (
            <Tooltip title={`Adress: ${row.address}`} arrow>
              <span>{row.address}</span>
            </Tooltip>
          )
        },
        {
          name: 'Actions',
          cell : (row) => (
            <div style={{display: "flex", gap:"10px"}}>
              <Button
                variant="contained"
                size="small"
                color="primary"
                onClick={() => handleEdit(row)}
              >
                Edit
              </Button>
              <Button
                variant="contained"
                size="small"
                color="secondary"
                onClick={() => handleDelete(row.id)}
              >
                Delete
              </Button>
            </div>
          )
        }
    ]

    const customStyles = {
        rows: {
          style: {
            minHeight: '45px',     // Adjust the row height
          },
        },
        headCells: {
          style: {
            backgroundColor: '#1a73e8',
            color: 'white',
            fontWeight: 'bold',
          },
        },
        cells: {
          style: {
            padding: '10px',
          },
        },
    }

    return(
        <>
            <div style={{padding: "20px"}}>
                <h2 style={{color:"white"}}>Data Table</h2>
                <div style={styles.searchContainer}>
                    <input 
                        type="text"
                        placeholder="Search..."
                        value={searchQuery}
                        onChange={handlesearch}
                        style={styles.searchInput}
                    />
                    {selectedRows.length > 0 && (
                      <Button
                        variant="contained"
                        color="secondary"
                        size="small"
                        onClick={handleBulkDelete}
                      >
                        Delete Selected ({selectedRows.length})
                      </Button>
                    )}
                </div>
                <DataTable 
                    columns={columns}
                    data={filterdata || []}
                    pagination
                    paginationPerPage={5}
                    paginationRowsPerPageOptions={[5,10,15]}
                    customStyles={customStyles}
                    striped
                    highlightOnHover
                    selectableRows
                    onSelectedRowsChange={handleSelectedRowsChange}
                />
                <Dialog open={open} onClose={() => setOpen(false)}>
                  <DialogTitle>Edit Row</DialogTitle>
                  <DialogContent>
                    <TextField 
                      label="Name"
                      value={editrow?.name || ''}
                      onChange={(e) => handleEditChange('name', e.target.value)}
                      fullWidth
                      margin="dense"
                    />
                    <TextField 
                      label="Email"
                      value={editrow?.email || ''}
                      onChange={(e) => handleEditChange('email', e.target.value)}
                      fullWidth
                      margin="dense"
                    />
                    <TextField 
                      label="Role"
                      value={editrow?.role || ''}
                      onChange={(e) => handleEditChange('role', e.target.value)}
                      fullWidth
                      margin="dense"
                    />
                  </DialogContent>
                  <DialogActions>
                    <Button onClick={() => setOpen(false)} color="secondary">
                      Cancel
                    </Button>
                    <Button onClick={handleEditSave} color="primary">
                      Save
                    </Button>
                  </DialogActions>
                </Dialog>
            </div>
        </>
    )
}
