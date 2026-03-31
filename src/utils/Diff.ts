const daff = require("daff");

export const diff = (left: [][], right: [][], ref: React.RefObject<any>) => {
  var instance = ref.current.hotInstance;
  var result = [];
  const leftNorm = normalizeTable(left, 2);
  const rightNorm = normalizeTable(right, 2);

  let tableLeft = new daff.TableView(leftNorm);
  let tableRight = new daff.TableView(rightNorm);

  tableLeft.trim();
  tableRight.trim();

  let flags = new daff.CompareFlags();
  flags.show_unchanged = false;
  flags.always_show_header = true;
  flags.always_show_order = true;
  flags.never_show_order = false;
  flags.unchanged_context = true;

  flags.addPrimaryKey(leftNorm[0][1]);
  flags.addPrimaryKey(leftNorm[0][4]);

  var ct = daff.compareTables(tableLeft, tableRight, flags);

  let align = ct.align();
  let output = new daff.TableView([]);
  

  var td = new daff.TableDiff(align, flags);
  td.hilite(output);

  if (output.height !== 0) {
    result = output.data;
    instance.loadData(result);
  }
};

function normalizeTable(data: any[][], headerRowIndex: number) {
  const header = data[headerRowIndex];
  const body = data.slice(headerRowIndex + 1);
  return [header, ...body];
}

