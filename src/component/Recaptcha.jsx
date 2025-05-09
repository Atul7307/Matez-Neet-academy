import React from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

const Recaptcha = ({ onChange }) => {
  return (
    <ReCAPTCHA
      sitekey="6Ldu74cqAAAAAFfSjSLFgW6cP_DfQ3n4S4IdbIoY"
      onChange={onChange}
    />
  );
};

export default Recaptcha;
