const obj={
    name:'vaibhav',
    age:'24'
}

export const rootReducer=(state = obj,action)=>{
    console.log(action)
    if(action.type==='update-name'){
        return{
            ...state,
            name:action.payload
        }
    }
return state
}

//steps for implementing redux:
//1.install three packages npm i redux react-redux @reduxjs/toolkit
//2.create store in index.js.The store is taking configureStore() function to create redux store.
//3.create another file for reducer named rootReducer.js.
//4.create a object having name and age as key values.
//5.build a function reactReducer which accept two values i.e, state and action.And return state.
//6.Note:state=obj we created.
//Now we have to link this reducer from configurestore() which we created in index.js.
//7.pass parameter reducer having rootReducer function({reducer:rootReducer}) inside configureStore as props in line 9 of index.js.
//Reducer connected.
//now accesing state values in home componene(home.jsx)
//8.pass app inside provider in index.js line 14,15,16.
//provider allows interaction between react application and redux store.
//9.pass store as props in provider.as in line 14 of index.js
//by doing step 9 we have enabled redux for app component that is every thing inside app component can use redux store.
//if ny component want to use redux store then it will have to take subscription for redux store by using connect function.
//10.import Connect from react redux for subscription.
//11.pass connect(Home) in the exporting line.
//12.make a function myStatetoProps in home component to access state from reducer.
//13.pass mapStatetoProps in connect function.
//14.To use the states in home component we are getting it as props.
//this passing of state is possible because connect function is acting as higher order component.



//Action is the property of redux which accepts two parameter,first one is type and second one is payload.Type is any string which define the problem that you are doing uniquely.Payload is the data which needs to be updated ie. data of updated state.
//write a code to update the vabhaiv name to something else.
//1.make a function maoDispatchToProps in Home.jsx which will take dispatch as props and pass it as second function in connect as 2nd argument.
//2.return updateName as fatARROW function which contains dispatch function and pass the update-name in type and updated value in payload.
//3.pass updateName function in home function as props and pass function updatename onClick to update the name.