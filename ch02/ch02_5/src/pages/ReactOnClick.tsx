import type {SyntheticEvent} from 'react'

export default function ReactOnClick() {
  const onClick = (e: SyntheticEvent) => {
    const {isTrusted, target, bubbles} = e
    console.log('mouse click occurs on <buttton>', isTrusted, target, bubbles)
  }

  return (
    <div>
      <p>ReactOnClick</p>
      <button onClick={onClick}>Click Me</button>
    </div>
  )
}
