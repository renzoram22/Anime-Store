import React from "react";
import { Dimmer, Loader, Image, Segment } from "semantic-ui-react";

const LoaderExampleLoader = () => (
  <Segment>
    <Dimmer active inverted>
      <Loader inverted content="Loading" />
    </Dimmer>

    <Image src="../../short-paragraph.png" />
  </Segment>
);

export default LoaderExampleLoader;
