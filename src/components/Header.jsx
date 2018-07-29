import { h } from 'hyperapp'

export default ({
  loadedUrl, version,
}) => {
  const title = loadedUrl && `Connected to ${loadedUrl} running v${version}`

  return <header>
    <span class="logo">Kong Dashboard</span>
    <span>{title}</span>
  </header>
}
