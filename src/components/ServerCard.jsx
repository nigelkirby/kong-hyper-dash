import { h } from 'hyperapp'

export default ({
  url, set, connect, nav,
}) => (
  <div
    class="card"
    onclick={() => {
      set({ url })
      connect()
      nav('service')
    }}
  >
    <div class="section">{url}</div>
  </div>
)
