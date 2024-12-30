import * as React from 'react';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'



const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
    backgroundColor: 'rgba(0,0,0,0.7)',
    color: 'white',
  },
}));


interface CartBadge {
    cartCount: number;   
}
  
/**
 * A customized shopping cart badge component that displays the number of items in the cart.
 * This component uses Material-UI's Badge and IconButton components to display a badge with the cart count.
 * The badge content is updated dynamically based on the `cartCount` prop.
 * 
 * @param {CartBadge} props - The properties passed to the component.
 * @param {number} props.cartCount - The number of items in the cart, used to display the badge content.
 * 
 * @returns {JSX.Element} The rendered shopping cart badge with an icon.
 */
const CustomizedBadges: React.FC<CartBadge> = ({ cartCount }) => {
  return (
    <IconButton aria-label="cart">
      <StyledBadge badgeContent={cartCount || 0} color="default" showZero={true}>
        <ShoppingCartIcon />
      </StyledBadge>
    </IconButton>
  );
}

export default CustomizedBadges;