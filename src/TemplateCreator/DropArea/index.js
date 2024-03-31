import { useDrop } from 'react-dnd'
import { useRef } from 'react'
import { ItemTypes } from '../Meta/ItemTypes';
import { view } from '@risingstack/react-easy-state';
import { globalStore } from '../Store';
import { v4 as uuidv4 } from 'uuid';
import "./index.css";
import { DropItem } from '../DropItem';

export const DropArea = view(() => {
    const boundingBox = useRef(null);
    const [, drop_ref] = useDrop(() => ({
        accept: ItemTypes.TextField,
        drop: (item, monitor) => {
            console.log(item);
            const offset = monitor.getClientOffset();
            const deltaX = offset.x - boundingBox.current.x
            const deltaY = offset.y - boundingBox.current.y
            console.log("deltaX = " + deltaX + ", deltaY = " + deltaY)
            globalStore.addElement({
                id: item.id ?? uuidv4(),
                left: deltaX + "px",
                top: deltaY + "px"
            });
            return { name: 'Dustbin' };
        },
        collect: (monitor) => ({
        isOver: monitor.isOver(),
        canDrop: monitor.canDrop(),
        }),
    }))

    function combinedRef(el) {
        drop_ref(el);
        if (el) {
            boundingBox.current = el.getBoundingClientRect();
        }
    }

    return (
        <div className='drop-wrapper'>
            {/* <div  className='dnd' data-testid="dustbin"></div> */}
            <div ref={combinedRef} className='render-div' data-testid="dustbin">
                {Object.keys(globalStore.elements)?.map((key) => {
                    return <DropItem name="text" key={key} id ={key} styleConfig={{
                        position: 'absolute',
                        left: globalStore.elements[key].left,
                        top: globalStore.elements[key].top
                    }}></DropItem>
                })}
            </div>
        </div>
        

    )
})