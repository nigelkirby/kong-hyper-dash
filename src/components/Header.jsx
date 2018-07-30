import { h } from 'hyperapp'

export default ({ nav }) => (
  <header>
    <a class="logo" onclick={() => nav('home')}>
      Kong Dashboard
    </a>
    <a onclick={() => nav('services')} class="button focused">
      Services
    </a>
    <a onclick={() => nav('consumers')} class="button">
      Consumers
    </a>
  </header>
)
