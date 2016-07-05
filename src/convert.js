/**
 *  What a graph below is?
 *  It's a 2D array (106 * 17) which stores boolean values. And it's in Quadrant IV.
 *  You can refer the bottom left corner by using graph[0][16]
 */


import bigInt from 'big-integer';

const totalCells = 106 * 17;

/**
 * @return {Array}
 */
export function K2Graph(k) {
  // add some prefix zeros
  let binaryForm = bigInt(k).divide(17).toString(2);
  if (binaryForm.length > totalCells)
    throw new Error('k is to large');
  let zeros = '0'.repeat(totalCells - binaryForm.length);
  binaryForm = zeros.concat(binaryForm);

  let graph = [];
  for (let x = 0; x < 106; x++) {
    graph[x] = [];
    for (let y = 0; y < 17; y++) {
      graph[x][y] = binaryForm.charAt((17 * x) + (16 - y)) === '1';
    }
  }

  return graph;
}

/**
 * @return {string}
 */
export function Graph2K(graph) {
  let binaryArray = [];

  for (let x = 0; x < 106; x++) {
    for (let y = 0; y < 17; y++) {
      binaryArray[(17 * x) + (16 - y)] = graph[x][y] ? 1 : 0;
    }
  }

  return bigInt(binaryArray.join(''), 2).times(17).toString();
}

export const DEFAULT_K = '960939379918958884971672962127852754715004339660129306651505519271' +
  '7028023952664246896428421743507181212671537827706233559932372808741443078913259' +
  '6394133772348785773574982392662971551717371699516523289053822161240323885586618' +
  '4013235585136048828693337902491454229288667081096184496091705183454067827731551' +
  '7054053816273809676025656250169814820834187831638491155902256100036523513703438' +
  '7446184837873723819822484986346503315941005497470059313833922649724946175154572' +
  '8366702369745461014655997933798537483143786841806593422227898388722980000748404719';

export const DEFAULT_GRAPH = K2Graph(DEFAULT_K);
