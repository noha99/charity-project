package com.spring.project.Controller;

import com.spring.project.Service.DonationRepository;
import com.spring.project.model.Donation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping(path = "donations")
public class DonationController {
  @Autowired
  private DonationRepository DonationRepo;

  @GetMapping("/get")
  public ResponseEntity<List<Donation>> getDonations() {
    List<Donation> donationList;
    donationList = DonationRepo.findAll();
    if (donationList.isEmpty()) {
      return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    } else {
      return new ResponseEntity<>(donationList, HttpStatus.OK);
    }
  }

  @PostMapping("/add")
  public ResponseEntity<Donation> createDonation(@RequestBody Donation newDonation) {
    try {
      DonationRepo.save(newDonation);
      return new ResponseEntity<>(newDonation, HttpStatus.CREATED);
    } catch (Exception e) {
      return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
    }

  }

  @PutMapping("/update")
  public ResponseEntity<Donation> updateDonation(@RequestBody Donation donation) {
    try {
      DonationRepo.save(donation);
      return new ResponseEntity<>(donation, HttpStatus.OK);
    } catch (Exception e) {
      return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @DeleteMapping(path = { "/{id}" })
  public ResponseEntity<Donation> deleteDonation(@PathVariable("id") Long id) {
    try {
      Donation donation = getDonationById(id);
      DonationRepo.deleteById(id);
      return new ResponseEntity<>(donation, HttpStatus.OK);
    } catch (Exception e) {
      return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
    }
  }

  public Donation getDonationById(Long id) {
    Optional<Donation> donationData = DonationRepo.findById(id);
    return donationData.orElse(null);
  }

}
