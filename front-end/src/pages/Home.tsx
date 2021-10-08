import * as React from "react";
import axios from "axios";
import { useCallback, useEffect } from "react";

import { useKeycloak } from "@react-keycloak/web";

import { useAxios } from "../utils/hooks";
import Axios from "axios";

export default () => {
  const { keycloak } = useKeycloak();

  const axiosInstance = useAxios(""); // see https://github.com/panz3r/jwt-checker-server for a quick implementation
  const callApi = useCallback(() => {
    !!axiosInstance.current && axiosInstance.current.get("/api/callme/ping");
  }, [axiosInstance]);

  useEffect(() => {
    console.log(keycloak.sessionId);

    var req = new XMLHttpRequest();
    req.open("POST", "/api/callme/ping", true);
    req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    req.withCredentials = true;

    req.send();

    fetch(
      "/api/callme/ping",
      {
        credentials: "include",
        headers: {
          Cookie: `SESSION: ${keycloak.sessionId}`,
        },
      } // could also try 'same-origin'
    ).then((res) => {
      if (res.ok) return res.json();
      // not hit since no 401
    });
  }, []);

  return (
    <div>
      <div>User is {!keycloak?.authenticated ? "NOT " : ""} authenticated</div>

      {!!keycloak?.authenticated && (
        <button type="button" onClick={() => keycloak.logout()}>
          Logout
        </button>
      )}

      <button type="button" onClick={callApi}>
        Call API
      </button>
    </div>
  );
};
