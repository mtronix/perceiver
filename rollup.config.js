import typescript from 'rollup-plugin-typescript2';

const ENTRY_FILE = 'lib/main.ts';

const config = [
  {
    input: ENTRY_FILE,
    output: [
      {
        name: 'perceiver',
        file: 'build/perceiver.umd.js',
        format: 'umd',
      },
      {
        file: 'build/perceiver.cjs.js',
        format: 'cjs',
      },
      {
        file: 'build/perceiver.esm.js',
        format: 'es',
      },
    ],
    sourceMap: true,
    plugins: [
      typescript(),
    ],
  },
];

export default config;
