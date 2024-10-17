import { type Preview } from '@storybook/react';
import { Buffer } from 'buffer'

globalThis.Buffer = Buffer

// import CSS files
import 'ipfs-css'
import 'tachyons'
import '../src/components/loader/loader.css'
import '../src/components/object-info/links-table.css'

const preview: Preview = {
  // tags: ['autodocs']
};

export default preview;
