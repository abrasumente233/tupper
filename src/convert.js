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
  for (let i = 0; i < 17; i++) {
    graph[i] = [];
    for (let j = 0; j < 106; j++) {
      graph[i][j] = +binaryForm.charAt((17 * j) + (16 - i));
    }
  }

  return graph;
}

/**
 * @return {string}
 */
export function Graph2K(graph) {
  let binaryArray = [];

  for (let i = 0; i < 17; i++) {
    for (let j = 0; j < 106; j++) {
      binaryArray[(17 * j) + (16 - i)] = graph[i][j]
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
