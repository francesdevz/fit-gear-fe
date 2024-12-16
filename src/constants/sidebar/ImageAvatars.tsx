import * as React from 'react';
import { Avatar, Stack } from '@mui/material';

interface imageAvatarProps {
  userName: string; 
  userAvatar: string;  
}

const ImageAvatars: React.FC<imageAvatarProps> = ({ userName, userAvatar  }) => {
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

export default ImageAvatars