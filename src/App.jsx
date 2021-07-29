import { Admin, Resource } from 'react-admin';
import dataProvider from './dataProvider';
import authProvider from './authProvider';
import GalleryList from './components/Gallery/List';
import GalleryEdit from './components/Gallery/Edit';
import GalleryPost from './components/Gallery/Post';

function App() {
  return (
    <div className="App">
      <Admin authProvider={authProvider} dataProvider={dataProvider}>
        <Resource
          name="gallery"
          list={GalleryList}
          edit={GalleryEdit}
          create={GalleryPost}
        />
      </Admin>
    </div>
  );
}

export default App;
