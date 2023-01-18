import { memo } from 'react';
export const Small = memo(({value}) => {
  console.log('Regenerated :(')
  return (
    <small>{value}</small>
  )
})
