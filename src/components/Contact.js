import React from 'react';
import ProfileCard from './ProfileCard';

const Contact = ({ profileCardProps }) => {
  return (
    <div>
      <ProfileCard {...profileCardProps} />
    </div>
  );
};

export default Contact;
