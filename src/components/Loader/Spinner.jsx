import React from 'react'
import { Dimmer, Loader, Image, Segment } from 'semantic-ui-react'

const Spinner = () => (
  <div>
    <Segment>
      <Dimmer active inverted>
        <Loader inverted content='Loading' />
      </Dimmer>

      <Image src='/images/wireframe/short-paragraph.png' />
    </Segment>
  </div>
)

export default Spinner