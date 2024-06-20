import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { METADATA_TITLE_FIELD } from "./MetadataTitle";

export const MetadataShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="key" source="key" />
        <TextField label="metaKey" source="metaKey" />
        <TextField label="metaValue" source="metaValue" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="value" source="value" />
        <ReferenceManyField
          reference="Data"
          target="metadataId"
          label="DataItems"
        >
          <Datagrid rowClick="show">
            <TextField label="content" source="content" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="Metadata"
              source="metadata.id"
              reference="Metadata"
            >
              <TextField source={METADATA_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="relatedMetadata" source="relatedMetadata" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="year" source="year" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
