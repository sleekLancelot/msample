import React from 'react'
import { Box, Icon } from '@chakra-ui/react'
import { Logo } from '../../Assets'

const Navbar = () => {
  return (
    <Box
			w={'100vw'}
			h={70}
			p={5}
			borderBottom={'2px solid #731054'}
    >
			<Box
				w={'90%'}
				margin={'5px auto'}
				display={'flex'}
				alignItems={'center'}
			>
				<Logo w={50} position={'relative'} top={-2} />
				{/* <Icon
					w={50}
				>
					<Logo />
				</Icon> */}
			</Box>
    </Box>
  )
}

export {Navbar}