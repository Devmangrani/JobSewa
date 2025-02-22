/*
  @license
	Rollup.js v4.34.7
	Fri, 14 Feb 2025 09:53:29 GMT - commit f9c52f80074e33f5b0799e8ca215e3bfac7d2755

	https://github.com/rollup/rollup

	Released under the MIT License.
*/
export { version as VERSION, defineConfig, rollup, watch } from './shared/node-entry.js';
import './shared/parseAst.js';
import '../native.js';
import 'node:path';
import 'path';
import 'node:process';
import 'node:perf_hooks';
import 'node:fs/promises';
