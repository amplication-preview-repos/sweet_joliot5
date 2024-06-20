import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  NumberInput,
} from "react-admin";

import { MetadataTitle } from "../metadata/MetadataTitle";

export const DataEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
