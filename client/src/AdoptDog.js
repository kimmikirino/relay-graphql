import { commitMutation } from "react-relay";
import environment from "./environment";
import graphql from "babel-plugin-relay/macro";

const adoptDogMutation = graphql`
  mutation AdoptDogMutation {
    adoptDog {
      owner {
        id
        name
        dog {
          name
          toy {
            type
          }
        }
      }
    }
  }
`;

const mutation = (callback) => {
  const variables = {};

  commitMutation(environment, {
    mutation: adoptDogMutation,
    variables,
    onCompleted: () => {
      callback();
    },
    optimisticUpdater: (store) => {
      const randomId = Math.round(Math.random() * 100000000).toString();
      console.log("optimisticUpdater", store);
      const owner = store.get("2352126c40305c0c8e9e");
      const owner2 = store.getRoot().copyFieldsFrom(owner);
      const ownerName = owner.getValue("name");
      console.log("optimisticUpdater", ownerName);
      const dog = store.create(randomId, "Dog");
      dog.setValue(`${ownerName} Jr.`, "name");
      // // Oh no! we forgot to create & set the dog toy! Toy should be non-null!
      owner.setLinkedRecord(dog, "Dog");
      console.log(dog.getValue("name"));
      console.log(owner2, "USER");
    },
    onError: (err) => console.error(err),
  });
};

export default mutation;
