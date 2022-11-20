import Card from "components/Card";
import { Provider } from "components/Context";
import Header from "components/Header";
import HotspotList from "components/HotspotList";

import NewTodo from "components/NewTodo";
import Todo from "components/Todos";

import { getLayout } from "layouts/App";
import { Fragment } from "react";
import { NextPageWithLayout } from "./_app";

const Create: NextPageWithLayout = () => {
  return (
    <Fragment>
      <Provider>
        <div className="container flex items-stretch mb-5">
          <div className="bg-base-100 mr-2 p-2 h-max">
            {/* <NewTodo /> */}

            <Todo />
          </div>

          <div className="bg-base-100 p-2  h-min">
            <HotspotList />
          </div>
        </div>
      </Provider>
    </Fragment>
  );
};

Create.getLayout = getLayout;

export default Create;
