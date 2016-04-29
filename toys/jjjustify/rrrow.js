class rrrow {
  constructor ({
    top,
    left,
    width,
    spacing,
    targetRowHeight,
    tolerance,
  } = {}) {
    this.top = top
    this.left = left
    this.width = width
    this.spacing = spacing
    this.targetRowHeight = targetRowHeight
    this.tolerance = tolerance
    
    
    this.minAspectRatio = (width / targetRowHeight) * (1 - tolerance)
    this.maxAspectRatio = (width / targetRowHeight) * (1 + tolerance)
    
    this.items = []
    this.height = 0
  }
  
  addItem (item) {
    const widthWithoutSpacing = this.width - (this.items.concat(item).length - 1) * this.spacing
    
    const newAspectRatio = this.items
      .concat(item)
      .reduce((sum, item) => {
        return sum + item.aspectRatio
      }, 0)
      
    if (newAspectRatio < this.minAspectRatio) {
      this.items = this.items.concat(item)
      return true
      
    } else if (newAspectRatio > this.maxAspectRatio) {
      if (this.items.length) {
        this.items = this.items.concat(item)
        this.completeLayout(widthWithoutSpacing / newAspectRatio)
        return true
      }
      
      const prevWidthWithoutSpacing = this.width - (this.items.length - 1) * this.spacing
      const prevAspectRatio = this.items
        .reduce((sum, item) => {
          return sum + item.aspectRatio
        }, 0)
        
      const targetAspectRatio = widthWithoutSpacing / this.targetRowHeight
        
      if (Math.abs(prevAspectRatio - targetAspectRatio) < Math.abs(newAspectRatio - targetAspectRatio)) {
        this.completeLayout(prevWidthWithoutSpacing / prevAspectRatio)
        return false
      } else {
        this.items = this.items.concat(item)
        this.completeLayout(widthWithoutSpacing / newAspectRatio)
        return true
      }
      
    } else {
      this.items = this.items.concat(item)
      this.completeLayout(widthWithoutSpacing / newAspectRatio)
      return true
    }
  }
  
  getItems () {
    return this.items
  }
  
  completeLayout (newHeight) {
    this.height = Math.round(newHeight)
    
    this.items.reduce((offset, item) => {
      item.top = this.top
      item.left = offset
      item.width = Math.round(item.aspectRatio * this.height)
      item.height = this.height
      
      return offset + item.width + this.spacing
    }, this.left)
  }
  
  forceComplete () {
    this.completeLayout(this.targetRowHeight)
  }
  
  isLayoutComplete () {
    return this.height > 0
  }
}