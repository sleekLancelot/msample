import React, {useEffect, useCallback, memo} from 'react'
import { Progress } from '@chakra-ui/react'
import { useTimer } from '../../Hooks'

const ProgressBar = ({
    callback,
}: {
    callback: Function,
}) => {
    const {progress, sec} = useTimer(0.5)

    const funcToCall = useCallback(() => {
        return callback()
    }, [])

    useEffect(() => {
        if(sec === 0) funcToCall()
    },[sec, funcToCall])
    
  return (
    <Progress colorScheme={'green'} color={'#3BC171'} value={progress} height="2px" w="90%" h={15} backgroundColor={'#B2B2B2'} borderRadius={8} />
  )
}

export default memo(ProgressBar)