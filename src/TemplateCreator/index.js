// import { useParams } from "react-router-dom";
import "./index.css";
import { DropArea } from "./DropArea";
import { DropItem } from "./DropItem";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

export function TemplateCreator() {
    // let { institute } = useParams();
    return (
    <DndProvider backend={HTML5Backend}>
        <div className="wrapper">
            {/* <div id="drop-area">
                <img src={`./media/christ/bg.jpg`} className="bg-image" alt="bg" />
            </div>
            <div id="drag-items">

            </div> */}
            <DropItem name="text"></DropItem>
            <DropArea></DropArea>
        </div>
      </DndProvider>
    );
  }