import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';

const columns = [
    { 
        field: 'id', headerName: 'ID', width: 70 
    },
    { 
        field: 'bicycleType', headerName: 'Bicycle Type', width: 150 
    },
    { 
        field: 'amount', headerName: 'Amount', width: 150 
    },
];

const rows = [
    { 
        id: 1,  bicycleType: 'AA', amount: 35 
    },
    { 
        id: 2, bicycleType: 'BB', amount: 5298
    },
    { 
        id: 3, bicycleType: 'CC', amount: 1987
    },
    { 
        id: 4, bicycleType: 'DD', amount: 954
    },
    { 
        id: 5, bicycleType: 'EE', amount:  68
    },
  
];

export default function Inventory() 
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
