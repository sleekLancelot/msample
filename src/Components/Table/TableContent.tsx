import React from 'react'
import { Tbody, Tr, Td, Button, Icon, Badge, Progress } from '@chakra-ui/react'
import { DeleteIcon } from '@chakra-ui/icons'
import { useTimer } from '../../Hooks'

interface TableContentProp {
	getTableBodyProps: any
    rows: any
    prepareRow: any
    iconAction?: Function
    iconActionParam?: string
}

const TableContent = ({
    getTableBodyProps,
    rows,
    prepareRow,
    iconAction,
    iconActionParam,
}: TableContentProp) => {
	const {progress} = useTimer(0.5)

  return (
    <Tbody
      {...getTableBodyProps()}
    >
			{rows.map((row: any, index: number) => {
			prepareRow(row)
			return (
				<Tr
					key={index}
					{...row.getRowProps()}
			>
					{row.cells.map((cell: any, index: number) => {
							return (
									cell.column.isDelete ?
									<Td key={index}>
									<Button
											onClick={() => {
													iconAction && iconAction(row?.original?.[iconActionParam as string])
											}}
											bg={'transparent'}
									>
											<Icon
													// fontSize={23}
													bg={'transparent'}
													color={'red'}
													_hover={{
															scale: 1.3,
															cursor: 'pointer'
													}}
													as={DeleteIcon}
											/>
									</Button> 
									</Td>:
									cell.column.isProgress ?
									<Td key={index}>
										<Progress colorScheme={'green'} value={progress} height="2px" w="90%" h={15} borderRadius={16} />
									</Td>
									:
									<Td 
											key={index} 
											{...cell.getCellProps()} 
											isNumeric={cell.column.isNumeric}
											textTransform={'capitalize'}
									>{cell.render('Cell')}</Td>
							
							)
					})}
			</Tr>
	)
	})}
    </Tbody>
  )
}

export {TableContent}