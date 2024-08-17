// eslint.config.mjs
import antfu from '@antfu/eslint-config';

export default antfu(
  {
    type: 'lib',
    stylistic: {
      semi: true,
    },
    jsonc: false,
    yaml: false,
  },
  {
    rules: {
      'ts/explicit-function-return-type': 'off',
    },
  },
);
