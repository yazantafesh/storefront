import React from 'react';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import { changeActive } from '../store/categories';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRemoteData } from '../thunk/thunk';

function Categories(props) {

  const dispatch = useDispatch();
  const state = useSelector(state => state.categories);

  useEffect(() => {
    dispatch(getRemoteData()).then(() => {
      dispatch(changeActive("electronics"));
    });
  }, [])

  return (
    <>
      <Breadcrumbs aria-label="breadcrumb" style={{ marginLeft: '40%', fontSize: '25px', marginTop: '1%' }}>
        {state.categories.map((element, idx) => {

          return <Link color="secondary" key={idx} onClick={() => {dispatch(changeActive(element.name)) }}>
            {element.displayName}
          </Link>
        })}
      </Breadcrumbs>
      <div style={{ marginLeft: '43%', fontSize: '50px', marginTop: '2%' }}>{state.activeCategory.displayName}</div>
      <div style={{ marginLeft: '35%', fontSize: '25px', marginTop: '2%', color: 'GrayText' }}>{state.activeCategory.description}</div>
    </>
  )
}


export default Categories;
