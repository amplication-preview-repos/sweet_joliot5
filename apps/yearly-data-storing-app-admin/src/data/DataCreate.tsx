import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  NumberInput,
} from "react-admin";

import { MetadataTitle } from "../metadata/MetadataTitle";

export const DataCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="content" multiline source="content" />
        <ReferenceInput
          source="metadata.id"
          reference="Metadata"
          label="Metadata"
        >
          <SelectInput optionText={MetadataTitle} />
        </ReferenceInput>
        <TextInput label="relatedMetadata" source="relatedMetadata" />
        <NumberInput step={1} label="year" source="year" />
      </SimpleForm>
    </Create>
  );
};
