const { getResultChunks } = require('./helpers/chunkHelper.js');
const { parseChunk } = require('./helpers/parseHelper.js');


const parse3ds = (buffer) => {
  const rootChunk = parseChunk(buffer, 0);
  const chunkObjects = getResultChunks(rootChunk);

  return {
      chunkObjects
  };
};

module.exports = {
  parse3ds
}
