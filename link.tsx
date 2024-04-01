import { ILink } from './types'

const Link: React.FC<ILink> = ({ to, children }) => {
  const preventReload = (e: React.SyntheticEvent) => {
    e.preventDefault()
    window.history.pushState({}, '', to)
    const navigationEvent = new PopStateEvent('navigate')
    window.dispatchEvent(navigationEvent)
  }
  return (
    <a href={to} onClick={preventReload}>
      {children}
    </a>
  )
}

export default Link
