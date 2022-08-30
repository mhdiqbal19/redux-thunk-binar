import React, { useEffect } from 'react'
import {useSelector, useDispatch } from 'react-redux'
import { getData } from '../Redux/Actions/dataActin';

const Home = () => {
    const {dataUser} = useSelector((state) => state);
    const dispatch = useDispatch()

    console.log("datareducer", dataUser);


    useEffect(() => {
        dispatch(getData())
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


  return (
    <div>
        <h1>Data User</h1>
        {dataUser.data.map((item) => (
            <>            
            <img src={item.avatar} alt="" />
            <p>{item.first_name}</p>
            </>
        ))
        }
    </div>
  )
}

export default Home