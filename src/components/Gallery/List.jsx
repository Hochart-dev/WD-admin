import {
  List,
  Datagrid,
  TextField,
  EditButton,
  DeleteButton,
} from 'react-admin';

const GalleryList = (props) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source="collection" />
        <TextField source="name" />
        <TextField source="artist" />
        <TextField source="about" />
        <TextField source="description" />
        <TextField source="size" />
        <TextField source="number" />
        <TextField source="price" />
        <TextField source="url" />
        <EditButton basePath="gallery" />
        <DeleteButton basePath="gallery" />
      </Datagrid>
    </List>
  );
};

export default GalleryList;
