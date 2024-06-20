import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
} from "react-admin";

import { DataTitle } from "../data/DataTitle";

export const MetadataEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="dataItems"
          reference="Data"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={DataTitle} />
        </ReferenceArrayInput>
        <TextInput label="key" source="key" />
        <TextInput label="metaKey" source="metaKey" />
        <TextInput label="metaValue" source="metaValue" />
        <TextInput label="value" source="value" />
      </SimpleForm>
    </Edit>
  );
};
