
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: `https://web-production-df04.up.railway.app/graphql`,
  documents: "src/graphql/requests/**/*.ts",
  generates: {
    "src/graphql/generated.tsx": {
      plugins: ["typescript", "typescript-operations", "typescript-urql"]
    },
    "./graphql.schema.json": {
      plugins: ["introspection"]
    }
  }
};

export default config;
