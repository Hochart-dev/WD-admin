import { Edit, SimpleForm, TextField, TextInput } from 'react-admin';

const GalleryEdit = (props) => {
  return (
    <Edit title="Edition" {...props}>
      <SimpleForm>
        <TextField source="id" />
        <TextInput source="collection" />
        <TextInput source="name" />
        <TextInput source="artist" />
        <TextInput source="about" />
        <TextInput source="description" />
        <TextInput source="size" />
        <TextInput source="number" />
        <TextInput source="price" />
        <TextInput source="url" />
      </SimpleForm>
    </Edit>
  );
};

export default GalleryEdit;
