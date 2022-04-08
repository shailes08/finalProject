package com.ecommerce.backend.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ecommerce.backend.Repository.Categoryrepository;
import com.ecommerce.backend.common.ApiResponse;
import com.ecommerce.backend.dto.ProductDto;
import com.ecommerce.backend.entity.Category;
import com.ecommerce.backend.entity.Product;
import com.ecommerce.backend.service.ProductService;

@RestController
@RequestMapping("/product")
@CrossOrigin
public class ProductController {
	@Autowired
	ProductService productService;
	
	@Autowired
    Categoryrepository categoryRepo;
	
	 @PostMapping("/add")
	  public ResponseEntity<ApiResponse> createProduct(@RequestBody ProductDto productDto) {
	         Optional<Category> optionalCategory = categoryRepo.findById(productDto.getCategoryId());
	         if (!optionalCategory.isPresent()) {
	             return new ResponseEntity<ApiResponse>(new ApiResponse(false, "category does not exists"), HttpStatus.BAD_REQUEST);
	         }
	         productService.createProduct(productDto, optionalCategory.get());
	         return new ResponseEntity<ApiResponse>(new ApiResponse(true, "product has been added"), HttpStatus.CREATED);
	    }
   
	 @GetMapping("/")
	 public ResponseEntity<List<ProductDto>> getProducts() {
	        List<ProductDto> products = productService.getAllProducts();
	        return new ResponseEntity<>(products, HttpStatus.OK);
	    }

	
	 @GetMapping("/product/{id}")
	 public ResponseEntity<List<ProductDto>> getProduct(@PathVariable("id") Integer id) {
	        List<ProductDto> products = productService.getAllProductById(id);
	        return new ResponseEntity<>(products, HttpStatus.OK);
	    }
	 
	 
	 @PostMapping("/update/{productId}")
	 public ResponseEntity<ApiResponse> updateProduct(@PathVariable("productId") Integer productId, @RequestBody ProductDto productDto) throws Exception {
	        Optional<Category> optionalCategory = categoryRepo.findById(productDto.getCategoryId());
	        if (!optionalCategory.isPresent()) {
	            return new ResponseEntity<ApiResponse>(new ApiResponse(false, "category does not exists"), HttpStatus.BAD_REQUEST);
	        }
	        productService.updateProduct(productDto, productId);
	        return new ResponseEntity<ApiResponse>(new ApiResponse(true, "product has been updated"), HttpStatus.OK);
	    }

}
