import * as React from 'react';
import { Avatar, Stack } from '@mui/material';

interface imageAvatarProps {
  userName: string; 
  userAvatar: string;  
}

/**
 * A reusable Avatar component that displays the user's profile picture or a default image.
 * It allows customization of the avatar's appearance, including hover effects.
 * 
 * @param {imageAvatarProps} props - The properties passed to the component.
 * @param {string} props.userName - The name of the user, which is used as the alt text for the avatar.
 * @param {string} props.userAvatar - The URL of the user's avatar image.
 * 
 * @returns {JSX.Element} The rendered Avatar component.
 */
const ImageAvatars: React.FC<imageAvatarProps> = ({ userName, userAvatar }) => {
  return (
    <Stack direction="row">
      <Avatar 
        alt={`${userName ? userName : ''}`}
        src={`${userAvatar ? userAvatar : ''}`} 
        sx={{ 
          width: 28, 
          height: 28, 
          backgroundColor: 'rgba(0,0,0,0.7)',  
          cursor: 'pointer', 
          ":hover": {
            backgroundColor: 'rgba(0,0,0,0.5)'  
          } }}
      />
    </Stack>
  );
}

export default ImageAvatars;