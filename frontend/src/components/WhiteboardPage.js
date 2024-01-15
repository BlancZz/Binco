import Whiteboard from './Whiteboard';
import WhiteboardDecoration from './WhiteboardDecoration';
import { ReactSketchCanvas } from 'react-sketch-canvas';

const WhiteboardPage = () => {
  return (
    <div className="sky-background">
      <Whiteboard />
      <WhiteboardDecoration />
      {/* <ReactSketchCanvas
        style={{
          border: '0.0625rem solid #fff',
        }}
        ref={this.canvas}
        strokeWidth={4}
        strokeColor={'white'}
        canvasColor="black"
      /> */}
    </div>
  );
};

export default WhiteboardPage;
