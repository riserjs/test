import { useState } from 'react';
import { Button } from 'riser/interface';
import { useNetwork } from 'riser/network';
import { useNavigate } from 'react-router-dom';

export function Home( ) {
  const navigate = useNavigate( );
  const network = useNetwork( );
  const [ data, setData ] = useState( null );

  const index = { owner: 'siewdass' };
  const table = 'test';
  
  const onCreate = () => network.create( { table, index, value: { ...index, value: 1 } } );
  const onUpdate = () => network.update( { table, index, value: { ...index, value: 1 }, renew: { ...index, value: 2 } } );
  const onDelete = () => network.delete( { table, index, value: { ...index, value: 2 } } );

  network.read( { table, index, state: setData } );

  const SignIn = () =>  network.signup( { email: 'siewdass@gmail.com', password: '123456', callback: () => console.log('signed') } );
  
  return (
    <>
      <Button label='create' onClick={ onCreate }/>
      <Button label='update' onClick={ onUpdate }/>
      <Button label='delete' onClick={ onDelete }/>
      <Button label='navigate' onClick={ () => navigate( '/test' ) }/>
      <Button label='signup' onClick={ SignIn }/>
      { data?.map( ( item, index ) => <div key={ index }>{ item.value }</div> ) }
    </>
  );
  
}