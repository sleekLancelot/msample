import React, {useEffect, useCallback} from 'react'
import { Progress } from '@chakra-ui/react'
import { useTimer } from '../../Hooks'

const ProgressBar = ({
    callback,
}: {
    callback: Function,
}) => {
    const {progress, sec} = useTimer(0.3)

    const funcToCall = useCallback(() => {
        return callback()
    }, [])

    useEffect(() => {
        if(sec === 0) funcToCall()
    },[sec, funcToCall])
    
  return (
    <Progress colorScheme={'green'} value={progress} height="2px" w="90%" h={15} borderRadius={16} />
  )
}

export {ProgressBar}