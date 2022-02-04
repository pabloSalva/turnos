import { Flex } from "@aws-amplify/ui-react";
import { TurnoCollection, Turno } from "./ui-components";

function App() {
  return (
    <Flex justifyContent={"center"}>
      <Turno
        overrides={{
          "View.SwitchField[0]": {
            defaultChecked: false,
          },
        }}
      />
      <TurnoCollection />
    </Flex>
  );
}

export default App;
