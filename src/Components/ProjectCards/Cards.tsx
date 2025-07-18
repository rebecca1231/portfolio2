import { Card } from './Card'
import { projectData } from './projectData'

export function Cards() {
  return projectData.map((obj, index) => {
    return <Card image1={obj.image1} title={obj.title} description={obj.description} slug={obj.slug} key={index} />
  })
}
