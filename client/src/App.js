import "./App.css";
import graphql from "babel-plugin-relay/macro";
import { QueryRenderer } from "react-relay";
import { RelayEnvironmentProvider } from "react-relay";
import environment from "./environment";
import MessageMutation from "./Message";
import AdoptDogMutation from "./AdoptDog";

function App() {
  return (
    <RelayEnvironmentProvider environment={environment}>
      <QueryRenderer
        environment={environment}
        query={graphql`
          query AppQuery {
            hello
          }
        `}
        variables={{}}
        render={({ error, props }) => {
          if (error) {
            return <div>Error!</div>;
          }
          if (!props) {
            return <div>Loading...</div>;
          }
          return <div>{props.hello}</div>;
        }}
      ></QueryRenderer>
      <QueryRenderer
        environment={environment}
        query={graphql`
          query AppMessageQuery {
            getMessage(id: "e184a26f83a3e70eccd2") {
              id
              content
            }
          }
        `}
        variables={{}}
        render={({ error, props }) => {
          if (error) {
            return <div>Error!</div>;
          }
          if (!props) {
            return <div>Loading...</div>;
          }
          return <div>{props.getMessage?.content}</div>;
        }}
      ></QueryRenderer>
      <QueryRenderer
        environment={environment}
        query={graphql`
          query AppOwnerQuery {
            getDogOwner(id: "2352126c40305c0c8e9e") {
              owner {
                id
                name
                dog {
                  id
                  name
                  toy {
                    id
                    type
                  }
                }
              }
            }
          }
        `}
        variables={{}}
        render={({ error, props }) => {
          // console.log(props.getDogOwner?.owner);
          if (error) {
            return <div>Error!</div>;
          }
          if (!props) {
            return <div>Loading...</div>;
          }

          const { dog } = props.getDogOwner?.owner;
          const { toy } = dog;
          const { type } = toy; // Runtime Error! toy is undefined
          return <div>{`My dog's favorite toy is a ${type} - ${dog.name}`}</div>;
        }}
      ></QueryRenderer>
      <button
        onClick={() =>
          MessageMutation(
            "e184a26f83a3e70eccd2",
            {
              author: "maria",
              content: "hope is a good thingaaaaaa",
            },
            () => console.log(`Mutation completed`)
          )
        }
      >
        JAQUELINE
      </button>
      <button
        onClick={() =>
          AdoptDogMutation(() => console.log(`Mutation completed`))
        }
      >
        AdoptDogMutation
      </button>
    </RelayEnvironmentProvider>
  );
}

export default App;
