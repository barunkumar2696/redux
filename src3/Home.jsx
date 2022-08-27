import React from 'react'
import { connect, Connect } from 'react-redux/es/exports'

 function Home(props) {
    console.log(props)
    const{name,age,updateName}=props
  return (
    <div>
      <h1>Home component{name}{age}</h1>
      <button onClick={updateName}>update name</button>
    </div>
  )
}
const mapStateToProps = (state)=>{
return state
}
//if you want only name to be exported from state then pass return{name:state.name}.
const mapDispatchToProps=(dispatch)=>{
return{
updateName: ()=>{
dispatch({
  type:'update-name',
  payload:'john'
})
}
}
}

 export default connect(mapStateToProps,mapDispatchToProps)(Home)