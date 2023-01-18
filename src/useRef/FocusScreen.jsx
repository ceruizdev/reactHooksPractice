import { useRef } from "react"

export const FocusScreen = () => {
  const inputRef = useRef();
  const onSetFocus = () => {
    inputRef.current.select()
  }
  return (
    <>
        <div>Focus Screen</div>
        <hr />
        <input ref={inputRef} type="text" className="form-control" placeholder="Name" />
        <button className="btn btn-primary mt-2" onClick={onSetFocus}>Set focus</button>
    </>
  )
}
