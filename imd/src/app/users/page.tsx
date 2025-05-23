'use client'

import { useGetUsersQuery } from '@/state/api'
import { DataGrid, GridColDef } from '@mui/x-data-grid'
import React from 'react'
import Header from '../(components)/Header'

const columns: GridColDef[] = [
    {field: "userId", headerName:"ID", width: 200},
    {field:"name", headerName:"Name",width:200},
    {field:"email", headerName:"Email", width: 200}
]

const Users = () => {

    const {data, isError, isLoading} = useGetUsersQuery();


    if(isLoading){
        return <div className="py-4">Loading....</div>
    }

    if(isError || !data){
        return <div className="text-center text-red-500 py-4">
            Failed to fetch users
        </div>
    }


  return (
    <div className='flex flex-col'>
        <Header name='Users' />
        <DataGrid 
        rows={data}
        columns={columns}
        getRowId={(row)=>row.userId}
        className='bg-white shadow rounded-lg border-gray-200 mt-5 !text-gray-700'
        />
    </div>
  )
}

export default Users