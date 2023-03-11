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
    <Progress colorScheme={'green'} value={progress} height="2px" w="90%" h={15} borderRadius={16} />
  )
}

export default memo(ProgressBar)