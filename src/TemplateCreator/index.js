// import { useParams } from "react-router-dom";
import "./index.scss";
import { DropArea } from "./DropArea";
import { DropItem } from "./DropItem";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

export function TemplateCreator() {
    // let { institute } = useParams();
    return (
    <DndProvider backend={HTML5Backend}>
        <div className="template-wrapper">
            {/* <div id="drop-area">
                <img src={`./media/christ/bg.jpg`} className="bg-image" alt="bg" />
            </div>
            <div id="drag-items">

            </div> */}
            <DropItem name="text" styleConfig={{
                width: "100px",
                height: "30px",
                border: '1px dashed gray',
                backgroundColor: 'white',
            }}></DropItem>
            <DropArea imageUrl='./media/christ/bg.jpg'></DropArea>
        </div>
      </DndProvider>
    );
  }