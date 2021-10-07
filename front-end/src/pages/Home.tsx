import * as React from 'react'
import axios from 'axios'
import { useCallback, useEffect } from 'react'

import { useKeycloak } from '@react-keycloak/web'

import { useAxios } from '../utils/hooks'
import Axios from 'axios'

export default () => {
  const { keycloak } = useKeycloak()

  const axiosInstance = useAxios('http://localhost:8060') // see https://github.com/panz3r/jwt-checker-server for a quick implementation
  const callApi = useCallback(() => {
    !!axiosInstance.current && axiosInstance.current.get('/callme/ping')
  }, [axiosInstance])

  useEffect(() => {
    axios.get('http://localhost:8060/callme/ping', { withCredentials: true })
    fetch(
      'http://localhost:8060/callme/ping',
      { credentials: 'include' } // could also try 'same-origin'
    ).then((res) => {
      if (res.ok) return res.json()
      // not hit since no 401
    })
  }, [])

  return (
    <div>
      <div>User is {!keycloak?.authenticated ? 'NOT ' : ''} authenticated</div>

      {!!keycloak?.authenticated && (
        <button type="button" onClick={() => keycloak.logout()}>
          Logout
        </button>
      )}

      <button type="button" onClick={callApi}>
        Call API
      </button>
    </div>
  )
}
