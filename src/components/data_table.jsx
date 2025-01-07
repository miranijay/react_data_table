import React, { useState } from "react";
import DataTable from "react-data-table-component";
import { mockData } from "../Data/mockdata.jsx";
import Tooltip from '@mui/material/Tooltip';

const styles = {
    searchContainer: {
      marginBottom: '20px',
      textAlign: 'right',
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

    const [searchQuery, setSearchQuery] = useState('')
    const [filterdata, setfilterdata] = useState(mockData)

    // Handle Search Query Change
    const handlesearch = (event) => {
        const query = event.target.value.toLowerCase()
        setSearchQuery(query)

        // Filter data based on Query 
        const filtered = mockData.filter(
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
          sortable: true, // Enable sorting for this column
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
          name: 'Address',
          selector: (row) => row.address,
          sortable: false,
          cell: (row) => (
            <Tooltip title={`Address: ${row.address}`} arrow>
              <span>{row.address}</span>
            </Tooltip>
          ),
        },
    ]

    const customStyles = {
        rows: {
          style: {
            minHeight: '45px', // Adjust the row height
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
                </div>
                <DataTable 
                    columns={columns}
                    data={filterdata}
                    pagination
                    paginationPerPage={5}
                    paginationRowsPerPageOptions={[5,10,15]}
                    customStyles={customStyles}
                    striped
                    highlightOnHover
                />
            </div>
        </>
    )
}