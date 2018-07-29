import { h } from 'hyperapp'

export default ({ setUrl, initKong }) => {
  const keyup = e => setUrl(e.target.value)
  const enterInit = e => e.keyCode === 13 && initKong()
  return (
    <div>
      <input
        type="text"
        onkeyup={keyup}
        onkeydown={enterInit}
        placeholder="http://localhost:8001"
      />
      <button onclick={initKong}>Load</button>
    </div>
  )
}
