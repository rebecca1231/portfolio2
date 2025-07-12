import styled from 'styled-components'

const SkillBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  text-align: center;
  flex-wrap: wrap;
  .skill {
    padding: 5px;
  }
`

export function Skills() {
  const size = 'big'
  return (
    <div style={{ margin: '2rem auto' }}>
      <h3>Skills</h3>
      <p>Some of the tools and technologies I have experience using.</p>
      <div className='ui small header'></div>
      <SkillBox>
        <div className='skill'>
          <i className={`${size} js square icon`}></i>
          <br />
          JavaScript
        </div>

        <div className='skill'>
          <i className={`${size} node icon`}></i>
          <br />
          Node JS
        </div>

        <div className='skill'>
          <i className={`${size} css3 alternate icon`}></i>
          <br />
          CSS
        </div>
        <div className='skill'>
          <i className={`${size} html5 icon`}></i>
          <br />
          HTML
        </div>
        <div className='skill'>
          <i className={`${size} react icon`}></i>
          <br />
          React
        </div>
        <div className='skill'>
          <i className={`${size} git square icon`}></i>
          <br />
          Git
        </div>
        <div className='skill'>
          <i className={`${size} mobile alternate icon`}></i>
          <br />
          Responsive Design
        </div>
      </SkillBox>
    </div>
  )
}
