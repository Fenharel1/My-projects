package com.restapirant.backend.Services;


import java.io.File;
import java.io.IOException;
import java.nio.file.Files;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

@Service
public class FileService {

  private String FOLDER_PATH = "C:/restImages/";

  @Autowired
  private UserContext userContext;

  public FileService(UserContext _userContext){
    userContext = _userContext;
    // this.FOLDER_PATH += userContext.getCurrentUserEmail();
  }

  public String uploadImage(MultipartFile imageFile) throws IllegalStateException, java.io.IOException  {
    String filePath = FOLDER_PATH+imageFile.getOriginalFilename();
    imageFile.getOriginalFilename();
    imageFile.transferTo(new File(filePath));
    return filePath;
  }

  public byte[] downloadImage(String filename) throws IOException{
    String filePath = FOLDER_PATH+filename;
    byte[] image = Files.readAllBytes(new File(filePath).toPath());
    return image;
  }
}
