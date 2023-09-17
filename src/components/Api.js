import React, { useEffect, useState } from 'react'

const Api = () => {
    const [getUserData, setUsers] = useState([])
    const getUsers = async () => {
        const response = await fetch('https://api.github.com/users');

        // convert response data to json format and store in setUsers function
        setUsers(await response.json());
    }

    useEffect(() => {
        getUsers();
    }, []);

    console.log(getUserData)
    return (
        <>
            <div className='container mt-5'>
                <div className='row'>
                    {
                        getUserData.map((userData, index) => {
                            return (
                                <div className='d-flex align-items-center col-md-3 mb-3'>
                                    <div className="card h-100 shadow-sm">
                                        <div className="text-center">
                                            <div className="img-hover-zoom img-hover-zoom--colorize">
                                                <img className="shadow" src={userData.avatar_url}
                                                    alt="Another Image zoom-on-hover effect" />
                                            </div>
                                        </div>
                                        <div className="card-body">
                                            <div className="my-2 text-center">
                                                <h6>{userData.id}</h6>
                                                <h1>{userData.login}</h1>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Api