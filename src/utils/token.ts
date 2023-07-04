const tokenName = "token";
const refreshTokenName = "refreshToken";

export async function setTokens(token: string, refreshToken: string) {
  if (typeof window !== "undefined") {
    localStorage.setItem(tokenName, token);
    localStorage.setItem(refreshTokenName, refreshToken);
  }
}

export async function getTokens() {
  if (typeof window !== "undefined") {
    const token = localStorage.getItem(tokenName);
    const refreshToken = localStorage.getItem(refreshTokenName);
    return {
      token,
      refreshToken,
    };
  }
  return null;
}
