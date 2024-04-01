export interface IRouter {
  children: JSX.Element[]
}

export interface IRoute {
  path: string
  component(): JSX.Element
}

export interface ILink {
  to: string
  children: string
}
