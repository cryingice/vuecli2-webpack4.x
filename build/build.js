const webpack = require ('webpack');
const prodConfig = require ('./webpack.prod.conf');
const ora = require ('ora');
const chalk = require ('chalk');

const spinner = ora ('building for production...');
spinner.start ();

webpack (prodConfig, (err, stats) => {
  spinner.stop ();
  // return
  if (err) {
    console.log ('err', err);
    console.log ('stats.hasErrors ()', stats.hasErrors ());

    throw err;
  }
  process.stdout.write (
    stats.toString ({
      colors: true,
      modules: false,
      children: false, // If you are using ts-loader, setting this to true will make TypeScript errors show up during build.
      chunks: false,
      chunkModules: false,
    }) + '\n\n'
  );
  console.log ('process.env.NODE_ENV', process.env.NODE_ENV);
  console.log (chalk.cyan ('  Build complete.\n'));
  console.log (
    chalk.yellow (
      '  Tip: built files are meant to be served over an HTTP server.\n' +
        "  Opening index.html over file:// won't work.\n"
    )
  );
});
