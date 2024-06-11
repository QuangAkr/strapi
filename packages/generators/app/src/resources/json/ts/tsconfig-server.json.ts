export default () => ({
  compilerOptions: {
    module: 'CommonJS',
    moduleResolution: 'Node',
    lib: ['ES2020'],
    target: 'ES2019',
    strict: false,
    skipLibCheck: true,
    forceConsistentCasingInFileNames: true,
    incremental: true,
    esModuleInterop: true,
    resolveJsonModule: true,
    noEmitOnError: true,
    noImplicitThis: true,
    outDir: 'dist',
    rootDir: '.',
  },
  include: [
    // Include root files
    './',
    // Include all ts files
    './**/*.ts',
    // Include all js files
    './**/*.js',
    // Force the JSON files in the src folder to be included
    'src/**/*.json',
  ],

  exclude: [
    'node_modules/',
    'build/',
    'dist/',
    '.cache/',
    '.tmp/',

    // Do not include admin files in the server compilation
    'src/admin/',
    // Do not include test files
    '**/*.test.*',
    // Do not include plugins in the server compilation
    'src/plugins/**',
  ],
});
