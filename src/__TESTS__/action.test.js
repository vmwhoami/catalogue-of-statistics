import * as actions from '../redux/crypto/cryptoActions'
import * as types from '../redux/crypto/actionTypes'
import * as infoActions from '../redux/cryptoInfo/infoActions'
import * as infoTypes from '../redux/cryptoInfo/infoActionTypes'
describe('actions', () => {
  it('should create an action  CHANGE_FILTER', () => {
    const payload = "ALL"
    const expectedAction = {
      type: types.CHANGE_FILTER,
      payload
    }
    expect(actions.changeFilter(payload)).toEqual(expectedAction)
  })

  it('should create an action  LOAD_FAILURE', () => {

    const expectedAction = {
      type: types.LOAD_FAILURE,
      payload: [],
      error: true,
    }
    expect(actions.fetchCryptoInfoFailure()).toEqual(expectedAction)
  })


  it('should create an action  GET_ID', () => {
    const str = "somecoin"
    const expectedAction = {
      type: infoTypes.GET_ID,
      payload: str,
    }

    expect(infoActions.getCoinId(str)).toEqual(expectedAction)
  })


})