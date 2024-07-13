import { config } from 'riser';
import { Home } from './home';

config( {
  project: process.env.RISER_PROJECT,
  key: process.env.RISER_KEY,
  routes: [
    { path: '*', element: <Home /> },
    { path: '/test', element: <div>test</div> },
  ]
} );
