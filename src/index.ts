#!/usr/bin/env node

import * as prog from 'caporal';
import { create } from './lib/create';

prog
  .version('1.0.0')
  .action(create);

prog.parse(process.argv);
