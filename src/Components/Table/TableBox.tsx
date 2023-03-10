import { Table, TableContainer } from '@chakra-ui/react'
import React from 'react'
import { useTable, useSortBy } from 'react-table'

import { FileProp } from '../../Utils'
import { TableContent } from './TableContent'
import { TableHeader } from './TableHeader'

interface TableProp {
    data: Array<any>
    iconAction?: Function
    iconActionParam?: string
}

const TableBox = ({
	data,
	iconAction,
	iconActionParam,
}: TableProp) => {

	const columns = React.useMemo(
    () => [
      {
        Header: 'Client',
        accessor: 'clientName',
      },
      {
        Header: 'Type',
        accessor: 'noteType',
      },
      {
        Header: 'ETA',
				accessor: '_none',
        isProgress: true,
      },
			{
        Header: '',
        accessor: 'none',
        isDelete: true,
      },
    ],
    [],
  )

	const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
	useTable({ columns, data }, useSortBy)

  return (
    <TableContainer>
      <Table {...getTableProps()}>
				<TableHeader headerGroups={headerGroups} />
				<TableContent
					getTableBodyProps={getTableBodyProps}
					rows={rows}
					prepareRow={prepareRow}
					iconAction={iconAction}
					iconActionParam={iconActionParam}
				/>
			</Table>
    </TableContainer>
  )
}

export {TableBox}