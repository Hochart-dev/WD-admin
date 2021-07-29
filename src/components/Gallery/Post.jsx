import { Create, SimpleForm, TextInput } from 'react-admin';

const GalleryPost = (props) => {
  return (
    <Create title="Create" {...props}>
      <SimpleForm>
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
    </Create>
  );
};

export default GalleryPost;
