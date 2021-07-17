export const minLength = ({ length = 1 }) => (val) => val.length > length;

export const emailAddress = () => (val) => /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(val);
