import React, { useMemo, useState, useEffect } from 'react'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Text,
  Heading,
  FormControl,
  Input,
  Select,
} from '@chakra-ui/react'
import { FileProp, randomId } from '../../Utils'

interface UploadProp {
  isOpen: boolean
  onClose: any
  setTableData: any
}

const Upload = ({
  isOpen,
  onClose,
  setTableData,
}: UploadProp) => {
  const [uploadDto, setUploadDto] = useState<Omit<FileProp, 'id'>>({
    noteType: '',
    clientName: '',
  })
  const initialRef = React.useRef(null)
  const finalRef = React.useRef(null)

  const noteTypes = useMemo(() => ([
    {
      text: 'Progress note - 80 left',
    },
    {
      text: 'Soap note - 80 left',
    },
    {
      text: 'EMDR note- 80 left',
    },
    {
      text: 'Couples therapy note - 80 left',
    },
    {
      text: 'Family therapy note - 80 left',
    },
  ]),[])

  const onChange = (e: any) => {
    setUploadDto( details => ({
      ...details,
      [e.target.name]: e.target.value,
    }))
  }

  const onSubmit = async () => {
    try {
      setTableData( (data: Array<FileProp>) => ([
        ...data,
        {
          ...uploadDto,
          id: randomId(),
        },
      ]))

      onClose()
    } catch {
      console.log('err')
    }
  }

  useEffect(() => {
    if(!isOpen) {
      setUploadDto(({
        noteType: '',
        clientName: '',
      }))
    }
  }, [isOpen])

  const isInvalid = () => !uploadDto.noteType || !uploadDto.clientName
  
  return (
    <Modal
      initialFocusRef={initialRef}
      finalFocusRef={finalRef}
      isCentered
      isOpen={isOpen}
      onClose={onClose}
    >
      <ModalOverlay />
      <ModalContent
        bg={'white'}
        // width={{base: 'initial', md: 800}}
        maxW={{base: 'initial', md: 600}}
        paddingX={{base: 'initial',md:10}}
      >
        <ModalHeader
          textAlign={'center'}
          mt={5}
        >
          <Heading
            fontSize={20}
            fontWeight={700}
            fontFamily={'poppins'}
          >Complete Your Upload</Heading>
          <Text
            fontSize={16}
            fontWeight={400}
            fontFamily={'montserrat'}
            my={3}
            color={'#666666'}
            w={'100%'}
          >Fill in the details below to complete your upload</Text>
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          <FormControl>
            <Select
              ref={initialRef}
              variant='filled'
              // placeholder='Select a note type'
              name='noteType'
              value={uploadDto.noteType}
              onChange={onChange}
              backgroundColor={'#F2F2F2'}
              cursor={'pointer'}
              _hover={{
              backgroundColor: '#F2F2F2',
            }}>
              <option
                selected
                hidden
                disabled
                value=""
                style={{
                  backgroundColor:'#fff'
                }}>Select a note type</option>
              {
                noteTypes?.map((note, index) => (
                  <option 
                    key={index} 
                    value={note.text}
                    style={{
                      backgroundColor:'#fff',
                      padding: 3,
                    }}
                  >{note.text}</option>
                ))
              }
            </Select>
          </FormControl>

          <FormControl mt={10}>
            <Input
              placeholder='Enter client name'
              name='clientName'
              bg={'#F2F2F2'}
              color={'black'}
              value={uploadDto.clientName}
              onChange={onChange}
            />
          </FormControl>
        </ModalBody>

        <ModalFooter
          display={'flex'}
          justifyContent={'center'}
        >
          <Button
            fontSize={16}
						fontWeight={700}
						fontFamily={'montserrat'}
						w={150}
            p={5}
						mt={10}
						color={'white'}
						bgGradient={'linear(to-r, rgba(115, 16, 84, 1), rgba(222, 13, 111, 1))'}
						_hover={{
							bgGradient: 'linear(to-l, rgba(115, 16, 84, 1), rgba(222, 13, 111, 1))',
						}}
            _disabled={{
              backgroundColor: '#B2B2B2',
              cursor: 'not-allowed'
            }}
            onClick={onSubmit}
            isDisabled={isInvalid()}
          >
            Finish Upload
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export {Upload}