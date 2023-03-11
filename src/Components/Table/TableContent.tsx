import React from 'react'
import { Tbody, Tr, Td, Button, Icon, Badge, Progress } from '@chakra-ui/react'
import { DeleteIcon } from '@chakra-ui/icons'
import { useTimer } from '../../Hooks'
import { ProgressBar } from './ProgressBar'

interface TableContentProp {
	getTableBodyProps: any
    rows: any
    prepareRow: any
    iconAction: Function
    iconActionParam?: string
}

const TableContent = ({
    getTableBodyProps,
    rows,
    prepareRow,
    iconAction,
    iconActionParam,
}: TableContentProp) => {
	// const {progress} = useTimer(0.5)

  return (
    <Tbody
      {...getTableBodyProps()}
    >
			{rows.map((row: any, index: number) => {
			prepareRow(row)
			return (
				<Tr
					key={index}
					h={50}
					borderBottom={'none'}
					borderRadius={8}
					// boxShadow={'4px 4px 16px 0px rgba(0, 0, 0, 0.1)'}
					boxShadow={'inner'}
					mb={3}
					{...row.getRowProps()}s
			>
					{row.cells.map((cell: any, index: number) => {
							return (
									cell.column.isDelete ?
									<Td key={index} borderBottom={'none'}>
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
									<Td key={index} borderBottom={'none'}>
										<ProgressBar
											callback={() => iconAction(row?.original?.[iconActionParam as string])}
											// id={row?.original?.[iconActionParam as string]}
											// callback={(id: string) => iconAction(id)}
											// progress={progress}
										/>
									</Td>
									:
									<Td 
											key={index}
											{...cell.getCellProps()} 
											isNumeric={cell.column.isNumeric}
											textTransform={'capitalize'}
											borderBottom={'none'}
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