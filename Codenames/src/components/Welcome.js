// import React, {useState, useEffect} from 'react'
// import styled from 'styled-components'
// import {Link} from 'react-router-dom'
// import {useServerState, useServerDispatch} from '../api'

// const Container = styled.div`
// display: flex;
// flex-direction: column;
// align-items: center;
// margin-top: 200px;
// `

// const Welcome = () => {
//     const [name, setName] = useState('')

//     const {user} = useServerState()
//     const {setUser, identifyUser} = useServerDispatch()


//     const handleConfirm = () => {
//         setUser({...user, name: name})
//         identifyUser()
//     }

//      return(
//         <Container>
//             <h3>Welcome to Codenames!</h3>
//             <h5>Enter your name to get started</h5>
//             <input
//             type='text'
//             id='name'
//             value={name}
//             onChange={(e)=>setName(e.target.value)}
//             />
//             <button href='/codenames' onEnterPress={handleConfirm} onClick={handleConfirm}>Go</button>
//         </Container>
//     )
// }

// export default Welcome
