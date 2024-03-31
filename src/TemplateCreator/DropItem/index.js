import { useDrag } from 'react-dnd'
import { ItemTypes } from '../Meta/ItemTypes.js'
const style = {
    width: '100px',
    height: '20px',
  border: '1px dashed gray',
  backgroundColor: 'white',
  padding: '0.5rem 1rem',
  marginRight: '1.5rem',
  marginBottom: '1.5rem',
  cursor: 'move',
}
export const DropItem = function Box({ name, styleConfig, id }) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemTypes.TextField,
    item: { name, id },
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult()
      if (item && dropResult) {
        // console.log(`You dropped ${item.name} into ${dropResult.name}!`)
      }
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
      handlerId: monitor.getHandlerId(),
    }),
  }))
  const opacity = isDragging ? 0.4 : 1
  return (
    <div ref={drag} style={{ ...style, ...styleConfig, opacity }} data-testid={`box`}>
      {name}
    </div>
  )
}
