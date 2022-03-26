package com.ecommerce.backend.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ecommerce.backend.Repository.ProductRepository;
import com.ecommerce.backend.dto.ProductDto;
import com.ecommerce.backend.entity.Category;
import com.ecommerce.backend.entity.Product;
import com.ecommerce.backend.exceptions.ProductNotExistsException;

@Service
public class ProductService {
	 @Autowired
	 ProductRepository productRepository;

	public void createProduct(ProductDto productDto, Category category) {
		 Product product = new Product();
	     product.setDescription(productDto.getDescription());
	     product.setImageURL(productDto.getImageURL());
	     product.setName(productDto.getName());
	     product.setCategory(category);
	     product.setPrice(productDto.getPrice());
	     productRepository.save(product);
	}
	
	 public ProductDto getProductDto(Product product) {
	        ProductDto productDto = new ProductDto();
	        productDto.setDescription(product.getDescription());
	        productDto.setImageURL(product.getImageURL());
	        productDto.setName(product.getName());
	        productDto.setCategoryId(product.getCategory().getId());
	        productDto.setPrice(product.getPrice());
	        productDto.setId(product.getId());
	        return productDto;
	    }
	
	public List<ProductDto> getAllProducts() {
        List<Product> allProducts = productRepository.findAll();

        List<ProductDto> productDtos = new ArrayList<>();
        for(Product product: allProducts) {
            productDtos.add(getProductDto(product));
        }
        return productDtos;
    }
	
	public void updateProduct(ProductDto productDto, Integer productId) throws Exception {
        Optional<Product> optionalProduct = productRepository.findById(productId);
        // throw an exception if product does not exists
        if (!optionalProduct.isPresent()) {
            throw new Exception("product not present");
        }
        Product product = optionalProduct.get();
        product.setDescription(productDto.getDescription());
        product.setImageURL(productDto.getImageURL());
        product.setName(productDto.getName());
        product.setPrice(productDto.getPrice());
        productRepository.save(product);
    }
	
	 public Product findById(Integer productId) throws ProductNotExistsException {
	        Optional<Product> optionalProduct = productRepository.findById(productId);
	        if (optionalProduct.isEmpty()) {
	            throw new ProductNotExistsException("product id is invalid: " + productId);
	        }
	        return optionalProduct.get();
	    }
	
	
}