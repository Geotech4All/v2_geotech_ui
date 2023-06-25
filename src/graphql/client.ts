import { Client, cacheExchange, fetchExchange } from "urql";
import { authExchange } from "@urql/exchange-auth";
import { getTokens, setTokens } from "@/utils/token";
import { REFRESH_TOKEN } from "./requests/mutations/AuthMutation";
import { MutationRefreshTokenArgs, RefreshToken } from "./generated";

const client = new Client({
  url: process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT ?? "",
  exchanges: [
    cacheExchange,
    authExchange(async (utils) => {
      let tokens = await getTokens();

      return {
        addAuthToOperation(operation) {
          if (!tokens?.token) return operation;
          return utils.appendHeaders(operation, {
            Authorization: `JWT ${tokens.token}`,
          });
        },
        didAuthError(error, _operation) {
          return error.graphQLErrors.some(
            (e) => {
              if (e.message === "Signature has expired") {
                return true;
              }
              return false;
            }
          );
        },
        async refreshAuth() {
          const result = await utils.mutate<
            { refreshToken: RefreshToken },
            MutationRefreshTokenArgs
          >(REFRESH_TOKEN, { refreshToken: tokens?.refreshToken ?? "" });

          if (result.data?.refreshToken) {
            const token = result.data.refreshToken.token ?? "";
            const refreshToken = result.data.refreshToken.refreshToken ?? "";
            setTokens(token, refreshToken);
          } else {
            localStorage.clear();
            if (typeof window !== "undefined") {
              window.location.replace("/");
            }
          }
        },
      };
    }),
    fetchExchange,
  ],
});

export default client;
