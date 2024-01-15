import LeftPlane from './LeftPlane';
import RightPlane from './RightPlane';
import Message from './Message';
import MessageDecoration from './MsgDecoration';

const MessagePage = () => {
  return (
    <div
      className="sunset-background"
      style={{ position: 'relative', paddingTop: '4rem' }}
    >
      <MessageDecoration></MessageDecoration>

      <div
        className="d-flex justify-content-center"
        style={{ position: 'relative', marginTop: '-4rem' }}
      >
        <LeftPlane></LeftPlane>
        <Message />
        <RightPlane></RightPlane>
      </div>
      <footer className="position-fixed w-100 text-center p-3 b-0">
        &copy; 2024 Cool Website. All rights reserved.
      </footer>
    </div>
  );
};

export default MessagePage;
