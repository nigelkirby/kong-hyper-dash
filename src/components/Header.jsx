import { h } from 'hyperapp'

export default ({ nav }) => (
  <header>
    <a class="logo" onclick={() => nav('home')}>
      Kong Dashboard
    </a>
    <a onclick={() => nav('service')}>Services</a>
  </header>
)
