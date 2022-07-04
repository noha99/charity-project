package com.spring.project.Controller;

import com.spring.project.Service.CaseRepository;
import com.spring.project.model.IndividualCase;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping(path = "cases")
public class CaseController {
    @Autowired
    private CaseRepository caseRepo;

    @GetMapping("/get")
    public ResponseEntity<List<IndividualCase>> getCases() {
        List<IndividualCase> caseList;
        caseList = caseRepo.findAll();
        if (caseList.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } else {
            return new ResponseEntity<>(caseList, HttpStatus.OK);
        }
    }

    @PostMapping("/add")
    public ResponseEntity<IndividualCase> createCase(@RequestBody IndividualCase newCase) {
        try {
            caseRepo.save(newCase);
            return new ResponseEntity<>(newCase, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }

    }

    @PutMapping("/update")
    public ResponseEntity<IndividualCase> updateCase(@RequestBody IndividualCase casee) {
        try {
            caseRepo.save(casee);
            return new ResponseEntity<>(casee, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @DeleteMapping(path = { "/{id}" })
    public ResponseEntity<IndividualCase> deleteCase(@PathVariable("id") Long id) {
        try {
            IndividualCase cases = getCaseById(id);
            caseRepo.deleteById(id);
            return new ResponseEntity<>(cases, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
        }
    }

    public IndividualCase getCaseById(Long id) {
        Optional<IndividualCase> caseData = caseRepo.findById(id);
        return caseData.orElse(null);
    }

}
