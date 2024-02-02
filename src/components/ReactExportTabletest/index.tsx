'use client'
import React from 'react'

import { Dropdown, Select, Space, Table, Tag } from 'antd';
import type { MenuProps, TableProps } from 'antd';
import { ExportAsExcel, ExportAsPdf, ExportAsCsv, CopyToClipboard, CopyTextToClipboard, PrintDocument, ExcelToJsonConverter, FileUpload } from "react-export-table";

interface DataType {
  key: string;
  name: string;
  age: number;
  address: string;
  status: string;
}
const columns: TableProps<DataType>['columns'] = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Status',
    key: 'status',
    dataIndex: 'status',
    render: (_, { status }) => (
      <>
        {status}
      </>
    ),
  },
  {
    title: 'Action',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
        <a>Invite {record.name}</a>
        <a>Delete</a>
      </Space>
    ),
  },
];



const ReactExportTableTable = () => {

  const data: DataType[] = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
      status: 'Paid',
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      status: "Unpaid",
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sydney No. 1 Lake Park',
      status: "Pending"
    },
  ];

  const items: MenuProps['items'] = [
    {
      key: '1',
      label: (
        <ExportAsExcel
          data={data}
          headers={["Sl", "Name", "Age", "Address", "Status"]}
        >
          {(props) => (
            <button {...props} className='w-full'>
              EXCEL
            </button>
          )}
        </ExportAsExcel>
      ),
    },
    {
      key: '2',
      label: (
        <ExportAsCsv
          data={data}

        >
          {(props) => (
            <button {...props} className='w-full' >CSV</button>
          )}
        </ExportAsCsv>
      ),

    },
    {
      key: '3',
      label: (

        <PrintDocument
          data={data}
          headers={["CreatedBy", "Age", "Something Else"]}
        >
          {(props) => (
            <button {...props} className='w-full'>
              PDF
            </button>
          )}
        </PrintDocument>
      ),
    },
  ];


  return (
    <div>
      <div className=' text-end my-4 mx-4'>
        <Dropdown menu={{ items }} trigger={['click']}>
          <a onClick={(e) => e.preventDefault()}>
            <Space className=' bg-orange-300 px-4 py-2 cursor-pointer'>
              Export
            </Space>
          </a>
        </Dropdown>
      </div>
      <Table columns={columns} dataSource={data} />
    </div>
  )
}

export default ReactExportTableTable
