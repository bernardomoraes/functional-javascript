const extractMock = require("./mock/extract.json");

// Just experimenting things

const extractFunction = (acc, item) => {
  let dataExtracted = item.node.child_relations.reduce((acc, i) => {
    if (i.cards.length !== 0 && i.id == 300267486) {
      return i.cards[0].id;
    }
  });

  if (dataExtracted) {
    acc.push(dataExtracted);
  }

  return acc;
};

let extractedMock = extractMock.data.phase.cards.edges.reduce(
  extractFunction,
  []
);

console.log(extractedMock);
