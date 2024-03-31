import { useDrop } from 'react-dnd'
import { useRef } from 'react'
import { ItemTypes } from '../Meta/ItemTypes';
const style = {
  height: '12rem',
  width: '12rem',
  marginRight: '1.5rem',
  marginBottom: '1.5rem',
  color: 'white',
  padding: '1rem',
  textAlign: 'center',
  fontSize: '1rem',
  lineHeight: 'normal',
  float: 'left',
}
export const DropArea = () => {
    const boundingBox = useRef(null);
    const [{ canDrop, isOver }, drop_ref] = useDrop(() => ({
        accept: ItemTypes.TextField,
        drop: (item, monitor) => {
            const offset = monitor.getClientOffset();
            const deltaX = offset.x - boundingBox.current.x
            const deltaY = offset.y - boundingBox.current.y
            console.log("deltaX = " + deltaX + ", deltaY = " + deltaY)
            return { name: 'Dustbin' };
        },
        collect: (monitor) => ({
        isOver: monitor.isOver(),
        canDrop: monitor.canDrop(),
        }),
    }))
    const isActive = canDrop && isOver
    let backgroundColor = '#222'
    if (isActive) {
        backgroundColor = 'darkgreen'
    } else if (canDrop) {
        backgroundColor = 'darkkhaki'
    }

    function combinedRef(el) {
        drop_ref(el);
        if (el) {
            boundingBox.current = el.getBoundingClientRect();
        }
    }
    return (
        <div ref={combinedRef} style={{ ...style, backgroundColor }} data-testid="dustbin">
            {isActive ? 'Release to drop' : 'Drag a box here'}
        </div>
    )
}