import { useState } from 'react'
import { Text, Button } from 'riser/interface'

export function Home() {
  const [ input, setInput ] = useState( '' )

  return (
    <div>
      <div>home</div>
      <Text label='sss' />
      <Button label='sss' />
    </div>
  )
}