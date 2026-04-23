import { useQuery, useMutation } from "@tanstack/react-query";

function Read(url) {
  return fetch(url, {
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + sessionStorage.getItem("ID_Token"),
    },
  }).then((res) => res.json());
}

function loginFetch(url, sdata) {
  return fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(sdata),
  })
    .then(function (response) {
      if (!response.ok) {
        return response.status;
      }
      return response.json();
    })
    .then(function (data) {
      const items = data;
      return items;
    });
}

function logoutFetch(url) {
  return fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + sessionStorage.getItem("ID_Token"),
    },
    credentials: "include",
  }).then(function (response) {
    return response.json();
  });
}

export function Get(url) {
  return useQuery({
    queryKey: ["Notas"],
    queryFn: async () => await Read(url),
  });
}

export function LoginCall(url, sdata) {
  return useMutation({
    mutationFn: () => {
      return loginFetch(url, sdata);
    },
  });
}

export function LogoutCall(url) {
  return useMutation({
    mutationFn: () => {
      return logoutFetch(url);
    },
  });
}
