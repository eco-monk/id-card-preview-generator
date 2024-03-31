import { useDrop } from 'react-dnd'
import { useRef } from 'react'
import { ItemTypes } from '../Meta/ItemTypes';
import { view } from '@risingstack/react-easy-state';
import { globalStore } from '../Store';
import "./index.css";

export const DropArea = view(() => {
    const boundingBox = useRef(null);
    const [, drop_ref] = useDrop(() => ({
        accept: ItemTypes.TextField,
        drop: (item, monitor) => {
            const offset = monitor.getClientOffset();
            const deltaX = offset.x - boundingBox.current.x
            const deltaY = offset.y - boundingBox.current.y
            console.log("deltaX = " + deltaX + ", deltaY = " + deltaY)
            globalStore.addElement({
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
            <div ref={combinedRef} className='dnd' data-testid="dustbin"></div>
            <div className='render-div'>
                {globalStore.elements?.map((el, idx) => {
                    return <div key={idx} style={ {
                        position: 'absolute',
                        left: el.left,
                        top: el.top
                    }}>text</div>
                })}
            </div>
        </div>
        

    )
})