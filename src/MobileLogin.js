import React, {useState} from 'react';

import VerifyCode from './VerifyCode';
import MobileNumber from './MobileNumber';

export default function MobileLogin() {
  const [Confirm, setConfirm] = useState(null);

  const mobileLogin = async phoneNumber => {
    const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
    setConfirm(confirmation);
  };

  if (confirm) return <VerifyCode />;

  return <MobileNumber />;
}
