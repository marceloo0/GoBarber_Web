// eslint-disable-next-line no-use-before-define
import React from 'react';
import { FiAlertCircle, FiXCircle } from 'react-icons/fi';
import { Container } from './styles';

const Toast: React.FC = () => {
  return (
    <Container>
      <FiAlertCircle />

      <div>
        <strong>{message.title}</strong>
        {message.description && <p>{message.description}</p>}
      </div>
      <button onClick={() => removeToast(message.id)} type="button">
        <FiXCircle size={20} />
      </button>
    </Container>
  );
};

export default Toast;
