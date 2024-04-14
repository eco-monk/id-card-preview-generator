import { useDrag } from 'react-dnd'
import { ItemTypes } from '../Meta/ItemTypes.js'

export const DropItem = function Box({ id, name, styleConfig }) {
  const [{ isDragging }, drag, preview] = useDrag(() => ({
    type: ItemTypes.TextField,
    item: { id, name, styleConfig },
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
    <div ref={preview} style={{ ...styleConfig, opacity, display: 'flex' }}>
        <div ref={drag} style={{
            height: "10px",
            width: "10px",
            backgroundColor: "red",
            cursor: 'move',
            alignSelf: 'flex-start',
        }}></div>
      <div>{name}</div>
    </div>
  )
}
