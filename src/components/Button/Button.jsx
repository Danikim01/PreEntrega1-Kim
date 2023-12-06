import * as React from 'react';
import Button from '@mui/material/Button';

export default function ButtonUsage(props) {
  // eslint-disable-next-line react/prop-types
  return <Button variant="contained">{props.text}</Button>;
}