import React, {
  useState,
  useEffect,
  useRef
} from 'react';
import PropTypes from 'prop-types';

const Typing = ({
  message,
  typeEnd,
  cursor = true,
  className = '',
  speed = 50
}) => {

  const [text, setText] = useState('');
  const msgEl = useRef();

  useEffect(() => {
    const charItr = message[Symbol.iterator]();
    let timerId;

    (function showChar() {
      const nextChar = charItr.next();
      if (nextChar.done) {
        typeEnd();
        return;
      }
      setText(current => current + nextChar.value);

      timerId = setTimeout(showChar, speed);
    }());

    return () => clearTimeout(timerId);
  }, []);

  useEffect(() => {
    const el = msgEl.current;
    if (el.clientHeight < el.scrollHeight) {
      el.scrollTop = el.scrollHeight - el.clientHeight;
    }
  });

  return (
    <div
      className={className + (cursor ? ' cursor-blink' : '')}
      style={{ whiteSpace: 'pre-line' }}
      ref={msgEl}
    >
      {text}
    </div>
  );
};

Typing.propTypes = {
  message: PropTypes.string.isRequired,
  typeEnd: PropTypes.func.isRequired,
  cursor: PropTypes.bool,
  className: PropTypes.string,
  speed: PropTypes.number
};

export default Typing;