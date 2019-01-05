import React from "react";
import { Flex } from "../../components/flexbox";
import httpClient from "../../utils/http/http-client";

export function Login() {
  httpClient.get("user").then(res => console.log(res));

  return (
    <Flex padding={4} width={1 / 2} marginTop={4} marginLeft={4}>
      Login page
    </Flex>
  );
}
