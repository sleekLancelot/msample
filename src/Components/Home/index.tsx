import React, { useState } from 'react'
import { Avatar, Box, Button, Flex, Heading, HStack, Text, useDisclosure } from '@chakra-ui/react'
import { Help } from '../../Assets'
import { Upload } from './Upload'
import { FileProp } from '../../Utils'
import { TableBox } from '../Table'

const Home = () => {
	const { isOpen, onOpen, onClose } = useDisclosure()
	const [tableData, setTableData] = useState<Array<FileProp>>([])

	const deleteFile = (id: string) => {
		setTableData( data => (
			data.filter( d => d?.id !== id)
		))
	}

  return (
    <Box
			w={'100vw'}
			p={5}
    >
			<Box
				w={'90%'}
				margin={'5px auto'}
			>
				<Flex
					w={'100%'}
					flexDirection={'row'}
					justifyContent={'space-between'}
					alignItems={'center'}
					mb={10}
				>
					<Text fontSize={20} fontWeight={500} fontFamily={'montserrat'}>Hi, Maria</Text>
					<Help w={30} h={30} />
				</Flex>

				<Box>
					<Heading fontSize={24} fontWeight={700} fontFamily={'poppins'}>{"Upload your session’s recordings"}</Heading>

					<Button
						fontSize={16}
						fontWeight={700}
						fontFamily={'montserrat'}
						w={'100%'}
						marginY={10}
						color={'white'}
						bgGradient={'linear(to-r, rgba(115, 16, 84, 1), rgba(222, 13, 111, 1))'}
						_hover={{
							bgGradient: 'linear(to-l, rgba(115, 16, 84, 1), rgba(222, 13, 111, 1))',
						}}
						onClick={onOpen}
					>Upload</Button>
				</Box>

				{
					!!tableData?.length &&
					<Box
						w={'100%'}
						mt={50}
					>
						<Box
							w={'100%'}
							// h={70}
							border={'1px solid #E5E5E5'}
							borderRadius={16}
							p={2}
							mb={15}
						>
							<Flex ml={7} alignItems='center'>
								<Avatar
									w={30}
									h={30}
									name={`${tableData?.length}`}
									backgroundColor={'rgba(222, 13, 111, 1)'}
								/>
								<Heading
									ml={3}
									fontSize={20}
									fontWeight={600}
									fontFamily={'montserrat'}
								>Notes in progress</Heading>
							</Flex>
						</Box>

						<TableBox
							data={tableData}
							iconAction={(id: string) => deleteFile(id)}
							iconActionParam='id'
						/>

					</Box>
				}

				<Upload
					isOpen={isOpen}
					onClose={onClose}
					setTableData={setTableData}
				/>
			</Box>
		</Box>
  )
}

export {Home}