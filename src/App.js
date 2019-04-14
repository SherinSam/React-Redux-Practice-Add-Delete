import React from 'react'; 
import { connect } from 'react-redux'; 
import DepositMethod from './DepositMethod';

const App = ({...props}) => {
    const deps = props.deposits.map((deposit, index) => {
      return(
        <DepositMethod depositsLength={props.deposits.length} index={index}/>
      )
    })
    return (
      <h3>{deps}</h3>
    )
}

const mapStateToProps = (state) => {
  return {
    deposits: state.depositMethods
  } 
}

  
export default connect(mapStateToProps, null)(App);
