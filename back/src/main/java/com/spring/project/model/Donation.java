package com.spring.project.model;

import javax.persistence.*;
import java.util.Set;

@Entity
@Table(name = "Donation")
public class Donation {

  @Id
  @Column(name = "id")
  @GeneratedValue(strategy = GenerationType.AUTO)
  private Long id;

  @Column(name = "donor")
  private String donor;

  @Column(name = "projectId")
  private Long projectId;

  @Column(name = "amount")
  private Long amount;

  @Column(name = "account")
  private Long donor_account;

  public Donation() {
  }

  public Donation(Long id, String donor, Long projectId, Long amount, Long donor_account) {
    this.id = id;
    this.donor = donor;
    this.projectId = projectId;
    this.amount = amount;
    this.donor_account = donor_account;
  }

  public Long getId() {
    return id;
  }

  public void setId(Long id) {
    this.id = id;
  }

  public String getDonor() {
    return donor;
  }

  public void setDonor(String donor) {
    this.donor = donor;
  }

  public Long getProjectId() {
    return projectId;
  }

  public void setProjectId(Long projectId) {
    this.projectId = projectId;
  }

  public Long getAmount() {
    return amount;
  }

  public void setAmount(Long amount) {
    this.amount = amount;
  }

  public Long getDonor_account() {
    return donor_account;
  }

  public void setDonor_account(Long donor_account) {
    this.donor_account = donor_account;
  }
}
