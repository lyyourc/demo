let layoutCfg = {}

let layoutData = {
  containerHeight: 0,
}

const jjjustify = (
  input = [],
  config = {}
) => {
  layoutCfg = Object.assign({
    containerWidth: 1060,
    containerPadding: 10,
    boxSpacing: 10,
    targetRowHeight: 320,
    tolerance: 0.25,
  }, config)
  
  layoutData.containerHeight = layoutCfg.containerPadding
  
  return computeLayout(
    input.map(item => ({ aspectRatio: item })
  ))
}

function computeLayout (
  items
) {
  let laidOutItems = [] 
  let currentRow = null
  
  items.forEach(item => {
    currentRow = currentRow || createNewRow()
    const isItemAdded = currentRow.addItem(item)
    
    if (currentRow.isLayoutComplete()) {
      laidOutItems = laidOutItems.concat(addRow(currentRow))
      
      currentRow = createNewRow()
      
      if (!isItemAdded) {
        currentRow.addItem(item)
        
        if (currentRow.isLayoutComplete()) {
          laidOutItems = laidOutItems.concat(addRow(currentRow))
          currentRow = null
        }
      }
    }
  })
    
  if (currentRow && currentRow.getItems().length) {
    currentRow.forceComplete()
    laidOutItems = laidOutItems.concat(addRow(currentRow))
  }
  
  return {
    containerHeight: layoutData.containerHeight,
    boxes: laidOutItems,
  }
}

function addRow (row) {
  layoutData.containerHeight += row.height + layoutCfg.containerPadding
  
  return row.getItems()
}

function createNewRow () {
  const {
    containerWidth,
    containerPadding,
    boxSpacing,
    targetRowHeight,
    tolerance,        
  } = layoutCfg

  return new rrrow({
    top: layoutData.containerHeight,
    left: containerPadding,
    width: containerWidth - 2 * containerPadding,
    spacing: boxSpacing,
    targetRowHeight,
    tolerance,
  })
}
