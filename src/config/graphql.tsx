import {
  ApolloClient,
  concat,
  createHttpLink,
  InMemoryCache,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

const httpLink = createHttpLink({
  uri: "https://global.auxfin.com.np/graphql",
});

const authLink = setContext((_, { headers }) => {
  //   const token =
  //     "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIyIiwianRpIjoiZDU3NmMzOGUzZTY0MTkyYzEzZTQ0NGVkNWU5MDM2NWRhNTFmZWQ3ZTM3MDBjMmJhYWIzYWU2MDRiODQ4NzE2MjdkNTk5NmE5Y2FkYmU4YTYiLCJpYXQiOjE3MzQ1MjA1NzcuOTk0MDU5LCJuYmYiOjE3MzQ1MjA1NzcuOTk0MDYzLCJleHAiOjE3NjYwNTY1NzcuNjg3NDY3LCJzdWIiOiI4MDU0NzUiLCJzY29wZXMiOltdfQ.eWcai6whkEhCLk7HVroVVPAeWNJwWLMBtEhs9XIMnFQnkxzcqSk0s2EFFZNlb66HhMrDvyiHD5_gQLy82cpXRSFSWyF89YosxiWXfWiz27LkfuIhSLsz3sN8CwBsEJbPJ0QZ1QE9iUXtrDgGguRFJakKOUPWgi-FyFsVdyZP47-efuJ5MmjjxQ0hw58Muv9pfXJ_fImSzerwV_8_AaSJ3xhfyREjXP15_129tTMtjX8tP34PQn4RSGF2PmlWQeNHqyaUUFO4BaOa9OSq_7YRmVgtSUWfdLHXe4cBWy-F8ReWRGi7d_u9VwoBOaRnABZQBJE6oaBIeZZf_stHIcgH_l44YlFE9LQ2hzTaM6OKBhOtQ81dxkqNYhOYplXcArXHpwWi8Im1o9F0f0Vh5NxzeLvFOqXc6SRjZ5m6wPp5OBVua5MAJsJ-eXtzzpgmbea0XaWYxm6M6QO2_PPgV7b32voOBqaKRw-HJbddsVP2Y-3IEf5Fre7XXgRrMZj7vCrQXQEejsJ41dP6oVJGjynPlgOOazeWFQAzbkdTh8-HdCQBJb6Q_txbnppxtFIRwVrBdDzflT1rIJcbCJrVnH8voby_Qttzh7JnZVUVjeZuvDxt2GOu7JvowSn3iPi407WeFK0x6siJpnHlvxUJ1cbuYdOQvsccP8RkhJVMoP09vfk";

  const token = localStorage.getItem("access_token");
  console.log(token);
  return {
    headers: { ...headers, authorization: token ? `Bearer ${token}` : "" },
  };
});

const client = new ApolloClient({
  link: concat(authLink, httpLink),
  cache: new InMemoryCache(),
});

export default client;
