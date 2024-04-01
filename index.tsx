import { useEffect, useState } from 'react'
import { IRoute, IRouter } from './types'

const Router: React.FC<IRouter> = ({ children }) => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname)

  useEffect(() => {
    console.log('RENDERED')
    const onLocationChange = () => {
      setCurrentPath(window.location.pathname)
    }

    // Add event listners for navigation and popstate events
    window.addEventListener('navigate', onLocationChange)
    window.addEventListener('popstate', onLocationChange)

    // Remove event listeners after use
    return () => {
      window.removeEventListener('navigate', onLocationChange)
      window.removeEventListener('popstate', onLocationChange)
    }
  }, [])
  return (
    <>
      {children.map((child: { props: IRoute }, index: number) => {
        // Map through the routes provided as children props and only render the route matching the current path
        if (currentPath === child.props.path) {
          return <div key={index}>{child.props.component()}</div>
        } else {
          return null
        }
      })}
    </>
  )
}

export default Router
