import React from 'react'
import { connect } from 'react-redux';

const DepositMethod = ({ depositsLength, ...props }) => {
    return (
        <div style={{textAlign: 'center'}}>
          <label style={{marginRight: '10px'}}>Transfer Type:</label>
          <select>
            <option value="dd">Direct Debit</option>
            <option value="bpay">BPAY</option>
          </select> <br/><br/>

          <label style={{marginRight: '10px'}}>Amount:</label>
          <input type="number"/><br/><br/>
          
          <button onClick={() => props.addHandler()}>Add another deposit</button>
          {depositsLength > 1 ?
            <button onClick={() => props.deleteHandler(props.index)}>Delete</button> : null
          }
          <br/><br/>
          <hr/>
        </div>
      )
}

const mapDispatchToProps = (dispatch) => {
  return {
   addHandler: () => {dispatch({type: 'ADD_DEPOSIT'})},
   deleteHandler: (index) => {dispatch({type: 'DELETE_DEPOSIT', data: index})}
  }
}

export default connect(null, mapDispatchToProps) (DepositMethod)