import { ReactNode } from "react"

type HomepageTemplateProps = {
    children: ReactNode
}
export default function HomepageTemplate({children}:HomepageTemplateProps) {
  return (
    <div>
      {children}
    </div>
  )
}
