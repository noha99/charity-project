package com.spring.project.Controller;

import com.spring.project.Service.DonationRepository;
import com.spring.project.Service.ProjectRepository;
import com.spring.project.model.Donation;
import com.spring.project.model.Project;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping(path = "projects")
public class ProjectController {
  @Autowired
  private ProjectRepository projectRepo;

  @Autowired
  private DonationRepository donationRepo;

  @GetMapping("/get")
  public ResponseEntity<List<Project>> getProjects() {
    List<Project> projectList;
    projectList = projectRepo.findAll();
    if (projectList.isEmpty()) {
      return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    } else {
      return new ResponseEntity<>(projectList, HttpStatus.OK);
    }
  }

  @GetMapping("/donations/get")
  public ResponseEntity<ArrayList<Object>> getProjectsDonation() {
    List<Project> projectList;
    projectList = projectRepo.findAll();
    List<Donation> donationList;
    donationList = donationRepo.findAll();

    ArrayList<Object> arr = new ArrayList<>();
//    HashMap<String , Object> data = new HashMap<>();
    for (Project project : projectList){
//      if( project != null){
//        arr.add(project);
//      }
      for(Donation donation : donationList){
        if(donation != null){
          if (project.getId() == donation.getProjectId()){
            arr.add(donation);
          }
        }
      }
//      data.put("data" , arr);
    }

    if (arr.isEmpty()) {
      return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    } else {
      return new ResponseEntity<>(arr, HttpStatus.OK);
    }
  }

  @PostMapping("/add")
  public ResponseEntity<Project> createProject(@RequestBody Project newProject) {
    try {
      projectRepo.save(newProject);
      return new ResponseEntity<>(newProject, HttpStatus.CREATED);
    } catch (Exception e) {
      return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
    }

  }

  @PutMapping("/update")
  public ResponseEntity<Project> updateProject(@RequestBody Project project) {
    try {
      projectRepo.save(project);
      return new ResponseEntity<>(project, HttpStatus.OK);
    } catch (Exception e) {
      return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @DeleteMapping(path = { "/{id}" })
  public ResponseEntity<Project> deleteProject(@PathVariable("id") Long id) {
    try {
      Project project = getProjectById(id);
      projectRepo.deleteById(id);
      return new ResponseEntity<>(project, HttpStatus.OK);
    } catch (Exception e) {
      return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
    }
  }

  public Project getProjectById(Long id) {
    Optional<Project> donationData = projectRepo.findById(id);
    return donationData.orElse(null);
  }

}
