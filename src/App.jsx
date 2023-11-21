import { useEffect, useState } from 'react';

function App() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    fetch('https://randomuser.me/api/?page=1&results=1&seed=abc')
      .then(res => res.json())
      .then(data => setUserData(data.results[0]))
      .catch(error => console.log(error));
  }, []);

  return (
    <div className='flex justify-center items-center bg-gray-200 min-h-screen'>
      {userData ? (
        <div className='flex flex-col lg:flex-row gap-10 justify-between'>

          <div>
            <h1 className='text-center mb-2 uppercase text-xl font-bold'>Variant 1</h1>
            <div className='border-4 border-black p-6 h-40  flex gap-5 overflow-hidden justify-between'>
              <div>
                <img
                  className='rounded-sm shadow w-full'
                  src={userData.picture.large} alt="user_profile" />
              </div>

              <div>
                <h3
                  className='font-bold text-xl lg:text-3xl'
                >{userData.name.first} {" "} {userData.name.last}</h3>
                <p>Gender: <span className='capitalize'>{userData.gender}</span></p>
                <div className='flex justify-start'>
                  <p className='mr-2'>Contact:</p>
                  <div>
                    <p>{userData.phone}</p>
                    <p>{userData.cell}</p>
                  </div>
                </div>
              </div>

            </div>
          </div>

          <div>
            <h1 className='text-center mb-2 uppercase text-xl font-bold'>Variant 2</h1>
            <div className='bg-gray-800 rounded-lg overflow-hidden shadow-lg pt-6 text-white'>
              <img
                className='rounded-full border-4 border-gray-300 w-1/2 mx-auto'
                src={userData.picture.large}
                alt='user_profile'
              />
              <div className='p-6'>
                <h2 className='text-xl font-bold text-center'>
                  {userData.name.first} {userData.name.last}
                </h2>
                <p className='text-sm text-center'>{userData.email}</p>
                <div className='border-b border-gray-600 w-full my-3'></div>
                <p>
                  <span className='font-bold'>Gender:</span> {" "}
                  <span className='capitalize'>{userData.gender}</span>
                </p>
                <p>
                  <span className='font-bold'>Phone:</span> {userData.phone}
                </p>
                <p>
                  <span className='font-bold'>Cell:</span> {userData.cell}
                </p>
                <p>
                  <span className='font-bold'>Location:</span>{' '}
                  {userData.location.city}, {userData.location.state},{' '}
                  {userData.location.country}
                </p>
                <p>
                  <span className='font-bold'>Date of Birth:</span>{' '}
                  {new Date(userData.dob.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </p>
                <p>
                  <span className='font-bold'>Nationality:</span> {userData.nat}
                </p>
              </div>
            </div>
          </div>







        </div>

      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default App;
