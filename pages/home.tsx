import ActionBar from "components/ActionBar";
import Card from "components/Card";
import { Provider } from "components/Context";
import Header from "components/Header";

import { getLayout } from "layouts/App";
import { Fragment } from "react";
import { NextPageWithLayout } from "./_app";

const Create: NextPageWithLayout = () => {
  return (
    <Fragment>
      <Provider>
        {[...new Array(3)].map((_, i) => (
          <Card key={i} />
        ))}
      </Provider>
    </Fragment>
  );
};

Create.getLayout = getLayout;

export default Create;
