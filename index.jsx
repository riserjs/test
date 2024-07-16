import { config } from 'riser';
import { Home } from './home';

config( {
  token: process.env.RISER_TOKEN,
  routes: [
    { path: '*', element: <Home /> },
    { path: '/test', element: <div>test</div> },
  ]
} );
