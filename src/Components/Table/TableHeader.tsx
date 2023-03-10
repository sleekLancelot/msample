import React from 'react'
import { Th, Thead, Tr, chakra } from '@chakra-ui/react'

interface TableHeaderProp {
	headerGroups: any
}

const TableHeader = ({headerGroups}: TableHeaderProp) => {
  return (
    <Thead>
			{headerGroups?.map((headerGroup: any, index: number) => (
				<Tr key={index} {...headerGroup.getHeaderGroupProps()}>
					{headerGroup.headers.map((column: any, index: number) => (
						<Th
							key={index}
              fontSize={16}
              fontWeight={700}
              fontFamily={'montserrat'}
              color={'#000000'}
              border={'none'}
							{...column.getHeaderProps(column.getSortByToggleProps())}
						>
							{column.render('Header')}
						</Th>
					))}
				</Tr>
			))}
		</Thead>
  )
}

export {TableHeader}