import { Box, Button, Flex, Heading, HStack, Text } from '@chakra-ui/react'
import React from 'react'
import { Help } from '../../Assets'

const Home = () => {
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
						bgGradient={'linear(to-r, rgba(222, 13, 111, 1), rgba(115, 16, 84, 1))'}
						_hover={{
							bgGradient: 'linear(to-l, rgba(222, 13, 111, 1), rgba(115, 16, 84, 1))',
						}}
					>Upload</Button>
				</Box>
			</Box>
		</Box>
  )
}

export {Home}