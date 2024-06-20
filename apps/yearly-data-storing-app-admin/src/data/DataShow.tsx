import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import { METADATA_TITLE_FIELD } from "../metadata/MetadataTitle";

export const DataShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
