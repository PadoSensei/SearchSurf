// import React from 'react'
// import axios from 'axios'


//   const urls = [
//     'http://localhost:5000/beaches/Ribeira',
//     'http://localhost:5000/beaches/Pontal',
//     'http://localhost:5000/beaches/Jeribucacu',
//     'http://localhost:5000/beaches/Itacarezinho',
//     'http://localhost:5000/beaches/Havaizinho',
//     'http://localhost:5000/beaches/Tiririca',
//     //'http://localhost:5000/beaches/Engenhoca',
//   ]
  
//   const beaches = {}
  
//   function RedisClient() {
    
//     state = {}
  
//     // we want this to be the entire object
//     const dataPushToState = (allTheData) => {
//       this.setState(state => ({
//         beaches: [allTheData]
//       }))
//       console.log('Data pulled into state')
      
//     }
//     const beachDataPullFromRedis = (url) => {
      
//       axios.get(url)
//        .then(response => {
        
//         beaches[response.data.name] = {
//           "latest": response.data.latest,
//           "forecast": response.data.forecast,
//           "waterTemp": response.data.waterTemp
//         }
//        })
//        .catch((error) => {
//           console.log(error);
//           console.log("no data")
//        })
//     }
  
//   axios.get('http://localhost:5000/beaches/Pontal')
//      .then(response => {
//        const newBeach = (beach) => {
//          setBeaches([...beaches, beach])
//        console.log("We got data to the frontend console!!")
//       //  console.log(this.state)
//     }
//     //  .catch((error) => {
//     //     console.log(error);
//     //     console.log("no data")
//     })
//   }
  



// export default RedisClient;
