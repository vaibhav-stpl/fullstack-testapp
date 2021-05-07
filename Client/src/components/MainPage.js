import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userActions } from '../actions';

function MainPage() {
  const userData = useSelector(state=>state?.users);
  
  // const [cities, setCities] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
        dispatch(userActions.getAllCities());
    }, []);

  const handleLogout = ()  => {
    sessionStorage.clear();
    window.location.reload();

  }

  const renderCard = () => {
    if(userData.getCitiesLoading){
      return (<div> Loading ...</div>)
    }
    else {
    return userData?.cities.map((city) => {
      return (
        <div key={city?.id} className="card">
          <div className="container">
            <h5>{city?.id}</h5>
            <h5><b>{city?.name}</b></h5>
            <p>{city?.state}</p>
          </div>
        </div>
      )
    })
    }
  }

  return (
    <>
        <div className="header">
          <div className='row'>
            <div className="col-md-6"><span className="user-heading">{`${global?.RG?.currentUser?.email}`}</span></div>
            <div className="col-md-6"><button onClick={handleLogout} className="btn btn-primary btn-logout" >Logout</button></div>
          </div>
        </div>
      <h3>Cities List</h3>
      {renderCard()}
    </>

  );
}

export { MainPage };