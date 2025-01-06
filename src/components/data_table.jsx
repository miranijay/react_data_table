import React from "react";
import DataTable from "react-data-table-component";
import { mockData } from "../Data/mockdata.jsx";

const columns = [
    {
      name: 'Name',
      selector: row => row.name,
      sortable: true,
    },
    {
      name: 'Email',
      selector: row => row.email,
      sortable: true,
    },
    {
      name: 'Role',
      selector: row => row.role,
      sortable: true,
    },
  ]

export default function DataTableComponent() {

    return(
        <>
            <div>
                <h2>User Information</h2>
                <DataTable 
                    columns={columns}
                    data={mockData}
                    pagination
                    highlightOnHover
                />
            </div>
        </>
    )
}