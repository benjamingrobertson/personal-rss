import React, { Component } from 'react';

export default (Greeting = () => {
  const date = new Date();
  const hour = date.getHours();

  let greeting = 'Hello';

  if (hour < 6) {
    greeting = "You're up early";
  } else if (hour < 12) {
    greeting = 'Good morning';
  } else if (hour == 12) {
    greeting = 'Enjoy your lunch break';
  } else if (hour < 17) {
    greeting = 'Good afternoon';
  } else if (hour < 20) {
    greeting = 'Good evening';
  } else if (hour > 20) {
    greeting = 'Good night';
  }

  return greeting;
});
