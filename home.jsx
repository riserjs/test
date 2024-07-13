import { useState, useEffect } from 'react';
import { Text, Button } from 'riser/interface';
import { useNetwork } from 'riser/network';
import { useNavigate } from 'react-router-dom';

export function Home( ) {
  const navigate = useNavigate( );
  const network = useNetwork( );
  const [ data, setData ] = useState( '' );
  const index = { owner: 'siewdass' };
  
  const onCreate = () => network.create( { table: 'test', index, value: { ...index, value: 1 } } );
  
  network.read( { table: 'test', index, state: setData } );

  useEffect( () => {
    console.log(data);
  }, [data]);

  return (
    <div>
      <div>home</div>
      <Text label='sss' />
      <Button label='sss' onClick={ onCreate }/>
      <Button label='test' onClick={ () => navigate( '/test' ) }/>
      { [ 'a', 'b' ].map( ( item, index ) => <div key={ index }>{ item }</div> ) }
    </div>
  );
  
}