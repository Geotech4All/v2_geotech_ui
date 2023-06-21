import { DocumentNode } from "graphql";

export async function graphqlQuery<
  VariableType = unknown,
  ReturnType = unknown
>(
  url: string,
  query: DocumentNode,
  variables?: VariableType
): Promise<{ data: ReturnType }> {
  const fetchBody = query.loc?.source.body;
  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: fetchBody,
      variables,
    }),
  });
  if (res.ok) {
    const json = await res.json();
    if (json satisfies ReturnType) {
      return json;
    } else {
      throw new Error(`${json} does not match ReturnType`);
    }
  } else {
    throw new Error(`Failed to fetch resource: ${res.statusText}`);
  }
}
