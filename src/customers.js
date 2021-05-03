import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';

const columns = [
    { 
        field: 'id', headerName: 'ID', width: 70 
    },
    { 
        field: 'customerName', headerName: 'Customer Name', width: 150 
    },
    { 
        field: 'email', headerName: 'Email', width: 150 
    },
    {
        field: 'phone', headerName: 'Phone', width: 150
    },
];

const rows = [
    { 
        id: 1,  customerName: 'Alex', email: 'alex@gmail.com', phone: '123-456-7890'
    },
    { 
        id: 2,  customerName: 'Bob', email: 'bob@gmail.com', phone: '672-751-7964'
    },
    { 
        id: 3,  customerName: 'Sue', email: 'sue@gmail.com', phone: '354-000-7852'
    },

];

export default function Customer() 
{
    return (
        <div 
            style={{ height: 400, width: '100%' }}
        >
            <DataGrid 
                rows=
                {
                    rows
                } 
                columns=
                {
                    columns
                } 
                pageSize=
                {
                    5
                } 
                checkboxSelection 
            />
        </div>
    );
}
