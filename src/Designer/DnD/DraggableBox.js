import { memo, useEffect } from 'react'
import { useDrag } from 'react-dnd'
import { getEmptyImage } from 'react-dnd-html5-backend'
import { Box } from './Box.js'
import { ItemTypes } from './ItemTypes.js'
import { changeprop } from '../Properties/changeprop.js'
import { coloring } from '../Properties/color.js'
import { data } from './Data.js'
function getStyles(left, top, isDragging) {
  const transform = `translate3d(${left}px, ${top}px, 0)`

  return {
    position: 'absolute',
    transform,
    WebkitTransform: transform,
    // IE fallback: hide the real node using CSS when dragging
    // because IE will ignore our custom "empty image" drag preview.
    opacity: isDragging ? 0 : 1,
    height: isDragging ? 0 : '',

  }
}
export const DraggableBox = memo(function DraggableBox(props) {
  const { id, title, left, top, type, color, classname, isdeleted } = props
  const [{ isDragging }, drag, preview] = useDrag(
    () => ({
      type: ItemTypes.BOX,
      item: { id, left, top, title, color, type, classname },
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
    }),
    [id, left, top, title, color, isdeleted],
  )
  useEffect(() => {
    preview(getEmptyImage(), { captureDraggingState: true })
  }, [])

  return (
    <div
      ref={drag}
      style={getStyles(left, top, isDragging)}
      role="DraggableBox"
      className={data.at(id).isdeleted ? "disappear" : "all"}
    >
      <Box title={title} isdeleted={isdeleted} classname={classname} id={id} type={type} yellow={data.at(id).color} />
    </div>
  )
})
