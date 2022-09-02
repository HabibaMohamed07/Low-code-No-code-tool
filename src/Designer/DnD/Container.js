import update from 'immutability-helper'
import { useCallback, useState } from 'react'
import { useDrop } from 'react-dnd'
import { DraggableBox } from './DraggableBox.js'
import { ItemTypes } from './ItemTypes.js'
import { snapToGrid as doSnapToGrid } from './snapToGrid.js'
import "./DnD.css";
import { data } from "./Data";
import changeData from '../components/Change.js'
import { changingdata } from './changingdata.js'
import { renderHook } from '@testing-library/react'
import { changeprop } from '../Properties/changeprop.js'
import { type } from '@testing-library/user-event/dist/type/index.js'
import { indexar } from '../components/indexar.js'
const styles = {
  height: 810,
  width: 1350,
  left:-290,
  top:10, 
  border: '1px solid white',
  position: 'absolute',


}


export const Container = ({ snapToGrid }) => {
  let [boxes, setBoxes] = useState(
    data)




  const moveBox = useCallback(
    (id, left, top) => {

      setBoxes(
        update(data, {
          [id]: {
            $merge: { left, top },

          },
        }),
      )
    },
    [boxes],
    changingdata(boxes),
  )
  const [, drop] = useDrop(
    () => ({
      accept: ItemTypes.BOX,
      drop(item, monitor) {
        const delta = monitor.getDifferenceFromInitialOffset()
        let left = Math.round(item.left + delta.x)
        let top = Math.round(item.top + delta.y)
        if (snapToGrid) {
          [left, top] = doSnapToGrid(left, top)
        }
        moveBox(item.id, left, top)
        changeprop(item.id);
        return undefined
      },
    }),
    [boxes],
  )

  const [, updateState] = useState();
  const forceUpdate = useCallback(() => updateState({}), []);


  console.log("data: " + JSON.stringify(data))
  console.log("boxes: " + JSON.stringify(boxes))
  console.log("data length:" + JSON.stringify(data.length));
  return (
    <div ref={drop} style={styles} className="m" onMouseEnter={forceUpdate}>

      {
        data.map((item, index) => {
          if (data.at(0) != item || !item.isdeleted) {
            return (
              <DraggableBox isdeleted={false} classname={item.classname} key={index} id={index} type={data.at(index).start}  {...item} >
              </DraggableBox>
            )
          }
        })

        //   Object.keys(boxes).map((key) => (


        //   ))}

      }
    </div>
  )
}
