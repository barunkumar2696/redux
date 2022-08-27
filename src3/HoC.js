export const HoC=(Component)=>{
function EnhancedComponent(){
    return <div style={{backgroundColor:'lightblue'}}><Component value={200} /></div>
}
return EnhancedComponent
}

//Higher order functions are function which accepts component as props/input and enhances the component by providing some additional values And return the enhanced component.


//steps for making HoC:
//1.define one function which is taking component as props as in line no.1 of HoC.js
//2.make the Enhancedfunction inside HoC which will modify component.
//3.Import HoC in App.js
//4.call Hoc function and pass app component as parameter inside it as in line number 13 of app.js