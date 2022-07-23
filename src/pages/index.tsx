import { useState } from 'react'

import { Button } from '@atoms/button/button.comp'
import { Input } from '@atoms/input/input.comp'
import type { NextPage } from 'next'

const Home: NextPage = () => {
  const [value, setValue] = useState<string>('')

  return (
    <>
      <Button>Arnaldo</Button>
      <Input value={value} onChange={(e) => setValue(e.currentTarget.value)} />
    </>
  )
}

export default Home
