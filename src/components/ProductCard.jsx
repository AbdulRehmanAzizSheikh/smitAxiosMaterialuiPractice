import React from 'react';
import { 
  Card, 
  CardMedia, 
  CardContent, 
  Typography, 
  Rating, 
  Box, 
  Button, 
  Chip 
} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const ProductCard = ({ product }) => {
  // Discounted price calculate karne ke liye
  const discountedPrice = (product.price * (1 - product.discountPercentage / 100)).toFixed(2);

  return (
    <Card sx={{ 
      maxWidth: 345, 
      height: '100%', 
      display: 'flex', 
      flexDirection: 'column',
      justifyContent: 'space-between',
      boxShadow: 3,
      borderRadius: 2,
      position: 'relative',
      transition: 'transform 0.2s',
      '&:hover': { transform: 'scale(1.02)' }
    }}>
      
      {/* Low Stock or Availability Tag */}
      <Chip 
        label={product.availabilityStatus} 
        color={product.stock < 10 ? 'error' : 'success'} 
        size="small"
        sx={{ position: 'absolute', top: 10, right: 10, zIndex: 1 }}
      />

      {/* Product Image */}
      <CardMedia
        component="img"
        height="200"
        image={product.thumbnail}
        alt={product.title}
        sx={{ objectFit: 'contain', bgcolor: '#f5f5f5', p: 2 }}
      />

      <CardContent sx={{ flexGrow: 1 }}>
        {/* Brand */}
        <Typography variant="caption" color="text.secondary" gutterBottom>
          {product.brand || "Generic"}
        </Typography>

        {/* Title */}
        <Typography variant="h6" component="div" sx={{ fontSize: '1.1rem', fontWeight: 'bold', mb: 1 }}>
          {product.title}
        </Typography>

        {/* Rating */}
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
          <Rating value={product.rating} precision={0.1} readOnly size="small" />
          <Typography variant="body2" color="text.secondary" sx={{ ml: 1 }}>
            ({product.rating})
          </Typography>
        </Box>

        {/* Description */}
        <Typography variant="body2" color="text.secondary" noWrap sx={{ mb: 2, whiteSpace: 'normal', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' }}>
          {product.description}
        </Typography>

        {/* Price Section */}
        <Box sx={{ display: 'flex', alignItems: 'baseline', gap: 1 }}>
          <Typography variant="h6" color="primary.main" sx={{ fontWeight: 'bold' }}>
            ${discountedPrice}
          </Typography>
          {product.discountPercentage > 0 && (
            <Typography variant="body2" color="text.secondary" sx={{ textDecoration: 'line-through' }}>
              ${product.price}
            </Typography>
          )}
        </Box>
      </CardContent>

      {/* Action Button */}
      <Box sx={{ p: 2, pt: 0 }}>
        <Button 
          variant="contained" 
          fullWidth 
          startIcon={<ShoppingCartIcon />}
          disabled={product.stock === 0}
          size="medium"
          sx={{ borderRadius: 1.5 }}
        >
          {product.stock > 0 ? 'Add to Cart' : 'Out of Stock'}
        </Button>
      </Box>
    </Card>
  );
};

export default ProductCard;