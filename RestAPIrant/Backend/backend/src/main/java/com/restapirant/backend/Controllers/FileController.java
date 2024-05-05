package com.restapirant.backend.Controllers;

import java.io.IOException;

import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.restapirant.backend.Services.FileService;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;


@RestController
@RequestMapping("/api/file")
@RequiredArgsConstructor
public class FileController {

  private final FileService fileService;

  // @PostMapping("/upload")
  @RequestMapping(value = "/upload", method = RequestMethod.POST, consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
  public ResponseEntity<?> uploadImage(@RequestPart("image") MultipartFile file)
      throws IllegalStateException, IOException {
    String uploadImage = fileService.uploadImage(file);
    return ResponseEntity.status(HttpStatus.OK).body(uploadImage);
  }

  @GetMapping
  public ResponseEntity<?> downloadImage(@RequestParam("filename") String filename)
      throws IllegalStateException, IOException {
    var image = fileService.downloadImage(filename);
    return ResponseEntity.status(HttpStatus.OK)
        .contentType(MediaType.valueOf("image/png"))
        .body(image);
  }
  
}
