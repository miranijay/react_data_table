import React, { useState } from "react";
import DataTable from "react-data-table-component";
import { mockData } from "../Data/mockdata.jsx";

export default function DataTableComponent() {

    const columns = [
        {
          name: 'ID',
          selector: (row) => row.id,
          sortable: true,
        },
        {
          name: 'Name',
          selector: (row) => row.name,
          sortable: true, // Enable sorting for this column
        },
        {
          name: 'Email',
          selector: (row) => row.email,
          sortable: true, // Enable sorting for this column
        },
        {
          name: 'Role',
          selector: (row) => row.role,
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
                <h2>Data Table</h2>
                <DataTable 
                    columns={columns}
                    data={mockData}
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