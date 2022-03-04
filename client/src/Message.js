import { commitMutation } from "react-relay";
import environment from "./environment";
import graphql from "babel-plugin-relay/macro";

const updateMessageMutation = graphql`
  mutation MessageMutation($id: ID!, $input: MessageInput!) {
    updateMessage(id: $id, input: $input) {
      content
    }
  }
`;

const mutation = (id, input, callback) => {
  const variables = {
    id,
    input,
  };
  console.log(variables);

  commitMutation(environment, {
    mutation: updateMessageMutation,
    variables,
    onCompleted: () => {
      callback();
    },
    onError: (err) => console.error(err),
  });
};

export default mutation;
